<script setup lang="ts">
const query = ref('')
const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

function handleSearch() {
  if (query.value.trim()) {
    emit('search', query.value.trim())
  }
}
</script>

<template>
  <form class="search-bar" @submit.prevent="handleSearch" role="search">
    <Icon name="mdi:magnify" class="search-icon" />
    <input
      v-model="query"
      type="search"
      placeholder="Search courses, topics, skills…"
      class="search-input"
      aria-label="Search courses"
    />
    <button type="submit" class="btn btn-primary btn-sm">Search</button>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 50px;
  padding: 8px 8px 8px 20px;
  max-width: 600px;
  width: 100%;
  transition: border-color 0.3s ease;
}

.search-bar:focus-within {
  border-color: var(--primary-orange);
}

.search-icon {
  color: rgba(224, 224, 224, 0.4);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--light-text);
  font-size: 1rem;
  outline: none;
}

.search-input::placeholder {
  color: rgba(224, 224, 224, 0.35);
}

@media (max-width: 500px) {
  .search-bar {
    flex-wrap: wrap;
    border-radius: 16px;
    padding: 10px;
    gap: 8px;
  }

  .search-input {
    width: 100%;
    min-width: 0;
    font-size: 0.95rem;
  }

  .search-bar :deep(.btn) {
    width: 100%;
    justify-content: center;
  }
}
</style>
