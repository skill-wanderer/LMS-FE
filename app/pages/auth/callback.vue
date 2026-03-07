<script setup lang="ts">
/**
 * /auth/callback — handles the OAuth 2 authorization-code redirect from Keycloak.
 *
 * Exchanges the `code` query-param for tokens via Keycloak's token endpoint,
 * persists the access token and basic user info in cookies, then redirects to
 * the home page (or the originally requested page once we add `state` support).
 */
definePageMeta({ layout: false })

const config = useRuntimeConfig()
const { keycloakRealm, keycloakClientId } = config.public
const keycloakUrl = (config.public.keycloakUrl as string || '').replace(/\/+$/, '')
const { user, accessToken, refreshToken, tokenExpiresAt } = useKeycloak()

const error = ref<string | null>(null)
const loading = ref(true)

onMounted(async () => {
  const route = useRoute()
  const code = route.query.code as string | undefined

  if (!code) {
    error.value = 'No authorization code received from Keycloak.'
    loading.value = false
    return
  }

  try {
    const tokenUrl = `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect/token`

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: keycloakClientId as string,
      redirect_uri: `${window.location.origin}/auth/callback`,
      code,
    })

    const tokenRes = await $fetch<{
      access_token: string
      id_token: string
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

    // Fetch user info
    const userInfoUrl = `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect/userinfo`
    const userInfo = await $fetch<{
      name: string
      email: string
      preferred_username: string
    }>(userInfoUrl, {
      headers: { Authorization: `Bearer ${tokenRes.access_token}` },
    })

    user.value = {
      name: userInfo.name || userInfo.preferred_username,
      email: userInfo.email,
      preferred_username: userInfo.preferred_username,
    }

    // Redirect to the page the user was on before login, or home
    const returnTo = (route.query.state as string) || '/'
    // Only allow relative paths to prevent open-redirect
    const safePath = returnTo.startsWith('/') ? returnTo : '/'
    await navigateTo(safePath, { replace: true })
  } catch (e: any) {
    console.error('Keycloak token exchange failed', e)
    error.value = 'Authentication failed. Please try again.'
    loading.value = false
  }
})
</script>

<template>
  <div class="callback-page">
    <div v-if="loading && !error" class="callback-card">
      <Icon name="mdi:loading" class="spin" size="40" />
      <p>Signing you in…</p>
    </div>
    <div v-else-if="error" class="callback-card callback-error">
      <Icon name="mdi:alert-circle-outline" size="40" />
      <p>{{ error }}</p>
      <NuxtLink to="/" class="btn btn-primary btn-sm">Go Home</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.callback-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-bg);
  color: var(--light-text);
}

.callback-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px;
}

.callback-error {
  color: var(--failure-red);
}

.spin {
  animation: spin 1s linear infinite;
  color: var(--primary-orange);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
