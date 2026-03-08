import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B35',
          'deep-orange': '#E85D25',
          yellow: '#FFD93D',
          gold: '#FFC107',
        },
        surface: {
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          card: 'rgba(255, 255, 255, 0.05)',
          'card-hover': 'rgba(255, 255, 255, 0.08)',
        },
        semantic: {
          success: '#4CAF50',
          failure: '#f44336',
          wisdom: '#9C27B0',
          growth: '#2196F3',
          premium: '#FFC107',
          lock: '#9E9E9E',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        narrow: '800px',
      },
      borderRadius: {
        pill: '50px',
        card: '16px',
      },
      spacing: {
        'section-x': '20px',
        'section-y': '80px',
        'hero-top': '140px',
      },
      boxShadow: {
        brand: '0 4px 15px rgba(255, 107, 53, 0.3)',
        'brand-lg': '0 6px 25px rgba(255, 107, 53, 0.45)',
        dropdown: '0 12px 32px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config
