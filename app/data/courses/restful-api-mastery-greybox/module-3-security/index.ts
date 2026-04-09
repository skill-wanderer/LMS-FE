// app/data/courses/restful-api-mastery-greybox/module-3-security/index.ts

import type { Module } from '~/types/course'

const module3: Module = {
  id: 'module-rest-3',
  slug: 'module-3-security',
  title: 'Module 3: Security',
  order: 3,
  lessons: [
    {
        id: 'lesson-rest-3-1',
        slug: 'authentication-vs-authorization',
        title: 'Authentication vs Authorization',
        type: 'lesson',
        order: 1,
        durationMinutes: 10,
        content: 'Understand the difference between authentication and authorization.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-3-2',
        slug: 'bearer-token-and-api-key',
        title: 'Bearer Token & API Key',
        type: 'lesson',
        order: 2,
        durationMinutes: 10,
        content: 'Learn how API keys and bearer tokens work.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-3-3',
        slug: 'common-security-pitfalls',
        title: 'Common Security Pitfalls',
        type: 'lesson',
        order: 3,
        durationMinutes: 12,
        content: 'Explore common mistakes in API security.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-3-4',
        slug: 'assignment-secure-api-call',
        title: 'Assignment: Secure API Call',
        type: 'assignment',
        order: 4,
        durationMinutes: 20,
        content: 'Implement a secure API call using authentication.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-3-5',
        slug: 'quiz-api-security',
        title: 'Quiz: API Security',
        type: 'lesson',
        order: 5,
        durationMinutes: 10,
        content: 'Test your knowledge of API security concepts.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
  ],
}

export default module3