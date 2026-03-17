<script setup lang="ts">
import type { Course } from '~/types/course'

const props = defineProps<{
  course: Course
}>()

const { formatDuration, getCourseDuration } = useCourses()

const totalDuration = computed(() => getCourseDuration(props.course))
const thumbnailClass = computed(() => (
  props.course.thumbnailFit === 'contain'
    ? 'w-full h-full object-contain'
    : 'w-full h-full object-cover'
))
const thumbnailStyle = computed(() => (
  props.course.thumbnailPosition
    ? { objectPosition: props.course.thumbnailPosition }
    : undefined
))

const difficultyClass = computed(() => {
  switch (props.course.difficulty) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
})
</script>

<template>
  <NuxtLink :to="`/courses/${course.slug}`" class="group glass-card flex flex-col overflow-hidden no-underline text-[#e0e0e0]" :aria-label="`View course: ${course.title}`">
    <div class="relative aspect-video overflow-hidden bg-white/[0.02]">
      <NuxtImg
        v-if="course.thumbnail"
        :src="course.thumbnail"
        :alt="course.title"
        width="400"
        height="225"
        loading="lazy"
        :class="[thumbnailClass, 'transition-transform duration-300 group-hover:scale-105']"
        :style="thumbnailStyle"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-brand-orange/30 bg-brand-orange/5">
        <Icon name="mdi:school-outline" size="48" />
      </div>
      <span class="badge badge-free absolute top-3 right-3">Free</span>
    </div>

    <div class="p-5 flex-1 flex flex-col">
      <div class="flex items-center gap-3 mb-3">
        <span :class="['badge', difficultyClass]">{{ course.difficulty }}</span>
      </div>

      <h3 class="text-[1.15rem] font-bold mb-2 leading-tight">{{ course.title }}</h3>
      <p class="text-sm text-[rgba(224,224,224,0.6)] leading-relaxed flex-1 line-clamp-2">{{ course.excerpt }}</p>

      <div class="mt-4 flex items-center justify-between gap-3">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5 text-sm text-[rgba(224,224,224,0.5)]">
            <Icon name="mdi:play-circle-outline" size="16" />
            {{ course.lessonCount }} lessons
          </div>
          <div v-if="totalDuration" class="flex items-center gap-1.5 text-sm text-[rgba(224,224,224,0.5)]">
            <Icon name="mdi:clock-outline" size="16" />
            {{ formatDuration(totalDuration) }}
          </div>
        </div>
        <div v-if="course.progress !== undefined" class="flex items-center gap-2 flex-1 max-w-[140px]">
          <div class="progress-bar flex-1">
            <div class="progress-bar-fill" :style="{ width: `${course.progress}%` }" />
          </div>
          <span class="text-xs text-brand-orange font-semibold">{{ course.progress }}%</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>


