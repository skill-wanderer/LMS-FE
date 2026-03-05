<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  description?: string
  ctaPrimary?: { label: string; to: string }
  ctaSecondary?: { label: string; to: string }
  stats?: { label: string; value: string }[]
}

defineProps<Props>()
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <h1 class="hero-title gradient-text">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
      <p v-if="description" class="hero-description">{{ description }}</p>

      <div v-if="ctaPrimary || ctaSecondary" class="hero-ctas">
        <NuxtLink v-if="ctaPrimary" :to="ctaPrimary.to" class="btn btn-primary">
          {{ ctaPrimary.label }}
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
        <NuxtLink v-if="ctaSecondary" :to="ctaSecondary.to" class="btn btn-secondary">
          {{ ctaSecondary.label }}
        </NuxtLink>
      </div>

      <div v-if="stats && stats.length" class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="hero-stat">
          <span class="hero-stat-value gradient-text">{{ stat.value }}</span>
          <span class="hero-stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 140px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.hero-inner {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: var(--light-text);
  margin-bottom: 12px;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: rgba(224, 224, 224, 0.7);
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 32px;
}

.hero-ctas {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-stat-value {
  font-size: 2rem;
  font-weight: 800;
}

.hero-stat-label {
  font-size: 0.85rem;
  color: rgba(224, 224, 224, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 16px 60px;
  }

  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    gap: 24px;
  }
}
</style>
