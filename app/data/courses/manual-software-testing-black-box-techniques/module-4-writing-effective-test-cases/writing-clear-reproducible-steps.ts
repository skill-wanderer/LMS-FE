import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-4-2',
  slug: 'writing-clear-reproducible-steps',
  title: 'Writing Clear, Reproducible Steps: So Anyone Can Follow Your Test',
  order: 14,
  moduleTitle: 'Module 4: Writing Effective Test Cases',
  whyItMatters: 'A test case that only you can run is a liability. Clear, atomic steps let any teammate reproduce a result — and let a developer reproduce a bug — without asking you what you meant.',
  focusPoints: [
    'Write one action per step, in the order a user would actually perform them.',
    'Specify exact test data instead of vague phrases like "enter a valid value".',
    'Separate the steps from the expected result so pass/fail is never ambiguous.',
  ],
})

export default lesson
