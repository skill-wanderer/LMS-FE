// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/response-structure-and-pagination.ts
import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-2-3',
  slug: 'response-structure-and-pagination',
  title: 'Response Structure & Pagination',
  type: 'lesson',
  order: 3,
  durationMinutes: 12,
  content: 'Understanding API response structures and pagination techniques.',
})

export default lesson