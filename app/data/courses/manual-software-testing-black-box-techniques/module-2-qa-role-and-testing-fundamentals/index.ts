import type { Module } from '~/types/course'
import theQualityMindset from './the-quality-mindset-fundamentals-of-software-assurance'
import softwareQualityEvolution from './software-quality-evolution-transitioning-from-tester-to-qa-engineer'
import testingThroughoutSdlc from './testing-throughout-the-sdlc'
import waterfallVsAgile from './waterfall-vs-agile-a-guide-for-black-box-testers'
import shiftLeftTesting from './shift-left-testing-for-black-box-testers'

const module2: Module = {
  id: 'module-2',
  slug: 'module-2-qa-role-and-testing-fundamentals',
  title: 'Module 2: QA Role & Testing Fundamentals',
  order: 2,
  lessons: [
    theQualityMindset,
    softwareQualityEvolution,
    testingThroughoutSdlc,
    waterfallVsAgile,
    shiftLeftTesting,
  ],
}

export default module2
