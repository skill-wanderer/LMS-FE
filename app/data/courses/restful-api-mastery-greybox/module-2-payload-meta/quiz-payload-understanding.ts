// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/quiz-payload-understanding.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-2-5',
  slug: 'quiz-payload-understanding',
  title: 'Quiz: Payload Understanding',
  type: 'lesson',
  order: 5,
  durationMinutes: 10,
  content: 'Test your understanding of payload structures.',
})

export default lesson