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
  <section class="hero relative w-full max-w-full overflow-x-clip overflow-y-hidden px-4 pb-[56px] pt-[136px] text-center md:px-5 md:pb-20 md:pt-[180px]">
    <div class="max-w-narrow mx-auto relative z-[1]">
      <h1 class="gradient-text text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[1.1] mb-5">{{ title }}</h1>
      <p v-if="subtitle" class="mb-3 text-[clamp(1.05rem,2.5vw,1.5rem)] font-medium text-[#e0e0e0]">{{ subtitle }}</p>
      <p v-if="description" class="mx-auto mb-8 max-w-[600px] text-base leading-[1.75] text-[rgba(224,224,224,0.7)] md:text-[1.1rem]">{{ description }}</p>

      <div v-if="ctaPrimary || ctaSecondary || ctaTertiary" class="mb-12 flex flex-wrap justify-center gap-5 max-md:flex-col max-md:items-stretch max-md:gap-3">
        <NuxtLink v-if="ctaPrimary" :to="ctaPrimary.to" class="btn btn-primary max-md:w-full max-md:justify-center">
          {{ ctaPrimary.label }}
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
        <NuxtLink v-if="ctaTertiary?.to" :to="ctaTertiary.to" class="btn btn-primary max-md:w-full max-md:justify-center">
          {{ ctaTertiary.label }}
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
        <a v-if="ctaSecondary?.href" :href="ctaSecondary.href" class="btn btn-secondary max-md:w-full max-md:justify-center" target="_blank" rel="noopener noreferrer">
          {{ ctaSecondary.label }}
        </a>
        <NuxtLink v-else-if="ctaSecondary?.to" :to="ctaSecondary.to" class="btn btn-secondary max-md:w-full max-md:justify-center">
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

@media (max-width: 767px) {
  .hero::before {
    width: 560px;
    height: 560px;
    top: -80px;
  }
}
</style>
