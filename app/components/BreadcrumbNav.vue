<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <NuxtLink v-if="item.to && index < items.length - 1" :to="item.to" class="breadcrumb-link">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="breadcrumb-current" :aria-current="index === items.length - 1 ? 'page' : undefined">
          {{ item.label }}
        </span>
        <Icon v-if="index < items.length - 1" name="mdi:chevron-right" class="breadcrumb-sep" />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  padding: 12px 0;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  flex-wrap: wrap;
}

.breadcrumb-link {
  color: rgba(224, 224, 224, 0.5);
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-orange);
}

.breadcrumb-current {
  color: var(--light-text);
  font-size: 0.85rem;
  font-weight: 600;
}

.breadcrumb-sep {
  color: rgba(224, 224, 224, 0.3);
  font-size: 0.9rem;
}
</style>
