<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode || 500)
const message = computed(() => {
  if (statusCode.value === 404) return 'Page not found'
  return props.error?.statusMessage || 'Something went wrong'
})

useSeo({
  title: `${statusCode.value} — Skill-Wanderer Dojo`,
  description: message.value,
  noIndex: true,
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-10 max-sm:p-6 bg-surface-dark text-[#e0e0e0]">
    <div class="text-center max-w-[500px]">
      <span class="text-[clamp(5rem,15vw,10rem)] font-black leading-none block mb-4 gradient-text">{{ statusCode }}</span>
      <h1 class="text-[clamp(1.3rem,4vw,1.8rem)] font-bold mb-3">{{ message }}</h1>
      <p class="text-[rgba(224,224,224,0.6)] text-base mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <NuxtLink to="/" class="btn btn-primary">
          <Icon name="mdi:home" /> Go Home
        </NuxtLink>
        <NuxtLink to="/courses" class="btn btn-secondary">
          Browse Courses
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


