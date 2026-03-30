import type { Module } from '~/types/course'
import assignmentModule4InputEngine from './assignment-module-4-input-engine'
import lesson7InputEngineFormsAndValidations from './lesson-7-input-engine-forms-and-validations'
import summaryQuizModule4InputEngine from './summary-quiz-module-4-input-engine'

const module4: Module = {
  id: 'module-html-4',
  slug: 'module-4-input-engine-forms-and-validations',
  title: 'Module 4: The Input Engine (Forms & Validations)',
  order: 4,
  lessons: [
    assignmentModule4InputEngine,
    lesson7InputEngineFormsAndValidations,
    summaryQuizModule4InputEngine,
  ],
}

export default module4
