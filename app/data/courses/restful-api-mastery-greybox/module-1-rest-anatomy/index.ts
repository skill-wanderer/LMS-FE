// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/index.ts

import type { Module } from '~/types/course'

import lesson0 from './introduction-to-rest-api'
import lesson1 from './what-is-rest-and-greybox-thinking'
import lesson2 from './http-methods-get-post-put-delete'
import lesson3 from './status-codes-overview'
import lesson4 from './headers-basics'
import lesson5 from './assignment-analyze-public-api'
import lesson6 from './quiz-rest-fundamentals'

const module1: Module = {
  id: 'module-rest-1',
  slug: 'module-1-rest-anatomy',
  title: 'Module 1: REST Anatomy',
  order: 1,
  lessons: [
    lesson0,
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
  ],
}

export default module1