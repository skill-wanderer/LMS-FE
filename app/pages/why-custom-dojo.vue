<script setup lang="ts">
useSeo({
  title: 'Why Custom Dojo — Skill-Wanderer',
  description: 'Why Skill-Wanderer replaced Moodle with a custom Dojo built for open learning, speed, SEO, and AI-accelerated development.',
})

const blogPostUrl = 'https://wanderings.skill-wanderer.com/blog/wanderers-log-4-goodbye-moodle-hello-custom-lms/'

const painPoints = [
  {
    icon: 'mdi:package-variant-closed-remove',
    title: 'Third-Party Deployment Risk',
    description: 'Running Moodle through convenience packaging created hidden risk. Once that support changed, migration overhead became a project of its own.',
  },
  {
    icon: 'mdi:view-dashboard-edit-outline',
    title: 'Clunky Course Configuration',
    description: 'Creating and organizing learning content inside admin-heavy interfaces slowed content work down instead of speeding it up.',
  },
  {
    icon: 'mdi:door-closed-lock',
    title: 'Login-First Experience',
    description: 'Traditional LMS defaults are built around gated access, while the Dojo needs discovery-first learning where people can browse before signing in.',
  },
  {
    icon: 'mdi:speedometer-slow',
    title: 'Bloat, Performance, and SEO Limits',
    description: 'Heavy rendering, plugin sprawl, and rigid URL structures made it harder to stay fast, lightweight, and search-friendly.',
  },
]

const advantages = [
  'Open by design, so learners can discover and browse content without unnecessary barriers.',
  'Purpose-built UX for Skill-Wanderer instead of adapting to generic university-style workflows.',
  'Faster iteration with AI-assisted development, especially for scaffolding, content structures, and UI work.',
  'Cleaner URLs, better metadata control, and a stronger SEO foundation for open learning content.',
  'Only the features we actually need, without plugin bloat or platform drag.',
  'A real production codebase that learners and contributors can study and improve.',
]

const comparisonRows = [
  {
    area: 'Ownership',
    oldWay: 'Dependent on third-party packaging and plugin ecosystems',
    newWay: 'Fully controlled stack and roadmap',
  },
  {
    area: 'Content workflow',
    oldWay: 'Admin panels, buried settings, drag-and-drop friction',
    newWay: 'Course content managed as code with direct iteration',
  },
  {
    area: 'Access model',
    oldWay: 'Login wall is the default behavior',
    newWay: 'Open browsing first, account features when needed',
  },
  {
    area: 'Performance',
    oldWay: 'Heavier server-side overhead and slower pages',
    newWay: 'Lean modern frontend with a faster learner experience',
  },
  {
    area: 'SEO',
    oldWay: 'Weak URL and metadata flexibility',
    newWay: 'Clean routes and better search discoverability',
  },
  {
    area: 'Maintenance',
    oldWay: 'Ongoing plugin, database, and platform overhead',
    newWay: 'Smaller surface area and more intentional complexity',
  },
]

const roadmap = [
  'Progress tracking that feels native to the Dojo instead of bolted on.',
  'Interactive exercises and richer learning flows built around real learner needs.',
  'Community-facing features that fit the Skill-Wanderer ecosystem.',
  'Incremental migration from the legacy Dojo without breaking access to older material.',
]
</script>

<template>
  <div>
    <TheHero
      title="Why We Built a Custom Dojo"
      subtitle="From Moodle to a purpose-built LMS"
      description="We moved away from a traditional LMS so the Dojo could be faster, more open, easier to evolve, and better aligned with how Skill-Wanderer actually teaches and builds."
      :cta-primary="{ label: 'Browse Courses', to: '/courses' }"
      :cta-secondary="{ label: 'Explore Learning Paths', to: '/paths' }"
    />

    <section class="section section-narrow">
      <div class="glass-card p-8 md:p-12 space-y-6">
        <div class="flex items-center gap-3 text-brand-orange">
          <Icon name="mdi:compass-outline" class="text-3xl shrink-0" />
          <p class="text-sm font-semibold uppercase tracking-[0.24em]">
            The Short Version
          </p>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold gradient-text">
          The Dojo needed to fit an open-learning mission, not a legacy LMS mold.
        </h2>

        <p class="text-gray-300 leading-relaxed">
          Moodle was a reasonable starting point, but over time it created friction in the exact places that matter most to Skill-Wanderer: content creation, learner discovery, performance, and long-term ownership. Once AI-accelerated development shifted the cost of building custom software, it made more sense to invest that energy into our own platform than to keep working around someone else&apos;s architecture.
        </p>

        <p class="text-gray-400 leading-relaxed">
          This page brings the core ideas from the original article into the Dojo so visitors can stay in the platform while learning why it was built this way.
        </p>
      </div>
    </section>

    <section class="section section-narrow">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-4">What Pushed Us Away From Moodle</h2>
        <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The decision was not about novelty. It came from repeated operational pain that kept slowing down both builders and learners.
        </p>
      </div>

      <div class="card-grid">
        <div v-for="item in painPoints" :key="item.title" class="glass-card p-6">
          <Icon :name="item.icon" class="text-brand-orange text-3xl mb-4" />
          <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <section class="section section-narrow">
      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div class="glass-card p-8 md:p-10">
          <h2 class="text-3xl font-bold gradient-text mb-5">Why Custom Became the Better Trade-Off</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            The hidden cost was not just initial setup. It was the constant drain of configuration work, plugin maintenance, deployment risk, and awkward UX compromises. Building custom meant redirecting that same effort into something we fully own.
          </p>

          <div class="space-y-4">
            <div v-for="point in advantages" :key="point" class="flex items-start gap-3">
              <Icon name="mdi:check-circle-outline" class="text-brand-orange text-xl mt-0.5 shrink-0" />
              <p class="text-gray-400 leading-relaxed">{{ point }}</p>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 md:p-10">
          <h2 class="text-2xl font-bold gradient-text mb-5">Built Sprint by Sprint</h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            The goal was never to clone every LMS feature at once. The first step was to stand up a solid foundation: routes, content rendering, deployment, and a cleaner learner experience.
          </p>
          <p class="text-gray-400 leading-relaxed mb-4">
            AI helps most during the early scaffolding and repetitive engineering work, which makes the initial foundation much faster to establish.
          </p>
          <p class="text-gray-400 leading-relaxed">
            From there, the platform can grow intentionally, adding only the features that genuinely improve learning.
          </p>
        </div>
      </div>
    </section>

    <section class="section section-narrow">
      <div class="glass-card overflow-hidden">
        <div class="px-6 py-6 md:px-8 border-b border-white/10">
          <h2 class="text-3xl font-bold gradient-text mb-2">Old LMS vs Custom Dojo</h2>
          <p class="text-gray-400 leading-relaxed">
            A simple comparison of the trade-offs that shaped the move.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[720px] border-collapse">
            <thead>
              <tr class="bg-white/[0.03]">
                <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">Area</th>
                <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">Before</th>
                <th class="px-6 py-4 text-left text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">Now</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparisonRows" :key="row.area" class="border-t border-white/8">
                <td class="px-6 py-4 font-semibold text-white">{{ row.area }}</td>
                <td class="px-6 py-4 text-gray-400 leading-relaxed">{{ row.oldWay }}</td>
                <td class="px-6 py-4 text-gray-300 leading-relaxed">{{ row.newWay }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section section-narrow">
      <div class="glass-card p-8 md:p-12">
        <h2 class="text-3xl font-bold gradient-text mb-5">What This Means for Skill-Wanderer</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          The custom Dojo is not just a technical rebuild. It reflects a bigger direction for the organization: own the stack, stay open, build in public, and turn production software into a learning opportunity for the community.
        </p>

        <div class="space-y-4">
          <div v-for="item in roadmap" :key="item" class="flex items-start gap-3">
            <Icon name="mdi:arrow-right-circle-outline" class="text-brand-orange text-xl mt-0.5 shrink-0" />
            <p class="text-gray-400 leading-relaxed">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-narrow text-center">
      <div class="glass-card p-8 md:p-12">
        <Icon name="mdi:post-outline" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-3xl font-bold gradient-text mb-4">Want the Full Story?</h2>
        <p class="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
          This page is the in-Dojo version of the story. If you want the complete original article with full detail, you can read the blog post here.
        </p>
        <a
          :href="blogPostUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Read the Full Blog Post
          <Icon name="mdi:open-in-new" />
        </a>
      </div>
    </section>
  </div>
</template>
