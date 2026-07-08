import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-8-3',
  slug: 'test-reporting-and-release-sign-off',
  title: 'Test Reporting & Release Sign-Off: The Confidence Score',
  order: 29,
  moduleTitle: 'Module 8: QA in Agile Teams',
  whyItMatters: 'QA does not "approve" releases — QA informs them. A good test report tells the business what was tested, what was not, and what risks remain, so the go/no-go decision is made with open eyes.',
  focusPoints: [
    'Summarize test coverage, results, and known risks in a report stakeholders actually read.',
    'Communicate what was NOT tested as clearly as what was.',
    'Give a defensible go/no-go recommendation under deadline pressure.',
  ],
})

export default lesson
