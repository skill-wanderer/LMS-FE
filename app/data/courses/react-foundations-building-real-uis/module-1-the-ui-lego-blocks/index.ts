import type { Module } from '~/types/course'
import lesson1 from './lesson-1-components-and-props'
import lesson2 from './lesson-2-passing-children'
import lesson3 from './lesson-3-styling-components'

const module1: Module = {
  id: 'module-react-1',
  slug: 'module-1-the-ui-lego-blocks',
  title: 'Module 1: The UI Lego Blocks (Components & Props)',
  order: 1,
  lessons: [
    lesson1,
    lesson2,
    lesson3,
  ],
}

export default module1
