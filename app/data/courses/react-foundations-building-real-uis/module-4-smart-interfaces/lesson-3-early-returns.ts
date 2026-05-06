import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-4-3',
  slug: 'lesson-3-early-returns',
  title: 'Early Returns and Complex Conditions',
  order: 3,
  durationMinutes: 30,
  requirement: 'Learn how to simplify complex components by returning fallback UI (like an error message or loading screen) at the very top of the function.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>UserProfile</code> component. At the top of the function, check if the <code>user</code> prop is null. If it is, immediately <code>return &lt;p&gt;No user data&lt;/p&gt;</code>. Below that, render the normal profile.',
    '<strong>Slightly improved version:</strong> Add an <code>isLoading</code> prop. Create an early return that shows a <code>LoadingSpinner</code> component if <code>isLoading</code> is true.',
    '<strong>Practical real-world component:</strong> Build an <code>ArticleViewer</code>. Check for three states in this order using early returns: `hasError` (show error message), `isLoading` (show skeleton loader), and then the default return for the actual article content.',
    '<strong>"The Escalation":</strong> Create a <code>DashboardWidget</code> that takes a <code>status</code> prop ("loading", "error", "success", "empty"). Instead of early returns, write a helper function outside the component with a <code>switch</code> statement that returns the correct JSX, and call that function inside your component\'s return.',
  ],
  optionalLessons: [
    '<strong>Guard Clauses:</strong> Early returns act as guard clauses, preventing the rest of your component logic from running if prerequisites (like data existing) aren\'t met.',
    '<strong>Cleaner Code:</strong> Avoiding massive nested `if/else` statements inside your JSX makes components much easier to read.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Early returns simplify component logic by handling "edge cases" (loading, errors) first, leaving the main `return` block clean for the "happy path".',
    '<strong>Why it works in React:</strong> A React component is just a function. The moment it hits a `return` statement, it stops executing and sends that JSX to the screen.',
    '<strong>Challenge question:</strong> If you use an early return to show a loading state, does the code below the early return ever execute while the component is loading?',
  ],
  status: 'published'
})

export default lesson
