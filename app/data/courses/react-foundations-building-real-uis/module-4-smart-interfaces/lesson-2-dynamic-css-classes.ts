import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-4-2',
  slug: 'lesson-2-dynamic-css-classes',
  title: 'Dynamic CSS Classes',
  order: 2,
  durationMinutes: 30,
  requirement: 'Learn how to use conditional logic to toggle CSS classes (e.g., adding an "active" class to a clicked button).',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>ToggleButton</code>. Use state to track a boolean. If true, apply a <code>btn-active</code> class. If false, apply a <code>btn-inactive</code> class.',
    '<strong>Slightly improved version:</strong> Instead of completely swapping classes, keep a base <code>btn</code> class always applied, and append the dynamic class using template literals: <code>`btn ${isActive ? "btn-active" : ""}`</code>.',
    '<strong>Practical real-world component:</strong> Build a <code>TabNavigation</code> component with 3 tabs. Use state to track the active tab index. Map over an array of tab names, applying an "active" class only to the currently selected tab.',
    '<strong>"The Escalation":</strong> Create a <code>PasswordStrength</code> indicator. As the user types in an input, calculate the length. Apply "weak" (red), "medium" (yellow), or "strong" (green) classes to a progress bar div based on the length.',
  ],
  optionalLessons: [
    '<strong>Template Literals:</strong> The easiest way to combine static and dynamic classes in JSX is using backticks and `${}`.',
    '<strong>Boolean Logic:</strong> You can use standard ternary operators directly inside the `className` string.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Dynamic classes bridge the gap between React\'s state and CSS\'s visual styling, allowing your UI to react visually to data changes.',
    '<strong>Why it works in React:</strong> When state changes, React recalculates the `className` string and updates the DOM element\'s class attribute, triggering the browser to apply the new CSS rules.',
    '<strong>Challenge question:</strong> How would you write the `className` prop using template literals to always include "card" and conditionally include "card-highlighted" if `isNew` is true?',
  ],
  status: 'published'
})

export default lesson
