import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-5-2',
  slug: 'lesson-2-interactive-filtering',
  title: 'Project Feature: Interactive Filtering',
  order: 2,
  durationMinutes: 45,
  requirement: 'Expand the DevDash project by adding a search bar to filter the "Recent Activity" feed in real-time.',
  assignments: [
    '<strong>State Setup:</strong> Open your DevDash project. In the parent component of the <code>RecentActivity</code> list, create a state variable for <code>searchQuery</code>.',
    '<strong>The Search Input:</strong> Build a <code>SearchBar</code> component and place it right above the activity feed. Pass down the state setter so the input updates <code>searchQuery</code>.',
    '<strong>Filtering the Data:</strong> Before mapping the activity data into your list, use <code>.filter()</code> to only keep activities where the action text includes the <code>searchQuery</code> (make sure to handle case-insensitivity using <code>.toLowerCase()</code>).',
    '<strong>Handling Empty Results:</strong> If the user searches for something that doesn\'t exist, the filtered array will be empty. Display a friendly "No matching activity found" message instead of an empty space.',
  ],
  optionalLessons: [
    '<strong>Lifting State Up:</strong> If the search bar and the list are siblings, the state must live in their closest common parent so it can be passed down to both.',
  ],
  summaryAndQuizzes: [
    '<strong>Feature Review:</strong> Adding interactive search requires a solid grasp of State, Props (passing the setter), and Array Methods (filtering).',
  ],
  status: 'published'
})

export default lesson
