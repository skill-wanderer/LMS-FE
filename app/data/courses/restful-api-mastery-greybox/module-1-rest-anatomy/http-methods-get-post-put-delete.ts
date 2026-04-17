// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/http-methods-get-post-put-delete.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-1-2',
  slug: 'http-methods-get-post-put-delete',
  title: 'HTTP Methods (GET, POST, PUT, DELETE)',
  type: 'lesson',
  status: 'draft',
  order: 2,
  durationMinutes: 12,
  content: 'Understanding core HTTP methods and their usage.',
})

export default lesson