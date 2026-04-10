// app/data/courses/restful-api-mastery-greybox/module-4-crud-debug/debugging-api-failures.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-4-3',
  slug: 'debugging-api-failures',
  title: 'Debugging API Failures',
  type: 'lesson',
  order: 3,
  durationMinutes: 12,
  content: 'Learn techniques to debug failing API requests.',
})

export default lesson