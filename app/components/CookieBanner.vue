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
      class="fixed bottom-0 left-0 right-0 z-50 bg-surface-darker border-t border-brand-orange/20 px-5 py-4"
      role="region"
      aria-label="Cookie notice"
    >
      <div class="max-w-content mx-auto flex items-center justify-between gap-6 max-md:flex-col max-md:items-start max-md:gap-3">
        <p class="text-sm text-[rgba(224,224,224,0.7)] leading-relaxed">
          <Icon name="mdi:cookie-outline" class="text-brand-orange align-middle mr-1" />
          This site uses <strong class="text-[rgba(224,224,224,0.9)]">essential cookies only</strong> — no tracking or advertising cookies.
          <a
            href="https://skill-wanderer.com/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-orange hover:underline ml-1"
          >Cookie Policy</a>
        </p>
        <button
          class="shrink-0 btn btn-primary text-sm py-2 px-5"
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
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.cookie-banner-enter-from,
.cookie-banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
