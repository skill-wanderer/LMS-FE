import type { Module } from '~/types/course'
import assignmentModule3InteractionLayer from './assignment-module-3-interaction-layer'
import lesson6InteractionLayerLinksAndMedia from './lesson-6-interaction-layer-links-and-media'
import summaryQuizModule3InteractionLayer from './summary-quiz-module-3-interaction-layer'

const module3: Module = {
  id: 'module-html-3',
  slug: 'module-3-interaction-layer-links-and-media',
  title: 'Module 3: The Interaction Layer (Links & Media)',
  order: 3,
  lessons: [
    assignmentModule3InteractionLayer,
    lesson6InteractionLayerLinksAndMedia,
    summaryQuizModule3InteractionLayer,
  ],
}

export default module3
