<script setup lang="ts">
import type { Lesson } from '~/types/course'
import { isPublishedLesson } from '~/types/course'

const props = defineProps<{
  lesson: Lesson
  courseSlug: string
  index: number
}>()

const { formatDuration } = useCourses()
const isAvailable = computed(() => isPublishedLesson(props.lesson))

const typeIcon = computed(() => {
  switch (props.lesson.type) {
    case 'video': return 'mdi:play-circle-outline'
    case 'assignment': return 'mdi:clipboard-text-outline'
    default: return 'mdi:file-document-outline'
  }
})

const typeLabel = computed(() => {
  switch (props.lesson.type) {
    case 'video': return 'Video'
    case 'assignment': return 'Assignment'
    default: return 'Lesson'
  }
})
</script>

<template>
  <NuxtLink
    v-if="isAvailable"
    :to="`/courses/${courseSlug}/lessons/${lesson.slug}`"
    class="lesson-item glass-card flex items-center gap-4 py-4 px-5 no-underline text-[#e0e0e0]"
    :aria-label="`Lesson ${index + 1}: ${lesson.title}`"
  >
    <div class="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-brand-orange/10">
      <span v-if="lesson.completed" class="text-semantic-success text-[1.4rem] flex">
        <Icon name="mdi:check-circle" />
      </span>
      <span v-else class="text-sm font-bold text-brand-orange">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="flex-1">
      <h4 class="text-base font-semibold mb-1">{{ lesson.title }}</h4>
      <div class="flex items-center gap-3 text-[0.8rem] text-[rgba(224,224,224,0.5)]">
        <span class="flex items-center gap-1">
          <Icon :name="typeIcon" size="14" />
          {{ typeLabel }}
        </span>
        <span v-if="lesson.durationMinutes" class="flex items-center gap-1">
          <Icon name="mdi:clock-outline" size="14" />
          {{ formatDuration(lesson.durationMinutes) }}
        </span>
      </div>
    </div>

    <Icon name="mdi:chevron-right" class="lesson-arrow text-[rgba(224,224,224,0.3)] transition-all duration-300" />
  </NuxtLink>

  <div
    v-else
    class="lesson-item glass-card flex items-center gap-4 py-4 px-5 text-[#e0e0e0] opacity-80"
    :aria-label="`Lesson ${index + 1}: ${lesson.title} (planned)`"
  >
    <div class="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-brand-orange/10">
      <span class="text-sm font-bold text-brand-orange">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="flex-1">
      <div class="flex items-center gap-2 mb-1 flex-wrap">
        <h4 class="text-base font-semibold">{{ lesson.title }}</h4>
        <span class="text-[0.7rem] uppercase tracking-wider text-brand-orange/80">Planned</span>
      </div>
      <div class="flex items-center gap-3 text-[0.8rem] text-[rgba(224,224,224,0.5)]">
        <span class="flex items-center gap-1">
          <Icon :name="typeIcon" size="14" />
          {{ typeLabel }}
        </span>
        <span v-if="lesson.durationMinutes" class="flex items-center gap-1">
          <Icon name="mdi:clock-outline" size="14" />
          {{ formatDuration(lesson.durationMinutes) }}
        </span>
      </div>
    </div>

    <Icon name="mdi:lock-outline" class="text-[rgba(224,224,224,0.3)]" />
  </div>
</template>

<style scoped>
.lesson-item:hover .lesson-arrow {
  @apply text-brand-orange translate-x-1;
}
</style>
