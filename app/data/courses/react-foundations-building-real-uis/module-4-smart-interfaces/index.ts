import type { Module } from '~/types/course'
import lesson1 from './lesson-1-conditional-rendering'
import lesson2 from './lesson-2-dynamic-css-classes'
import lesson3 from './lesson-3-early-returns'

const module4: Module = {
  id: 'module-react-4',
  slug: 'module-4-smart-interfaces',
  title: 'Module 4: Smart Interfaces (Conditional Rendering)',
  order: 4,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
  ],
}

export default module4
