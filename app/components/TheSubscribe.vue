<script setup lang="ts">
import type { SubscribeResponse } from '~/types/subscribe'

const route = useRoute()

const email = ref('')
const pending = ref(false)
const subscribed = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function handleSubscribe() {
  if (pending.value) return

  const value = email.value.trim()
  if (!value) return

  pending.value = true
  errorMessage.value = ''

  try {
    // `ignoreResponseError` keeps the structured body on 4xx/5xx so we can show
    // the server's own message instead of a generic network error.
    const response = await $fetch<SubscribeResponse>('/api/subscribe', {
      method: 'POST',
      body: { email: value, source: route.path === '/' ? 'home' : 'unknown' },
      ignoreResponseError: true,
    })

    if (response?.ok) {
      successMessage.value = response.message
      subscribed.value = true
      email.value = ''
    } else {
      errorMessage.value = response?.message || 'Something went wrong. Please try again.'
    }
  } catch {
    errorMessage.value = 'Could not reach the server. Please check your connection and try again.'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <section class="relative py-12 px-4 text-center bg-surface-darker sm:py-16 sm:px-5 md:py-20">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%);" />

    <div class="max-w-[600px] mx-auto relative z-[1]">
      <Icon name="mdi:bell-ring-outline" class="text-[2.5rem] text-brand-orange mb-4" />
      <h2 class="gradient-text text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold mb-3">Stay Curious</h2>
      <p class="text-[rgba(224,224,224,0.7)] text-base leading-[1.7] mb-7 sm:text-[1.05rem]">
        Get notified when new courses drop. Free forever — no spam, just knowledge.
      </p>

      <Transition name="fade" mode="out-in">
        <form v-if="!subscribed" class="flex gap-3 max-w-[460px] mx-auto max-[600px]:flex-col" @submit.prevent="handleSubscribe">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            required
            :disabled="pending"
            class="flex-1 py-3.5 px-5 rounded-pill border border-brand-orange/25 bg-surface-card text-[#e0e0e0] text-base outline-none transition-colors duration-300 focus:border-brand-orange placeholder:text-[rgba(224,224,224,0.35)] disabled:opacity-60"
            aria-label="Email address"
          />
          <button type="submit" class="btn btn-primary btn-sm" :disabled="pending">
            <Icon :name="pending ? 'mdi:loading' : 'mdi:send'" :class="pending ? 'animate-spin' : ''" />
            {{ pending ? 'Subscribing…' : 'Subscribe' }}
          </button>
        </form>
        <div v-else class="flex items-center justify-center gap-2.5 text-lg text-semantic-success">
          <Icon name="mdi:check-circle" class="text-semantic-success text-2xl" />
          <span>{{ successMessage }}</span>
        </div>
      </Transition>

      <p v-if="errorMessage" class="mt-4 text-sm text-semantic-failure" role="alert">
        {{ errorMessage }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
