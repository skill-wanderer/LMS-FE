import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-5',
  slug: 'lesson-1-devdash',
  title: 'Final Project: DevDash - Developer Dashboard UI',
  order: 1,
  durationMinutes: 120,
  requirement: 'Build a static, modern dashboard interface that displays user statistics, recent activity, and system alerts using reusable components and dynamic props. Assume the role of a Junior Frontend Engineer building the layout and UI components for a new internal admin dashboard from mock JSON data.',
  assignments: [
    '<strong>Layout Setup:</strong> Create the main application shell. Build a <code>Sidebar</code> component for navigation and a <code>Header</code> component for the user\'s profile summary.',
    '<strong>Data Mapping:</strong> Take an array of mock "Stat" objects (e.g., total users, server uptime, daily revenue) and map over them to render a grid of <code>StatCard</code> components.',
    '<strong>The Activity Feed:</strong> Build a <code>RecentActivity</code> list. Create a <code>ListItem</code> component that takes props for the action performed, the timestamp, and the user\'s avatar.',
    '<strong>Conditional Alerts:</strong> Build a <code>SystemAlerts</code> section. Render an array of alert messages using an <code>AlertBadge</code> component. Use conditional rendering to only show the <code>SystemAlerts</code> section if there is at least one alert in the mock data array.',
  ],
  optionalLessons: [],
  summaryAndQuizzes: [
    '<strong>Final Review:</strong> You have successfully combined Functional Components, Props passing, Array <code>.map()</code> for rendering lists, and Conditional Rendering to build a complete dashboard UI. This workflow perfectly mirrors what frontend engineers do daily.'
  ],
  status: 'published'
})

export default lesson
