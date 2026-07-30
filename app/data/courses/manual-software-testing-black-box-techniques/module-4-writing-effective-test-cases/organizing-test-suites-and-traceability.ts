import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-4-4',
  slug: 'organizing-test-suites-and-traceability',
  title: 'Organizing Test Suites & Traceability: From Loose Cases to a Coverage Map',
  order: 16,
  moduleTitle: 'Module 4: Writing Effective Test Cases',
  whyItMatters: 'Individual test cases only become powerful when organized into suites and tied back to requirements. Traceability lets you answer the question every lead asks: "How do we know this requirement is actually tested?"',
  focusPoints: [
    'Group related test cases into suites for a feature, a release, or a smoke run.',
    'Build a simple requirements-to-test traceability matrix to expose coverage gaps.',
    'Prioritize which cases to run first when time is short.',
  ],
})

export default lesson
