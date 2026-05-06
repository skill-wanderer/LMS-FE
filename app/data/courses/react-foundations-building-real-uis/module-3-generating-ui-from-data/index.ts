import type { Module } from '~/types/course'
import lesson1 from './lesson-1-rendering-lists'
import lesson2 from './lesson-2-empty-states'
import lesson3 from './lesson-3-filtering-lists'

const module3: Module = {
  id: 'module-react-3',
  slug: 'module-3-generating-ui-from-data',
  title: 'Module 3: Generating UI from Data (Rendering Lists)',
  order: 3,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
  ],
}

export default module3
