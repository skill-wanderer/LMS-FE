<script setup lang="ts">
useSeo({
  title: 'About the Dojo — Skill-Wanderer',
  description: 'Why we built a custom LMS from scratch instead of using Moodle — and how AI makes it better.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Why We Built the Dojo"
      subtitle="About Skill-Wanderer Dojo"
      description="A custom LMS built by developers, for learners — powered by AI, driven by code."
    />

    <!-- Why a Custom LMS -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Why Build a Custom LMS?</h2>

      <div class="glass-card p-8 md:p-12 space-y-8">
        <!-- AI-Powered -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:robot-outline" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">AI Makes Course Development Lightning Fast</h3>
            <p class="text-gray-400 leading-relaxed">
              Nowadays, with AI-assisted development, writing courses as code is dramatically faster than
              dragging and dropping blocks in any top-tier LMS — Moodle, Canvas, or otherwise. What used to
              take hours of clicking through clunky UIs now takes minutes in a code editor with AI by your side.
              Course content is just structured data — and AI excels at generating, refining, and iterating on it.
            </p>
          </div>
        </div>

        <!-- Playing to Our Strengths -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:code-braces" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">We're Developers — We Play to Our Strengths</h3>
            <p class="text-gray-400 leading-relaxed">
              We know software development deep in our bones. Instead of wrestling with Moodle's PHP admin panels
              and plugin ecosystem, we build on our own ground — with Nuxt, Vue, TypeScript, and Tailwind.
              Every course is version-controlled, every change is a commit, and every deployment is automated.
              Why fight someone else's architecture when we can craft exactly what we need?
            </p>
          </div>
        </div>

        <!-- Modern & Open -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:open-source-initiative" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Modern, Fast, and Completely Open</h3>
            <p class="text-gray-400 leading-relaxed">
              Traditional LMS platforms are heavy, slow, and often locked behind institutional walls.
              The Dojo is server-rendered for SEO, designed mobile-first, and 100% free with no paywalls.
              It's Apache 2.0 licensed and open source — because learning should be accessible to everyone.
            </p>
          </div>
        </div>

        <!-- Full Control -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:tune-vertical" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Total Control Over the Learning Experience</h3>
            <p class="text-gray-400 leading-relaxed">
              With a custom build, we control every pixel, every interaction, and every optimization.
              No bloated plugins, no unnecessary database queries, no compromise. The result is a platform
              that's fast, accessible, and tailored exactly to how we want people to learn.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visit Main Site CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:web" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">Learn More About Skill-Wanderer</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          The Dojo is part of the Skill-Wanderer ecosystem. Visit the main site for more about the project and team.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://skill-wanderer.com/about" target="_blank" rel="noopener" class="btn btn-primary">
            Visit skill-wanderer.com <Icon name="mdi:open-in-new" />
          </a>
          <NuxtLink to="/courses" class="btn btn-outline">
            Browse Courses <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
