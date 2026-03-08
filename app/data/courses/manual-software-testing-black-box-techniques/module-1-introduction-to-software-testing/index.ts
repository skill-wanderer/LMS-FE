import type { Module } from '~/types/course'
import softwareTestingFundamentals from './software-testing-fundamentals'
import rootCausesOfSoftwareBugs from './root-causes-of-software-bugs'
import economicsOfSoftwareFailure from './economics-of-software-failure'
import manualVsAutomationTesting from './manual-vs-automation-testing'
import threeFundamentalTestingConcepts from './three-fundamental-testing-concepts'
import module1SummaryAndTakeaway from './module-1-summary-and-takeaway'

const module1: Module = {
  id: 'module-1',
  slug: 'module-1-introduction-to-software-testing',
  title: 'Module 1: Introduction to Software Testing',
  order: 1,
  lessons: [
    softwareTestingFundamentals,
    rootCausesOfSoftwareBugs,
    economicsOfSoftwareFailure,
    manualVsAutomationTesting,
    threeFundamentalTestingConcepts,
    module1SummaryAndTakeaway,
  ],
}

export default module1
