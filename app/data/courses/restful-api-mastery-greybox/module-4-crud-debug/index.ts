// app/data/courses/restful-api-mastery-greybox/module-4-crud-debug/index.ts

import type { Module } from '~/types/course'

import lesson1 from './crud-operations-in-practice'
import lesson2 from './error-handling-strategy'
import lesson3 from './debugging-api-failures'
import lesson4 from './assignment-debug-broken-api'
import lesson5 from './quiz-debugging'

const module4: Module = {
  id: 'module-rest-4',
  slug: 'module-4-crud-debug',
  title: 'Module 4: CRUD & Debug',
  order: 4,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
  ],
}

export default module4