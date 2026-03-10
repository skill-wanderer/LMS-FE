<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  description?: string
  ctaPrimary?: { label: string; to: string }
  ctaSecondary?: { label: string; to?: string; href?: string }
  ctaTertiary?: { label: string; to?: string; href?: string }
  stats?: { label: string; value: string }[]
}

defineProps<Props>()
</script>

<template>
  <section class="hero relative pt-[150px] pb-[60px] px-4 text-center overflow-hidden md:pt-[180px] md:pb-20 md:px-5 w-full max-w-full">
    <div class="max-w-narrow mx-auto relative z-[1]">
      <h1 class="gradient-text text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[1.1] mb-5">{{ title }}</h1>
      <p v-if="subtitle" class="text-[clamp(1.2rem,2.5vw,1.5rem)] text-[#e0e0e0] mb-3 font-medium">{{ subtitle }}</p>
      <p v-if="description" class="text-[1.1rem] text-[rgba(224,224,224,0.7)] leading-[1.8] max-w-[600px] mx-auto mb-8">{{ description }}</p>

      <div v-if="ctaPrimary || ctaSecondary || ctaTertiary" class="flex gap-5 justify-center flex-wrap mb-12 max-md:flex-col max-md:items-center">
        <NuxtLink v-if="ctaPrimary" :to="ctaPrimary.to" class="btn btn-primary">
          {{ ctaPrimary.label }}
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
        <NuxtLink v-if="ctaTertiary?.to" :to="ctaTertiary.to" class="btn btn-primary">
          {{ ctaTertiary.label }}
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
        <a v-if="ctaSecondary?.href" :href="ctaSecondary.href" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          {{ ctaSecondary.label }}
        </a>
        <NuxtLink v-else-if="ctaSecondary?.to" :to="ctaSecondary.to" class="btn btn-secondary">
          {{ ctaSecondary.label }}
        </NuxtLink>
      </div>

      <div v-if="stats && stats.length" class="flex justify-center gap-6 flex-wrap md:gap-12">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
          <span class="gradient-text text-[2rem] font-extrabold">{{ stat.value }}</span>
          <span class="text-[0.85rem] text-[rgba(224,224,224,0.5)] uppercase tracking-widest mt-1">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero::before {
  content: '';
  @apply absolute -top-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 60%);
}
</style>
