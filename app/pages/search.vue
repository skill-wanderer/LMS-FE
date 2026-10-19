<script setup lang="ts">
import allPaths, { featuredPath } from '~/data/paths'

const router = useRouter()
const route = useRoute()

useSeo({
  title: 'Search — Skill-Wanderer Dojo',
  description: 'Search free courses and learning paths on Skill-Wanderer Dojo. Find courses on web development, programming, DevOps, and more.',
})

const { courses, searchCourses } = useCourses()

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

const popularCourses = computed(() => courses.value.slice(0, 3))

const exploreTopics = [
  { label: 'JavaScript', icon: 'mdi:language-javascript', query: 'javascript' },
  { label: 'React', icon: 'mdi:react', query: 'react' },
  { label: 'HTML', icon: 'mdi:language-html5', query: 'html' },
  { label: 'Git', icon: 'mdi:source-branch', query: 'git' },
  { label: 'QA', icon: 'mdi:bug-check-outline', query: 'qa' },
  { label: 'DevOps', icon: 'mdi:server-network', query: 'devops' },
]

function handleSearch(q: string) {
  query.value = q
  activeTab.value = 'all'
  router.replace({ query: q ? { q } : {} })
}

// Sync with URL on mount
watch(() => route.query.q, (newQ) => {
  if (typeof newQ === 'string') {
    query.value = newQ
  }
  else {
    query.value = ''
  }
})
</script>

<template>
  <div>
    <section class="pt-[170px] px-5 pb-6 text-center max-md:pt-[150px] max-md:px-4 max-md:pb-5 max-sm:pt-[140px] max-sm:px-3 max-sm:pb-4">
      <div class="max-w-[600px] mx-auto">
        <h1 class="gradient-text text-3xl md:text-4xl font-bold mb-6">Search</h1>
        <SearchBar v-model="query" @search="handleSearch" />
        <div class="mt-5 rounded-2xl border border-brand-orange/20 bg-brand-orange/[0.06] px-4 py-4 shadow-[0_20px_60px_rgba(255,122,0,0.08)]">
          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <span class="text-sm font-medium text-brand-orange">Popular topics:</span>
            <button
              v-for="topic in exploreTopics.slice(0, 4)"
              :key="`hero-${topic.query}`"
              class="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-black/20 px-3.5 py-1.5 text-sm font-medium text-[#f3ede7] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:bg-brand-orange/10 hover:text-brand-orange"
              @click="handleSearch(topic.query)"
            >
              <Icon :name="topic.icon" />
              {{ topic.label }}
            </button>
          </div>
          <p class="mt-3 text-sm text-[rgba(224,224,224,0.68)]">
            Jump into a topic instantly, or scroll a little further for featured courses and learning paths.
          </p>
        </div>
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
          <div class="card-grid">
            <PathCard v-for="path in pathResults" :key="path.slug" :path="path" />
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
        <div class="space-y-12">
          <div class="text-center pt-2 pb-6 px-5 max-sm:px-3">
            <Icon name="mdi:compass-outline" class="text-brand-orange/70 text-5xl mb-4" />
            <h3 class="text-2xl font-semibold mb-2">What do you want to learn?</h3>
            <p class="text-gray-400 max-w-2xl mx-auto">
              Start with a popular course, explore a featured learning path, or jump into a topic below.
            </p>
          </div>

          <div>
            <div class="flex items-center justify-between gap-3 mb-5 flex-wrap">
              <h2 class="flex items-center gap-2 text-xl font-bold text-[#e0e0e0]">
                <Icon name="mdi:fire" class="text-brand-orange" /> Popular Courses
              </h2>
              <NuxtLink to="/courses" class="btn btn-outline btn-sm">
                Browse All Courses
              </NuxtLink>
            </div>
            <div class="card-grid">
              <CourseCard v-for="course in popularCourses" :key="course.id" :course="course" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between gap-3 mb-5 flex-wrap">
              <h2 class="flex items-center gap-2 text-xl font-bold text-[#e0e0e0]">
                <Icon name="mdi:map-marker-path" class="text-brand-orange" /> Featured Learning Path
              </h2>
              <NuxtLink to="/paths" class="btn btn-outline btn-sm">
                View Learning Paths
              </NuxtLink>
            </div>
            <FeaturedPathCard :path="featuredPath" />
          </div>

        </div>
      </template>
    </section>
  </div>
</template>


