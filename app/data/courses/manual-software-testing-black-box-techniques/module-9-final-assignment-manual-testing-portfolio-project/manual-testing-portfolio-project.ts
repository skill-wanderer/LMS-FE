import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-9-1',
  slug: 'manual-testing-portfolio-project',
  title: 'Final Assignment: Manual Testing Portfolio Project',
  order: 30,
  moduleTitle: 'Module 9: Final Assignment — Manual Testing Portfolio Project',
  type: 'assignment',
  durationMinutes: 840,
  whyItMatters: 'This capstone ties the whole course together: you plan, design, execute, and report a complete manual testing effort against a real application — producing a portfolio artifact you can show in QA job interviews.',
  focusPoints: [
    'Analyze requirements and build a risk-based test plan for a real application.',
    'Design test cases using the black box techniques from Module 6.',
    'Execute scripted and exploratory testing, logging professional bug reports.',
    'Deliver a final test report with coverage, defects, and a go/no-go recommendation.',
  ],
})

export default lesson
