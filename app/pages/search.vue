<script setup lang="ts">
const router = useRouter()
const route = useRoute()

useSeo({
  title: 'Search Courses — Skill-Wanderer Dojo',
  description: 'Search free courses on Skill-Wanderer Dojo. Find courses on web development, programming, DevOps, and more.',
})

const { searchCourses } = useCourses()

const query = ref((route.query.q as string) || '')
const results = computed(() => {
  if (!query.value.trim()) return []
  return searchCourses(query.value)
})

function handleSearch(q: string) {
  query.value = q
  router.replace({ query: { q } })
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
        <h1 class="gradient-text text-3xl md:text-4xl font-bold mb-6">Search Courses</h1>
        <SearchBar @search="handleSearch" />
      </div>
    </section>

    <section class="section">
      <template v-if="query.trim()">
        <p class="results-label">
          {{ results.length }} result{{ results.length !== 1 ? 's' : '' }} for
          <strong class="text-brand-orange">"{{ query }}"</strong>
        </p>

        <div v-if="results.length" class="card-grid">
          <CourseCard v-for="course in results" :key="course.id" :course="course" />
        </div>

        <div v-else class="empty-state">
          <Icon name="mdi:magnify-close" class="text-gray-600 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">No results found</h3>
          <p class="text-gray-500 mb-4">Try searching for "JavaScript", "Python", or "Vue".</p>
          <NuxtLink to="/courses" class="btn btn-outline btn-sm">Browse All Courses</NuxtLink>
        </div>
      </template>

      <template v-else>
        <div class="empty-state">
          <Icon name="mdi:magnify" class="text-gray-600 text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">What do you want to learn?</h3>
          <p class="text-gray-500">Search for courses by name, topic, or skill.</p>
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
  margin-bottom: 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

@media (max-width: 768px) {
  .search-hero {
    padding: 100px 16px 32px;
  }
}

@media (max-width: 480px) {
  .search-hero {
    padding: 90px 12px 24px;
  }

  .empty-state {
    padding: 40px 12px;
  }
}
</style>
