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

const { isAuthEnabled, isAuthenticated, accessToken } = useKeycloak()
const config = useRuntimeConfig()
const apiBaseUrl = (config.public.apiBaseUrl as string).replace(/\/+$/, '')

const isCompleted = ref(lesson.completed ?? false)
const isLoading = ref(false)
const showLoginModal = ref(false)
const errorToast = ref('')
let errorTimer: ReturnType<typeof setTimeout> | null = null

function showError(msg: string) {
  errorToast.value = msg
  if (errorTimer) clearTimeout(errorTimer)
  errorTimer = setTimeout(() => { errorToast.value = '' }, 5000)
}

function buildCompletionUrl() {
  return `${apiBaseUrl}/api/courses/${courseSlug}/lessons/${lessonSlug}/complete`
}

function buildAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {}
  if (accessToken.value) {
    headers.Authorization = `Bearer ${accessToken.value}`
  }
  return headers
}

// Fetch completion status on mount if user is authenticated
onMounted(async () => {
  if (!apiBaseUrl || !isAuthenticated.value) return
  try {
    const data = await $fetch<{ completed: boolean }>(buildCompletionUrl(), {
      headers: buildAuthHeaders(),
    })
    isCompleted.value = data.completed
  }
  catch {
    showError('Failed to load completion status. Please try again later.')
  }
})

async function toggleComplete() {
  // If auth is enabled but user is not logged in, show login modal
  if (isAuthEnabled.value && !isAuthenticated.value) {
    showLoginModal.value = true
    return
  }

  const newState = !isCompleted.value
  isLoading.value = true

  try {
    if (newState) {
      await $fetch(buildCompletionUrl(), { method: 'POST', headers: buildAuthHeaders() })
    }
    else {
      await $fetch(buildCompletionUrl(), { method: 'DELETE', headers: buildAuthHeaders() })
    }
    isCompleted.value = newState
  }
  catch {
    showError('Something went wrong. Please try again later.')
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <!-- Error Toast -->
    <Transition name="toast">
      <div v-if="errorToast" class="error-toast" role="alert">
        <Icon name="mdi:alert-circle-outline" />
        <span>{{ errorToast }}</span>
        <button class="error-toast-close" aria-label="Dismiss" @click="errorToast = ''">&times;</button>
      </div>
    </Transition>

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

          </div>
        </div>

        <!-- Video Placeholder -->
        <div v-if="lesson.type === 'video'" class="lesson-video-placeholder">
          <Icon name="mdi:play-circle" class="text-6xl text-brand-orange opacity-50" />
          <p class="text-gray-500 mt-4">Video player will be integrated here</p>
        </div>

        <!-- Quiz Notice (shown when lesson has a quiz) -->
        <div v-if="lesson.quiz" class="quiz-notice glass-card mb-6">
          <span class="quiz-notice-icon">📝</span>
          <div>
            <strong>This lesson includes an Optional Quiz</strong>
            <p>After reviewing the summary below, scroll down to test your understanding of Module 1 concepts.</p>
          </div>
        </div>

        <!-- Article Content (collapsible when quiz exists) -->
        <details v-if="lesson.content && lesson.quiz" class="summary-collapsible glass-card mb-8" open>
          <summary class="summary-toggle">
            <Icon name="mdi:book-open-variant" />
            <span>Module Summary & Takeaway</span>
            <Icon name="mdi:chevron-down" class="summary-chevron" />
          </summary>
          <div class="lesson-content p-4 sm:p-6 md:p-8 prose-content" v-html="lesson.content" />
        </details>

        <!-- Article Content (normal when no quiz) -->
        <div v-else-if="lesson.content" class="lesson-content glass-card p-4 sm:p-6 md:p-8 mb-8 prose-content" v-html="lesson.content" />

        <!-- Article Content Placeholder (no content yet) -->
        <div v-else class="lesson-content glass-card p-4 sm:p-6 md:p-8 mb-8">
          <p class="text-gray-400 leading-relaxed">
            This is where the lesson content for <strong>"{{ lesson.title }}"</strong> will be rendered.
            Content will be loaded from the API and can include formatted text, code snippets,
            images, and interactive elements.
          </p>
        </div>

        <!-- Optional Quiz Section -->
        <QuizSection
          v-if="lesson.quiz"
          :questions="lesson.quiz.questions"
          :title="lesson.quiz.title"
          class="mb-8"
        />

        <!-- Mark Complete -->
        <div class="lesson-actions">
          <button
            :class="['btn', isCompleted ? 'btn-completed' : 'btn-outline']"
            :disabled="isLoading"
            @click="toggleComplete"
          >
            <Icon :name="isLoading ? 'mdi:loading' : isCompleted ? 'mdi:check-circle' : 'mdi:check-circle-outline'" :class="{ 'animate-spin': isLoading }" />
            {{ isCompleted ? 'Completed' : 'Mark as Complete' }}
          </button>
        </div>

        <!-- Login Required Modal -->
        <LoginRequiredModal :visible="showLoginModal" :return-to="route.path" @close="showLoginModal = false" />

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
  display: flex;
  align-items: center;
  gap: 12px;
}

.lesson-actions button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-completed {
  background: rgba(76, 175, 80, 0.15);
  color: var(--success-green, #4caf50);
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.btn-completed:hover {
  background: rgba(76, 175, 80, 0.25);
  border-color: rgba(76, 175, 80, 0.6);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Quiz Notice */
.quiz-notice {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  background: rgba(255, 193, 7, 0.06);
  border: 1px solid rgba(255, 193, 7, 0.2);
  border-left: 4px solid var(--primary-orange);
  border-radius: 12px;
}

.quiz-notice-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
}

.quiz-notice strong {
  display: block;
  color: var(--primary-orange);
  font-size: 1rem;
  margin-bottom: 4px;
}

.quiz-notice p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.6);
}

/* Collapsible Summary */
.summary-collapsible {
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  overflow: hidden;
}

.summary-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--light-text);
  background: rgba(255, 107, 53, 0.05);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  list-style: none;
  user-select: none;
  transition: background 0.2s ease;
}

.summary-toggle:hover {
  background: rgba(255, 107, 53, 0.08);
}

.summary-toggle::-webkit-details-marker {
  display: none;
}

.summary-toggle::marker {
  content: '';
}

.summary-chevron {
  margin-left: auto;
  font-size: 1.3rem;
  transition: transform 0.3s ease;
  color: var(--primary-orange);
}

.summary-collapsible[open] .summary-chevron {
  transform: rotate(180deg);
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

/* Prose content styles for rendered lesson HTML */
.prose-content {
  color: rgba(224, 224, 224, 0.85);
  line-height: 1.8;
  font-size: 1rem;
}

.prose-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--light-text);
  border-bottom: 1px solid rgba(255, 107, 53, 0.15);
  padding-bottom: 0.5rem;
}

.prose-content :deep(h2:first-child) {
  margin-top: 0;
}

.prose-content :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--light-text);
}

.prose-content :deep(p) {
  margin-bottom: 1rem;
}

.prose-content :deep(ul),
.prose-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose-content :deep(ul) {
  list-style-type: disc;
}

.prose-content :deep(ol) {
  list-style-type: decimal;
}

.prose-content :deep(li) {
  margin-bottom: 0.4rem;
}

.prose-content :deep(li ul),
.prose-content :deep(li ol) {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}

.prose-content :deep(blockquote) {
  border-left: 3px solid var(--primary-orange);
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  background: rgba(255, 107, 53, 0.05);
  border-radius: 0 8px 8px 0;
}

.prose-content :deep(blockquote p) {
  margin-bottom: 0;
}

.prose-content :deep(strong) {
  color: var(--light-text);
  font-weight: 600;
}

.prose-content :deep(em) {
  color: rgba(224, 224, 224, 0.7);
}

.prose-content :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--primary-orange);
}

.prose-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}

.prose-content :deep(thead) {
  background: rgba(255, 107, 53, 0.1);
}

.prose-content :deep(th) {
  padding: 10px 14px;
  text-align: left;
  font-weight: 600;
  color: var(--light-text);
  border-bottom: 2px solid rgba(255, 107, 53, 0.2);
}

.prose-content :deep(td) {
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.prose-content :deep(tr:hover td) {
  background: rgba(255, 255, 255, 0.03);
}

/* Horizontal rules */
.prose-content :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 2rem 0;
}

/* Format selector styles */
.prose-content :deep(.format-notice) {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 12px;
  background: rgba(255, 193, 7, 0.08);
  border: 1px solid rgba(255, 193, 7, 0.2);
  border-left: 4px solid #ffc107;
  margin-bottom: 20px;
}

.prose-content :deep(.format-notice-icon) {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
}

.prose-content :deep(.format-notice > div > strong) {
  color: #ffc107;
  display: block;
  margin-bottom: 4px;
  font-size: 1rem;
}

.prose-content :deep(.format-notice p) {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.7);
}

.prose-content :deep(.format-notice p strong) {
  color: #ffc107;
  display: inline;
  font-size: inherit;
}

.prose-content :deep(.format-tabs) {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.prose-content :deep(.format-tab) {
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid rgba(255, 107, 53, 0.2);
  background: transparent;
  color: rgba(224, 224, 224, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
}

.prose-content :deep(.format-tab:hover) {
  border-color: var(--primary-orange);
  color: var(--primary-orange);
}

.prose-content :deep(.format-tab.active) {
  background: var(--primary-orange);
  border-color: var(--primary-orange);
  color: #fff;
}

.prose-content :deep(.video-embed iframe),
.prose-content :deep(.audio-embed iframe),
.prose-content :deep(.slides-embed iframe) {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  max-width: 100%;
}

.prose-content :deep(.format-content img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

/* Error toast */
.error-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(220, 38, 38, 0.95);
  color: #fff;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 20px rgba(220, 38, 38, 0.4);
  max-width: 380px;
}

.error-toast-close {
  margin-left: 8px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.8;
  line-height: 1;
}

.error-toast-close:hover {
  opacity: 1;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
