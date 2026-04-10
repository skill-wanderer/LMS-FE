// app/data/courses/restful-api-mastery-greybox/module-5-automation/intro-to-api-automation.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-5-1',
  slug: 'intro-to-api-automation',
  title: 'Intro to API Automation',
  type: 'lesson',
  order: 1,
  durationMinutes: 10,
  content: 'Introduction to automating API workflows.',
})

export default lesson