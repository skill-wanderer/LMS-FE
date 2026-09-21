/**
 * POST /api/subscribe
 *
 * Newsletter subscription. There is no double opt-in: the address is written
 * straight into Resend contacts, and Resend is then used to send a single
 * welcome email. Because the contact is already stored by the time the email
 * is sent, a delivery failure downgrades the response to `accepted` rather
 * than failing the subscription.
 *
 * Requires NUXT_RESEND_API_KEY (needs contacts write access, not just email
 * sending) and NUXT_RESEND_FROM_EMAIL. NUXT_RESEND_SEGMENT_ID is optional.
 */
import { Resend } from 'resend'
import { getHeader, setResponseHeader, setResponseStatus } from 'h3'
import type { H3Event } from 'h3'
import type {
  SubscribeFailureResponse,
  SubscribeRequest,
  SubscribeResponse,
  SubscribeSource,
  SubscribeSuccessResponse,
} from '~/types/subscribe'
import { createSubscriptionWelcomeEmail } from '../services/email/subscription'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LENGTH = 254
const THROTTLE_WINDOW_MS = 60_000
const IDEMPOTENCY_PREFIX = 'skill-wanderer-dojo-subscribe'
const RESEND_API_KEY_PLACEHOLDER = 'YOUR_RESEND_API_KEY'

const SUBSCRIBED_MESSAGE = 'You’re in! Check your inbox for a welcome email.'
const ACCEPTED_MESSAGE = 'You’re in! We couldn’t send the welcome email right now, but your subscription is active.'
const UNAVAILABLE_MESSAGE = 'Subscriptions are temporarily unavailable. Please try again later.'
const FAILED_MESSAGE = 'Something went wrong. Please try again.'
const THROTTLED_MESSAGE = 'Please wait a moment before trying again.'

/** Best-effort per-isolate throttle. Not a substitute for edge rate limiting. */
const throttle = new Map<string, number>()

/** Keep addresses out of logs while staying useful for support. */
function maskEmail(email: string): string {
  const [localPart = '', domain = ''] = email.split('@')
  if (!localPart || !domain) return 'invalid-email'
  const visible = localPart.slice(0, 2)
  return `${visible}${'*'.repeat(Math.max(localPart.length - visible.length, 0))}@${domain}`
}

function getClientKey(event: H3Event): string {
  const forwardedFor = getHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim()
  return getHeader(event, 'cf-connecting-ip')
    || getHeader(event, 'x-real-ip')
    || forwardedFor
    || event.node.req.socket?.remoteAddress
    || 'unknown-client'
}

function pruneThrottle(now: number) {
  for (const [key, lastAttemptAt] of throttle.entries()) {
    if (now - lastAttemptAt >= THROTTLE_WINDOW_MS) throttle.delete(key)
  }
}

/**
 * Resend dedupes repeat sends on this key, so a subscriber who resubmits the
 * form does not receive a second welcome email.
 */
async function createIdempotencyKey(email: string): Promise<string> {
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(email))
  const fingerprint = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 32)
  return `${IDEMPOTENCY_PREFIX}:${fingerprint}`
}

function getSource(value: unknown): SubscribeSource {
  return value === 'home' ? 'home' : 'unknown'
}

/** Resubmitting an address that is already a contact is a success, not an error. */
function isExistingContactError(error: unknown): boolean {
  const message = (error as { message?: unknown } | null)?.message
  return typeof message === 'string' && /already (exists|registered|subscribed)/i.test(message)
}

function describeProviderError(error: unknown) {
  const maybeError = (error ?? {}) as { name?: unknown, code?: unknown, statusCode?: unknown }
  return {
    providerCode: typeof maybeError.code === 'string'
      ? maybeError.code
      : typeof maybeError.name === 'string' ? maybeError.name : 'UNKNOWN_PROVIDER_ERROR',
    providerStatusCode: typeof maybeError.statusCode === 'number' ? maybeError.statusCode : undefined,
  }
}

function log(level: 'info' | 'warn' | 'error', payload: Record<string, unknown>) {
  const entry = JSON.stringify({ scope: 'subscribe', timestamp: new Date().toISOString(), ...payload })
  if (level === 'error') console.error(entry)
  else if (level === 'warn') console.warn(entry)
  else console.info(entry)
}

function fail(
  event: H3Event,
  httpStatus: number,
  response: Omit<SubscribeFailureResponse, 'ok'>,
  context: { level?: 'warn' | 'error', [key: string]: unknown } = {},
): SubscribeFailureResponse {
  const { level = 'warn', ...logContext } = context

  setResponseStatus(event, httpStatus)
  setResponseHeader(event, 'Cache-Control', 'no-store')
  if (typeof response.retryAfterSeconds === 'number') {
    setResponseHeader(event, 'Retry-After', String(response.retryAfterSeconds))
  }

  log(level, {
    event: 'subscribe.failure',
    status: response.status,
    code: response.code,
    ...logContext,
  })

  return { ok: false, ...response }
}

function succeed(
  event: H3Event,
  response: Omit<SubscribeSuccessResponse, 'ok'>,
  context: Record<string, unknown> = {},
): SubscribeSuccessResponse {
  setResponseHeader(event, 'Cache-Control', 'no-store')
  log('info', { event: 'subscribe.success', status: response.status, ...context })
  return { ok: true, ...response }
}

export default defineEventHandler(async (event): Promise<SubscribeResponse> => {
  let body: Partial<SubscribeRequest> | null = null

  try {
    body = await readBody<Partial<SubscribeRequest>>(event)
  } catch {
    body = null
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return fail(event, 400, {
      status: 'invalid',
      code: 'SUBSCRIBE_INVALID_BODY',
      message: 'Invalid request body.',
      retryable: false,
    })
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const source = getSource(body.source)
  const maskedEmail = email ? maskEmail(email) : 'missing-email'

  if (!email) {
    return fail(event, 400, {
      status: 'invalid',
      code: 'SUBSCRIBE_EMAIL_REQUIRED',
      message: 'Email is required.',
      retryable: false,
    }, { maskedEmail, source })
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return fail(event, 400, {
      status: 'invalid',
      code: 'SUBSCRIBE_EMAIL_TOO_LONG',
      message: 'Please enter a valid email address.',
      retryable: false,
    }, { maskedEmail, source })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return fail(event, 400, {
      status: 'invalid',
      code: 'SUBSCRIBE_INVALID_EMAIL',
      message: 'Please enter a valid email address.',
      retryable: false,
    }, { maskedEmail, source })
  }

  const now = Date.now()
  const clientKey = getClientKey(event)

  pruneThrottle(now)

  const lastAttemptAt = throttle.get(clientKey)

  if (typeof lastAttemptAt === 'number' && now - lastAttemptAt < THROTTLE_WINDOW_MS) {
    const retryAfterSeconds = Math.max(Math.ceil((THROTTLE_WINDOW_MS - (now - lastAttemptAt)) / 1000), 1)

    return fail(event, 429, {
      status: 'throttled',
      code: 'SUBSCRIBE_THROTTLED',
      message: THROTTLED_MESSAGE,
      retryable: true,
      retryAfterSeconds,
    }, { maskedEmail, source, retryAfterSeconds })
  }

  throttle.set(clientKey, now)

  const runtimeConfig = useRuntimeConfig(event)
  const apiKey = runtimeConfig.resendApiKey?.trim()
  const fromEmail = runtimeConfig.resendFromEmail?.trim()
  const segmentId = runtimeConfig.resendSegmentId?.trim()

  if (!apiKey || apiKey === RESEND_API_KEY_PLACEHOLDER || !fromEmail) {
    return fail(event, 503, {
      status: 'unavailable',
      code: 'SUBSCRIBE_CONFIG_MISSING',
      message: UNAVAILABLE_MESSAGE,
      retryable: true,
    }, { maskedEmail, source, level: 'error' })
  }

  try {
    const resend = new Resend(apiKey)

    const { error: contactError } = await resend.contacts.create({
      email,
      unsubscribed: false,
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    })

    if (contactError && !isExistingContactError(contactError)) {
      return fail(event, 502, {
        status: 'failed',
        code: 'SUBSCRIBE_CONTACT_REJECTED',
        message: FAILED_MESSAGE,
        retryable: true,
      }, { maskedEmail, source, ...describeProviderError(contactError), level: 'error' })
    }

    // The contact is stored in Resend from here on, so a welcome email failure
    // must not fail the subscription itself.
    let welcomeEmailSent = false

    try {
      const { data, error } = await resend.emails.send(
        createSubscriptionWelcomeEmail(email, fromEmail),
        { idempotencyKey: await createIdempotencyKey(email) },
      )

      welcomeEmailSent = Boolean(data) && !error

      if (!welcomeEmailSent) {
        log('error', { event: 'subscribe.welcome_email_failed', maskedEmail, source, ...describeProviderError(error) })
      }
    } catch (error) {
      log('error', { event: 'subscribe.welcome_email_failed', maskedEmail, source, ...describeProviderError(error) })
    }

    return succeed(
      event,
      welcomeEmailSent
        ? { status: 'subscribed', message: SUBSCRIBED_MESSAGE }
        : { status: 'accepted', message: ACCEPTED_MESSAGE },
      { maskedEmail, source },
    )
  } catch (error) {
    return fail(event, 502, {
      status: 'unavailable',
      code: 'SUBSCRIBE_PROVIDER_EXCEPTION',
      message: UNAVAILABLE_MESSAGE,
      retryable: true,
    }, { maskedEmail, source, ...describeProviderError(error), level: 'error' })
  }
})
