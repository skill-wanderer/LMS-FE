// app/data/courses/restful-api-mastery-greybox/index.ts

import type { Course } from '~/types/course'
import { reiReltroner } from '~/data/authors'

import module1 from './module-1-rest-anatomy'
import module2 from './module-2-payload-meta'
import module3 from './module-3-security'
import module4 from './module-4-crud-debug'
import module5 from './module-5-automation'
import module6 from './module-6-tool-agnostic'

// 🔓 open lesson (sementara kosong, isi nanti di phase berikutnya)
const OPEN_LESSON_SLUGS = new Set<string>([
  'what-is-rest-and-greybox-thinking'
])

const modules = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
].map(moduleItem => ({
  ...moduleItem,
  lessons: moduleItem.lessons.map(lesson => ({
    ...lesson,
    status: OPEN_LESSON_SLUGS.has(lesson.slug)
      ? ('published' as const)
      : ('draft' as const),
  })),
}))

const lessonCount = modules.reduce(
  (sum, moduleItem) => sum + moduleItem.lessons.length,
  0,
)

const course: Course = {
  id: 'course-restful-api-mastery-greybox',
  slug: 'restful-api-mastery-greybox',

  title: 'RESTful API Mastery: The Greybox Approach',

  excerpt:
    'Master the language of the web by understanding, debugging, and interacting with APIs using a greybox approach across tools and real-world scenarios.',

  description:
    `Master the language of the web. You don't need to build the backend to understand it.

This course transforms beginners into intermediate problem-solvers who can communicate, debug, and exploit APIs using industry-standard tools and a deep understanding of HTTP mechanics.

You will learn through a greybox approach:
- Understanding REST anatomy (Headers, Params, Body, Cookies, Cache)
- Handling security and authorization (API Keys, JWT, Auth flows)
- Debugging APIs through input/output analysis without backend access
- Mastering tools across GUI (Postman, Insomnia) and CLI (cURL, HTTPie)

Two learning paths are available:
- Visual Explorer (GUI-driven tools)
- Terminal Hacker (CLI & code-driven approach)

By the end of this course, you will not just "use APIs" — you will understand how they behave, how they fail, and how to control them.`,

  thumbnail: '/images/courses/restful-api-mastery.webp',

  difficulty: 'beginner',
  status: 'published',

  lessonCount,
  modules,

  tags: [
    'api',
    'rest',
    'backend',
    'qa',
    'debugging',
    'automation',
    'postman',
    'curl',
  ],

  instructor: 'Skill-Wanderer',
  author: reiReltroner,

  createdAt: '2026-04-08',
  updatedAt: '2026-04-08',
}

export default course