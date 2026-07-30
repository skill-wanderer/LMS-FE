import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-6-3',
  slug: 'decision-table-testing',
  title: 'Decision Table Testing: Taming Complex Business Rules',
  order: 20,
  moduleTitle: 'Module 6: Black Box Test Design Techniques',
  whyItMatters: 'When multiple conditions combine — discounts, permissions, shipping rules — intuition alone misses combinations. Decision tables force every combination of conditions into the open so nothing slips through untested.',
  focusPoints: [
    'Translate written business rules into a table of conditions and expected actions.',
    'Spot contradictions, gaps, and impossible combinations in the requirements themselves.',
    'Reduce a full decision table to a practical, prioritized set of test cases.',
  ],
})

export default lesson
