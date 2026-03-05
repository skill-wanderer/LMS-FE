<script setup lang="ts">
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
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Mobile Developer',
    slug: 'mobile-developer',
    description: 'Learn to build native and cross-platform mobile apps for iOS and Android using modern tools and frameworks.',
    difficulty: 'beginner',
    icon: 'mdi:cellphone',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'DevOps',
    slug: 'devops',
    description: 'Master CI/CD pipelines, containerization, cloud infrastructure, and automation to streamline software delivery.',
    difficulty: 'intermediate',
    icon: 'mdi:server-network',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'QA / Tester',
    slug: 'qa-tester',
    description: 'Learn manual and automated testing strategies, test frameworks, and quality assurance best practices.',
    difficulty: 'beginner',
    icon: 'mdi:bug-check-outline',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Software Development Roles & Career Path',
    slug: 'software-development-roles-career',
    description: 'Understand the different roles in software development teams and map your career growth from junior to senior and beyond.',
    difficulty: 'beginner',
    icon: 'mdi:account-group-outline',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Project Management Path',
    slug: 'project-management',
    description: 'Learn Agile, Scrum, Kanban, and modern project management methodologies to lead software projects effectively.',
    difficulty: 'intermediate',
    icon: 'mdi:clipboard-check-outline',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Business Analyst Path',
    slug: 'business-analyst',
    description: 'Bridge the gap between business needs and technical solutions. Master requirements gathering, process modeling, and stakeholder communication.',
    difficulty: 'intermediate',
    icon: 'mdi:chart-bar',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Start-Up Foundation Path',
    slug: 'startup-foundation',
    description: 'From idea validation to MVP launch — learn the essential skills to build and scale a technology start-up.',
    difficulty: 'beginner',
    icon: 'mdi:rocket-launch-outline',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Advanced Software Development Skills Path',
    slug: 'advanced-software-development-skills',
    description: 'Deepen your expertise with advanced algorithms, data structures, system design, and performance optimization techniques.',
    difficulty: 'advanced',
    icon: 'mdi:code-braces-box',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
  {
    title: 'Software Architecture & Design Patterns Path',
    slug: 'software-architecture-design-patterns',
    description: 'Learn architectural styles, design patterns, and principles for building scalable, maintainable software systems.',
    difficulty: 'advanced',
    icon: 'mdi:sitemap-outline',
    estimatedDuration: 'Coming Soon',
    courseCount: 0,
  },
]

const difficultyClass = (d: string) => {
  switch (d) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
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
      <div class="paths-list">
        <div v-for="path in paths" :key="path.slug" class="glass-card path-card">
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
                  <Icon name="mdi:clock-outline" class="inline" /> {{ path.estimatedDuration }}
                </span>
                <span class="text-xs text-gray-500">
                  <Icon name="mdi:book-open-outline" class="inline" /> {{ path.courseCount }} courses
                </span>
              </div>
            </div>
          </div>

          <div class="path-coming-soon">
            <Icon name="mdi:hammer-wrench" class="text-brand-orange text-lg" />
            <span class="text-sm text-gray-400">Courses for this path are being developed. Stay tuned!</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
}

@media (max-width: 480px) {
  .path-card {
    padding: 16px;
  }
}
</style>
