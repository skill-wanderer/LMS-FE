// app/data/courses/restful-api-mastery-greybox/module-5-automation/assignment-automate-api-test.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-5-4',
  slug: 'assignment-automate-api-test',
  title: 'Assignment: Automate API Test',
  type: 'assignment',
  status: 'draft',
  order: 4,
  durationMinutes: 20,
  content: 'Automate a real API testing workflow.',
})

export default lesson