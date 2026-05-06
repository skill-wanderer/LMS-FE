// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/json-structure-deep-dive.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-2-1',
  slug: 'json-structure-deep-dive',
  title: 'JSON Structure Deep Dive',
  type: 'lesson',
  status: 'draft',
  order: 1,
  durationMinutes: 10,
  content: 'Understanding JSON structure and nested data.',
})

export default lesson