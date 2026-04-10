// app/data/courses/restful-api-mastery-greybox/module-6-tool-agnostic/index.ts

import type { Module } from '~/types/course'

import lesson1 from './cli-vs-gui-philosophy'
import lesson2 from './curl-fundamentals'
import lesson3 from './comparing-tools'
import lesson4 from './assignment-same-task-two-tools'
import lesson5 from './final-reflection'

const module6: Module = {
  id: 'module-rest-6',
  slug: 'module-6-tool-agnostic',
  title: 'Module 6: Tool Agnosticism',
  order: 6,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
  ],
}

export default module6