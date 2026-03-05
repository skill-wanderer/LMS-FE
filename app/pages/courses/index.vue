<script setup lang="ts">
const { courses, searchCourses, getCoursesByDifficulty } = useCourses()

useSeo({
  title: 'All Courses — Skill-Wanderer Dojo',
  description: 'Browse all free courses on Skill-Wanderer Dojo. Learn web development, programming, DevOps, and more — completely free and open.',
})

const searchQuery = ref('')
const selectedDifficulty = ref<string>('all')

const filteredCourses = computed(() => {
  let result = courses.value

  if (searchQuery.value.trim()) {
    result = searchCourses(searchQuery.value)
  }

  if (selectedDifficulty.value !== 'all') {
    result = result.filter(c => c.difficulty === selectedDifficulty.value)
  }

  return result
})

const difficulties = ['all', 'beginner', 'intermediate', 'advanced']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="courses-hero">
      <div class="courses-hero-inner">
        <h1 class="gradient-text courses-hero-title">All Courses</h1>
        <p class="courses-hero-desc">
          Free, open-access courses on web development, programming, cloud, and more.
        </p>

        <!-- Search -->
        <div class="courses-search-wrap">
          <SearchBar @search="(q: string) => searchQuery = q" />
        </div>
      </div>
    </section>

    <!-- Filters & Grid -->
    <section class="section">
      <!-- Difficulty Filter -->
      <div class="filter-bar">
        <button
          v-for="diff in difficulties"
          :key="diff"
          :class="['filter-pill', { active: selectedDifficulty === diff }]"
          @click="selectedDifficulty = diff"
        >
          {{ diff === 'all' ? 'All Levels' : diff }}
        </button>
      </div>

      <!-- Results Count -->
      <p class="results-count">
        {{ filteredCourses.length }} course{{ filteredCourses.length !== 1 ? 's' : '' }} found
      </p>

      <!-- Course Grid -->
      <div v-if="filteredCourses.length" class="card-grid">
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <Icon name="mdi:magnify-close" class="text-gray-600 text-5xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">No courses found</h3>
        <p class="text-gray-500">Try a different search term or filter.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.courses-hero {
  padding: 120px 20px 60px;
  text-align: center;
}

.courses-hero-inner {
  max-width: 700px;
  margin: 0 auto;
}

.courses-hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 12px;
}

.courses-hero-desc {
  color: rgba(224, 224, 224, 0.7);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 28px;
}

.courses-search-wrap {
  display: flex;
  justify-content: center;
}

.filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.filter-pill {
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 107, 53, 0.2);
  background: transparent;
  color: var(--light-text);
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
}

.filter-pill:hover {
  border-color: var(--primary-orange);
  color: var(--primary-orange);
}

.filter-pill.active {
  background: var(--primary-orange);
  border-color: var(--primary-orange);
  color: #fff;
}

.results-count {
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.5);
  margin-bottom: 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

@media (max-width: 768px) {
  .courses-hero {
    padding: 100px 16px 40px;
  }

  .courses-hero-desc {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .courses-hero {
    padding: 90px 12px 32px;
  }

  .filter-pill {
    padding: 6px 14px;
    font-size: 0.82rem;
  }
}
</style>
