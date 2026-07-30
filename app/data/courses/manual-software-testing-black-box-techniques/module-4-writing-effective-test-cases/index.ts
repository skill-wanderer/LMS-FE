import type { Module } from '~/types/course'
import anatomyOfATestCase from './anatomy-of-a-test-case'
import writingClearReproducibleSteps from './writing-clear-reproducible-steps'
import positiveAndNegativeTestCases from './positive-and-negative-test-cases'
import organizingTestSuitesAndTraceability from './organizing-test-suites-and-traceability'

const module4: Module = {
  id: 'module-4',
  slug: 'module-4-writing-effective-test-cases',
  title: 'Module 4: Writing Effective Test Cases',
  order: 4,
  lessons: [
    anatomyOfATestCase,
    writingClearReproducibleSteps,
    positiveAndNegativeTestCases,
    organizingTestSuitesAndTraceability,
  ],
}

export default module4
