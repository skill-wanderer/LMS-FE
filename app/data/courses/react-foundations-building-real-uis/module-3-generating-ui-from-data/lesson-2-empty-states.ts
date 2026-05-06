import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-3-2',
  slug: 'lesson-2-empty-states',
  title: 'Handling Empty Lists',
  order: 2,
  durationMinutes: 30,
  requirement: 'Understand what to show the user when the array length is 0 (combining conditional rendering with lists).',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>TodoList</code> component. Map over an array of tasks. If the array is empty, return a simple <code>&lt;p&gt;No tasks yet!&lt;/p&gt;</code> instead of the list.',
    '<strong>Slightly improved version:</strong> Instead of returning a plain paragraph, create a dedicated <code>EmptyStateCard</code> component that shows an illustration and a "Create your first task" button, and render that when the array is empty.',
    '<strong>Practical real-world component:</strong> Build an <code>InboxView</code> component. If the <code>emails</code> array has items, map over them. If it\'s empty, show an empty state indicating "You\'re all caught up!".',
    '<strong>"The Escalation":</strong> Create a <code>CartView</code>. If the cart has items, render the items and a "Checkout" button. If the cart is empty, render a "Your cart is empty" message and a "Start Shopping" button that alerts a message when clicked.',
  ],
  optionalLessons: [
    '<strong>Array.length:</strong> You can check if an array is empty using `array.length === 0`.',
    '<strong>Early Returns for Empty States:</strong> Often, the cleanest way to handle an empty list is to use an early return at the top of your component.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Empty states are crucial for user experience. They guide the user on what to do next when there is no data to show.',
    '<strong>Why it works in React:</strong> Because React components are just JavaScript functions, you can easily use an `if` statement to return entirely different JSX based on the length of an array.',
    '<strong>Challenge question:</strong> Write the `if` statement you would use to return an `<EmptyList />` component if an array named `users` has no items.',
  ],
  status: 'published'
})

export default lesson
