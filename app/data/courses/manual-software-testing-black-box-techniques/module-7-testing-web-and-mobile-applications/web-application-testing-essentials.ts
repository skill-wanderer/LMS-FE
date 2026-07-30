import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-7-1',
  slug: 'web-application-testing-essentials',
  title: 'Web Application Testing Essentials: Forms, Links, Sessions & Errors',
  order: 23,
  moduleTitle: 'Module 7: Testing Web & Mobile Applications',
  whyItMatters: 'Web apps fail in web-specific ways: broken navigation, lost sessions, stale caches, and forms that silently swallow data. A systematic web testing routine catches these before your users do.',
  focusPoints: [
    'Work through a repeatable checklist for forms, validation messages, links, and navigation.',
    'Test session behavior: timeouts, logout, the back button, and multiple open tabs.',
    'Verify error pages, empty states, and slow-network behavior instead of only the happy path.',
  ],
})

export default lesson
