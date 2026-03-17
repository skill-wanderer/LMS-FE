<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <nav class="mt-16 md:mt-8 py-3" aria-label="Breadcrumb">
    <ol class="flex items-center gap-1 list-none flex-wrap">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-1">
        <NuxtLink v-if="item.to && index < items.length - 1" :to="item.to" class="text-[rgba(224,224,224,0.5)] text-sm transition-colors duration-300 hover:text-brand-orange">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-[#e0e0e0] text-sm font-semibold" :aria-current="index === items.length - 1 ? 'page' : undefined">
          {{ item.label }}
        </span>
        <Icon v-if="index < items.length - 1" name="mdi:chevron-right" class="text-[rgba(224,224,224,0.3)] text-sm" />
      </li>
    </ol>
  </nav>
</template>
