// app/data/courses/restful-api-mastery-greybox/module-6-tool-agnostic/index.ts

import type { Module } from '~/types/course'

const module6: Module = {
  id: 'module-rest-6',
  slug: 'module-6-tool-agnostic',
  title: 'Module 6: Tool Agnosticism',
  order: 6,
  lessons: [
    {
        id: 'lesson-rest-6-1',
        slug: 'cli-vs-gui-philosophy',
        title: 'CLI vs GUI Philosophy',
        type: 'lesson',
        order: 1,
        durationMinutes: 8,
        content: 'Understand different approaches to working with APIs.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-6-2',
        slug: 'curl-fundamentals',
        title: 'cURL Fundamentals',
        type: 'lesson',
        order: 2,
        durationMinutes: 10,
        content: 'Learn how to use cURL for API interaction.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-6-3',
        slug: 'comparing-tools',
        title: 'Comparing Tools (Postman vs CLI)',
        type: 'lesson',
        order: 3,
        durationMinutes: 10,
        content: 'Compare different tools for API testing.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-6-4',
        slug: 'assignment-same-task-two-tools',
        title: 'Assignment: Solve Same Task in 2 Tools',
        type: 'assignment',
        order: 4,
        durationMinutes: 20,
        content: 'Complete the same API task using different tools.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-6-5',
        slug: 'final-reflection',
        title: 'Final Reflection',
        type: 'lesson',
        order: 5,
        durationMinutes: 10,
        content: 'Reflect on your API learning journey.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
  ],
}

export default module6