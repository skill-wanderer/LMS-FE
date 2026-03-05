<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { getCourseBySlug } = useCourses()
const course = getCourseBySlug(slug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found' })
}

useCourseSeo({
  title: course.title,
  description: course.description,
  slug: course.slug,
  thumbnail: course.thumbnail,
})

const completedCount = computed(() =>
  course.lessons.filter(l => l.completed).length
)
const progressPercent = computed(() =>
  Math.round((completedCount.value / course.lessons.length) * 100)
)

const difficultyClass = computed(() => {
  switch (course.difficulty) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
})
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Home', to: '/' },
        { label: 'Courses', to: '/courses' },
        { label: course.title },
      ]" />
    </div>

    <!-- Course Header -->
    <section class="course-header">
      <div class="course-header-inner">
        <div class="course-header-content">
          <div class="course-badges">
            <span :class="['badge', difficultyClass]">{{ course.difficulty }}</span>
            <span class="badge badge-free">Free</span>
          </div>

          <h1 class="course-title gradient-text">{{ course.title }}</h1>
          <p class="course-desc">{{ course.description }}</p>

          <div class="course-meta">
            <span class="meta-item">
              <Icon name="mdi:clock-outline" /> {{ course.duration }}
            </span>
            <span class="meta-item">
              <Icon name="mdi:play-circle-outline" /> {{ course.lessonCount }} lessons
            </span>
            <span class="meta-item">
              <Icon name="mdi:account-outline" /> {{ course.instructor || 'Skill-Wanderer' }}
            </span>
          </div>

          <div class="course-tags">
            <span v-for="tag in course.tags" :key="tag" class="course-tag">
              {{ tag }}
            </span>
          </div>

          <NuxtLink
            v-if="course.lessons.length"
            :to="`/courses/${course.slug}/lessons/${course.lessons[0].slug}`"
            class="btn btn-primary mt-6"
          >
            <Icon name="mdi:play" /> Start Learning
          </NuxtLink>
        </div>

        <!-- Progress Card (sidebar) -->
        <div class="course-sidebar">
          <div class="glass-card p-6">
            <h3 class="text-lg font-bold mb-4">Your Progress</h3>
            <div class="progress-bar mb-2">
              <div class="progress-bar-fill" :style="{ width: `${progressPercent}%` }" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
              {{ completedCount }} / {{ course.lessonCount }} lessons completed
            </p>

            <div class="text-sm text-gray-500 space-y-2">
              <div class="flex items-center gap-2">
                <Icon name="mdi:clock-outline" class="text-brand-orange" />
                <span>{{ course.duration }} total</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:trophy-outline" class="text-brand-yellow" />
                <span>Certificate on completion</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:infinity" class="text-semantic-growth" />
                <span>Lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lessons List -->
    <section class="section">
      <h2 class="text-2xl font-bold mb-6">Course Content</h2>

      <div class="lessons-list">
        <LessonItem
          v-for="(lesson, index) in course.lessons"
          :key="lesson.id"
          :lesson="lesson"
          :course-slug="course.slug"
          :index="index"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.course-header {
  padding: 40px 20px 60px;
}

.course-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: start;
}

.course-badges {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.course-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 16px;
}

.course-desc {
  color: rgba(224, 224, 224, 0.7);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.course-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.6);
}

.course-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.course-tag {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.78rem;
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-orange);
  border: 1px solid rgba(255, 107, 53, 0.15);
}

.course-sidebar {
  position: sticky;
  top: 100px;
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 900px) {
  .course-header-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .course-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .course-header {
    padding: 24px 16px 40px;
  }
}

@media (max-width: 480px) {
  .course-header {
    padding: 20px 12px 32px;
  }

  .course-meta {
    gap: 12px;
  }

  .meta-item {
    font-size: 0.82rem;
  }
}
</style>
