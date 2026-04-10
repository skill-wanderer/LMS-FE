// app/data/courses/restful-api-mastery-greybox/module-4-crud-debug/crud-operations-in-practice.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-4-1',
  slug: 'crud-operations-in-practice',
  title: 'CRUD Operations in Practice',
  type: 'lesson',
  order: 1,
  durationMinutes: 10,
  content: 'Learn how CRUD operations work in real APIs.',
})

export default lesson