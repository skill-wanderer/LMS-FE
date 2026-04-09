// app/data/courses/restful-api-mastery-greybox/module-4-crud-debug/index.ts

import type { Module } from '~/types/course'

const module4: Module = {
  id: 'module-rest-4',
  slug: 'module-4-crud-debug',
  title: 'Module 4: CRUD & Debug',
  order: 4,
  lessons: [
    {
        id: 'lesson-rest-4-1',
        slug: 'crud-operations-in-practice',
        title: 'CRUD Operations in Practice',
        type: 'lesson',
        order: 1,
        durationMinutes: 10,
        content: 'Learn how CRUD operations work in real APIs.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-4-2',
        slug: 'error-handling-strategy',
        title: 'Error Handling Strategy',
        type: 'lesson',
        order: 2,
        durationMinutes: 10,
        content: 'Understand how to handle API errors effectively.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-4-3',
        slug: 'debugging-api-failures',
        title: 'Debugging API Failures',
        type: 'lesson',
        order: 3,
        durationMinutes: 12,
        content: 'Learn techniques to debug failing API requests.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-4-4',
        slug: 'assignment-debug-broken-api',
        title: 'Assignment: Debug Broken API',
        type: 'assignment',
        order: 4,
        durationMinutes: 20,
        content: 'Fix issues in a broken API workflow.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-4-5',
        slug: 'quiz-debugging',
        title: 'Quiz: Debugging',
        type: 'lesson',
        order: 5,
        durationMinutes: 10,
        content: 'Test your debugging skills.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
  ],
}

export default module4