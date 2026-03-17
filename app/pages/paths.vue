<script setup lang="ts">
import allPaths from '~/data/paths'

const { formatDuration, getCourseDuration, getCourseBySlug } = useCourses()

useSeo({
  title: 'Learning Paths — Skill-Wanderer Dojo',
  description: 'Follow curated learning paths to go from beginner to advanced. Structured sequences for web development, mobile, DevOps, QA, and more.',
})

const paths = allPaths

const searchQuery = ref('')
const selectedDifficulty = ref('')

const filteredPaths = computed(() => {
  return paths.filter((path) => {
    const matchesSearch = !searchQuery.value.trim()
      || path.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      || path.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesDifficulty = !selectedDifficulty.value
      || path.difficulty === selectedDifficulty.value
    return matchesSearch && matchesDifficulty
  })
})

const difficultyClass = (d: string) => {
  switch (d) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
}

/**
 * Compute total estimated duration for a learning path
 * by summing durations of its linked courses.
 */
function getPathDuration(path: { courses?: { slug: string }[] }): number {
  if (!path.courses?.length) return 0
  return path.courses.reduce((total, c) => {
    const course = getCourseBySlug(c.slug)
    return total + (course ? getCourseDuration(course) : 0)
  }, 0)
}

function isCourseAvailable(slug: string): boolean {
  return !!getCourseBySlug(slug)
}
</script>

<template>
  <div>
    <TheHero
      title="Learning Paths"
      subtitle="Structured Learning"
      description="Follow curated paths designed to take you from beginner to confident. Each path sequences courses in the right order."
      :cta-primary="{ label: 'Browse Courses', to: '/courses' }"
    />

    <section class="section">
      <!-- Search & Filter Bar -->
      <div class="flex flex-wrap gap-4 items-center mb-8 max-md:flex-col max-md:items-stretch">
        <div class="flex items-center gap-2.5 flex-1 min-w-[220px] bg-surface-card border border-brand-orange/20 rounded-full py-2.5 px-5 transition-colors duration-300 focus-within:border-brand-orange">
          <Icon name="mdi:magnify" class="text-[rgba(224,224,224,0.4)] text-xl shrink-0" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search learning paths…"
            class="flex-1 bg-transparent border-none text-[#e0e0e0] text-base outline-none placeholder:text-[rgba(224,224,224,0.35)]"
            aria-label="Search learning paths"
          />
        </div>
        <div class="flex gap-2 flex-wrap max-md:justify-center">
          <button
            v-for="filter in [
              { key: '', label: 'All', activeClasses: 'bg-brand-orange/15 border-brand-orange text-brand-orange' },
              { key: 'beginner', label: 'Beginner', activeClasses: 'bg-[rgba(76,175,80,0.15)] border-[#4caf50] text-[#4caf50]' },
              { key: 'intermediate', label: 'Intermediate', activeClasses: 'bg-[rgba(255,152,0,0.15)] border-[#ff9800] text-[#ff9800]' },
              { key: 'advanced', label: 'Advanced', activeClasses: 'bg-[rgba(244,67,54,0.15)] border-[#f44336] text-[#f44336]' },
            ]"
            :key="filter.key"
            :class="[
              'py-2 px-4 rounded-full text-[0.85rem] font-semibold border cursor-pointer transition-all duration-200 max-sm:py-1.5 max-sm:px-3 max-sm:text-[0.8rem]',
              selectedDifficulty === filter.key
                ? filter.activeClasses
                : 'border-white/10 bg-transparent text-[rgba(224,224,224,0.6)] hover:border-brand-orange/40 hover:text-[#e0e0e0]'
            ]"
            @click="selectedDifficulty = filter.key"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Results count -->
      <p v-if="searchQuery.trim() || selectedDifficulty" class="text-[0.95rem] text-[rgba(224,224,224,0.6)] mb-6">
        {{ filteredPaths.length }} path{{ filteredPaths.length !== 1 ? 's' : '' }} found
        <template v-if="searchQuery.trim()">
          for <strong class="text-brand-orange">"{{ searchQuery }}"</strong>
        </template>
        <template v-if="selectedDifficulty">
          in <strong class="text-brand-orange">{{ selectedDifficulty }}</strong>
        </template>
      </p>

      <div v-if="filteredPaths.length" class="flex flex-col gap-8">
        <div v-for="path in filteredPaths" :key="path.slug" class="glass-card p-8 max-md:p-5 max-sm:p-4">
          <div class="flex gap-4 items-start mb-6 max-md:flex-col">
            <Icon :name="path.icon" class="text-[2rem] text-brand-orange shrink-0 mt-1 max-md:text-[1.6rem]" />
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h2 class="text-xl font-bold">{{ path.title }}</h2>
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

          <!-- Coming soon when no courses yet -->
          <div v-else class="flex items-center gap-2.5 py-3 px-4 rounded-lg bg-brand-orange/5 border border-dashed border-brand-orange/20">
            <Icon name="mdi:hammer-wrench" class="text-brand-orange text-lg" />
            <span class="text-sm text-gray-400">Courses for this path are being developed. Stay tuned!</span>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-[60px] px-5 max-sm:py-10 max-sm:px-3">
        <Icon name="mdi:magnify-close" class="text-gray-600 text-5xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">No paths found</h3>
        <p class="text-gray-500 mb-4">Try a different search term or clear your filters.</p>
        <button class="btn btn-outline btn-sm" @click="searchQuery = ''; selectedDifficulty = ''">
          Clear Filters
        </button>
      </div>
    </section>
  </div>
</template>


