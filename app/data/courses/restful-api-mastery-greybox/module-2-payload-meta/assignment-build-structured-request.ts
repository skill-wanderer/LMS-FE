// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/assignment-build-structured-request.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-2-4',
  slug: 'assignment-build-structured-request',
  title: 'Assignment: Build Structured Request',
  type: 'assignment',
  status: 'draft',
  order: 4,
  durationMinutes: 20,
  content: 'Build a structured API request using proper JSON and parameters.',
})

export default lesson