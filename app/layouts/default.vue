<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Active Development Banner -->
    <div class="bg-gradient-to-r from-amber-500 to-red-500 text-white text-center px-4 py-2 text-sm leading-snug z-[100]">
      <div class="flex items-center justify-center gap-2 max-w-[960px] mx-auto">
        <Icon name="mdi:hammer-wrench" class="shrink-0 text-[1.15rem]" />
        <p class="m-0">
          The new <strong>Skill-Wanderer Dojo</strong> is in active development.
          Until we finish the migration, the old dojo lives at
          <a
            href="https://legacy-dojo.skill-wanderer.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white font-bold underline underline-offset-2 hover:text-amber-200"
          >legacy-dojo.skill-wanderer.com</a>.
        </p>
      </div>
    </div>

    <TheNavigation />
    <main class="flex-1">
      <slot />
    </main>
    <TheSubscribe v-if="!route.path.includes('/lessons/')" />
    <TheFooter />
    <ClientOnly>
      <PathfinderChat />
    </ClientOnly>
  </div>
</template>


