<script setup lang="ts">
import type { Lesson } from '~/types/course'

const props = defineProps<{
  lesson: Lesson
  courseSlug: string
  index: number
}>()

const { formatDuration } = useCourses()
</script>

<template>
  <NuxtLink
    :to="`/courses/${courseSlug}/lessons/${lesson.slug}`"
    class="lesson-item glass-card"
    :aria-label="`Lesson ${index + 1}: ${lesson.title}`"
  >
    <div class="lesson-number">
      <span v-if="lesson.completed" class="lesson-check">
        <Icon name="mdi:check-circle" />
      </span>
      <span v-else class="lesson-num">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="lesson-info">
      <h4 class="lesson-title">{{ lesson.title }}</h4>
      <div class="lesson-meta">
        <span class="lesson-type">
          <Icon :name="lesson.type === 'video' ? 'mdi:play-circle-outline' : 'mdi:file-document-outline'" size="14" />
          {{ lesson.type === 'video' ? 'Video' : 'Article' }}
        </span>
        <span v-if="lesson.durationMinutes" class="lesson-duration">
          <Icon name="mdi:clock-outline" size="14" />
          {{ formatDuration(lesson.durationMinutes) }}
        </span>
      </div>
    </div>

    <Icon name="mdi:chevron-right" class="lesson-arrow" />
  </NuxtLink>
</template>

<style scoped>
.lesson-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  text-decoration: none;
  color: var(--light-text);
}

.lesson-number {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.1);
}

.lesson-num {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-orange);
}

.lesson-check {
  color: var(--success-green);
  font-size: 1.4rem;
  display: flex;
}

.lesson-info {
  flex: 1;
}

.lesson-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.lesson-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  color: rgba(224, 224, 224, 0.5);
}

.lesson-type {
  display: flex;
  align-items: center;
  gap: 4px;
}

.lesson-duration {
  display: flex;
  align-items: center;
  gap: 4px;
}

.lesson-arrow {
  color: rgba(224, 224, 224, 0.3);
  transition: color 0.3s ease, transform 0.3s ease;
}

.lesson-item:hover .lesson-arrow {
  color: var(--primary-orange);
  transform: translateX(4px);
}
</style>
