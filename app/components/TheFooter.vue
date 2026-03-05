<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  learn: [
    { label: 'All Courses', to: '/courses' },
    { label: 'Learning Paths', to: '/paths' },
    { label: 'Search', to: '/search' },
  ],
  about: [
    { label: 'About the Dojo', href: 'https://skill-wanderer.com/about' },
    { label: 'Open Source', href: 'https://github.com/skill-wanderer' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/skill-wanderer' },
  ],
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo" aria-label="Home">
            <Icon name="mdi:fire" class="text-brand-orange text-2xl" />
            <span class="gradient-text text-lg font-bold">Skill-Wanderer Dojo</span>
          </NuxtLink>
          <p class="footer-tagline">
            Free, open-access learning for everyone. No paywall, no barriers.
          </p>
        </div>

        <!-- Learn -->
        <div>
          <h4 class="footer-heading">Learn</h4>
          <ul class="footer-link-list">
            <li v-for="link in footerLinks.learn" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h4 class="footer-heading">About</h4>
          <ul class="footer-link-list">
            <li v-for="link in footerLinks.about" :key="link.label">
              <NuxtLink v-if="link.to" :to="link.to">{{ link.label }}</NuxtLink>
              <a v-else :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h4 class="footer-heading">Community</h4>
          <ul class="footer-link-list">
            <li v-for="link in footerLinks.community" :key="link.label">
              <a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Skill-Wanderer Dojo. Open-source under Apache License.</p>
        <p class="footer-built">
          Built with <Icon name="mdi:heart" class="text-brand-orange text-sm" /> and <Icon name="mdi:vuejs" class="text-semantic-success text-sm" /> Nuxt
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--darker-bg);
  border-top: 1px solid rgba(255, 107, 53, 0.15);
  padding: 60px 20px 30px;
  margin-top: 0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  margin-bottom: 12px;
}

.footer-tagline {
  color: rgba(224, 224, 224, 0.6);
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 280px;
}

.footer-heading {
  color: var(--light-text);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.footer-link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link-list a {
  color: rgba(224, 224, 224, 0.6);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link-list a:hover {
  color: var(--primary-orange);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(224, 224, 224, 0.4);
}

.footer-built {
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
