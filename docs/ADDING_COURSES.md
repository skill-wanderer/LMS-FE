# Adding a Course to Skill-Wanderer Dojo

This guide explains how contributors can add new course content to the LMS frontend. All course data is bundled with the app — no backend CMS or database is required to publish a course.

---

## Table of Contents

1. [How course content works](#how-course-content-works)
2. [Folder structure](#folder-structure)
3. [Required fields](#required-fields)
4. [Step-by-step guide](#step-by-step-guide)
5. [Draft vs published](#draft-vs-published)
6. [Local verification URLs](#local-verification-urls)
7. [Tips and conventions](#tips-and-conventions)

---

## How course content works

```
app/data/courses/index.ts   ← central registry (the catalogue)
       └─ imports each course from its own folder
              └─ each course imports its modules
                     └─ each module imports its lessons
```

The composable `app/composables/useCourses.ts` reads the registry and filters out `draft` courses before exposing them to the UI. The Nuxt server routes `server/api/courses/index.get.ts` and `server/api/courses/[slug].get.ts` also read from the same registry.

---

## Folder structure

```
app/data/courses/
└── <course-slug>/
    ├── index.ts                    ← Course metadata + module imports
    └── <module-slug>/
        ├── index.ts                ← Module metadata + lesson imports
        └── <lesson-slug>.ts        ← Individual lesson content
```

**Example** (see `app/data/courses/example-course/` for the full working scaffold):

```
app/data/courses/example-course/
├── index.ts
└── module-1-getting-started/
    ├── index.ts
    └── welcome-to-the-course.ts
```

---

## Required fields

### `Course` (`app/types/course.ts`)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `string` | ✅ | Unique across all courses. Convention: `course-<slug>` |
| `slug` | `string` | ✅ | URL segment. Must match the folder name. |
| `title` | `string` | ✅ | Displayed in the catalog card and page heading. |
| `excerpt` | `string` | ✅ | One-line summary shown in course cards and search results. |
| `description` | `string` | ✅ | Full description shown on the course detail page. |
| `difficulty` | `'beginner' \| 'intermediate' \| 'advanced'` | ✅ | Used for filtering. |
| `status` | `'published' \| 'draft'` | ✅ | `'draft'` hides the course from the catalog. |
| `lessonCount` | `number` | ✅ | Derive with `modules.reduce((s, m) => s + m.lessons.length, 0)`. |
| `modules` | `Module[]` | ✅ | Ordered array of modules. |
| `tags` | `string[]` | ✅ | Lowercase strings used for search and filtering. |
| `createdAt` | `string` | ✅ | ISO date string, e.g. `'2026-04-24'`. |
| `updatedAt` | `string` | ✅ | ISO date string. |
| `thumbnail` | `string` | ❌ | Path to an image under `public/`. |
| `instructor` | `string` | ❌ | Display name of the instructor. |
| `author` | `AuthorInfo` | ❌ | Import from `~/data/authors`. |

### `Module`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `string` | ✅ | Unique across all modules. Convention: `module-<course-id>-<number>` |
| `slug` | `string` | ✅ | Must match the folder name. |
| `title` | `string` | ✅ | Displayed in the course detail page. |
| `order` | `number` | ✅ | 1-based position within the course. |
| `lessons` | `Lesson[]` | ✅ | Ordered array of lessons. |
| `status` | `'published' \| 'draft'` | ❌ | Not currently filtered by the UI, but reserved. |

### `Lesson`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | `string` | ✅ | Unique across all lessons. Convention: `lesson-<course-id>-<module#>-<lesson#>` |
| `slug` | `string` | ✅ | URL segment: `/courses/<slug>/lessons/<lessonSlug>`. |
| `title` | `string` | ✅ | Displayed in the lesson viewer and sidebar. |
| `type` | `'video' \| 'lesson' \| 'assignment'` | ✅ | Controls the icon shown in lesson lists. |
| `order` | `number` | ✅ | 1-based position within the module. |
| `status` | `'published' \| 'draft'` | ❌ | `'draft'` hides the lesson from published lesson lists. |
| `content` | `string` | ❌ | HTML string rendered in the lesson viewer. |
| `durationMinutes` | `number` | ❌ | Used to calculate total course duration. |
| `createdAt` | `string` | ❌ | ISO date string. |
| `updatedAt` | `string` | ❌ | ISO date string. |

---

## Step-by-step guide

### 1. Create the course folder

```
app/data/courses/<your-course-slug>/
```

Use kebab-case for the slug. The folder name must exactly match the `slug` field in `index.ts`.

### 2. Create the lesson file(s)

`app/data/courses/<your-course-slug>/<module-slug>/<lesson-slug>.ts`

```ts
import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-<your-course-slug>-1-1',
  slug: 'introduction',
  title: 'Introduction',
  type: 'lesson',
  status: 'published',
  order: 1,
  durationMinutes: 10,
  createdAt: '2026-04-24',
  updatedAt: '2026-04-24',
  content: `
    <h2>Introduction</h2>
    <p>Welcome to the course!</p>
  `,
}

export default lesson
```

### 3. Create the module index

`app/data/courses/<your-course-slug>/<module-slug>/index.ts`

```ts
import type { Module } from '~/types/course'
import introduction from './introduction'

const module1: Module = {
  id: 'module-<your-course-slug>-1',
  slug: '<module-slug>',
  title: 'Module 1: Getting Started',
  order: 1,
  status: 'published',
  lessons: [introduction],
}

export default module1
```

### 4. Create the course index

`app/data/courses/<your-course-slug>/index.ts`

```ts
import type { Course } from '~/types/course'
import module1 from './<module-slug>'

const modules = [module1]
const lessonCount = modules.reduce((sum, m) => sum + m.lessons.length, 0)

const course: Course = {
  id: 'course-<your-course-slug>',
  slug: '<your-course-slug>',
  title: 'Your Course Title',
  excerpt: 'One-line summary for catalog cards.',
  description: 'Full description shown on the course detail page.',
  difficulty: 'beginner',
  status: 'published',      // change to 'draft' to hide from the catalog
  lessonCount,
  modules,
  tags: ['your-tag'],
  instructor: 'Your Name',
  createdAt: '2026-04-24',
  updatedAt: '2026-04-24',
}

export default course
```

### 5. Register the course in the catalogue

Edit `app/data/courses/index.ts`:

```ts
// add the import
import yourCourse from './<your-course-slug>'

// add to the array
const allCourses: Course[] = [
  // ...existing courses
  yourCourse,
]
```

---

## Draft vs published

The `status` field on a `Course` controls its visibility:

| `status` value | Behavior |
|----------------|----------|
| `'published'` | Course appears in the catalog (`/courses`) and is returned by `/api/courses`. |
| `'draft'` | Course is **excluded** by `isPublishedCourse()` in `useCourses.ts` and hidden from the catalog and API. |
| *(omitted)* | Treated as `'published'` (see `isPublishedCourse` implementation). |

To **unpublish** a course, set `status: 'draft'` in its `index.ts` and restart the dev server (or rebuild for production).

Individual `Lesson` objects also have a `status` field. `isPublishedLesson()` filters draft lessons out of published lesson lists. Note that the prev/next navigation in the lesson viewer uses the **unfiltered** lesson list, so draft lessons should not be linked from published lessons in the same module.

---

## Local verification URLs

After adding a course and restarting the dev server (`npm run dev`), verify it with:

| What to check | URL |
|---------------|-----|
| Course appears in catalog | `http://localhost:3000/courses` |
| Course detail page loads | `http://localhost:3000/courses/<slug>` |
| Lesson viewer loads | `http://localhost:3000/courses/<slug>/lessons/<lessonSlug>` |
| API returns the course | `http://localhost:3000/api/courses` |
| API returns course detail | `http://localhost:3000/api/courses/<slug>` |

---

## Tips and conventions

- **IDs must be globally unique.** If two courses share a lesson or module ID, behaviour is undefined. Use the pattern `lesson-<course-slug>-<module#>-<lesson#>`.
- **Slugs must be unique** and must match the folder/file names exactly (kebab-case).
- **Prefer text-only content** in the `content` field. Embed external videos or audio only when a self-hosted alternative is available.
- **Do not add thumbnails** unless you also add the image file to `public/images/courses/`. Omitting `thumbnail` is fine — the UI falls back gracefully.
- **lessonCount must be accurate.** Derive it from the modules array rather than hardcoding it:
  ```ts
  const lessonCount = modules.reduce((sum, m) => sum + m.lessons.length, 0)
  ```
- See [`app/data/courses/example-course/`](../app/data/courses/example-course/) for a fully working minimal scaffold you can copy.
