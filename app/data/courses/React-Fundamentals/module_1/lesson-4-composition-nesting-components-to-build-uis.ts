import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-4',
  slug: 'lesson-4-composition-nesting-components-to-build-uis',
  title: 'Composition: Nesting Components to Build UIs',
  order: 5,
  requirement: 'Build a complex UI by nesting focused, reusable components inside each other — without copying JSX or duplicating logic.',
  optionalLessons: [
    'Composition over inheritance: React intentionally has no class-based mixin system; you build complexity by combining simple pieces.',
    'When to extract a component: if a section of JSX has a clear name and purpose, it deserves its own function.',
    'Composition vs over-splitting: two components that always appear together and never change independently may not need to be separate files.',
    'Component tree mental model: think of the UI as a tree where each node is a self-contained building block.',
  ],
  summaryAndQuizzes: [
    'Composition thinking: how do you decide when a block of JSX is big enough to deserve its own component?',
    'Challenge: take a single long JSX block and split it into three focused components without changing what appears on screen.',
  ],
})

lesson.content = `${lesson.content}
<h2>Code Reference</h2>
<p>Composing a News Snippet from three focused components:</p>
<pre><code class="language-tsx">// src/components/CategoryBadge.tsx
export default function CategoryBadge() {
  return &lt;span&gt;BREAKING NEWS&lt;/span&gt;
}

// src/components/Headline.tsx
export default function Headline() {
  return &lt;h2&gt;Local Developer Ships First React App&lt;/h2&gt;
}

// src/components/Summary.tsx
export default function Summary() {
  return &lt;p&gt;After three hours of wiring up components, the app finally renders without errors.&lt;/p&gt;
}

// src/App.tsx — compose all three into one article
import CategoryBadge from './components/CategoryBadge'
import Headline from './components/Headline'
import Summary from './components/Summary'

export default function App() {
  return (
    &lt;article&gt;
      &lt;CategoryBadge /&gt;
      &lt;Headline /&gt;
      &lt;Summary /&gt;
    &lt;/article&gt;
  )
}</code></pre>
<p>Escalation — same output, fewer files, using internal composition:</p>
<pre><code class="language-tsx">// src/Layout.tsx — all structural pieces live here
function Header() {
  return &lt;header&gt;&lt;h1&gt;My Site&lt;/h1&gt;&lt;/header&gt;
}

function Main() {
  return &lt;main&gt;&lt;p&gt;Welcome to the main content area.&lt;/p&gt;&lt;/main&gt;
}

function Footer() {
  return &lt;footer&gt;&lt;p&gt;&amp;copy; 2026 My Site&lt;/p&gt;&lt;/footer&gt;
}

export default function Layout() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  )
}

// src/App.tsx — only two component files total
import Layout from './Layout'

export default function App() {
  return &lt;Layout /&gt;
}</code></pre>`

export default lesson