<script setup lang="ts">
import type { PathData } from '~/data/paths'
import allPaths from '~/data/paths'

const router = useRouter()
const route = useRoute()

useSeo({
  title: 'Search — Skill-Wanderer Dojo',
  description: 'Search free courses and learning paths on Skill-Wanderer Dojo. Find courses on web development, programming, DevOps, and more.',
})

const { searchCourses, formatDuration, getCourseDuration, getCourseBySlug } = useCourses()

const query = ref((route.query.q as string) || '')
const activeTab = ref<'all' | 'courses' | 'paths'>('all')

const courseResults = computed(() => {
  if (!query.value.trim()) return []
  return searchCourses(query.value)
})

const pathResults = computed(() => {
  if (!query.value.trim()) return []
  const q = query.value.toLowerCase()
  return allPaths.filter(p =>
    p.title.toLowerCase().includes(q)
    || p.description.toLowerCase().includes(q)
  )
})

const totalResults = computed(() => courseResults.value.length + pathResults.value.length)

function handleSearch(q: string) {
  query.value = q
  activeTab.value = 'all'
  router.replace({ query: { q } })
}

function getPathDuration(path: PathData): number {
  if (!path.courses?.length) return 0
  return path.courses.reduce((total, c) => {
    const course = getCourseBySlug(c.slug)
    return total + (course ? getCourseDuration(course) : 0)
  }, 0)
}

const difficultyClass = (d: string) => {
  switch (d) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
}

// Sync with URL on mount
watch(() => route.query.q, (newQ) => {
  if (typeof newQ === 'string') {
    query.value = newQ
  }
})
</script>

<template>
  <div>
    <section class="search-hero">
      <div class="search-hero-inner">
        <h1 class="gradient-text text-3xl md:text-4xl font-bold mb-6">Search</h1>
        <SearchBar @search="handleSearch" />
      </div>
    </section>

    <section class="section">
      <template v-if="query.trim()">
        <p class="results-label">
          {{ totalResults }} result{{ totalResults !== 1 ? 's' : '' }} for
          <strong class="text-brand-orange">"{{ query }}"</strong>
        </p>

        <!-- Tabs -->
        <div class="search-tabs">
          <button
            :class="['tab-btn', { active: activeTab === 'all' }]"
            @click="activeTab = 'all'"
          >
            All ({{ totalResults }})
          </button>
          <button
            :class="['tab-btn', { active: activeTab === 'courses' }]"
            @click="activeTab = 'courses'"
          >
            Courses ({{ courseResults.length }})
          </button>
          <button
            :class="['tab-btn', { active: activeTab === 'paths' }]"
            @click="activeTab = 'paths'"
          >
            Learning Paths ({{ pathResults.length }})
          </button>
        </div>

        <!-- Courses section -->
        <div v-if="(activeTab === 'all' || activeTab === 'courses') && courseResults.length" class="results-section">
          <h2 v-if="activeTab === 'all'" class="section-heading">
            <Icon name="mdi:school-outline" class="text-brand-orange" /> Courses
          </h2>
          <div class="card-grid">
            <CourseCard v-for="course in courseResults" :key="course.id" :course="course" />
          </div>
        </div>

        <!-- Paths section -->
        <div v-if="(activeTab === 'all' || activeTab === 'paths') && pathResults.length" class="results-section">
          <h2 v-if="activeTab === 'all'" class="section-heading">
            <Icon name="mdi:map-marker-path" class="text-brand-orange" /> Learning Paths
          </h2>
          <div class="paths-list">
            <div v-for="path in pathResults" :key="path.slug" class="glass-card path-card">
              <div class="path-header">
                <Icon :name="path.icon" class="path-icon" />
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="text-xl font-bold">{{ path.title }}</h3>
                    <span :class="['badge', difficultyClass(path.difficulty)]">{{ path.difficulty }}</span>
                  </div>
                  <p class="text-gray-400 text-sm">{{ path.description }}</p>
                  <div class="flex items-center gap-4 mt-2">
                    <span class="text-xs text-gray-500">
                      <Icon name="mdi:book-open-outline" class="inline" /> {{ path.courseCount }} courses
                    </span>
                    <span v-if="getPathDuration(path)" class="text-xs text-gray-500">
                      <Icon name="mdi:clock-outline" class="inline" /> {{ formatDuration(getPathDuration(path)) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Course list when available -->
              <div v-if="path.courses && path.courses.length" class="path-courses">
                <div
                  v-for="(course, index) in path.courses"
                  :key="course.slug"
                  class="path-course-item"
                >
                  <span class="path-course-number">{{ index + 1 }}</span>
                  <NuxtLink :to="`/courses/${course.slug}`" class="path-course-link">
                    {{ course.title }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Coming soon -->
              <div v-else class="path-coming-soon">
                <Icon name="mdi:hammer-wrench" class="text-brand-orange text-lg" />
                <span class="text-sm text-gray-400">Courses for this path are being developed. Stay tuned!</span>
              </div>
            </div>
          </div>
        </div>

        <!-- No results -->
        <div v-if="totalResults === 0" class="empty-state">
          <Icon name="mdi:magnify-close" class="text-gray-600 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">No results found</h3>
          <p class="text-gray-500 mb-4">Try searching for "JavaScript", "QA", or "DevOps".</p>
          <NuxtLink to="/courses" class="btn btn-outline btn-sm">Browse All Courses</NuxtLink>
        </div>
      </template>

      <template v-else>
        <div class="empty-state">
          <Icon name="mdi:magnify" class="text-gray-600 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">What do you want to learn?</h3>
          <p class="text-gray-500">Search for courses and learning paths by name, topic, or skill.</p>
        </div>
      </template>
    </section>
  </div>
</template>

<style scoped>
.search-hero {
  padding: 120px 20px 40px;
  text-align: center;
}

.search-hero-inner {
  max-width: 600px;
  margin: 0 auto;
}

.results-label {
  font-size: 0.95rem;
  color: rgba(224, 224, 224, 0.6);
  margin-bottom: 16px;
}

.search-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: rgba(224, 224, 224, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  border-color: rgba(255, 107, 53, 0.4);
  color: var(--light-text);
}

.tab-btn.active {
  background: rgba(255, 107, 53, 0.15);
  border-color: var(--primary-orange);
  color: var(--primary-orange);
}

.results-section {
  margin-bottom: 48px;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--light-text);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

/* Path card styles */
.paths-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.path-card {
  padding: 28px;
}

.path-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.path-icon {
  font-size: 2rem;
  color: var(--primary-orange);
  flex-shrink: 0;
  margin-top: 4px;
}

.path-coming-soon {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  background: rgba(255, 107, 53, 0.05);
  border: 1px dashed rgba(255, 107, 53, 0.2);
}

.path-courses {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.path-course-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.2s ease, border-color 0.2s ease;
}

.path-course-item:hover {
  background: rgba(255, 107, 53, 0.06);
  border-color: rgba(255, 107, 53, 0.2);
}

.path-course-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 107, 53, 0.12);
  color: var(--primary-orange);
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

.path-course-link {
  color: var(--light-text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.path-course-link:hover {
  color: var(--primary-orange);
}

@media (max-width: 768px) {
  .search-hero {
    padding: 100px 16px 32px;
  }

  .path-card {
    padding: 20px;
  }

  .path-header {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .search-hero {
    padding: 90px 12px 24px;
  }

  .empty-state {
    padding: 40px 12px;
  }

  .path-card {
    padding: 16px;
  }

  .tab-btn {
    padding: 6px 14px;
    font-size: 0.8rem;
  }
}
</style>
