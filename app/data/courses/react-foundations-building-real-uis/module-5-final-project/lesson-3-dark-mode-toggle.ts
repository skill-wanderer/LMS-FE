import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-5-3',
  slug: 'lesson-3-dark-mode-toggle',
  title: 'Project Feature: Global Dark Mode Toggle',
  order: 3,
  durationMinutes: 45,
  requirement: 'Expand the DevDash project by adding a global Dark Mode toggle button that changes the color scheme of the entire dashboard.',
  assignments: [
    '<strong>Global State:</strong> In the very top-level component of your DevDash app (usually <code>App</code> or <code>DashboardLayout</code>), create a boolean state variable called <code>isDarkMode</code>.',
    '<strong>The Toggle Button:</strong> Build a <code>ThemeToggle</code> button component. Place it in the <code>Header</code> component. Pass the <code>isDarkMode</code> state and setter down as props so the button can flip the value.',
    '<strong>Dynamic Base Class:</strong> On the main wrapper <code>&lt;div&gt;</code> of the entire application, use template literals to append a <code>dark-theme</code> class if <code>isDarkMode</code> is true.',
    '<strong>CSS Variables:</strong> (CSS Task) Ensure your CSS uses variables for background and text colors, and define what those variables look like when inside a <code>.dark-theme</code> container.',
  ],
  optionalLessons: [
    '<strong>Prop Drilling:</strong> Passing state down through multiple levels of components (like from Layout to Header to ToggleButton) is called prop drilling. For small apps, this is completely normal.',
  ],
  summaryAndQuizzes: [
    '<strong>Feature Review:</strong> Global state changes affect the entire application. By toggling a single class on the root element, you can completely reskin an application.',
  ],
  status: 'published'
})

export default lesson
