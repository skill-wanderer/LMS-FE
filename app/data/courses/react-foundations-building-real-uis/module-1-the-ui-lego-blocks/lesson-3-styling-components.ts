import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-1-3',
  slug: 'lesson-3-styling-components',
  title: 'Styling Basics in React',
  order: 3,
  durationMinutes: 30,
  requirement: 'Learn the difference between inline styles (using JavaScript objects) and standard CSS classes (using the `className` attribute) in React.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>DangerButton</code> component that uses an inline style object to make its background red and text white.',
    '<strong>Slightly improved version:</strong> Convert the <code>DangerButton</code> to use a standard CSS class called <code>btn-danger</code> instead of inline styles.',
    '<strong>Practical real-world component:</strong> Build a <code>ProfileAvatar</code> component. Give it an inline style to dynamically set its <code>backgroundImage</code> based on an <code>imageUrl</code> prop.',
    '<strong>"The Escalation":</strong> Create a <code>StatusBadge</code> component that accepts a <code>status</code> prop ("online" or "offline"). Conditionally apply either a green or gray background color using inline styles based on the prop.',
  ],
  optionalLessons: [
    '<strong>className:</strong> Because `class` is a reserved word in JavaScript, React uses `className` for applying CSS classes.',
    '<strong>Inline Styles:</strong> Inline styles in React are written as JavaScript objects, where CSS properties are camelCased (e.g., `backgroundColor` instead of `background-color`).',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> React gives you the flexibility to style elements via standard CSS classes or dynamic inline styles when values need to change based on JS variables.',
    '<strong>Why it works in React:</strong> React translates the `style` object into standard CSS strings when it renders the Virtual DOM to the actual browser DOM.',
    '<strong>Challenge question:</strong> Write the exact JSX syntax to apply an inline style that sets <code>font-size</code> to "20px" on a <code>&lt;p&gt;</code> tag.',
  ],
  status: 'published'
})

export default lesson
