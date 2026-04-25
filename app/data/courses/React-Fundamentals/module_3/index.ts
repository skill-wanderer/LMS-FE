import type { Lesson } from '~/types/course'

const assignments: Lesson[] = [
  {
    id: 'lesson-react-assignment-m3-1',
    slug: 'assignment-live-greeting',
    title: 'Assignment: The Live Greeting',
    type: 'assignment',
    status: 'draft',
    order: 1,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Live Greeting</h2>
      <ul>
        <li>Objective: Sync input values with React state in real-time.</li>
        <li>Core Concept: Controlled Components — React as the single source of truth.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>State Management: Initialize a string state with <code>useState('')</code>.</li>
        <li>Event Handler: Attach an <code>onChange</code> listener to your input.</li>
        <li>Controlled Value: Use <code>value={text}</code> to bind the input to your React state.</li>
        <li>Value Access: Extract user input via <code>e.target.value</code>.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m3-2',
    slug: 'assignment-survey-form',
    title: 'Assignment: The Survey Form',
    type: 'assignment',
    status: 'draft',
    order: 2,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Survey Form</h2>
      <ul>
        <li>Objective: Handle multiple input types (checkboxes, radios) in a React form.</li>
        <li>Core Concept: Managing complex state objects and event attributes.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Checkbox Input: Use <code>e.target.checked</code> to track boolean values.</li>
        <li>Radio Buttons: Group elements with the same <code>name</code> attribute for correct React behavior.</li>
        <li>Selections: Store multiple choices in an array within your state.</li>
        <li>Visual Feedback: Render your state values directly below the form to verify logic.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m3-3',
    slug: 'assignment-login-gate',
    title: 'Assignment: The Login Gate',
    type: 'assignment',
    status: 'draft',
    order: 3,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Login Gate</h2>
      <ul>
        <li>Objective: Implement conditional rendering based on form submission state.</li>
        <li>Core Concept: Preventing default browser behavior and toggling UI states.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Prevent Default: Use <code>e.preventDefault()</code> to stop the page from refreshing.</li>
        <li>UI Toggle: Update a boolean state (e.g., <code>isLoggedIn</code>) after successful validation.</li>
        <li>Conditional View: Use <code>{isLoggedIn ? &lt;Welcome /&gt; : &lt;LoginForm /&gt;}</code> to swap components.</li>
        <li>Input Guard: Ensure fields are not empty before proceeding with state updates.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m3-4',
    slug: 'assignment-multi-step-registration',
    title: 'Assignment: The Escalation (Multi-Step Form)',
    type: 'assignment',
    status: 'draft',
    order: 4,
    durationMinutes: 45,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">Multi-Step Registration</h2>
      <ul>
        <li>Objective: Manage multi-step workflows and persistent state objects.</li>
        <li>Core Concept: State persistence across conditional UI renders.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Complex State: Store all form data in a single object: <code>{ name: '', email: '' }</code>.</li>
        <li>Active View: Use a numeric state (1, 2, or 3) to determine which step to render.</li>
        <li>Update Logic: Use <code>setForm(prev => ({ ...prev, [name]: value }))</code> for clean updates.</li>
        <li>Persistence: Ensure the state object remains unchanged when moving between steps.</li>
        <li>Navigation: Add 'Back' and 'Next' buttons that only update the step state.</li>
      </ul>
    `
  }
]

const lessons: Lesson[] = [
  {
    id: 'lesson-react-m3-1',
    slug: 'lesson-event-handlers',
    title: 'Lesson: Event handlers',
    type: 'lesson',
    status: 'draft',
    order: 5,
    durationMinutes: 15,
    hideCompletion: true,
    content: '<p>onClick, onChange, onSubmit — and why React uses camelCase.</p>'
  },
  {
    id: 'lesson-react-m3-2',
    slug: 'lesson-event-object',
    title: 'Lesson: The event object',
    type: 'lesson',
    status: 'draft',
    order: 6,
    durationMinutes: 15,
    hideCompletion: true,
    content: '<p>e.target.value for inputs, e.target.checked for checkboxes, e.preventDefault() for forms.</p>'
  },
  {
    id: 'lesson-react-m3-3',
    slug: 'lesson-controlled-inputs',
    title: 'Lesson: Controlled inputs',
    type: 'lesson',
    status: 'draft',
    order: 7,
    durationMinutes: 20,
    hideCompletion: true,
    content: '<p>Wiring value and onChange to state so React owns the source of truth.</p>'
  },
  {
    id: 'lesson-react-m3-4',
    slug: 'lesson-validation',
    title: 'Lesson: Validation',
    type: 'lesson',
    status: 'draft',
    order: 8,
    durationMinutes: 20,
    hideCompletion: true,
    content: '<p>Checking fields before submission, storing error messages in state.</p>'
  }
]

const summaryAndQuizzes: Lesson[] = [
  {
    id: 'lesson-react-summary-m3',
    slug: 'summary-quiz-module-3-interaction-layer',
    title: 'Summary & Quizzes: The Interaction Layer',
    type: 'lesson',
    status: 'draft',
    order: 9,
    durationMinutes: 20,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">Module Summary</h2>
      <h3 class="react-assignment-h3">Controlled Components</h3>
      <ul>
        <li>React ownership: The UI state drives the input value, not the other way around.</li>
        <li>Real-time sync: Every keystroke updates the state and re-renders the input.</li>
      </ul>

      <h3 class="react-assignment-h3">Handler Design</h3>
      <ul>
        <li>Logic isolation: Keep your event logic in named functions for better readability.</li>
        <li>Dynamic fields: Use the <code>name</code> attribute to handle multiple inputs with one function.</li>
      </ul>

      <h3 class="react-assignment-h3">Form UX in React</h3>
      <ul>
        <li>Validation: Show feedback only when the user interacts or submits.</li>
        <li>State-driven UI: Use loading and error states to guide the user.</li>
      </ul>
    `
  }
]

const module_3 = {
  id: 'module-react-3',
  slug: 'module-3-interaction-layer-events-and-forms',
  title: 'Module 3: The Interaction Layer (Events and Forms)',
  order: 3,
  lessons: [...assignments, ...lessons, ...summaryAndQuizzes],
}

export default module_3
