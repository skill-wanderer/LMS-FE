import type { Module } from '~/types/course'
import qaInScrumCeremoniesAndCollaboration from './qa-in-scrum-ceremonies-and-collaboration'
import bugTriageAndCommunicatingImpact from './bug-triage-and-communicating-impact'
import testReportingAndReleaseSignOff from './test-reporting-and-release-sign-off'

const module8: Module = {
  id: 'module-8',
  slug: 'module-8-qa-in-agile-teams',
  title: 'Module 8: QA in Agile Teams',
  order: 8,
  lessons: [
    qaInScrumCeremoniesAndCollaboration,
    bugTriageAndCommunicatingImpact,
    testReportingAndReleaseSignOff,
  ],
}

export default module8
