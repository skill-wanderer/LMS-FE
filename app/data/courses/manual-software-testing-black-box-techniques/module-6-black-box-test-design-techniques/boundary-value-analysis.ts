import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-6-2',
  slug: 'boundary-value-analysis',
  title: 'Boundary Value Analysis: Hunting Bugs Where They Hide',
  order: 19,
  moduleTitle: 'Module 6: Black Box Test Design Techniques',
  whyItMatters: 'Most defects live at the edges of input ranges — the off-by-one mistakes developers make around minimums, maximums, and limits. Boundary value analysis aims your test cases exactly where bugs cluster.',
  focusPoints: [
    'Identify the boundaries of every input range, length limit, and date window.',
    'Test at, just below, and just above each boundary to expose off-by-one defects.',
    'Combine boundary value analysis with equivalence partitioning into one compact test set.',
  ],
})

export default lesson
