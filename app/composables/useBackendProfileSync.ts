/**
 * Triggers the backend authenticated profile endpoint so the LMS backend can
 * perform JIT user provisioning and activity tracking from a valid Keycloak
 * access token.
 */
export function useBackendProfileSync() {
  const config = useRuntimeConfig()
  const apiBaseUrl = (config.public.apiBaseUrl as string || '').replace(/\/+$/, '')

  async function syncBackendProfile(accessToken: string | null | undefined) {
    const token = accessToken?.trim()

    if (!apiBaseUrl || !token) {
      console.warn('Skipping backend profile sync.', {
        hasApiBaseUrl: Boolean(apiBaseUrl),
        hasAccessToken: Boolean(token),
      })
      return null
    }

    try {
      return await $fetch(`${apiBaseUrl}/api/auth/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      console.error('Backend profile sync failed.', {
        apiBaseUrl,
        error,
      })
      throw error
    }
  }

  return {
    syncBackendProfile,
  }
}
