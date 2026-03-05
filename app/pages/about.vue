<script setup lang="ts">
// Redirect /about to the main Skill-Wanderer website
navigateTo('https://skill-wanderer.com/about', { external: true, redirectCode: 301 })
</script>

<template>
  <div class="flex items-center justify-center min-h-[50vh] text-gray-400">
    <p>Redirecting to <a href="https://skill-wanderer.com/about" class="text-brand-orange underline">skill-wanderer.com/about</a>...</p>
  </div>
</template>
