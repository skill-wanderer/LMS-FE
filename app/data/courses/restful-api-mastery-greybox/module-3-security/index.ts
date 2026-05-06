// app/data/courses/restful-api-mastery-greybox/module-3-security/index.ts

import type { Module } from '~/types/course'

import lesson1 from './authentication-vs-authorization'
import lesson2 from './bearer-token-and-api-key'
import lesson3 from './common-security-pitfalls'
import lesson4 from './assignment-secure-api-call'
import lesson5 from './quiz-api-security'

const module3: Module = {
  id: 'module-rest-3',
  slug: 'module-3-security',
  title: 'Module 3: Security',
  order: 3,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
  ],
}

export default module3