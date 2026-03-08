<script setup lang="ts">
import { getAllLessons } from '~/types/course'

const route = useRoute()
const slug = route.params.slug as string

const { getCourseBySlug, formatDuration, getCourseDuration } = useCourses()
const course = getCourseBySlug(slug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found' })
}

useCourseSeo({
  title: course.title,
  description: course.description,
  slug: course.slug,
  thumbnail: course.thumbnail,
  difficulty: course.difficulty,
  datePublished: course.createdAt,
  dateModified: course.updatedAt,
  author: course.author ? { name: course.author.name, url: course.author.websiteUrl } : undefined,
})

const allLessons = computed(() => getAllLessons(course))

const completedCount = computed(() =>
  allLessons.value.filter(l => l.completed).length
)
const progressPercent = computed(() =>
  Math.round((completedCount.value / allLessons.value.length) * 100)
)

const difficultyClass = computed(() => {
  switch (course.difficulty) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
})

const totalDuration = computed(() => getCourseDuration(course))
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
          <p class="course-desc" style="white-space: pre-line;">{{ course.description }}</p>

          <div class="course-meta">
            <span class="meta-item">
              <Icon name="mdi:play-circle-outline" /> {{ course.lessonCount }} lessons
            </span>
            <span v-if="totalDuration" class="meta-item">
              <Icon name="mdi:clock-outline" /> {{ formatDuration(totalDuration) }}
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
            v-if="allLessons.length"
            :to="`/courses/${course.slug}/lessons/${allLessons[0]?.slug}`"
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

    <!-- Author Bio -->
    <section v-if="course.author" class="section" style="padding-bottom: 0;">
      <div class="author-card glass-card">
        <img
          :src="course.author.avatarUrl"
          :alt="`${course.author.name} — Course Author`"
          class="author-avatar"
          width="80"
          height="80"
          loading="lazy"
        />
        <div class="author-info">
          <h2 class="author-name">About the Author</h2>
          <p class="author-title">{{ course.author.name }} · {{ course.author.title }}</p>
          <p class="author-bio">{{ course.author.bio }}</p>
          <div class="author-links">
            <a v-if="course.author.linkedinUrl" :href="course.author.linkedinUrl" target="_blank" rel="noopener" class="author-link">
              <Icon name="mdi:linkedin" /> LinkedIn
            </a>
            <a v-if="course.author.websiteUrl" :href="course.author.websiteUrl" target="_blank" rel="noopener" class="author-link">
              <Icon name="mdi:web" /> Website
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Last Updated -->
    <section class="section" style="padding-top: 12px; padding-bottom: 0;">
      <div class="course-dates">
        <span class="date-item">
          <Icon name="mdi:calendar-outline" /> Published: {{ new Date(course.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
        <span v-if="course.updatedAt !== course.createdAt" class="date-item">
          <Icon name="mdi:update" /> Last updated: {{ new Date(course.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
      </div>
    </section>

    <!-- Lessons List -->
    <section class="section">
      <h2 class="text-2xl font-bold mb-6">Course Content</h2>

      <div v-for="mod in course.modules" :key="mod.id" class="module-group">
        <div class="module-header">
          <Icon name="mdi:book-open-variant" class="module-icon" />
          <div>
            <h3 class="module-title">{{ mod.title }}</h3>
            <span class="module-meta">
              {{ mod.lessons.length }} lesson{{ mod.lessons.length !== 1 ? 's' : '' }}
              <template v-if="mod.lessons.some(l => l.durationMinutes)">
                · {{ formatDuration(mod.lessons.reduce((s, l) => s + (l.durationMinutes || 0), 0)) }}
              </template>
            </span>
          </div>
        </div>
        <div class="lessons-list">
          <LessonItem
            v-for="lesson in mod.lessons"
            :key="lesson.id"
            :lesson="lesson"
            :course-slug="course.slug"
            :index="allLessons.indexOf(lesson)"
          />
        </div>
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

.module-group {
  margin-bottom: 32px;
}

.module-group:last-child {
  margin-bottom: 0;
}

.module-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 107, 53, 0.06);
  border: 1px solid rgba(255, 107, 53, 0.12);
}

.module-icon {
  font-size: 1.4rem;
  color: var(--primary-orange);
}

.module-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--light-text);
}

.module-meta {
  font-size: 0.8rem;
  color: rgba(224, 224, 224, 0.5);
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

/* Author Card */
.author-card {
  display: flex;
  gap: 20px;
  padding: 24px;
  align-items: flex-start;
}

.author-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.3);
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--light-text);
  margin-bottom: 4px;
}

.author-title {
  font-size: 0.9rem;
  color: var(--primary-orange);
  margin-bottom: 8px;
  font-weight: 600;
}

.author-bio {
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.65);
  line-height: 1.7;
  margin-bottom: 12px;
}

.author-links {
  display: flex;
  gap: 16px;
}

.author-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: rgba(224, 224, 224, 0.5);
  transition: color 0.3s ease;
}

.author-link:hover {
  color: var(--primary-orange);
}

/* Course Dates */
.course-dates {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.date-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: rgba(224, 224, 224, 0.45);
}

@media (max-width: 600px) {
  .author-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .author-links {
    justify-content: center;
  }
}
</style>
