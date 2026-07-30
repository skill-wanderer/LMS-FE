import type { Module } from '~/types/course'
import equivalencePartitioning from './equivalence-partitioning'
import boundaryValueAnalysis from './boundary-value-analysis'
import decisionTableTesting from './decision-table-testing'
import stateTransitionTesting from './state-transition-testing'
import errorGuessingAndExperienceBasedTechniques from './error-guessing-and-experience-based-techniques'

const module6: Module = {
  id: 'module-6',
  slug: 'module-6-black-box-test-design-techniques',
  title: 'Module 6: Black Box Test Design Techniques',
  order: 6,
  lessons: [
    equivalencePartitioning,
    boundaryValueAnalysis,
    decisionTableTesting,
    stateTransitionTesting,
    errorGuessingAndExperienceBasedTechniques,
  ],
}

export default module6
