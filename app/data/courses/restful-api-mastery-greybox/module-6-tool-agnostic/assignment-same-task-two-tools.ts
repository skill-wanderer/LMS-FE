// app/data/courses/restful-api-mastery-greybox/module-6-tool-agnostic/assignment-same-task-two-tools.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-6-4',
  slug: 'assignment-same-task-two-tools',
  title: 'Assignment: Solve Same Task in 2 Tools',
  type: 'assignment',
  status: 'draft',
  order: 4,
  durationMinutes: 20,
  content: 'Complete the same API task using different tools.',
})

export default lesson