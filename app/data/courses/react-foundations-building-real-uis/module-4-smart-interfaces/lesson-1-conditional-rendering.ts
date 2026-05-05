import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-4',
  slug: 'lesson-1-conditional-rendering',
  title: 'Smart Interfaces (Conditional Rendering)',
  order: 1,
  durationMinutes: 45,
  requirement: 'Understand how to make your UI adaptable by showing or hiding parts of the screen based on specific conditions. Just like an app shows a "Log Out" button when you are signed in, and a "Log In" button when you are out, your components need logic to decide what to display.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>Greeting</code> component that takes an <code>isLoggedIn</code> boolean prop. Use an <code>if/else</code> statement or a ternary operator to return an <code>&lt;h1&gt;Welcome back!&lt;/h1&gt;</code> if true, and <code>&lt;h1&gt;Please log in.&lt;/h1&gt;</code> if false.',
    '<strong>Slightly improved version:</strong> Build a <code>LoadingSpinner</code>. Create a state variable <code>isLoading</code> set to true. Use the logical AND (<code>&&</code>) operator to show a "Loading data..." message. Add a button that sets <code>isLoading</code> to false, which should make the loading message disappear and reveal a "Data loaded successfully!" message.',
    '<strong>Practical real-world component:</strong> Create a <code>PricingTierCard</code>. It accepts props for <code>title</code>, <code>price</code>, and a boolean <code>isPro</code>. If <code>isPro</code> is true, conditionally render a gold "Best Value" badge at the top of the card and append three extra premium features to the feature list.',
    '<strong>"The Escalation":</strong> Build a <code>PasswordInput</code> field. Create an <code>&lt;input&gt;</code> element and a toggle button next to it. Use state to track whether the password should be visible. Use a ternary operator on the input\'s <code>type</code> attribute to switch between <code>"password"</code> (hidden) and <code>"text"</code> (visible) based on the state.',
  ],
  optionalLessons: [
    '<strong>Ternary Operator (condition ? true : false):</strong> The perfect JavaScript syntax for toggling between two different UI states directly inside your JSX.',
    '<strong>Logical AND (condition && &lt;Component /&gt;):</strong> The best syntax for rendering something *only* if a condition is true, and rendering absolutely nothing otherwise.',
    '<strong>Early Returns:</strong> You can use a standard <code>if</code> statement at the top of your component to return a fallback UI (like an error screen) before the rest of the component runs.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Conditional rendering gives your app decision-making power, allowing it to react to user states, permissions, and loading phases.',
    '<strong>Why it works in React:</strong> React evaluates the JavaScript condition inside the curly braces <code>{}</code>. If it evaluates to <code>false</code>, <code>null</code>, or <code>undefined</code>, React simply ignores it and renders an empty space in the DOM.',
    '<strong>Challenge question:</strong> Rewrite the following code using the logical AND (<code>&&</code>) operator: <code>userHasErrors ? &lt;ErrorBanner /&gt; : null</code>',
  ],
  status: 'published'
})

export default lesson
