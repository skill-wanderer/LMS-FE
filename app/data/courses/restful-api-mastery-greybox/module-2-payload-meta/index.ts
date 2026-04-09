// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/index.ts

import type { Module } from '~/types/course'

const module2: Module = {
  id: 'module-rest-2',
  slug: 'module-2-payload-meta',
  title: 'Module 2: Payload & Meta',
  order: 2,
  lessons: [
    {
        id: 'lesson-rest-2-1',
        slug: 'json-structure-deep-dive',
        title: 'JSON Structure Deep Dive',
        type: 'lesson',
        order: 1,
        durationMinutes: 10,
        content: 'Understanding JSON structure and nested data.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-2-2',
        slug: 'request-body-vs-query-params',
        title: 'Request Body vs Query Params',
        type: 'lesson',
        order: 2,
        durationMinutes: 10,
        content: 'Learn the difference between body payload and query parameters.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-2-3',
        slug: 'response-structure-and-pagination',
        title: 'Response Structure & Pagination',
        type: 'lesson',
        order: 3,
        durationMinutes: 12,
        content: 'Understanding API response structures and pagination techniques.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-2-4',
        slug: 'assignment-build-structured-request',
        title: 'Assignment: Build Structured Request',
        type: 'assignment',
        order: 4,
        durationMinutes: 20,
        content: 'Build a structured API request using proper JSON and parameters.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-2-5',
        slug: 'quiz-payload-understanding',
        title: 'Quiz: Payload Understanding',
        type: 'lesson',
        order: 5,
        durationMinutes: 10,
        content: 'Test your understanding of payload structures.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
  ],
}

export default module2