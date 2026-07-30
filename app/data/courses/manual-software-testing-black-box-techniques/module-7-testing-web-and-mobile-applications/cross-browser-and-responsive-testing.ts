import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-7-2',
  slug: 'cross-browser-and-responsive-testing',
  title: 'Cross-Browser & Responsive Testing: One App, Every Screen',
  order: 24,
  moduleTitle: 'Module 7: Testing Web & Mobile Applications',
  whyItMatters: 'Your users do not all run the latest Chrome on a large monitor. Layouts collapse, buttons vanish, and features break differently across browsers and screen sizes — and it is QA\'s job to find out where.',
  focusPoints: [
    'Build a browser and device matrix based on risk instead of testing everything everywhere.',
    'Use browser dev tools to simulate viewports, touch input, and network throttling.',
    'Recognize and report layout, rendering, and behavior differences with clear evidence.',
  ],
})

export default lesson
