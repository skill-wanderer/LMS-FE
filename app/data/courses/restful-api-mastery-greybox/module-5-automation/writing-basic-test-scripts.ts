// app/data/courses/restful-api-mastery-greybox/module-5-automation/writing-basic-test-scripts.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-5-3',
  slug: 'writing-basic-test-scripts',
  title: 'Writing Basic Test Scripts',
  type: 'lesson',
  status: 'draft',
  order: 3,
  durationMinutes: 12,
  content: 'Write simple scripts to automate API tests.',
})

export default lesson