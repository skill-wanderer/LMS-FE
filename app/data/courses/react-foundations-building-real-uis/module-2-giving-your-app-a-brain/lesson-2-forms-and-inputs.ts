import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-2-2',
  slug: 'lesson-2-forms-and-inputs',
  title: 'Forms and Inputs (Controlled Components)',
  order: 2,
  durationMinutes: 30,
  requirement: 'Learn how to track what a user types into an `<input>` field using the `onChange` event and `useState`.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>NameInput</code> component. Use state to track a string. Render an <code>&lt;input type="text"&gt;</code> and a paragraph below it that says "Hello, [whatever was typed]".',
    '<strong>Slightly improved version:</strong> Add a "Clear" button next to the input that resets the state back to an empty string when clicked.',
    '<strong>Practical real-world component:</strong> Build a <code>SubscribeForm</code> component with an email input and a "Subscribe" button. Prevent the default form submission behavior using <code>e.preventDefault()</code> and alert the typed email.',
    '<strong>"The Escalation":</strong> Create a <code>SearchBox</code> component that has a live character count below it (e.g., "15/50 characters"). If the length exceeds 50, change the character count text to red.',
  ],
  optionalLessons: [
    '<strong>Controlled Components:</strong> In React, input fields are "controlled" by state. The input\'s `value` is tied directly to a state variable.',
    '<strong>Event Object (e):</strong> When an input changes, React passes an event object to the handler. You read the typed value using `e.target.value`.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> By controlling inputs with state, React becomes the "single source of truth" for what is currently inside the form.',
    '<strong>Why it works in React:</strong> As the user types, the `onChange` event fires, updating the state. React re-renders the input immediately to display the new state value.',
    '<strong>Challenge question:</strong> Inside an `onChange` handler function <code>(e) => { ... }</code>, what is the exact property path you use to get the text the user just typed?',
  ],
  status: 'published'
})

export default lesson
