<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Active Development Banner -->
    <div class="dev-banner">
      <div class="dev-banner-inner">
        <Icon name="mdi:hammer-wrench" class="dev-banner-icon" />
        <p>
          The new <strong>Skill-Wanderer Dojo</strong> is in active development.
          Until we finish the migration, the old dojo lives at
          <a
            href="https://legacy-dojo.skill-wanderer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >legacy-dojo.skill-wanderer.com</a>.
        </p>
      </div>
    </div>

    <TheNavigation />
    <main class="flex-1">
      <slot />
    </main>
    <TheSubscribe />
    <TheFooter />
  </div>
</template>

<style scoped>
.dev-banner {
  background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);
  color: #fff;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.4;
  z-index: 100;
}

.dev-banner-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.dev-banner-icon {
  flex-shrink: 0;
  font-size: 1.15rem;
}

.dev-banner p {
  margin: 0;
}

.dev-banner a {
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.dev-banner a:hover {
  color: #fde68a;
}
</style>
