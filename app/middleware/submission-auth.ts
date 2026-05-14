function decodeJwtExpiry(token?: string | null) {
  if (!token) return null

  const [, payload] = token.split('.')
  if (!payload) return null

  try {
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/')
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=')
    if (typeof globalThis.atob !== 'function') return null

    const decoded = globalThis.atob(padded)
    const bytes = Uint8Array.from(Array.from(decoded, (char: string) => char.charCodeAt(0)))
    const jwtPayload = JSON.parse(new TextDecoder().decode(bytes)) as { exp?: number }

    return jwtPayload.exp ? jwtPayload.exp * 1000 : null
  }
  catch {
    return null
  }
}

export default defineNuxtRouteMiddleware(async () => {
  const { isAuthEnabled, isAuthenticated, accessToken, refreshAccessToken } = useKeycloak()

  if (!isAuthEnabled.value || !isAuthenticated.value) {
    return
  }

  const expiresAt = decodeJwtExpiry(accessToken.value)
  if (!expiresAt) {
    return
  }

  const shouldRefresh = Date.now() >= expiresAt
  if (shouldRefresh) {
    await refreshAccessToken()
  }
})
