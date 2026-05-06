// app/data/courses/restful-api-mastery-greybox/module-5-automation/index.ts

import type { Module } from '~/types/course'

import lesson1 from './intro-to-api-automation'
import lesson2 from './using-postman-for-testing'
import lesson3 from './writing-basic-test-scripts'
import lesson4 from './assignment-automate-api-test'
import lesson5 from './quiz-automation-basics'

const module5: Module = {
  id: 'module-rest-5',
  slug: 'module-5-automation',
  title: 'Module 5: Automation',
  order: 5,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
  ],
}

export default module5