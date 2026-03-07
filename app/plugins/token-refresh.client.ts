/**
 * Client-side plugin that silently refreshes the Keycloak access token
 * before it expires, keeping the user's session alive.
 */
export default defineNuxtPlugin(() => {
  const { isAuthenticated, tokenExpiresAt, refreshAccessToken } = useKeycloak()

  let timerId: ReturnType<typeof setTimeout> | null = null

  function scheduleRefresh() {
    clearScheduled()

    if (!isAuthenticated.value || !tokenExpiresAt.value) return

    // Refresh 60 seconds before expiry, minimum 5 seconds from now
    const msUntilExpiry = tokenExpiresAt.value - Date.now()
    const delay = Math.max(msUntilExpiry - 60_000, 5_000)

    timerId = setTimeout(async () => {
      const ok = await refreshAccessToken()
      if (ok) {
        scheduleRefresh()
      }
    }, delay)
  }

  function clearScheduled() {
    if (timerId !== null) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  // Re-schedule whenever auth state changes
  watch(
    () => [isAuthenticated.value, tokenExpiresAt.value],
    () => scheduleRefresh(),
    { immediate: true },
  )
})
