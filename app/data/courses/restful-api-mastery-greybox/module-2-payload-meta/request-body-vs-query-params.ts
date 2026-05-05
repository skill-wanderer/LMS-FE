// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/request-body-vs-query-params.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-2-2',
  slug: 'request-body-vs-query-params',
  title: 'Request Body vs Query Params',
  type: 'lesson',
  status: 'draft',
  order: 2,
  durationMinutes: 10,
  content: 'Learn the difference between body payload and query parameters.',
})

export default lesson