export default defineNuxtRouteMiddleware(async () => {
  const { isAuthEnabled, isAuthenticated, tokenExpiresAt, refreshAccessToken } = useKeycloak()

  if (!isAuthEnabled.value || !isAuthenticated.value) {
    return
  }

  const expiresAt = tokenExpiresAt.value
  if (!expiresAt) {
    return
  }

  const shouldRefresh = Date.now() >= expiresAt
  if (shouldRefresh) {
    await refreshAccessToken()
  }
})
