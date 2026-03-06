<script setup lang="ts">
import type { Course } from '~/types/course'

const props = defineProps<{
  course: Course
}>()

const { formatDuration, getCourseDuration } = useCourses()

const totalDuration = computed(() => getCourseDuration(props.course))

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
  <NuxtLink :to="`/courses/${course.slug}`" class="course-card glass-card" :aria-label="`View course: ${course.title}`">
    <div class="card-image">
      <NuxtImg
        v-if="course.thumbnail"
        :src="course.thumbnail"
        :alt="course.title"
        width="400"
        height="225"
        loading="lazy"
        class="card-thumb"
      />
      <div v-else class="card-thumb-placeholder">
        <Icon name="mdi:school-outline" size="48" />
      </div>
      <span class="badge badge-free">Free</span>
    </div>

    <div class="card-body">
      <div class="card-meta">
        <span :class="['badge', difficultyClass]">{{ course.difficulty }}</span>
      </div>

      <h3 class="card-title">{{ course.title }}</h3>
      <p class="card-excerpt">{{ course.excerpt }}</p>

      <div class="card-footer">
        <div class="card-stats">
          <div class="card-lessons">
            <Icon name="mdi:play-circle-outline" size="16" />
            {{ course.lessonCount }} lessons
          </div>
          <div v-if="totalDuration" class="card-duration">
            <Icon name="mdi:clock-outline" size="16" />
            {{ formatDuration(totalDuration) }}
          </div>
        </div>
        <div v-if="course.progress !== undefined" class="card-progress-wrap">
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ width: `${course.progress}%` }" />
          </div>
          <span class="card-progress-label">{{ course.progress }}%</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.course-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  color: var(--light-text);
}

.card-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
}

.card-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .card-thumb {
  transform: scale(1.05);
}

.card-thumb-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 107, 53, 0.3);
  background: rgba(255, 107, 53, 0.05);
}

.card-image .badge {
  position: absolute;
  top: 12px;
  right: 12px;
}

.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
}

.card-excerpt {
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.6);
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-stats {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-lessons {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: rgba(224, 224, 224, 0.5);
}

.card-duration {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: rgba(224, 224, 224, 0.5);
}

.card-progress-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  max-width: 140px;
}

.card-progress-wrap .progress-bar {
  flex: 1;
}

.card-progress-label {
  font-size: 0.75rem;
  color: var(--primary-orange);
  font-weight: 600;
}
</style>
