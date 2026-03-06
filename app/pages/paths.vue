<script setup lang="ts">
const { formatDuration, getCourseDuration, getCourseBySlug } = useCourses()

useSeo({
  title: 'Learning Paths — Skill-Wanderer Dojo',
  description: 'Follow curated learning paths to go from beginner to advanced. Structured sequences for web development, mobile, DevOps, QA, and more.',
})

const paths = [
  {
    title: 'Web Developer',
    slug: 'web-developer',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks to build responsive, accessible web applications from scratch.',
    difficulty: 'beginner',
    icon: 'mdi:web',
    courseCount: 0,
  },
  {
    title: 'Mobile Developer',
    slug: 'mobile-developer',
    description: 'Learn to build native and cross-platform mobile apps for iOS and Android using modern tools and frameworks.',
    difficulty: 'beginner',
    icon: 'mdi:cellphone',
    courseCount: 0,
  },
  {
    title: 'DevOps',
    slug: 'devops',
    description: 'Master CI/CD pipelines, containerization, cloud infrastructure, and automation to streamline software delivery.',
    difficulty: 'intermediate',
    icon: 'mdi:server-network',
    courseCount: 0,
  },
  {
    title: 'MLOps',
    slug: 'mlops',
    description: 'Learn to deploy, monitor, and maintain machine learning models in production using CI/CD, containerization, and orchestration tools.',
    difficulty: 'intermediate',
    icon: 'mdi:robot-outline',
    courseCount: 0,
  },
  {
    title: 'QA / Tester',
    slug: 'qa-tester',
    description: 'Learn manual and automated testing strategies, test frameworks, and quality assurance best practices.',
    difficulty: 'beginner',
    icon: 'mdi:bug-check-outline',
    courseCount: 1,
    courses: [
      { title: 'Manual Software Testing with Black Box Techniques', slug: 'manual-software-testing-black-box-techniques' },
    ],
  },
  {
    title: 'Software Development Roles & Career Path',
    slug: 'software-development-roles-career',
    description: 'Understand the different roles in software development teams and map your career growth from junior to senior and beyond.',
    difficulty: 'beginner',
    icon: 'mdi:account-group-outline',
    courseCount: 0,
  },
  {
    title: 'Project Management Path',
    slug: 'project-management',
    description: 'Learn Agile, Scrum, Kanban, and modern project management methodologies to lead software projects effectively.',
    difficulty: 'intermediate',
    icon: 'mdi:clipboard-check-outline',
    courseCount: 0,
  },
  {
    title: 'Business Analyst Path',
    slug: 'business-analyst',
    description: 'Bridge the gap between business needs and technical solutions. Master requirements gathering, process modeling, and stakeholder communication.',
    difficulty: 'intermediate',
    icon: 'mdi:chart-bar',
    courseCount: 0,
  },
  {
    title: 'Start-Up Foundation Path',
    slug: 'startup-foundation',
    description: 'From idea validation to MVP launch — learn the essential skills to build and scale a technology start-up.',
    difficulty: 'beginner',
    icon: 'mdi:rocket-launch-outline',
    courseCount: 0,
  },
  {
    title: 'Advanced Software Development Skills Path',
    slug: 'advanced-software-development-skills',
    description: 'Deepen your expertise with advanced algorithms, data structures, system design, and performance optimization techniques.',
    difficulty: 'advanced',
    icon: 'mdi:code-braces-box',
    courseCount: 0,
  },
  {
    title: 'Software Architecture & Design Patterns Path',
    slug: 'software-architecture-design-patterns',
    description: 'Learn architectural styles, design patterns, and principles for building scalable, maintainable software systems.',
    difficulty: 'advanced',
    icon: 'mdi:sitemap-outline',
    courseCount: 0,
  },
]

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
      <div class="paths-search-bar">
        <div class="paths-search-input-wrapper">
          <Icon name="mdi:magnify" class="paths-search-icon" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search learning paths…"
            class="paths-search-input"
            aria-label="Search learning paths"
          />
        </div>
        <div class="paths-filter-group">
          <button
            :class="['filter-btn', { active: selectedDifficulty === '' }]"
            @click="selectedDifficulty = ''"
          >
            All
          </button>
          <button
            :class="['filter-btn filter-beginner', { active: selectedDifficulty === 'beginner' }]"
            @click="selectedDifficulty = 'beginner'"
          >
            Beginner
          </button>
          <button
            :class="['filter-btn filter-intermediate', { active: selectedDifficulty === 'intermediate' }]"
            @click="selectedDifficulty = 'intermediate'"
          >
            Intermediate
          </button>
          <button
            :class="['filter-btn filter-advanced', { active: selectedDifficulty === 'advanced' }]"
            @click="selectedDifficulty = 'advanced'"
          >
            Advanced
          </button>
        </div>
      </div>

      <!-- Results count -->
      <p v-if="searchQuery.trim() || selectedDifficulty" class="paths-results-label">
        {{ filteredPaths.length }} path{{ filteredPaths.length !== 1 ? 's' : '' }} found
        <template v-if="searchQuery.trim()">
          for <strong class="text-brand-orange">"{{ searchQuery }}"</strong>
        </template>
        <template v-if="selectedDifficulty">
          in <strong class="text-brand-orange">{{ selectedDifficulty }}</strong>
        </template>
      </p>

      <div v-if="filteredPaths.length" class="paths-list">
        <div v-for="path in filteredPaths" :key="path.slug" class="glass-card path-card">
          <div class="path-header">
            <Icon :name="path.icon" class="path-icon" />
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

          <!-- Coming soon when no courses yet -->
          <div v-else class="path-coming-soon">
            <Icon name="mdi:hammer-wrench" class="text-brand-orange text-lg" />
            <span class="text-sm text-gray-400">Courses for this path are being developed. Stay tuned!</span>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="empty-state">
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

<style scoped>
.paths-search-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;
}

.paths-search-input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 220px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 50px;
  padding: 10px 20px;
  transition: border-color 0.3s ease;
}

.paths-search-input-wrapper:focus-within {
  border-color: var(--primary-orange);
}

.paths-search-icon {
  color: rgba(224, 224, 224, 0.4);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.paths-search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--light-text);
  font-size: 1rem;
  outline: none;
}

.paths-search-input::placeholder {
  color: rgba(224, 224, 224, 0.35);
}

.paths-filter-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: rgba(224, 224, 224, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: rgba(255, 107, 53, 0.4);
  color: var(--light-text);
}

.filter-btn.active {
  background: rgba(255, 107, 53, 0.15);
  border-color: var(--primary-orange);
  color: var(--primary-orange);
}

.filter-beginner.active {
  background: rgba(76, 175, 80, 0.15);
  border-color: #4caf50;
  color: #4caf50;
}

.filter-intermediate.active {
  background: rgba(255, 152, 0, 0.15);
  border-color: #ff9800;
  color: #ff9800;
}

.filter-advanced.active {
  background: rgba(244, 67, 54, 0.15);
  border-color: #f44336;
  color: #f44336;
}

.paths-results-label {
  font-size: 0.95rem;
  color: rgba(224, 224, 224, 0.6);
  margin-bottom: 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.paths-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.path-card {
  padding: 32px;
}

.path-header {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 24px;
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
  .path-card {
    padding: 20px;
  }

  .path-header {
    flex-direction: column;
  }

  .path-icon {
    font-size: 1.6rem;
  }

  .paths-search-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .paths-filter-group {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .path-card {
    padding: 16px;
  }

  .filter-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .empty-state {
    padding: 40px 12px;
  }
}
</style>
