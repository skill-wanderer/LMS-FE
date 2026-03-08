<script setup lang="ts">
const email = ref('')
const subscribed = ref(false)

function handleSubscribe() {
  // TODO: connect to API
  if (email.value) {
    subscribed.value = true
    email.value = ''
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
            class="flex-1 py-3.5 px-5 rounded-pill border border-brand-orange/25 bg-surface-card text-[#e0e0e0] text-base outline-none transition-colors duration-300 focus:border-brand-orange placeholder:text-[rgba(224,224,224,0.35)]"
            aria-label="Email address"
          />
          <button type="submit" class="btn btn-primary btn-sm">
            <Icon name="mdi:send" /> Subscribe
          </button>
        </form>
        <div v-else class="flex items-center justify-center gap-2.5 text-lg text-semantic-success">
          <Icon name="mdi:check-circle" class="text-semantic-success text-2xl" />
          <span>You're in! We'll keep you posted.</span>
        </div>
      </Transition>
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
