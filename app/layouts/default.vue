<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheNavigation />
    <main class="flex-1">
      <slot />
    </main>
    <TheSubscribe />
    <TheFooter />
  </div>
</template>
