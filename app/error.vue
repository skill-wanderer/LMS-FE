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
  <div class="error-page">
    <div class="error-inner">
      <span class="error-code gradient-text">{{ statusCode }}</span>
      <h1 class="error-title">{{ message }}</h1>
      <p class="error-desc">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="error-actions">
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

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: var(--dark-bg);
  color: var(--light-text);
}

.error-inner {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  line-height: 1;
  display: block;
  margin-bottom: 16px;
}

.error-title {
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 12px;
}

.error-desc {
  color: rgba(224, 224, 224, 0.6);
  font-size: 1rem;
  margin-bottom: 32px;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .error-page {
    padding: 24px 16px;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
</style>
