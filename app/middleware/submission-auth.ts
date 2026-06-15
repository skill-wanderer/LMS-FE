interface JwtPayload {
  exp?: number;
  iat?: number;
}

function decodeBase64Url(value: string): string {
  const paddedValue = value + '='.repeat((4 - (value.length % 4)) % 4)
  const base64 = paddedValue.replace(/-/g, '+').replace(/_/g, '/')
  return atob(base64)
}

function readJwtPayload(token: string | null): JwtPayload | null {
  if (!token) {
    return null
  }

  const tokenParts = token.split('.')
  const payloadPart = tokenParts[1]
  if (!payloadPart) {
    return null
  }

  try {
    const parsed = JSON.parse(decodeBase64Url(payloadPart)) as unknown
    if (!parsed || typeof parsed !== 'object') {
      return null
    }

    const payload = parsed as { exp?: unknown; iat?: unknown }
    return {
      exp: typeof payload.exp === 'number' ? payload.exp : undefined,
      iat: typeof payload.iat === 'number' ? payload.iat : undefined,
    }
  }
  catch {
    return null
  }
}

export function readJwtExpiryEpochSeconds(token: string | null): number | null {
  const payload = readJwtPayload(token)
  if (!payload || typeof payload.exp !== 'number' || Number.isNaN(payload.exp)) {
    return null
  }

  return payload.exp
}

export function resolveRefreshWindowByTokenLifetime(
  token: string | null,
  fallbackRefreshWindowSeconds: number,
  refreshWindowPercent: number,
  refreshWindowMinSeconds: number,
  refreshWindowMaxSeconds: number,
): number {
  const payload = readJwtPayload(token)
  if (!payload || typeof payload.exp !== 'number' || typeof payload.iat !== 'number') {
    return fallbackRefreshWindowSeconds
  }

  const tokenLifetimeSeconds = payload.exp - payload.iat
  if (!Number.isFinite(tokenLifetimeSeconds) || tokenLifetimeSeconds <= 0) {
    return fallbackRefreshWindowSeconds
  }

  const calculatedWindowSeconds = Math.floor(tokenLifetimeSeconds * (refreshWindowPercent / 100))
  return Math.min(
    refreshWindowMaxSeconds,
    Math.max(refreshWindowMinSeconds, calculatedWindowSeconds),
  )
}

export function shouldRefreshTokenByExp(token: string | null, refreshWindowSeconds: number): boolean {
  const tokenExp = readJwtExpiryEpochSeconds(token)
  if (tokenExp === null) {
    return true
  }

  const nowEpochSeconds = Math.floor(Date.now() / 1000)
  const remainingSeconds = tokenExp - nowEpochSeconds
  return remainingSeconds <= refreshWindowSeconds
}

function normalizeRefreshPercent(value: unknown): number {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) {
    return 80
  }

  return Math.min(95, Math.max(50, parsed))
}

export default defineNuxtRouteMiddleware(async () => {
  const { isAuthEnabled, isAuthenticated, accessToken, refreshAccessToken } = useKeycloak()
  const config = useRuntimeConfig()

  // Neu auth dang tat hoac user chua dang nhap thi bo qua toan bo middleware.
  if (!isAuthEnabled.value || !isAuthenticated.value) {
    return
  }

  const refreshPercent = normalizeRefreshPercent(config.public.keycloakRefreshThresholdPercent)
  const refreshWindowSeconds = resolveRefreshWindowByTokenLifetime(
    accessToken.value,
    60,
    refreshPercent,
    30,
    3600 * 24,
  )

  if (shouldRefreshTokenByExp(accessToken.value, refreshWindowSeconds)) {
    await refreshAccessToken()
  }
})
