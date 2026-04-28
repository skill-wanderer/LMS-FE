import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-2-3',
  slug: 'lesson-3-multiple-states',
  title: 'Managing Multiple States',
  order: 3,
  durationMinutes: 30,
  requirement: 'Learn how to manage multiple pieces of state in a single component without making a mess.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>UserForm</code> component with two separate state variables: one for <code>firstName</code> and one for <code>lastName</code>. Render two inputs and display the full name below.',
    '<strong>Slightly improved version:</strong> Add a third state variable for <code>age</code> (a number). Add a button that increments the age by 1.',
    '<strong>Practical real-world component:</strong> Build a <code>SettingsPanel</code> component. Use three different states to track: a volume slider (number), a "notifications enabled" toggle (boolean), and a "theme" selector (string dropdown).',
    '<strong>"The Escalation":</strong> Create a <code>RegistrationForm</code> that uses a single state object <code>{ email: "", password: "", username: "" }</code> instead of three separate state variables. Update the object correctly without deleting the other fields.',
  ],
  optionalLessons: [
    '<strong>Multiple useStates:</strong> You can call `useState` as many times as you need at the top of your component.',
    '<strong>State Objects:</strong> For related data (like form fields), you can store an object in state, but remember to use the spread operator (`...prev`) to copy existing fields when updating.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Complex UIs often track many things at once (text, toggles, numbers). You can split these into separate `useState` hooks or group them into state objects.',
    '<strong>Why it works in React:</strong> React keeps track of every `useState` call in the exact order they are written, managing their distinct values across re-renders.',
    '<strong>Challenge question:</strong> If you have <code>const [user, setUser] = useState({ name: "Bob", age: 30 })</code>, how do you update just the age to 31 without losing the name?',
  ],
  status: 'published'
})

export default lesson
