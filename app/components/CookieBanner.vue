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
      class="fixed bottom-4 left-4 right-4 z-50 max-w-2xl sm:bottom-6 sm:left-1/2 sm:right-auto sm:w-[calc(100%-2rem)] sm:-translate-x-1/2"
      role="region"
      aria-label="Cookie notice"
    >
      <div class="flex items-center gap-5 rounded-card border border-brand-orange/20 bg-surface-darker px-4 py-4 shadow-2xl max-sm:flex-col max-sm:items-start max-sm:gap-4 sm:px-6 sm:py-5">
        <span class="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange/15 shrink-0">
          <Icon name="mdi:shield-check-outline" class="text-brand-orange text-xl" />
        </span>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-bold text-brand-orange uppercase tracking-wide mb-1">Essential cookies only</h3>
          <p class="text-sm text-[rgba(224,224,224,0.6)] leading-relaxed">
            Only the minimum cookies required for this site to function. No tracking, no advertising, no profiling.
            <NuxtLink
              to="/cookie-policy"
              class="text-[rgba(224,224,224,0.85)] hover:text-white ml-1 underline"
            >Cookie policy &rarr;</NuxtLink>
          </p>
        </div>
        <button
          class="shrink-0 rounded-pill border border-brand-orange/30 bg-transparent px-6 py-2.5 text-sm font-semibold text-[#e0e0e0] transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange max-sm:w-full"
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
