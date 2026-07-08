import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-6-1',
  slug: 'equivalence-partitioning',
  title: 'Equivalence Partitioning: Testing Smarter with Fewer Test Cases',
  order: 18,
  moduleTitle: 'Module 6: Black Box Test Design Techniques',
  whyItMatters: 'You can never test every possible input. Equivalence partitioning lets you divide inputs into groups that behave the same way, so one well-chosen test case can stand in for thousands.',
  focusPoints: [
    'Split input data into valid and invalid partitions that the system treats identically.',
    'Pick one representative value per partition instead of exhaustively testing everything.',
    'Apply the technique to a real form field and justify why your test set is sufficient.',
  ],
})

export default lesson
