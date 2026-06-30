<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  description: string
  lastUpdated: string
  highlights?: string[]
}>()
</script>

<template>
  <div>
    <TheHero
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :cta-primary="{ label: 'Browse Courses', to: '/courses' }"
      :cta-tertiary="{ label: 'Back Home', to: '/' }"
    />

    <section class="section section-narrow">
      <div class="glass-card mb-6 p-5 md:mb-8 md:p-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div class="min-w-0">
            <p class="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-orange sm:text-xs sm:tracking-[0.22em]">Legal Information</p>
            <h2 class="text-2xl font-bold text-[#e0e0e0] sm:text-[2rem]">{{ title }}</h2>
          </div>
          <div class="w-full rounded-pill border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-sm text-[rgba(224,224,224,0.8)] sm:w-auto">
            Last updated: {{ lastUpdated }}
          </div>
        </div>

        <p class="mt-4 text-sm leading-7 text-[rgba(224,224,224,0.7)] md:mt-5 md:text-base">
          {{ description }}
        </p>

        <ul v-if="highlights?.length" class="mt-5 grid gap-3 md:mt-6 md:grid-cols-2">
          <li
            v-for="highlight in highlights"
            :key="highlight"
            class="rounded-card border border-white/8 bg-white/3 px-4 py-3 text-sm leading-6 text-[rgba(224,224,224,0.72)]"
          >
            {{ highlight }}
          </li>
        </ul>
      </div>

      <article class="glass-card p-5 md:p-10 prose-content legal-prose">
        <slot />
      </article>
    </section>
  </div>
</template>

<style scoped>
.legal-prose :deep(h2) {
  font-size: 1.4rem;
  line-height: 1.25;
  scroll-margin-top: 96px;
}

.legal-prose :deep(p),
.legal-prose :deep(li) {
  overflow-wrap: anywhere;
}

.legal-prose :deep(ul),
.legal-prose :deep(ol) {
  padding-left: 1.2rem;
}

.legal-prose :deep(li) {
  padding-left: 0.1rem;
}

@media (min-width: 768px) {
  .legal-prose :deep(h2) {
    font-size: 1.65rem;
  }
}

.legal-prose :deep(a) {
  color: #ffd166;
}

.legal-prose :deep(a:hover) {
  color: #ff6b35;
}
</style>
