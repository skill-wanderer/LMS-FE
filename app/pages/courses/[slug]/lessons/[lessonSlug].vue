<script setup lang="ts">
const route = useRoute()
const courseSlug = route.params.slug as string
const lessonSlug = route.params.lessonSlug as string

const { getCourseBySlug } = useCourses()
const course = getCourseBySlug(courseSlug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found' })
}

const lesson = course.lessons.find(l => l.slug === lessonSlug)

if (!lesson) {
  throw createError({ statusCode: 404, statusMessage: 'Lesson not found' })
}

useSeo({
  title: `${lesson.title} — ${course.title} — Skill-Wanderer Dojo`,
  description: `Lesson: ${lesson.title} from ${course.title}. Free and open learning at Skill-Wanderer Dojo.`,
})

const currentIndex = course.lessons.findIndex(l => l.slug === lessonSlug)
const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null
const nextLesson = currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null

const isCompleted = ref(lesson.completed ?? false)

function toggleComplete() {
  isCompleted.value = !isCompleted.value
  // TODO: persist to API
}
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Home', to: '/' },
        { label: 'Courses', to: '/courses' },
        { label: course.title, to: `/courses/${course.slug}` },
        { label: lesson.title },
      ]" />
    </div>

    <!-- Lesson Content -->
    <section class="lesson-layout">
      <!-- Sidebar: Lesson list -->
      <aside class="lesson-sidebar">
        <h3 class="sidebar-title">{{ course.title }}</h3>
        <div class="sidebar-progress">
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ width: '0%' }" />
          </div>
        </div>
        <nav class="sidebar-lessons">
          <NuxtLink
            v-for="(l, i) in course.lessons"
            :key="l.id"
            :to="`/courses/${course.slug}/lessons/${l.slug}`"
            :class="['sidebar-lesson', { 'sidebar-lesson--active': l.slug === lessonSlug }]"
          >
            <span class="sidebar-lesson-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="sidebar-lesson-title">{{ l.title }}</span>
          </NuxtLink>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="lesson-main">
        <div class="lesson-header">
          <span class="lesson-label">
            Lesson {{ currentIndex + 1 }} of {{ course.lessons.length }}
          </span>
          <h1 class="lesson-title">{{ lesson.title }}</h1>
          <div class="lesson-meta">
            <span class="flex items-center gap-1">
              <Icon :name="lesson.type === 'video' ? 'mdi:play-circle-outline' : 'mdi:file-document-outline'" />
              {{ lesson.type === 'video' ? 'Video' : 'Article' }}
            </span>
            <span class="flex items-center gap-1">
              <Icon name="mdi:clock-outline" />
              {{ lesson.duration }}
            </span>
          </div>
        </div>

        <!-- Video Placeholder -->
        <div v-if="lesson.type === 'video'" class="lesson-video-placeholder">
          <Icon name="mdi:play-circle" class="text-6xl text-brand-orange opacity-50" />
          <p class="text-gray-500 mt-4">Video player will be integrated here</p>
        </div>

        <!-- Article Content Placeholder -->
        <div class="lesson-content glass-card p-4 sm:p-6 md:p-8 mb-8">
          <p class="text-gray-400 leading-relaxed">
            This is where the lesson content for <strong>"{{ lesson.title }}"</strong> will be rendered.
            Content will be loaded from the API and can include formatted text, code snippets,
            images, and interactive elements.
          </p>
        </div>

        <!-- Mark Complete -->
        <div class="lesson-actions">
          <button
            :class="['btn', isCompleted ? 'btn-outline' : 'btn-primary']"
            @click="toggleComplete"
          >
            <Icon :name="isCompleted ? 'mdi:check-circle' : 'mdi:check-circle-outline'" />
            {{ isCompleted ? 'Completed' : 'Mark as Complete' }}
          </button>
        </div>

        <!-- Prev / Next Navigation -->
        <nav class="lesson-nav">
          <NuxtLink
            v-if="prevLesson"
            :to="`/courses/${course.slug}/lessons/${prevLesson.slug}`"
            class="lesson-nav-btn glass-card"
          >
            <Icon name="mdi:arrow-left" />
            <div>
              <span class="lesson-nav-label">Previous</span>
              <span class="lesson-nav-title">{{ prevLesson.title }}</span>
            </div>
          </NuxtLink>
          <div v-else />

          <NuxtLink
            v-if="nextLesson"
            :to="`/courses/${course.slug}/lessons/${nextLesson.slug}`"
            class="lesson-nav-btn lesson-nav-btn--next glass-card"
          >
            <div>
              <span class="lesson-nav-label">Next</span>
              <span class="lesson-nav-title">{{ nextLesson.title }}</span>
            </div>
            <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <div v-else />
        </nav>
      </main>
    </section>
  </div>
</template>

<style scoped>
.lesson-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 32px;
}

/* Sidebar */
.lesson-sidebar {
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.sidebar-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--light-text);
}

.sidebar-progress {
  margin-bottom: 16px;
}

.sidebar-lessons {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-lesson {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgba(224, 224, 224, 0.6);
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.sidebar-lesson:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--light-text);
}

.sidebar-lesson--active {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-orange);
  font-weight: 600;
}

.sidebar-lesson-num {
  flex-shrink: 0;
  font-size: 0.75rem;
  color: rgba(224, 224, 224, 0.3);
  width: 24px;
}

.sidebar-lesson--active .sidebar-lesson-num {
  color: var(--primary-orange);
}

/* Main */
.lesson-header {
  margin-bottom: 32px;
}

.lesson-label {
  font-size: 0.85rem;
  color: var(--primary-orange);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lesson-title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  margin: 8px 0 12px;
}

.lesson-meta {
  display: flex;
  gap: 16px;
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.5);
}

.lesson-video-placeholder {
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.lesson-actions {
  margin-bottom: 32px;
}

.lesson-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.lesson-nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  text-decoration: none;
  color: var(--light-text);
}

.lesson-nav-btn--next {
  text-align: right;
  justify-content: flex-end;
}

.lesson-nav-label {
  display: block;
  font-size: 0.75rem;
  color: rgba(224, 224, 224, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lesson-nav-title {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .lesson-layout {
    grid-template-columns: 1fr;
  }

  .lesson-sidebar {
    position: static;
    max-height: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .lesson-nav {
    grid-template-columns: 1fr;
  }

  .lesson-layout {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .lesson-layout {
    padding: 12px;
    gap: 16px;
  }

  .lesson-nav-btn {
    padding: 12px 14px;
    gap: 8px;
  }

  .lesson-nav-title {
    font-size: 0.85rem;
  }
}
</style>
