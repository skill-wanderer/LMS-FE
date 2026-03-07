<script setup lang="ts">
const isScrolled = ref(false)
const isMobileOpen = ref(false)
const isEcosystemOpen = ref(false)
const isMobileEcosystemOpen = ref(false)
const isUserMenuOpen = ref(false)

const { isAuthEnabled, isAuthenticated, user, loginUrl, registerUrl, logout } = useKeycloak()

if (import.meta.client) {
  useEventListener(window, 'scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
}

const route = useRoute()
watch(() => route.path, () => {
  isMobileOpen.value = false
  isMobileEcosystemOpen.value = false
})

const navLinks = [
  { label: 'Courses', to: '/courses' },
  { label: 'Learning Paths', to: '/paths' },
  { label: 'About', href: 'https://skill-wanderer.com/about' },
  { label: 'Why Custom Dojo?', href: 'https://wanderings.skill-wanderer.com/blog/wanderers-log-4-goodbye-moodle-hello-custom-lms/' },
]

const ecosystemLinks = [
  { label: 'Hub', href: 'https://skill-wanderer.com/', icon: 'mdi:home' },
  { label: 'Dojo', to: '/', icon: 'mdi:fire', current: true },
  { label: 'Blog', href: 'https://wanderings.skill-wanderer.com/', icon: 'mdi:post' },
]
</script>

<template>
  <header
    class="nav-wrapper"
    :class="{ scrolled: isScrolled }"
  >
    <nav class="nav-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo" aria-label="Skill-Wanderer Dojo Home">
        <Icon name="mdi:fire" class="logo-icon" />
        <span class="logo-text gradient-text">Skill-Wanderer <span class="logo-accent">Dojo</span></span>
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.label">
          <a v-if="link.href" :href="link.href" class="nav-link" target="_blank" rel="noopener noreferrer">
            {{ link.label }}
          </a>
          <NuxtLink v-else :to="link.to" class="nav-link" active-class="nav-link--active">
            {{ link.label }}
          </NuxtLink>
        </li>

        <!-- Platform Ecosystem Dropdown -->
        <li
          class="ecosystem-dropdown"
          @mouseenter="isEcosystemOpen = true"
          @mouseleave="isEcosystemOpen = false"
        >
          <button
            class="nav-link ecosystem-trigger"
            :class="{ 'ecosystem-trigger--active': isEcosystemOpen }"
            @click="isEcosystemOpen = !isEcosystemOpen"
          >
            Platform Ecosystem
            <Icon
              name="mdi:chevron-down"
              size="18"
              class="ecosystem-chevron"
              :class="{ 'ecosystem-chevron--open': isEcosystemOpen }"
            />
          </button>
          <Transition name="dropdown">
            <div v-show="isEcosystemOpen" class="ecosystem-menu">
              <template v-for="ecoLink in ecosystemLinks" :key="ecoLink.label">
                <NuxtLink
                  v-if="ecoLink.to"
                  :to="ecoLink.to"
                  class="ecosystem-item"
                  :class="{ 'ecosystem-item--current': ecoLink.current }"
                >
                  <Icon :name="ecoLink.icon" size="18" class="ecosystem-item-icon" />
                  {{ ecoLink.label }}
                  <span v-if="ecoLink.current" class="ecosystem-badge">You are here</span>
                </NuxtLink>
                <a
                  v-else
                  :href="ecoLink.href"
                  class="ecosystem-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon :name="ecoLink.icon" size="18" class="ecosystem-item-icon" />
                  {{ ecoLink.label }}
                </a>
              </template>
            </div>
          </Transition>
        </li>
      </ul>

      <!-- Search + Auth + CTA -->
      <div class="nav-actions">
        <NuxtLink to="/search" class="nav-search" aria-label="Search courses">
          <Icon name="mdi:magnify" size="22" />
        </NuxtLink>

        <!-- Auth buttons (only when Keycloak is configured) -->
        <template v-if="isAuthEnabled">
          <!-- Logged-out state -->
          <template v-if="!isAuthenticated">
            <a :href="loginUrl()" class="btn btn-outline btn-sm">
              <Icon name="mdi:login" size="18" />
              Login
            </a>
            <a :href="registerUrl()" class="btn btn-primary btn-sm">
              <Icon name="mdi:account-plus" size="18" />
              Register
            </a>
          </template>

          <!-- Logged-in state -->
          <div
            v-else
            class="user-menu-dropdown"
            @mouseenter="isUserMenuOpen = true"
            @mouseleave="isUserMenuOpen = false"
          >
            <button
              class="user-avatar-btn"
              @click="isUserMenuOpen = !isUserMenuOpen"
              :aria-expanded="isUserMenuOpen"
            >
              <span class="user-avatar">
                {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
              </span>
              <span class="user-name">{{ user?.name || 'User' }}</span>
              <Icon
                name="mdi:chevron-down"
                size="18"
                class="ecosystem-chevron"
                :class="{ 'ecosystem-chevron--open': isUserMenuOpen }"
              />
            </button>
            <Transition name="dropdown">
              <div v-show="isUserMenuOpen" class="user-menu">
                <div class="user-menu-header">
                  <span class="user-menu-name">{{ user?.name }}</span>
                  <span class="user-menu-email">{{ user?.email }}</span>
                </div>
                <hr class="user-menu-divider" />
                <button class="user-menu-item" @click="logout">
                  <Icon name="mdi:logout" size="18" />
                  Sign Out
                </button>
              </div>
            </Transition>
          </div>
        </template>

      </div>

      <!-- Mobile Toggle -->
      <button
        class="mobile-toggle"
        :aria-expanded="isMobileOpen"
        aria-label="Toggle navigation"
        @click="isMobileOpen = !isMobileOpen"
      >
        <Icon :name="isMobileOpen ? 'mdi:close' : 'mdi:menu'" size="28" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileOpen" class="mobile-menu">
        <template v-for="link in navLinks" :key="link.label">
          <a v-if="link.href" :href="link.href" class="mobile-link" target="_blank" rel="noopener noreferrer">
            {{ link.label }}
          </a>
          <NuxtLink
            v-else
            :to="link.to"
            class="mobile-link"
            active-class="mobile-link--active"
          >
            {{ link.label }}
          </NuxtLink>
        </template>

        <!-- Mobile Ecosystem Dropdown -->
        <button
          class="mobile-link mobile-ecosystem-trigger"
          @click="isMobileEcosystemOpen = !isMobileEcosystemOpen"
        >
          Platform Ecosystem
          <Icon
            name="mdi:chevron-down"
            size="18"
            class="ecosystem-chevron"
            :class="{ 'ecosystem-chevron--open': isMobileEcosystemOpen }"
          />
        </button>
        <Transition name="slide-down">
          <div v-if="isMobileEcosystemOpen" class="mobile-ecosystem-items">
            <template v-for="ecoLink in ecosystemLinks" :key="ecoLink.label">
              <NuxtLink
                v-if="ecoLink.to"
                :to="ecoLink.to"
                class="mobile-link mobile-ecosystem-link"
                :class="{ 'mobile-link--active': ecoLink.current }"
              >
                <Icon :name="ecoLink.icon" size="18" class="mr-2" />
                {{ ecoLink.label }}
                <span v-if="ecoLink.current" class="ecosystem-badge">Current</span>
              </NuxtLink>
              <a
                v-else
                :href="ecoLink.href"
                class="mobile-link mobile-ecosystem-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon :name="ecoLink.icon" size="18" class="mr-2" />
                {{ ecoLink.label }}
              </a>
            </template>
          </div>
        </Transition>

        <NuxtLink to="/search" class="mobile-link">
          <Icon name="mdi:magnify" class="mr-2" /> Search
        </NuxtLink>

        <!-- Mobile Auth buttons -->
        <template v-if="isAuthEnabled">
          <template v-if="!isAuthenticated">
            <a :href="loginUrl()" class="mobile-link">
              <Icon name="mdi:login" class="mr-2" /> Login
            </a>
            <a :href="registerUrl()" class="mobile-link">
              <Icon name="mdi:account-plus" class="mr-2" /> Register
            </a>
          </template>
          <template v-else>
            <div class="mobile-user-info">
              <span class="user-avatar user-avatar--sm">
                {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
              </span>
              <span>{{ user?.name || 'User' }}</span>
            </div>
            <button class="mobile-link" @click="logout">
              <Icon name="mdi:logout" class="mr-2" /> Sign Out
            </button>
          </template>
        </template>

      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  padding: 16px 20px;
}

.nav-wrapper.scrolled {
  padding: 10px 20px;
  background: rgba(15, 15, 15, 0.95);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
}

.logo-icon {
  color: var(--primary-orange);
  font-size: 1.6rem;
}

.logo-text {
  font-size: clamp(0.85rem, 3vw, 1.2rem);
  white-space: nowrap;
}

.logo-accent {
  -webkit-text-fill-color: var(--accent-yellow);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav-link {
  color: var(--light-text);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 4px 0;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-orange);
  border-radius: 1px;
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link--active {
  color: var(--primary-orange);
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

/* Ecosystem Dropdown */
.ecosystem-dropdown {
  position: relative;
}

.ecosystem-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  color: var(--primary-orange);
}

.ecosystem-trigger::after {
  display: none;
}

.ecosystem-chevron {
  transition: transform 0.3s ease;
}

.ecosystem-chevron--open {
  transform: rotate(180deg);
}

.ecosystem-menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 180px;
  background: rgba(30, 30, 30, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 10px;
  padding: 8px 0;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}

.ecosystem-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  color: var(--light-text);
  font-size: 0.92rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.ecosystem-item:hover {
  color: var(--primary-orange);
  background: rgba(255, 107, 53, 0.08);
}

.ecosystem-item--current {
  color: var(--primary-orange);
}

.ecosystem-item-icon {
  flex-shrink: 0;
}

.ecosystem-badge {
  margin-left: auto;
  font-size: 0.7rem;
  padding: 2px 7px;
  border-radius: 6px;
  background: rgba(255, 107, 53, 0.15);
  color: var(--primary-orange);
  font-weight: 600;
}

/* Dropdown Transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Mobile Ecosystem */
.mobile-ecosystem-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  color: var(--primary-orange);
}

.mobile-ecosystem-items {
  padding-left: 16px;
}

.mobile-ecosystem-link {
  gap: 8px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-search {
  color: var(--light-text);
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.nav-search:hover {
  color: var(--primary-orange);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--light-text);
  cursor: pointer;
}

/* Mobile */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 16px 0;
}

.mobile-link {
  display: flex;
  align-items: center;
  padding: 12px 0;
  color: var(--light-text);
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: color 0.3s ease;
}

.mobile-link:hover,
.mobile-link--active {
  color: var(--primary-orange);
}

@media (max-width: 768px) {
  .nav-links,
  .nav-actions {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .nav-wrapper {
    padding: 12px 16px;
  }

  .nav-wrapper.scrolled {
    padding: 8px 16px;
  }
}

/* ---- User Menu ---- */
.user-menu-dropdown {
  position: relative;
}

.user-avatar-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--light-text);
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.user-avatar-btn:hover {
  background: rgba(255, 107, 53, 0.08);
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.user-avatar--sm {
  width: 28px;
  height: 28px;
  font-size: 0.78rem;
}

.user-name {
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 220px;
  background: rgba(30, 30, 30, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 10px;
  padding: 8px 0;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}

.user-menu-header {
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-menu-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--light-text);
}

.user-menu-email {
  font-size: 0.8rem;
  color: rgba(224, 224, 224, 0.6);
}

.user-menu-divider {
  border: none;
  border-top: 1px solid rgba(255, 107, 53, 0.1);
  margin: 4px 0;
}

.user-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--light-text);
  font-size: 0.92rem;
  font-weight: 500;
  font-family: inherit;
  transition: all 0.2s ease;
}

.user-menu-item:hover {
  color: var(--primary-orange);
  background: rgba(255, 107, 53, 0.08);
}

.mobile-user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  color: var(--primary-orange);
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 400px) {
  .logo-accent {
    display: none;
  }
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
