import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-7-4',
  slug: 'usability-and-accessibility-checks',
  title: 'Usability & Accessibility Checks: Testing for Every User',
  order: 26,
  moduleTitle: 'Module 7: Testing Web & Mobile Applications',
  whyItMatters: 'A feature that works but confuses or excludes users is still broken. Basic usability and accessibility checks let a manual tester speak for users who are rushed, non-technical, or relying on assistive technology.',
  focusPoints: [
    'Run quick usability heuristics: clarity of labels, feedback after actions, and recoverability from mistakes.',
    'Perform keyboard-only navigation and screen-reader smoke checks on key flows.',
    'Report usability and accessibility findings persuasively, with user impact front and center.',
  ],
})

export default lesson
