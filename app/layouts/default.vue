<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-clip">
    <TheNavigation />
    <main class="flex-1 overflow-x-clip">
      <slot />
    </main>
    <TheSubscribe v-if="!route.path.includes('/lessons/')" />
    <TheFooter />
    <ClientOnly>
      <PathfinderChat />
      <CookieBanner />
    </ClientOnly>
  </div>
</template>


