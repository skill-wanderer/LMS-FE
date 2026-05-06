import type { Module } from '~/types/course'
import lesson1 from './lesson-1-devdash'
import lesson2 from './lesson-2-interactive-filtering'
import lesson3 from './lesson-3-dark-mode-toggle'

const module5: Module = {
  id: 'module-react-5',
  slug: 'module-5-final-project',
  title: 'Module 5: Final Project - DevDash',
  order: 5,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
  ],
}

export default module5
