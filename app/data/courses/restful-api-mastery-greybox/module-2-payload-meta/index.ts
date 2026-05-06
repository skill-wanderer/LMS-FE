// app/data/courses/restful-api-mastery-greybox/module-2-payload-meta/index.ts

import type { Module } from '~/types/course'

import lesson1 from './json-structure-deep-dive'
import lesson2 from './request-body-vs-query-params'
import lesson3 from './response-structure-and-pagination'
import lesson4 from './assignment-build-structured-request'
import lesson5 from './quiz-payload-understanding'

const module2: Module = {
  id: 'module-rest-2',
  slug: 'module-2-payload-meta',
  title: 'Module 2: Payload & Meta',
  order: 2,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
  ],
}

export default module2