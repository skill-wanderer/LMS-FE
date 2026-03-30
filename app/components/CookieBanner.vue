<script setup lang="ts">
const dismissed = ref(false)

onMounted(() => {
  dismissed.value = localStorage.getItem('cookie-banner-dismissed') === 'true'
})

function dismiss() {
  localStorage.setItem('cookie-banner-dismissed', 'true')
  dismissed.value = true
}
</script>

<template>
  <Transition name="cookie-banner">
    <div
      v-if="!dismissed"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
      role="region"
      aria-label="Cookie notice"
    >
      <div class="bg-surface-darker border border-brand-orange/20 rounded-card shadow-2xl px-6 py-5 flex items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <span class="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange/15 shrink-0">
          <Icon name="mdi:shield-check-outline" class="text-brand-orange text-xl" />
        </span>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-bold text-brand-orange uppercase tracking-wide mb-1">Essential cookies only</h3>
          <p class="text-sm text-[rgba(224,224,224,0.6)] leading-relaxed">
            Only the minimum cookies required for this site to function. No tracking, no advertising, no profiling.
            <a
              href="https://skill-wanderer.com/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[rgba(224,224,224,0.85)] hover:text-white ml-1 underline"
            >Cookie policy &rarr;</a>
          </p>
        </div>
        <button
          class="shrink-0 btn btn-outline text-sm py-2.5 px-6 rounded-lg"
          @click="dismiss"
        >
          Got it
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.cookie-banner-enter-from,
.cookie-banner-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}
</style>
