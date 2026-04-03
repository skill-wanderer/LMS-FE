// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-schema-org',
  ],

  // SSR enabled for SEO
  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Skill-Wanderer Dojo — Free Open Learning Platform',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Skill-Wanderer Dojo is a free, open-access learning management system. Browse courses, track progress, and master new skills — no paywall, no barriers.' },
        { name: 'theme-color', content: '#FF6B35' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Skill-Wanderer Dojo — Free Open Learning Platform' },
        { property: 'og:description', content: 'Browse courses, track progress, and master new skills — free and open to everyone.' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Skill-Wanderer Dojo — Free Open Learning Platform' },
        { name: 'twitter:description', content: 'Browse courses, track progress, and master new skills — free and open to everyone.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/skill-wanderer-favicon.svg' },
      ],
    },
  },

  site: {
    url: 'https://dojo.skill-wanderer.com',
    name: 'Skill-Wanderer Dojo',
  },

  sitemap: {
    sources: ['/__sitemap__/urls'],
    exclude: ['/auth/**', '/search'],
  },

  robots: {
    allow: '/',
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Skill-Wanderer Dojo',
      url: 'https://dojo.skill-wanderer.com',
      logo: '/logo.png',
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://dojo.skill-wanderer.com',
      keycloakUrl: process.env.NUXT_PUBLIC_KEYCLOAK_URL || '',
      keycloakRealm: process.env.NUXT_PUBLIC_KEYCLOAK_REALM || '',
      keycloakClientId: process.env.NUXT_PUBLIC_KEYCLOAK_CLIENT_ID || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
      pathfinder: {
        apiUrl: process.env.NUXT_PUBLIC_PATHFINDER_API_URL || 'http://localhost:8000',
        domains: process.env.NUXT_PUBLIC_PATHFINDER_DOMAINS || 'dojo.skill-wanderer.com',
        sessionExpiryMinutes: Number(process.env.NUXT_PUBLIC_PATHFINDER_SESSION_EXPIRY_MINUTES) || 30,
        sessionStorage: process.env.NUXT_PUBLIC_PATHFINDER_SESSION_STORAGE || 'browser',
      },
    },
  },

  nitro: {
    preset: process.env.NITRO_PRESET || 'cloudflare-pages',
    compressPublicAssets: true,
  },

  image: {
    provider: 'none',
  },
})
