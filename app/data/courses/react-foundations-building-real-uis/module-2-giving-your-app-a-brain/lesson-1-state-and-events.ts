import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-2',
  slug: 'lesson-1-state-and-events',
  title: 'Giving Your App a Brain (State & Events)',
  order: 1,
  durationMinutes: 45,
  requirement: 'Understand that static components are boring. To make an app interactive (like opening a menu or typing in a form), a component needs a memory to track its current status. In React, this memory is called "State", and we change that memory by listening to user "Events" like clicks or keystrokes.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Build a <code>Counter</code> component. It should display a number starting at 0, and have a button labeled "Add 1". Every time the user clicks the button, the number should increase by 1.',
    '<strong>Slightly improved version:</strong> Upgrade your <code>Counter</code>. Add a "Decrease" button and a "Reset" button. Implement logic so the counter can never go below zero.',
    '<strong>Practical real-world component:</strong> Create a <code>LikeButton</code> component for a social media post. It should display a heart icon and the text "Like". When clicked, the state should toggle: the heart becomes filled, the text changes to "Liked!", and a small number next to it increments by 1. Clicking it again undoes the action.',
    '<strong>"The Escalation":</strong> Build a <code>ThemeToggle</code> card. Create a card component containing some text and a toggle switch. Use state to track whether it is in "light mode" or "dark mode". When toggled, use inline styling or class names to change the background color and text color of the entire card dynamically.',
  ],
  optionalLessons: [
    '<strong>State (useState):</strong> A React hook that lets functional components hold onto data between renders. It gives you a variable to read, and a function to update it.',
    '<strong>Events:</strong> React handles events similarly to HTML, but using camelCase (e.g., <code>onClick</code>, <code>onChange</code>).',
    '<strong>Immutability:</strong> Never modify a state variable directly. Always use the provided setter function.',
    '<strong>Interactivity:</strong> When an event fires, it calls your state setter. This is the core cycle of React interactivity.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> State is the current snapshot of your component\'s memory. Events are the triggers the user fires to change that memory.',
    '<strong>Why it works in React:</strong> React constantly watches your State variables. The moment you update a state variable via an event, React automatically re-renders only that specific component to display the newest data.',
    '<strong>Challenge question:</strong> If you have <code>const [isOpen, setIsOpen] = useState(false)</code>, what exact code would you put inside an <code>onClick</code> event to toggle <code>isOpen</code> to the opposite of its current value?',
  ],
  status: 'published'
})

export default lesson
