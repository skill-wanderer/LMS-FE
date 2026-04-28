import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-3',
  slug: 'lesson-1-rendering-lists',
  title: 'Generating UI from Data (Rendering Lists)',
  order: 1,
  durationMinutes: 45,
  requirement: 'Understand how to take raw data (like an array of user names) and automatically turn it into an array of UI components. Instead of copy-pasting code 10 times for 10 users, you write the component layout once and tell React to loop over the data and generate the UI for you.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create an array of your favorite movies (just strings). Build a <code>MovieList</code> component that uses JavaScript\'s <code>.map()</code> method to render an unstyled <code>&lt;ul&gt;</code> containing an <code>&lt;li&gt;</code> for each movie.',
    '<strong>Slightly improved version:</strong> Change your data to be an array of objects (e.g., <code>{ id: 1, title: "Inception" }</code>). Render the list again, but this time ensure you pass the unique <code>id</code> as a special <code>key</code> prop to the <code>&lt;li&gt;</code> element to clear the React console warning.',
    '<strong>Practical real-world component:</strong> Build a <code>NavigationSidebar</code>. Take an array of route objects (e.g., <code>{ label: "Home", icon: "🏠", isActive: true }</code>) and map them into a stylized sidebar menu. If an item <code>isActive</code>, give it a distinct highlighted background color.',
    '<strong>"The Escalation":</strong> Create a <code>TaskManager</code>. Start with an array of task objects in state. Map over the state array to render a list of beautifully styled <code>TaskCard</code> components. Add a "Delete" button inside each card that, when clicked, filters that specific task out of the state array, causing the list to update instantly.',
  ],
  optionalLessons: [
    '<strong>The .map() Method:</strong> The standard JavaScript array method. In React, we use it to transform an array of data into an array of JSX elements.',
    '<strong>Keys:</strong> Every time you render a list in React, the outermost element in the loop MUST have a unique <code>key</code> prop (usually a database ID).',
    '<strong>Data Separation:</strong> Keeping your raw data structured in arrays/objects keeps your JSX clean and readable.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Rendering lists allows us to build scalable, flexible UIs that grow automatically as our data grows, without duplicating code.',
    '<strong>Why it works in React:</strong> React loops through your array and stamps out a component for every item. It uses the <code>key</code> prop to track each specific item, so if one item gets deleted or changed, React only updates that one piece instead of destroying and redrawing the whole list.',
    '<strong>Challenge question:</strong> Why is it considered a bad practice to use the array <code>index</code> as a <code>key</code> prop if the user is allowed to delete or reorder items in that list?',
  ],
  status: 'published'
})

export default lesson
