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
      class="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-sm z-50"
      role="region"
      aria-label="Cookie notice"
    >
      <div class="bg-surface-card/95 backdrop-blur-md border border-brand-orange/20 rounded-card shadow-2xl p-5">
        <div class="flex items-start gap-3 mb-4">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-brand-orange/15 shrink-0 mt-0.5">
            <Icon name="mdi:cookie-outline" class="text-brand-orange text-lg" />
          </span>
          <div>
            <h3 class="text-sm font-semibold text-[rgba(224,224,224,0.95)] mb-1">Essential cookies only</h3>
            <p class="text-xs text-[rgba(224,224,224,0.6)] leading-relaxed">
              We use cookies strictly for core functionality — no tracking or advertising.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-3">
          <a
            href="https://skill-wanderer.com/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-brand-orange hover:underline"
          >Learn more</a>
          <button
            class="btn btn-primary text-sm py-2 px-5 rounded-lg"
            @click="dismiss"
          >
            Got it
          </button>
        </div>
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
