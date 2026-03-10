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
    <section class="pt-[170px] pb-[60px] px-5 text-center">
      <div class="max-w-[700px] mx-auto">
        <h1 class="gradient-text text-[clamp(2rem,5vw,3.5rem)] font-black mb-3">All Courses</h1>
        <p class="text-[rgba(224,224,224,0.7)] text-[1.1rem] leading-relaxed mb-7">
          Free, open-access courses on web development, programming, cloud, and more.
        </p>

        <!-- Search -->
        <div class="flex justify-center">
          <SearchBar @search="(q: string) => searchQuery = q" />
        </div>
      </div>
    </section>

    <!-- Filters & Grid -->
    <section class="section">
      <!-- Difficulty Filter -->
      <div class="flex gap-2.5 flex-wrap mb-6">
        <button
          v-for="diff in difficulties"
          :key="diff"
          class="py-2 px-5 rounded-full text-sm font-medium border cursor-pointer transition-all duration-300 capitalize"
          :class="selectedDifficulty === diff
            ? 'bg-brand-orange border-brand-orange text-white'
            : 'bg-transparent border-brand-orange/20 text-[#e0e0e0] hover:border-brand-orange hover:text-brand-orange'"
          @click="selectedDifficulty = diff"
        >
          {{ diff === 'all' ? 'All Levels' : diff }}
        </button>
      </div>

      <!-- Results Count -->
      <p class="text-sm text-[rgba(224,224,224,0.5)] mb-6">
        {{ filteredCourses.length }} course{{ filteredCourses.length !== 1 ? 's' : '' }} found
      </p>

      <!-- Course Grid -->
      <div v-if="filteredCourses.length" class="card-grid">
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-[60px] px-5">
        <Icon name="mdi:magnify-close" class="text-gray-600 text-5xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">No courses found</h3>
        <p class="text-gray-500">Try a different search term or filter.</p>
      </div>
    </section>
  </div>
</template>

