<script setup lang="ts">
import { featuredPath, plannedPathGroups } from '~/data/paths'

useSeo({
  title: 'Learning Paths — Skill-Wanderer Dojo',
  description: 'Start with Learning in the AI Era, our free path on the mindset, practical navigation and ways of learning you need now. More paths are planned for later.',
})
</script>

<template>
  <div>
    <TheHero
      title="Learning Paths"
      subtitle="Start With Learning in the AI Era"
      description="Before any single skill, you need the mindset, the sense of direction and the ways of learning that keep you growing while AI changes everything. That's the path we're building now, free for learners in any field. Our other paths are planned for later, once we've revised their content."
    >
      <ImageSlot name="learning-paths/hub" class="rounded-card ring-1 ring-brand-orange/20" priority />
    </TheHero>

    <!-- Featured path: the one path open now -->
    <section class="section pt-0 md:pt-0">
      <div class="text-center mb-10">
        <h2 class="gradient-text text-[clamp(2rem,4vw,3rem)] font-bold mb-3">Featured Path</h2>
        <p class="text-[rgba(224,224,224,0.7)]">Open now and in development. We add lessons as we finish them.</p>
      </div>

      <FeaturedPathCard :path="featuredPath" />
    </section>

    <!-- Planned paths: offered later, once their old content is revised -->
    <section class="section">
      <div class="text-center mb-10">
        <h2 class="gradient-text text-[clamp(2rem,4vw,3rem)] font-bold mb-3">Planned Paths</h2>
        <p class="text-[rgba(224,224,224,0.7)] max-w-2xl mx-auto">
          These open later. We're revising their old content first, so each outline will change before it opens.
        </p>
      </div>

      <div v-for="group in plannedPathGroups" :key="group.title" class="mb-14 last:mb-0">
        <h3 class="text-base font-bold uppercase tracking-[0.1em] text-brand-yellow mb-5">{{ group.title }}</h3>
        <div class="card-grid">
          <PathCard v-for="path in group.paths" :key="path.slug" :path="path" cover />
        </div>
      </div>
    </section>
  </div>
</template>
