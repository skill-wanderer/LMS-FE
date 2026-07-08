import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-4-3',
  slug: 'positive-and-negative-test-cases',
  title: 'Positive & Negative Test Cases: Proving It Works AND Proving It Fails Safely',
  order: 15,
  moduleTitle: 'Module 4: Writing Effective Test Cases',
  whyItMatters: 'Confirming the happy path is only half the job. Negative test cases — bad input, wrong order, missing data — are where most real defects hide, and writing them deliberately is a core testing skill.',
  focusPoints: [
    'Distinguish positive (valid) from negative (invalid) test cases and why you need both.',
    'Design negative cases that check the system fails gracefully, not just that it fails.',
    'Balance coverage so a feature has enough negative cases without exploding the test set.',
  ],
})

export default lesson
