<script setup lang="ts">
import { featuredPath, plannedPathGroups } from '~/data/paths'
import allCourses from '~/data/courses'
import { isPublishedCourse } from '~/types/course'

useSeo({
  title: 'Skill-Wanderer Dojo — Free Open Learning Platform',
  description: 'Free, open learning on Skill-Wanderer Dojo. Start with Learning in the AI Era: the mindset, direction and ways of learning you need while AI changes everything.',
})

const { getCourseBySlug } = useCourses()
const firstCourse = featuredPath.courses.find(course => course.slug && getCourseBySlug(course.slug))

const features = [
  {
    icon: 'mdi:lock-open-variant-outline',
    title: 'Free & Open',
    description: 'Every course is free and accessible. No paywalls, no premium gates — just learning.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Structured Paths',
    description: 'Start with Learning in the AI Era. More paths open once we\'ve revised their content.',
  },
  {
    icon: 'mdi:chart-timeline-variant-shimmer',
    title: 'Track Progress',
    description: 'Mark lessons complete and see your progress across all enrolled courses.',
  },
  {
    icon: 'mdi:code-tags',
    title: 'Hands-On Projects',
    description: 'Learn by doing. Every course includes practical exercises and real projects.',
  },
  {
    icon: 'mdi:earth',
    title: 'Open Source',
    description: 'This platform is open source. Contribute, suggest, or fork — it belongs to everyone.',
  },
  {
    icon: 'mdi:devices',
    title: 'Learn Anywhere',
    description: 'Responsive design works on desktop, tablet, and mobile. Learn on your terms.',
  },
  {
    icon: 'mdi:robot-outline',
    title: 'AI-Powered Development',
    description: 'With AI, building courses as code is faster than any drag-and-drop LMS. We\'re developers — we play to our strengths.',
  },
]

const publishedCourseCount = allCourses.filter(isPublishedCourse).length
</script>

<template>
  <div>
    <!-- Hero: the one path open now -->
    <TheHero
      eyebrow="Welcome to Skill-Wanderer Dojo"
      title="Start With Learning in the AI Era"
      description="Before any single skill, you need the mindset, the sense of direction and the ways of learning that keep you growing while AI changes everything. That's the path we're building now, free for learners in any field. Our other paths are planned for later, once we've revised their content."
      :cta-primary="{ label: 'Open the Path', to: `/paths/${featuredPath.slug}` }"
      :cta-secondary="firstCourse ? { label: 'Take the First Lesson', to: `/courses/${firstCourse.slug}` } : undefined"
      :stats="[
        { value: String(publishedCourseCount), label: 'Courses' },
        { value: '100%', label: 'Free' },
        { value: 'Open', label: 'Source' },
      ]"
    >
      <ImageSlot name="home/welcome" class="mt-12 rounded-card ring-1 ring-brand-orange/20" priority />
    </TheHero>

    <!-- Featured path -->
    <section class="section section-glow">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Path</h2>
        <p class="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Open now and in development. We add lessons as we finish them.
        </p>
      </div>

      <FeaturedPathCard :path="featuredPath" />
    </section>

    <!-- Planned paths: offered later, once their old content is revised -->
    <section class="section">
      <div class="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 class="text-3xl font-bold gradient-text mb-2">Planned Paths</h2>
          <p class="text-gray-400 max-w-2xl">
            These open later. We're revising their old content first, so each outline will change before it opens.
          </p>
        </div>
        <NuxtLink to="/paths" class="btn btn-outline btn-sm max-sm:w-full max-sm:justify-center">
          View All Paths <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

      <div v-for="group in plannedPathGroups" :key="group.title" class="mb-8 last:mb-0">
        <h3 class="text-sm font-bold uppercase tracking-[0.1em] text-brand-yellow mb-4">{{ group.title }}</h3>
        <ul class="flex flex-wrap gap-3 list-none">
          <li v-for="path in group.paths" :key="path.slug" class="max-w-full">
            <NuxtLink
              :to="`/paths/${path.slug}`"
              class="inline-flex max-w-full items-center gap-2 rounded-pill border border-dashed border-brand-orange/30 bg-surface-card py-2 px-4 text-[0.95rem] font-medium text-[#e0e0e0] no-underline transition-all duration-200 hover:border-brand-orange hover:text-brand-orange"
            >
              <Icon :name="path.icon" class="text-brand-orange" />
              {{ path.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section section-glow">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-4">Why the Dojo?</h2>
        <p class="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Built to replace traditional LMS with a modern, fast, open learning experience.
        </p>
      </div>

      <div class="card-grid">
        <div v-for="feature in features" :key="feature.title" class="glass-card p-6 text-center">
          <Icon :name="feature.icon" class="text-brand-orange text-3xl mb-4" />
          <h3 class="text-lg font-bold mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10 md:p-14">
        <Icon name="mdi:rocket-launch-outline" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl md:text-3xl font-bold gradient-text mb-4">Ready to Start Learning?</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Begin with Learning in the AI Era, or jump into any course. No sign-up is required for browsing. Create a free account to track your progress.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink v-if="firstCourse" :to="`/courses/${firstCourse.slug}`" class="btn btn-primary">
            Take the First Lesson <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <NuxtLink to="/courses" class="btn btn-outline">
            Explore Courses
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
