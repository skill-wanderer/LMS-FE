// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/status-codes-overview.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-1-3',
  slug: 'status-codes-overview',
  title: 'Status Codes (200, 201, 400, 401, 404, 500)',
  type: 'lesson',
  order: 3,
  durationMinutes: 10,
  content: 'Learn how to interpret HTTP status codes effectively.',
})

export default lesson