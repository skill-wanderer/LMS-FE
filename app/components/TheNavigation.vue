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
  { label: 'Lyra', to: '/lyra' },
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
    class="fixed top-0 left-0 right-0 z-[100] backdrop-blur-[12px] border-b border-brand-orange/10 transition-all duration-300"
    :class="isScrolled ? 'py-2.5 px-5 bg-[rgba(15,15,15,0.95)] md:px-5 max-md:px-4 max-md:py-2' : 'py-4 px-5 bg-[rgba(15,15,15,0.85)] max-md:px-4 max-md:py-3'"
  >
    <nav class="max-w-content mx-auto flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 text-[1.3rem] font-bold no-underline" aria-label="Skill-Wanderer Dojo Home">
        <Icon name="mdi:fire" class="text-brand-orange text-[1.6rem]" />
        <span class="text-[clamp(0.85rem,3vw,1.2rem)] whitespace-nowrap gradient-text">Skill-Wanderer <span class="logo-accent max-[400px]:hidden">Dojo</span></span>
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="hidden md:flex list-none gap-8">
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
          class="relative"
          @mouseenter="isEcosystemOpen = true"
          @mouseleave="isEcosystemOpen = false"
        >
          <button
            class="nav-link flex items-center gap-1 bg-transparent border-none cursor-pointer font-[inherit] !text-brand-orange after:hidden"
            @click="isEcosystemOpen = !isEcosystemOpen"
          >
            Platform Ecosystem
            <Icon
              name="mdi:chevron-down"
              size="18"
              class="transition-transform duration-300"
              :class="{ 'rotate-180': isEcosystemOpen }"
            />
          </button>
          <Transition name="dropdown">
            <div v-show="isEcosystemOpen" class="absolute top-[calc(100%+12px)] right-0 min-w-[180px] bg-[rgba(30,30,30,0.98)] backdrop-blur-[16px] border border-brand-orange/15 rounded-[10px] py-2 shadow-dropdown">
              <template v-for="ecoLink in ecosystemLinks" :key="ecoLink.label">
                <NuxtLink
                  v-if="ecoLink.to"
                  :to="ecoLink.to"
                  class="flex items-center gap-2.5 px-[18px] py-2.5 text-[#e0e0e0] text-[0.92rem] font-medium no-underline transition-all duration-200 whitespace-nowrap hover:text-brand-orange hover:bg-brand-orange/[0.08]"
                  :class="{ '!text-brand-orange': ecoLink.current }"
                >
                  <Icon :name="ecoLink.icon" size="18" class="shrink-0" />
                  {{ ecoLink.label }}
                  <span v-if="ecoLink.current" class="ml-auto text-[0.7rem] px-[7px] py-0.5 rounded-md bg-brand-orange/15 text-brand-orange font-semibold">You are here</span>
                </NuxtLink>
                <a
                  v-else
                  :href="ecoLink.href"
                  class="flex items-center gap-2.5 px-[18px] py-2.5 text-[#e0e0e0] text-[0.92rem] font-medium no-underline transition-all duration-200 whitespace-nowrap hover:text-brand-orange hover:bg-brand-orange/[0.08]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon :name="ecoLink.icon" size="18" class="shrink-0" />
                  {{ ecoLink.label }}
                </a>
              </template>
            </div>
          </Transition>
        </li>
      </ul>

      <!-- Search + Auth + CTA -->
      <div class="hidden md:flex items-center gap-4">
        <NuxtLink to="/search" class="flex items-center text-[#e0e0e0] transition-colors duration-300 hover:text-brand-orange" aria-label="Search courses">
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
            class="relative"
            @mouseenter="isUserMenuOpen = true"
            @mouseleave="isUserMenuOpen = false"
          >
            <button
              class="flex items-center gap-2 bg-transparent border-none cursor-pointer text-[#e0e0e0] font-[inherit] text-[0.92rem] font-medium px-2 py-1 rounded-lg transition-colors duration-200 hover:bg-brand-orange/[0.08]"
              @click="isUserMenuOpen = !isUserMenuOpen"
              :aria-expanded="isUserMenuOpen"
            >
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-deep text-white font-bold text-[0.85rem] shrink-0">
                {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
              </span>
              <span class="max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">{{ user?.name || 'User' }}</span>
              <Icon
                name="mdi:chevron-down"
                size="18"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': isUserMenuOpen }"
              />
            </button>
            <Transition name="dropdown">
              <div v-show="isUserMenuOpen" class="absolute top-[calc(100%+12px)] right-0 min-w-[220px] bg-[rgba(30,30,30,0.98)] backdrop-blur-[16px] border border-brand-orange/15 rounded-[10px] py-2 shadow-dropdown">
                <div class="px-[18px] py-3 flex flex-col gap-0.5">
                  <span class="font-semibold text-[0.95rem] text-[#e0e0e0]">{{ user?.name }}</span>
                  <span class="text-[0.8rem] text-[rgba(224,224,224,0.6)]">{{ user?.email }}</span>
                </div>
                <hr class="border-none border-t border-brand-orange/10 my-1" />
                <button class="flex items-center gap-2.5 px-[18px] py-2.5 w-full bg-transparent border-none cursor-pointer text-[#e0e0e0] text-[0.92rem] font-medium font-[inherit] transition-all duration-200 hover:text-brand-orange hover:bg-brand-orange/[0.08]" @click="logout">
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
        class="flex md:hidden bg-transparent border-none text-[#e0e0e0] cursor-pointer"
        :aria-expanded="isMobileOpen"
        aria-label="Toggle navigation"
        @click="isMobileOpen = !isMobileOpen"
      >
        <Icon :name="isMobileOpen ? 'mdi:close' : 'mdi:menu'" size="28" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileOpen" class="flex flex-col py-4 md:hidden">
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
          class="mobile-link flex items-center justify-between w-full bg-transparent border-none cursor-pointer font-[inherit] text-base !text-brand-orange border-b border-white/5"
          @click="isMobileEcosystemOpen = !isMobileEcosystemOpen"
        >
          Platform Ecosystem
          <Icon
            name="mdi:chevron-down"
            size="18"
            class="transition-transform duration-300"
            :class="{ 'rotate-180': isMobileEcosystemOpen }"
          />
        </button>
        <Transition name="slide-down">
          <div v-if="isMobileEcosystemOpen" class="pl-4">
            <template v-for="ecoLink in ecosystemLinks" :key="ecoLink.label">
              <NuxtLink
                v-if="ecoLink.to"
                :to="ecoLink.to"
                class="mobile-link gap-2"
                :class="{ 'mobile-link--active': ecoLink.current }"
              >
                <Icon :name="ecoLink.icon" size="18" class="mr-2" />
                {{ ecoLink.label }}
                <span v-if="ecoLink.current" class="ml-auto text-[0.7rem] px-[7px] py-0.5 rounded-md bg-brand-orange/15 text-brand-orange font-semibold">Current</span>
              </NuxtLink>
              <a
                v-else
                :href="ecoLink.href"
                class="mobile-link gap-2"
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
            <div class="flex items-center gap-2.5 py-3 text-brand-orange font-semibold border-b border-white/5">
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-brand-orange to-brand-deep text-white font-bold text-[0.78rem] shrink-0">
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
.logo-accent {
  -webkit-text-fill-color: var(--accent-yellow);
}

.nav-link {
  @apply text-[#e0e0e0] font-medium text-[0.95rem] relative py-1 transition-colors duration-300;
}
.nav-link::after {
  content: '';
  @apply absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-orange rounded-sm transition-all duration-300;
}
.nav-link:hover,
.nav-link--active {
  @apply text-brand-orange;
}
.nav-link:hover::after,
.nav-link--active::after {
  @apply w-full;
}

.mobile-link {
  @apply flex items-center py-3 text-[#e0e0e0] font-medium border-b border-white/5 transition-colors duration-300;
}
.mobile-link:hover,
.mobile-link--active {
  @apply text-brand-orange;
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-200;
}
.dropdown-enter-from,
.dropdown-leave-to {
  @apply opacity-0 -translate-y-2;
}
.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition-all duration-300;
}
.slide-down-enter-from,
.slide-down-leave-to {
  @apply opacity-0 -translate-y-2.5;
}
</style>
