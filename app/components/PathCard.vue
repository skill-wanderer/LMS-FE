<script setup lang="ts">
import type { PathData } from '~/data/paths'

const props = defineProps<{
  path: PathData
  /** Show the path's cover. Planned covers stay hidden in production until all of them exist. */
  cover?: boolean
}>()

// Planned cards get a dashed border, because those paths aren't open yet.
const isPlanned = computed(() => props.path.status === 'planned')
</script>

<template>
  <NuxtLink
    :to="`/paths/${path.slug}`"
    class="group flex flex-col overflow-hidden rounded-card bg-surface-card p-6 text-[#e0e0e0] no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-surface-card-hover hover:text-[#e0e0e0] hover:shadow-[0_16px_36px_rgba(0,0,0,0.34)] max-sm:p-5"
    :class="isPlanned ? 'border border-dashed border-brand-orange/30 hover:border-brand-orange' : 'border border-brand-orange/40 hover:border-brand-orange'"
    :aria-label="isPlanned ? `See the planned ${path.title} path` : `Open the ${path.title} path`"
  >
    <ImageSlot
      v-if="cover"
      :name="`learning-paths/${path.slug}`"
      :group="isPlanned ? 'learningPathCovers' : undefined"
      class="-mx-6 -mt-6 mb-5 max-sm:-mx-5 max-sm:-mt-5"
    />

    <div class="flex items-center justify-between gap-3">
      <Icon :name="path.icon" class="text-brand-orange text-2xl" />
      <span :class="['badge', isPlanned ? 'badge-planned' : 'badge-in-development']">
        {{ isPlanned ? 'Planned' : 'In Development' }}
      </span>
    </div>

    <h3 class="mt-3.5 mb-2.5 text-xl font-bold leading-snug text-white">{{ path.title }}</h3>
    <p class="flex-1 text-sm leading-relaxed text-[rgba(224,224,224,0.7)]">{{ path.description }}</p>

    <span class="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-orange">
      {{ isPlanned ? 'See the Plan' : 'Open the Path' }}
      <Icon name="mdi:arrow-right" class="transition-transform duration-200 group-hover:translate-x-0.5" />
    </span>
  </NuxtLink>
</template>
