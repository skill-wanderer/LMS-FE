// app/data/courses/restful-api-mastery-greybox/module-5-automation/using-postman-for-testing.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-5-2',
  slug: 'using-postman-for-testing',
  title: 'Using Postman for Testing',
  type: 'lesson',
  status: 'draft',
  order: 2,
  durationMinutes: 12,
  content: 'Learn how to test APIs using Postman.',
})

export default lesson