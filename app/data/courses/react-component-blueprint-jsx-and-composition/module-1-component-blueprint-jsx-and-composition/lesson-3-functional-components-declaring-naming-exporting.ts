import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-3',
  slug: 'lesson-3-functional-components-declaring-naming-exporting',
  title: 'Functional Components: Declaring, Naming, and Exporting',
  order: 4,
  requirement: 'Declare a functional component correctly in TypeScript: use a capitalised name, return JSX, and export it so other files can import and render it.',
  optionalLessons: [
    'Capitalisation rule: React distinguishes a component (<code>&lt;Card /&gt;</code>) from an HTML element (<code>&lt;card&gt;</code>) by the first letter of the name.',
    'Named export vs default export: when to use each and how to import them.',
    'TypeScript function component signature: <code>function Greeting(): JSX.Element</code> or relying on inferred return type.',
    'File naming convention: match the filename to the component name (e.g. <code>Card.tsx</code> exports <code>function Card</code>).',
  ],
  summaryAndQuizzes: [
    'Naming rules: if you write <code>&lt;bio /&gt;</code> in JSX, React treats it as an unknown HTML element, not your Bio component — why?',
    'Challenge: write a component named <code>Greeting</code> that renders another component named <code>Badge</code> exactly five times in a row.',
  ],
})

lesson.content = `${lesson.content}
<h2>Code Reference</h2>
<p>The minimal shape of a typed functional component:</p>
<pre><code class="language-tsx">// src/components/Greeting.tsx

// Declared as a named function — the recommended style
export default function Greeting() {
  return &lt;p&gt;Hello, world!&lt;/p&gt;
}</code></pre>
<p>Using a named export instead of a default export:</p>
<pre><code class="language-tsx">// src/components/Badge.tsx
export function Badge() {
  return &lt;span&gt;NEW&lt;/span&gt;
}

// Importing a named export:
import { Badge } from './components/Badge'</code></pre>
<p>Render the same component multiple times — no loop needed for a fixed count:</p>
<pre><code class="language-tsx">// src/App.tsx
import { Badge } from './components/Badge'

export default function App() {
  return (
    &lt;div&gt;
      &lt;Badge /&gt;
      &lt;Badge /&gt;
      &lt;Badge /&gt;
      &lt;Badge /&gt;
      &lt;Badge /&gt;
    &lt;/div&gt;
  )
}</code></pre>`

export default lesson
