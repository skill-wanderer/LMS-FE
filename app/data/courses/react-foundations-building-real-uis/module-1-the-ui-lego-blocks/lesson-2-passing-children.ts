import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-1-2',
  slug: 'lesson-2-passing-children',
  title: 'Passing Children (The `children` prop)',
  order: 2,
  durationMinutes: 30,
  requirement: 'Understand how to create wrapper components (like a `Card` or `Layout` component) that wrap around other elements using the special `children` prop.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>CardWrapper</code> component that accepts a <code>children</code> prop and renders it inside a <code>&lt;div&gt;</code> with a border and padding.',
    '<strong>Slightly improved version:</strong> Add an optional <code>title</code> prop to <code>CardWrapper</code>. If provided, render an <code>&lt;h3&gt;</code> at the top of the card before the children.',
    '<strong>Practical real-world component:</strong> Build a <code>ModalOverlay</code> component that dims the background and centers whatever content is passed inside it as children.',
    '<strong>"The Escalation":</strong> Create a <code>SplitLayout</code> component that takes two specific props: <code>leftContent</code> and <code>rightContent</code> (which can both accept JSX). Render them side-by-side using Flexbox.',
  ],
  optionalLessons: [
    '<strong>The `children` prop:</strong> A special prop automatically passed to components that have opening and closing tags.',
    '<strong>Wrappers:</strong> Useful for defining consistent layout patterns or styling containers without repeating CSS.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> The `children` prop lets you nest components inside each other just like standard HTML tags.',
    '<strong>Why it works in React:</strong> React treats anything between a component\'s opening and closing tags as a special `children` property inside the `props` object.',
    '<strong>Challenge question:</strong> How do you access the content nested inside <code>&lt;MyWrapper&gt;Hello World&lt;/MyWrapper&gt;</code> within the <code>MyWrapper</code> component definition?',
  ],
  status: 'published'
})

export default lesson
