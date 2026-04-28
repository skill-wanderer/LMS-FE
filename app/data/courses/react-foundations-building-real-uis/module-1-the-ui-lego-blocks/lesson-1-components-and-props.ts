import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-1',
  slug: 'lesson-1-components-and-props',
  title: 'The UI Lego Blocks (Components & Props)',
  order: 1,
  durationMinutes: 45,
  requirement: 'Understand that a React application is just a collection of reusable custom HTML tags called "Components". You also need to learn how to pass data into these components using "Props" (short for properties) so that a single component can display different information.',
  assignments: [
    '<strong>Simple beginner UI task:</strong> Create a functional component called <code>WelcomeBadge</code>. It should return a simple <code>&lt;div&gt;</code> containing an <code>&lt;h1&gt;</code> that says "Welcome, User!" and a <code>&lt;p&gt;</code> tag with a short greeting. Render it on the screen.',
    '<strong>Slightly improved version:</strong> Modify your <code>WelcomeBadge</code> to accept a <code>name</code> prop and a <code>role</code> prop. Update the component so it dynamically says "Welcome, [name]!" and displays their role. Render three different <code>WelcomeBadge</code> components on the screen, passing different names and roles to each.',
    '<strong>Practical real-world component:</strong> Build a <code>ProductCard</code> component. It should accept props for <code>imageUrl</code>, <code>title</code>, <code>price</code>, and <code>description</code>. Use standard CSS to style it like a real e-commerce card. Render a grid of four different products.',
    '<strong>"The Escalation":</strong> Create a <code>NotificationBanner</code> component. Pass it three props: <code>message</code>, <code>type</code> (which can be "success", "warning", or "error"), and <code>isDismissible</code> (a boolean). Use the <code>type</code> prop to change the background color of the banner. If <code>isDismissible</code> is true, render a small "X" button on the right side.',
  ],
  optionalLessons: [
    '<strong>Components:</strong> In React, components are just JavaScript functions that return JSX.',
    '<strong>JSX:</strong> It allows us to write HTML directly inside JavaScript. Wrap JavaScript variables in curly braces <code>{likeThis}</code>.',
    '<strong>Props:</strong> Props are arguments passed to your component functions. They are read-only.',
    '<strong>Rendering:</strong> You combine components by placing them inside one another, e.g., <code>&lt;ProductCard title="Shoes" /&gt;</code>.',
  ],
  summaryAndQuizzes: [
    '<strong>Concept explanation:</strong> Components let you split the UI into independent, reusable pieces. Props let you pass data into those pieces to make them dynamic.',
    '<strong>Why it works in React:</strong> React uses these components to build a "Virtual DOM". When props change, React intelligently figures out exactly which parts of the screen need to be updated.',
    '<strong>Challenge question:</strong> If you have a <code>UserProfile</code> component that receives a <code>user</code> object as a prop, and you want to display the user\'s email inside an <code>&lt;h2&gt;</code> tag, what is the exact JSX syntax you would write inside the component?',
  ],
  status: 'published'
})

export default lesson
