import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-7-3',
  slug: 'mobile-application-testing-essentials',
  title: 'Mobile Application Testing Essentials: Gestures, Interrupts & Real Devices',
  order: 25,
  moduleTitle: 'Module 7: Testing Web & Mobile Applications',
  whyItMatters: 'Mobile apps live in a hostile environment: incoming calls, dropped connections, low battery, rotation, and background kills. Testing only the feature is not enough — you must test the feature surviving the phone.',
  focusPoints: [
    'Test mobile-specific interactions: gestures, rotation, keyboard behavior, and permissions.',
    'Design interrupt tests: calls, notifications, network loss, and app backgrounding mid-flow.',
    'Understand the trade-offs between emulators and real devices for manual testing.',
  ],
})

export default lesson
