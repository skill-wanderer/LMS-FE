/**
 * Newsletter subscription contract shared between the client component
 * (app/components/TheSubscribe.vue) and the server handler
 * (server/api/subscribe.post.ts).
 */

/** Where on the site the subscription was submitted from. */
export type SubscribeSource = 'home' | 'unknown'

export interface SubscribeRequest {
  email: string
  source?: SubscribeSource
}

/**
 * `subscribed` — contact stored in Resend and the welcome email went out.
 * `accepted`   — contact stored in Resend, but the welcome email failed.
 *                The subscription is still active, so this is not an error.
 */
export type SubscribeSuccessStatus = 'subscribed' | 'accepted'

export type SubscribeFailureStatus = 'invalid' | 'throttled' | 'unavailable' | 'failed'

export type SubscribeFailureCode =
  | 'SUBSCRIBE_INVALID_BODY'
  | 'SUBSCRIBE_EMAIL_REQUIRED'
  | 'SUBSCRIBE_EMAIL_TOO_LONG'
  | 'SUBSCRIBE_INVALID_EMAIL'
  | 'SUBSCRIBE_THROTTLED'
  | 'SUBSCRIBE_CONFIG_MISSING'
  | 'SUBSCRIBE_CONTACT_REJECTED'
  | 'SUBSCRIBE_PROVIDER_EXCEPTION'

export interface SubscribeSuccessResponse {
  ok: true
  status: SubscribeSuccessStatus
  message: string
}

export interface SubscribeFailureResponse {
  ok: false
  status: SubscribeFailureStatus
  code: SubscribeFailureCode
  message: string
  retryable: boolean
  retryAfterSeconds?: number
}

export type SubscribeResponse = SubscribeSuccessResponse | SubscribeFailureResponse
