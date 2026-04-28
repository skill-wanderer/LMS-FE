import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-3-3',
  slug: 'lesson-3-filtering-lists',
  title: 'Filtering and Searching Lists',
  order: 3,
  durationMinutes: 45,
  requirement: 'Learn how to use `.filter()` alongside `.map()` to create a search bar that updates a list in real-time.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a <code>UserDirectory</code>. Render an array of names. Add a hardcoded variable <code>const filterText = "a"</code> and use <code>.filter()</code> to only show names containing "a".',
    '<strong>Slightly improved version:</strong> Change <code>filterText</code> to be a state variable managed by an <code>&lt;input&gt;</code> field. Now the list should filter live as you type.',
    '<strong>Practical real-world component:</strong> Build a <code>ProductCatalog</code>. Include a dropdown to filter products by category (e.g., "Electronics", "Clothing"). Use state to track the selected category and filter the mapped products accordingly.',
    '<strong>"The Escalation":</strong> Combine search text and category filtering. Create a <code>RecipeList</code> where users can type a search term AND select a difficulty level (e.g., "Easy"). Filter the array using both conditions before mapping it.',
  ],
  optionalLessons: [
    '<strong>The .filter() Method:</strong> Another standard array method. It returns a new array containing only the items that pass a specific condition.',
    '<strong>Chaining:</strong> You can chain `.filter().map()` together cleanly inside your JSX.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Filtering allows users to find what they need in large datasets. It\'s a powerful combination of State (what the user is searching for) and Lists (the data).',
    '<strong>Why it works in React:</strong> Every time the search state changes, React re-runs your component. The `.filter()` creates a new subset of your array, and `.map()` renders exactly that subset.',
    '<strong>Challenge question:</strong> If you have an array of <code>numbers</code>, how do you use <code>.filter()</code> to return only the numbers greater than 10?',
  ],
  status: 'published'
})

export default lesson
