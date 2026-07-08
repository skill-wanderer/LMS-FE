import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-4-1',
  slug: 'anatomy-of-a-test-case',
  title: 'Anatomy of a Test Case: The Building Blocks of Repeatable Testing',
  order: 13,
  moduleTitle: 'Module 4: Writing Effective Test Cases',
  whyItMatters: 'A test case is a contract: anyone on the team should be able to run it and get the same result. Knowing the standard fields — id, title, preconditions, steps, test data, and expected result — is what separates a professional test case from a vague note.',
  focusPoints: [
    'Identify the standard fields of a test case and what each one is for.',
    'Write a clear precondition and a single, unambiguous expected result.',
    'Turn a loose requirement into one well-formed, self-contained test case.',
  ],
})

export default lesson
