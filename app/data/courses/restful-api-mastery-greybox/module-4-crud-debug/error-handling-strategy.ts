// app/data/courses/restful-api-mastery-greybox/module-4-crud-debug/error-handling-strategy.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-4-2',
  slug: 'error-handling-strategy',
  title: 'Error Handling Strategy',
  type: 'lesson',
  status: 'draft',
  order: 2,
  durationMinutes: 10,
  content: 'Understand how to handle API errors effectively.',
})

export default lesson