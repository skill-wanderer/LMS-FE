<script setup lang="ts">
useSeo({
  title: 'Skill-Wanderer Dojo — Free Open Learning Platform',
  description: 'Skill-Wanderer Dojo is a free, open-access learning management system. Browse courses, track progress, and master new skills — no paywall, no barriers.',
})

const learningPaths = [
  { title: 'Web Developer', icon: 'mdi:web', slug: 'web-developer' },
  { title: 'Mobile Developer', icon: 'mdi:cellphone', slug: 'mobile-developer' },
  { title: 'DevOps', icon: 'mdi:server-network', slug: 'devops' },
  { title: 'QA / Tester', icon: 'mdi:bug-check-outline', slug: 'qa-tester' },
  { title: 'Project Management', icon: 'mdi:clipboard-check-outline', slug: 'project-management' },
  { title: 'Software Architecture', icon: 'mdi:sitemap-outline', slug: 'software-architecture-design-patterns' },
]

const features = [
  {
    icon: 'mdi:lock-open-variant-outline',
    title: 'Free & Open',
    description: 'Every course is free and accessible. No paywalls, no premium gates — just learning.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Structured Paths',
    description: 'Follow curated learning paths from beginner to advanced, step by step.',
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
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Master Skills. No Barriers."
      subtitle="Welcome to Skill-Wanderer Dojo"
      description="A free, open-access learning platform replacing traditional LMS. Browse courses, track your progress, and level up — without paying a cent."
      :cta-primary="{ label: 'Browse Courses', to: '/courses' }"
      :cta-tertiary="{ label: 'Browse Learning Paths', to: '/paths' }"
      :cta-secondary="{ label: 'Why Custom LMS?', href: 'https://wanderings.skill-wanderer.com/blog/wanderers-log-4-goodbye-moodle-hello-custom-lms/' }"
      :stats="[
        { value: '10', label: 'Paths' },
        { value: '100%', label: 'Free' },
        { value: 'Open', label: 'Source' },
      ]"
    />

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

    <!-- Learning Paths -->
    <section class="section">
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 class="text-3xl font-bold gradient-text mb-2">Learning Paths</h2>
          <p class="text-gray-400">Choose a path and start your journey</p>
        </div>
        <NuxtLink to="/paths" class="btn btn-outline btn-sm">
          View All Paths <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

      <div class="card-grid">
        <NuxtLink
          v-for="path in learningPaths"
          :key="path.slug"
          to="/paths"
          class="glass-card p-6 text-center"
          style="text-decoration: none; color: var(--light-text);"
        >
          <Icon :name="path.icon" class="text-brand-orange text-3xl mb-4" />
          <h3 class="text-lg font-bold">{{ path.title }}</h3>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10 md:p-14">
        <Icon name="mdi:rocket-launch-outline" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl md:text-3xl font-bold gradient-text mb-4">Ready to Start Learning?</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Jump into any course — no sign-up required for browsing. Create a free account to track your progress.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/courses" class="btn btn-primary">
            Explore Courses <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
