// app/data/courses/restful-api-mastery-greybox/module-5-automation/index.ts

import type { Module } from '~/types/course'

const module5: Module = {
  id: 'module-rest-5',
  slug: 'module-5-automation',
  title: 'Module 5: Automation',
  order: 5,
  lessons: [
    {
        id: 'lesson-rest-5-1',
        slug: 'intro-to-api-automation',
        title: 'Intro to API Automation',
        type: 'lesson',
        order: 1,
        durationMinutes: 10,
        content: 'Introduction to automating API workflows.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-5-2',
        slug: 'using-postman-for-testing',
        title: 'Using Postman for Testing',
        type: 'lesson',
        order: 2,
        durationMinutes: 12,
        content: 'Learn how to test APIs using Postman.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-5-3',
        slug: 'writing-basic-test-scripts',
        title: 'Writing Basic Test Scripts',
        type: 'lesson',
        order: 3,
        durationMinutes: 12,
        content: 'Write simple scripts to automate API tests.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-5-4',
        slug: 'assignment-automate-api-test',
        title: 'Assignment: Automate API Test',
        type: 'assignment',
        order: 4,
        durationMinutes: 20,
        content: 'Automate a real API testing workflow.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
    {
        id: 'lesson-rest-5-5',
        slug: 'quiz-automation-basics',
        title: 'Quiz: Automation Basics',
        type: 'lesson',
        order: 5,
        durationMinutes: 10,
        content: 'Test your automation knowledge.',
        status: 'published',
        createdAt: '2026-04-08',
        updatedAt: '2026-04-08',
    },
  ],
}

export default module5