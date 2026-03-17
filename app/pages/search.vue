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

function isCourseAvailable(slug: string): boolean {
  return !!getCourseBySlug(slug)
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
    <section class="pt-[170px] px-5 pb-10 text-center max-md:pt-[150px] max-md:px-4 max-md:pb-8 max-sm:pt-[140px] max-sm:px-3 max-sm:pb-6">
      <div class="max-w-[600px] mx-auto">
        <h1 class="gradient-text text-3xl md:text-4xl font-bold mb-6">Search</h1>
        <SearchBar @search="handleSearch" />
      </div>
    </section>

    <section class="section">
      <template v-if="query.trim()">
        <p class="text-[0.95rem] text-[rgba(224,224,224,0.6)] mb-4">
          {{ totalResults }} result{{ totalResults !== 1 ? 's' : '' }} for
          <strong class="text-brand-orange">"{{ query }}"</strong>
        </p>

        <!-- Tabs -->
        <div class="flex gap-2 mb-8 flex-wrap">
          <button
            v-for="tab in [
              { key: 'all', label: `All (${totalResults})` },
              { key: 'courses', label: `Courses (${courseResults.length})` },
              { key: 'paths', label: `Learning Paths (${pathResults.length})` },
            ]"
            :key="tab.key"
            :class="[
              'py-2 px-5 rounded-full text-[0.85rem] font-semibold border cursor-pointer transition-all duration-200 max-sm:py-1.5 max-sm:px-3.5 max-sm:text-[0.8rem]',
              activeTab === tab.key
                ? 'bg-brand-orange/15 border-brand-orange text-brand-orange'
                : 'border-white/10 bg-transparent text-[rgba(224,224,224,0.6)] hover:border-brand-orange/40 hover:text-[#e0e0e0]'
            ]"
            @click="activeTab = tab.key as 'all' | 'courses' | 'paths'"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Courses section -->
        <div v-if="(activeTab === 'all' || activeTab === 'courses') && courseResults.length" class="mb-12">
          <h2 v-if="activeTab === 'all'" class="flex items-center gap-2 text-xl font-bold mb-5 text-[#e0e0e0]">
            <Icon name="mdi:school-outline" class="text-brand-orange" /> Courses
          </h2>
          <div class="card-grid">
            <CourseCard v-for="course in courseResults" :key="course.id" :course="course" />
          </div>
        </div>

        <!-- Paths section -->
        <div v-if="(activeTab === 'all' || activeTab === 'paths') && pathResults.length" class="mb-12">
          <h2 v-if="activeTab === 'all'" class="flex items-center gap-2 text-xl font-bold mb-5 text-[#e0e0e0]">
            <Icon name="mdi:map-marker-path" class="text-brand-orange" /> Learning Paths
          </h2>
          <div class="flex flex-col gap-6">
            <div v-for="path in pathResults" :key="path.slug" class="glass-card p-7 max-md:p-5 max-sm:p-4">
              <div class="flex gap-4 items-start mb-5 max-md:flex-col">
                <Icon :name="path.icon" class="text-[2rem] text-brand-orange shrink-0 mt-1" />
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
                  <NuxtLink :to="`/paths/${path.slug}`" class="inline-flex items-center gap-1.5 mt-3 text-sm text-brand-orange no-underline transition-opacity duration-200 hover:opacity-80">
                    View learning path
                    <Icon name="mdi:arrow-right" />
                  </NuxtLink>
                </div>
              </div>

              <!-- Course list when available -->
              <div v-if="path.courses && path.courses.length" class="flex flex-col gap-2">
                <div
                  v-for="(course, index) in path.courses"
                  :key="course.slug"
                  class="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-white/[0.03] border border-white/[0.06] transition-all duration-200 hover:bg-brand-orange/[0.06] hover:border-brand-orange/20"
                >
                  <span class="flex items-center justify-center w-7 h-7 rounded-full bg-brand-orange/[0.12] text-brand-orange text-[0.8rem] font-bold shrink-0">{{ index + 1 }}</span>
                  <NuxtLink
                    v-if="isCourseAvailable(course.slug)"
                    :to="`/courses/${course.slug}`"
                    class="text-[#e0e0e0] no-underline text-[0.95rem] font-medium transition-colors duration-200 hover:text-brand-orange"
                  >
                    {{ course.title }}
                  </NuxtLink>
                  <span v-else class="text-[rgba(224,224,224,0.72)] text-[0.95rem] font-medium">
                    {{ course.title }}
                  </span>
                  <span v-if="!isCourseAvailable(course.slug)" class="ml-auto text-[0.72rem] uppercase tracking-wider text-brand-orange/80">Planned</span>
                </div>
              </div>

              <!-- Coming soon -->
              <div v-else class="flex items-center gap-2.5 py-3 px-4 rounded-lg bg-brand-orange/5 border border-dashed border-brand-orange/20">
                <Icon name="mdi:hammer-wrench" class="text-brand-orange text-lg" />
                <span class="text-sm text-gray-400">Courses for this path are being developed. Stay tuned!</span>
              </div>
            </div>
          </div>
        </div>

        <!-- No results -->
        <div v-if="totalResults === 0" class="text-center py-[60px] px-5 max-sm:py-10 max-sm:px-3">
          <Icon name="mdi:magnify-close" class="text-gray-600 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">No results found</h3>
          <p class="text-gray-500 mb-4">Try searching for "JavaScript", "QA", or "DevOps".</p>
          <NuxtLink to="/courses" class="btn btn-outline btn-sm">Browse All Courses</NuxtLink>
        </div>
      </template>

      <template v-else>
        <div class="text-center py-[60px] px-5 max-sm:py-10 max-sm:px-3">
          <Icon name="mdi:magnify" class="text-gray-600 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">What do you want to learn?</h3>
          <p class="text-gray-500">Search for courses and learning paths by name, topic, or skill.</p>
        </div>
      </template>
    </section>
  </div>
</template>


