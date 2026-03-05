# Skill-Wanderer Dojo — LMS Frontend

> A free, open-access Learning Management System frontend built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**. Designed to replace Moodle with a modern, SEO-friendly, publicly accessible learning platform.

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=flat-square&logo=nuxt.js)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

> **Deployment:** This LMS will be deployed to replace the current Moodle instance at **[https://dojo.skill-wanderer.com/](https://dojo.skill-wanderer.com/)**

---

## Why This Exists

Traditional LMS platforms like Moodle are heavy, slow, and often locked behind institutional walls. **Skill-Wanderer Dojo** is the modern alternative:

- **100% Free** — No paywalls, no premium tiers, no gatekeeping
- **SEO-Friendly** — Server-side rendered, publicly crawlable by search engines
- **Open Source** — MIT licensed, community-driven
- **Modern Stack** — Nuxt 4 + Vue 3 + Tailwind + TypeScript

## Features

- **Course Catalog** — Browse, search, and filter all courses publicly
- **Structured Learning Paths** — Follow curated sequences from beginner to advanced
- **Lesson Viewer** — Video and article lessons with progress tracking
- **Full-Text Search** — Search courses by name, topic, or tags
- **SEO Optimized** — SSR, Open Graph tags, JSON-LD schema.org structured data, sitemap, robots.txt
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Dark-First UI** — Skill-Wanderer design system with orange/yellow accents
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Nuxt 4](https://nuxt.com) | Vue framework with SSR/ISR |
| [Vue 3](https://vuejs.org) | Reactive UI framework |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [@nuxtjs/sitemap](https://sitemap.nuxtjs.org) | Auto-generated sitemap |
| [@nuxtjs/robots](https://github.com/nuxt-modules/robots) | Robots.txt management |
| [nuxt-schema-org](https://schema-org.nuxtjs.org) | JSON-LD structured data |
| [@nuxt/image](https://image.nuxt.com) | Optimized images |
| [@nuxt/icon](https://icon.nuxt.com) | Icon system (MDI) |
| [@vueuse/nuxt](https://vueuse.org) | Vue composition utilities |

## Project Structure

```
LMS-FE/
├── app/
│   ├── app.vue                    # Root app component
│   ├── error.vue                  # Custom error page
│   ├── components/
│   │   ├── TheNavigation.vue      # Fixed navbar with glass blur
│   │   ├── TheFooter.vue          # Site footer
│   │   ├── TheSubscribe.vue       # Email subscribe section
│   │   ├── TheHero.vue            # Reusable hero section
│   │   ├── CourseCard.vue         # Course card for grids
│   │   ├── LessonItem.vue         # Lesson list item
│   │   ├── BreadcrumbNav.vue      # Breadcrumb navigation
│   │   └── SearchBar.vue          # Search input component
│   ├── composables/
│   │   ├── useCourses.ts          # Course data & search (mock)
│   │   └── useSeo.ts              # SEO meta & schema.org helpers
│   ├── layouts/
│   │   └── default.vue            # Nav → Main → Subscribe → Footer
│   ├── pages/
│   │   ├── index.vue              # Home page
│   │   ├── about.vue              # About the Dojo
│   │   ├── search.vue             # Course search
│   │   ├── paths.vue              # Learning paths
│   │   └── courses/
│   │       ├── index.vue          # Course catalog
│   │       ├── [slug].vue         # Course detail
│   │       └── [slug]/lessons/
│   │           └── [lessonSlug].vue # Lesson viewer
│   └── types/
│       └── course.ts              # TypeScript interfaces
├── assets/css/
│   └── main.css                   # Design tokens & base styles
├── server/api/
│   ├── courses/
│   │   ├── index.get.ts           # GET /api/courses
│   │   └── [slug].get.ts          # GET /api/courses/:slug
│   └── subscribe.post.ts          # POST /api/subscribe
├── public/                        # Static assets
├── nuxt.config.ts                 # Nuxt configuration
├── tailwind.config.ts             # Tailwind + design tokens
├── DESIGN_SYSTEM.md               # Design system reference
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **npm** 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/skill-wanderer/LMS-FE.git
cd LMS-FE

# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
# Build SSR application
npm run build

# Preview production build locally
npm run preview
```

### Static Generation

```bash
# Generate static site
npm run generate
```

## SEO Configuration

This project is built for public, crawlable access:

- **SSR enabled** — All pages are server-rendered for search engines
- **ISR for courses** — Course pages regenerate every 60 minutes
- **Auto-generated sitemap** at `/sitemap.xml`
- **robots.txt** allows all crawlers
- **Open Graph + Twitter cards** on every page
- **JSON-LD structured data** — `Course` schema with `isAccessibleForFree: true`
- **Semantic HTML** — proper heading hierarchy, landmark roles

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for the full Skill-Wanderer design specification including:

- CSS design tokens (colors, typography, spacing)
- Component patterns (buttons, cards, hero, navigation)
- Responsive behavior guidelines
- Tailwind + scoped CSS strategy

## Roadmap

- [ ] Backend API integration (replace mock data)
- [ ] User authentication (optional, for progress tracking)
- [ ] Course content CMS
- [ ] Video player integration
- [ ] Quiz/assessment system
- [ ] Certificate generation
- [ ] Comments/discussion per lesson
- [ ] i18n / multi-language support
- [ ] Dark/light theme toggle
- [ ] PWA support

## Contributing

Contributions are welcome! This is an open-source project.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

**Built with ❤️ by [Skill-Wanderer](https://github.com/skill-wanderer)**
