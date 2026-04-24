# Skill-Wanderer Dojo — LMS Frontend

> A free, open-access Learning Management System frontend built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**. Designed to replace Moodle with a modern, SEO-friendly, publicly accessible learning platform.

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=flat-square&logo=nuxt.js)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-Apache%202.0-blue?style=flat-square)

> **Deployment:** This LMS will be deployed to replace the current Moodle instance at **[https://dojo.skill-wanderer.com/](https://dojo.skill-wanderer.com/)**

---

## Why This Exists

Traditional LMS platforms like Moodle are heavy, slow, and often locked behind institutional walls. **Skill-Wanderer Dojo** is the modern alternative:

- **100% Free** — No paywalls, no premium tiers, no gatekeeping
- **SEO-Friendly** — Server-side rendered, publicly crawlable by search engines
- **Open Source** — Apache 2.0 licensed, community-driven
- **Modern Stack** — Nuxt 4 + Vue 3 + Tailwind + TypeScript
- **AI-Powered Course Development** — With AI, writing courses as code is dramatically faster than dragging and dropping blocks in platforms like Moodle. We're software developers — instead of fighting clunky UIs, we play to our strengths and build content the way we build software: in code, with version control, at speed

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
| [Nuxt 4](https://nuxt.com) | Vue framework with SSR |
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

### Deploy to Cloudflare Workers

```bash
# Build the Cloudflare Worker SSR bundle
npm run build

# Preview with Wrangler
npm run preview:cf

# Deploy the worker and static assets
npm run deploy:cf
```

The Cloudflare deployment now uses the Worker runtime with an asset binding, so all routes stay server-rendered instead of mixing static Pages output with edge execution.

## SEO Configuration

This project is built for public, crawlable access:

- **SSR enabled** — All pages are server-rendered for search engines
- **SSR-only routing** — No prerendered route rules or ISR-style page generation
- **Auto-generated sitemap** at `/sitemap.xml`
- **robots.txt** allows all crawlers
- **Open Graph + Twitter cards** on every page
- **JSON-LD structured data** — `Course` schema with `isAccessibleForFree: true`
- **Semantic HTML** — proper heading hierarchy, landmark roles

## Adding Course Content

Course content is bundled with the frontend. To add a new course, see [docs/ADDING_COURSES.md](./docs/ADDING_COURSES.md) for the full step-by-step guide covering:

- Folder structure under `app/data/courses/<course-slug>/`
- Required fields for `Course`, `Module`, and `Lesson`
- How to register the course in `app/data/courses/index.ts`
- How `status: 'draft'` vs `'published'` affects catalog visibility
- Local verification URLs

A minimal working example is available at [`app/data/courses/example-course/`](./app/data/courses/example-course/).

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

## Security Note

This project is **frontend-heavy by design**. Many computations that would typically be handled server-side (e.g. quiz scoring, pass/fail determination) are currently performed on the client. This means a knowledgeable user could inspect network requests, manipulate submitted data, or read correct answers from the source code.

**This is intentional — not a bug, but a feature.**

- All course content, including quiz answers, is **free and publicly accessible**. There is no competitive advantage to cheating.
- The quizzes are **optional self-assessment tools**, not graded exams. The only person you'd be cheating is yourself.
- This project will later serve as **open educational material for cybersecurity topics**. We actively encourage learners to explore, inspect, and hack the client-side logic as a hands-on learning exercise.

If you discover something interesting while poking around, we'd love to hear about it — open an issue or a PR!

> **TL;DR:** Yes, you can inspect the frontend and find quiz answers. That's by design. Learn from it. 🕵️

## Contributing

Contributions are welcome! This is an open-source project.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 — see the [LICENSE](./LICENSE) file for details.

---

**Built with ❤️ by [Skill-Wanderer](https://github.com/skill-wanderer)**
