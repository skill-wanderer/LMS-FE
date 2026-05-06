// app/data/courses/restful-api-mastery-greybox/module-4-crud-debug/quiz-debugging.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-4-5',
  slug: 'quiz-debugging',
  title: 'Quiz: Debugging',
  type: 'lesson',
  status: 'draft',
  order: 5,
  durationMinutes: 10,
  content: 'Test your debugging skills.',
})

export default lesson