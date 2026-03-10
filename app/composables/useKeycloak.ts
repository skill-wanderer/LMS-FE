/**
 * Composable for optional Keycloak authentication.
 *
 * When the three env variables (NUXT_PUBLIC_KEYCLOAK_URL, _REALM, _CLIENT_ID)
 * are set, Login / Register buttons appear in the navigation and redirect the
 * user to the Keycloak hosted pages.  When they are absent, the LMS works as a
 * fully anonymous, open-access platform — no auth UI is shown.
 */
export function useKeycloak() {
  const config = useRuntimeConfig()
  const { keycloakRealm, keycloakClientId } = config.public
  // Strip trailing slash to avoid double-slash in URLs
  const keycloakUrl = (config.public.keycloakUrl as string || '').replace(/\/+$/, '')

  /** Auth is only enabled when all three Keycloak env vars are provided */
  const isAuthEnabled = computed(
    () => Boolean(keycloakUrl && keycloakRealm && keycloakClientId),
  )

  /** Currently authenticated user (persisted via cookie so SSR can read it) */
  const user = useCookie<{ name: string; email: string; preferred_username: string } | null>(
    'kc_user',
    { default: () => null, maxAge: 60 * 60 * 8, sameSite: 'lax' },
  )

  /** Access-token stored in a cookie (short-lived, httpOnly would be better in prod) */
  const accessToken = useCookie<string | null>(
    'kc_access_token',
    { default: () => null, maxAge: 60 * 60, sameSite: 'lax' },
  )

  /** Refresh-token stored in a cookie (longer-lived, used to obtain fresh access tokens) */
  const refreshToken = useCookie<string | null>(
    'kc_refresh_token',
    { default: () => null, maxAge: 60 * 60 * 24 * 30, sameSite: 'lax' },
  )

  /** Timestamp (ms) when the current access token expires */
  const tokenExpiresAt = useCookie<number | null>(
    'kc_token_expires_at',
    { default: () => null, maxAge: 60 * 60, sameSite: 'lax' },
  )

  const isAuthenticated = computed(() => Boolean(accessToken.value && user.value))

  // ---- URL builders ----------------------------------------------------------

  const baseAuthUrl = computed(() =>
    `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect`,
  )

  const redirectUri = computed(() => {
    const origin = import.meta.client
      ? window.location.origin
      : (config.public.siteUrl as string || useRequestURL().origin).replace(/\/+$/, '')
    return `${origin}/auth/callback`
  })

  function buildAuthUrl(action: 'login' | 'register', returnTo?: string) {
    const params = new URLSearchParams({
      client_id: keycloakClientId as string,
      redirect_uri: redirectUri.value,
      response_type: 'code',
      scope: 'openid profile email',
    })

    // Encode the return path in the OAuth state parameter so the callback
    // page can redirect the user back to where they were.
    if (returnTo) {
      params.set('state', returnTo)
    }

    if (action === 'register') {
      // Keycloak supports a dedicated registration endpoint
      return `${baseAuthUrl.value}/registrations?${params.toString()}`
    }
    return `${baseAuthUrl.value}/auth?${params.toString()}`
  }

  function loginUrl(returnTo?: string) {
    return buildAuthUrl('login', returnTo)
  }

  function registerUrl(returnTo?: string) {
    return buildAuthUrl('register', returnTo)
  }

  function accountUrl() {
    return `${keycloakUrl}/realms/${keycloakRealm}/account`
  }

  function logoutUrl() {
    if (import.meta.server) return ''
    const params = new URLSearchParams({
      client_id: keycloakClientId as string,
      post_logout_redirect_uri: window.location.origin,
    })
    return `${baseAuthUrl.value}/logout?${params.toString()}`
  }

  function logout() {
    const url = logoutUrl()
    user.value = null
    accessToken.value = null
    refreshToken.value = null
    tokenExpiresAt.value = null
    if (url) navigateTo(url, { external: true })
  }

  /**
   * Silently refresh the access token using the stored refresh token.
   * Returns true on success, false on failure (user should re-login).
   */
  async function refreshAccessToken(): Promise<boolean> {
    if (!refreshToken.value || !isAuthEnabled.value) return false

    try {
      const tokenUrl = `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect/token`
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: keycloakClientId as string,
        refresh_token: refreshToken.value,
      })

      const tokenRes = await $fetch<{
        access_token: string
        refresh_token: string
        expires_in: number
      }>(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      accessToken.value = tokenRes.access_token
      refreshToken.value = tokenRes.refresh_token
      tokenExpiresAt.value = Date.now() + tokenRes.expires_in * 1000

      return true
    }
    catch (e) {
      console.warn('Token refresh failed — session expired', e)
      // Clear stale tokens so the user can re-login
      user.value = null
      accessToken.value = null
      refreshToken.value = null
      tokenExpiresAt.value = null
      return false
    }
  }

  return {
    isAuthEnabled,
    isAuthenticated,
    user,
    accessToken,
    refreshToken,
    tokenExpiresAt,
    loginUrl,
    registerUrl,
    accountUrl,
    logoutUrl,
    logout,
    refreshAccessToken,
  }
}
