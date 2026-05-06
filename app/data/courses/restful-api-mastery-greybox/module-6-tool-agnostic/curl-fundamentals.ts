// app/data/courses/restful-api-mastery-greybox/module-6-tool-agnostic/curl-fundamentals.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-6-2',
  slug: 'curl-fundamentals',
  title: 'cURL Fundamentals',
  type: 'lesson',
  status: 'draft',
  order: 2,
  durationMinutes: 10,
  content: 'Learn how to use cURL for API interaction.',
})

export default lesson