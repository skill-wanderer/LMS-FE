<script setup lang="ts">
const route = useRoute()

const legacyUrl = computed(() => {
  const from = route.query.from as string | undefined
  if (from) {
    return `https://legacy-dojo.skill-wanderer.com${from}`
  }
  return 'https://legacy-dojo.skill-wanderer.com'
})

useSeo({
  title: 'Old Material — Skill-Wanderer Dojo',
  description: 'The page you tried to access belongs to the old Dojo. Welcome to the new Skill-Wanderer Dojo!',
  noIndex: true,
})
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center p-10 max-sm:p-6">
    <div class="text-center max-w-[600px]">
      <Icon name="mdi:archive-clock-outline" class="text-brand-orange text-[5rem] mb-4" />

      <h1 class="text-[clamp(1.4rem,4vw,2rem)] font-bold mb-4">
        Old Dojo Material
      </h1>

      <p class="text-[rgba(224,224,224,0.8)] text-lg leading-relaxed mb-6">
        It seems the URL you tried to access is an old material from the
        <strong class="text-brand-orange">old Dojo</strong>.
      </p>

      <p class="text-[rgba(224,224,224,0.65)] text-base leading-relaxed mb-6">
        We're really sorry, but to make things progressive we needed to build a
        brand-new, customised LMS — which is exactly what you're seeing here!
        Please look around and ask
        <strong class="text-brand-yellow">Lyra</strong>
        (THE ARCHIVIST) for similar material.
      </p>

      <p class="text-[rgba(224,224,224,0.65)] text-base leading-relaxed mb-8">
        In the meantime, the old material is still available at
        <a
          :href="legacyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand-orange font-semibold underline underline-offset-2 hover:text-brand-yellow"
        >legacy-dojo.skill-wanderer.com</a>
        while we migrate everything over.
      </p>

      <div class="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <NuxtLink to="/" class="btn btn-primary">
          <Icon name="mdi:home" /> Go Home
        </NuxtLink>
        <NuxtLink to="/courses" class="btn btn-secondary">
          Browse Courses
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
