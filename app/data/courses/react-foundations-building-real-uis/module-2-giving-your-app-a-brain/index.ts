import type { Module } from '~/types/course'
import lesson1 from './lesson-1-state-and-events'
import lesson2 from './lesson-2-forms-and-inputs'
import lesson3 from './lesson-3-multiple-states'

const module2: Module = {
  id: 'module-react-2',
  slug: 'module-2-giving-your-app-a-brain',
  title: 'Module 2: Giving Your App a Brain (State & Events)',
  order: 2,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
  ],
}

export default module2
