import { createReactModuleAssignmentShell } from '../react-lesson-shell'

const assignment = createReactModuleAssignmentShell({
  id: 'lesson-react-assignment-1',
  slug: 'assignment-module-1-component-blueprint',
  title: 'Assignment: The Component Blueprint',
  order: 1,
  moduleTitle: 'Module 1: The Component Blueprint (JSX and Composition)',
  assignments: [
    'A. The Simple Bio: build an "About Me" page using only functional components and JSX — no logic, no state.',
    'B. The News Snippet: create a "Breaking News" layout composed of a CategoryBadge, a Headline, and a Summary — each as its own component.',
    'C. The Layout Shell: build a full-page structure with App as the root component, and Header, Main, and Footer each in their own file.',
    'D. The Escalation: rebuild the Layout Shell using only two component files — use composition to eliminate unnecessary splits.',
  ],
})

assignment.content = `${assignment.content}
<h2 class="react-assignment-h2">1. Overview</h2>
<p>In this assignment you will build four small React apps from scratch using TypeScript. Each task isolates one idea from the module so you can practice it in isolation before combining the skills.</p>
<p>You will:</p>
<ul>
  <li>Bootstrap a Vite + React + TypeScript project (<code>npm create vite@latest my-app -- --template react-ts</code>).</li>
  <li>Write every component as a named function that returns JSX.</li>
  <li>Keep each component focused on one piece of the UI.</li>
  <li>Compose components by nesting them inside other components.</li>
</ul>

<h2 class="react-assignment-h2">2. Setup (all four tasks share this)</h2>
<pre><code class="language-bash">npm create vite@latest my-react-blueprint -- --template react-ts
cd my-react-blueprint
npm install
npm run dev</code></pre>
<p>Your entry point after setup is <code>src/main.tsx</code>. It mounts the root component into the DOM:</p>
<pre><code class="language-tsx">// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;,
)</code></pre>

<h2 class="react-assignment-h2">3. Task A — The Simple Bio</h2>
<p>Build an "About Me" page from functional components only. No CSS frameworks, no state, no event handlers.</p>
<pre><code class="language-tsx">// src/components/Avatar.tsx
export default function Avatar() {
  return &lt;img src="https://placehold.co/80" alt="Profile photo" /&gt;
}

// src/components/Name.tsx
export default function Name() {
  return &lt;h1&gt;Jane Doe&lt;/h1&gt;
}

// src/components/Bio.tsx
export default function Bio() {
  return &lt;p&gt;Frontend developer learning React one component at a time.&lt;/p&gt;
}

// src/App.tsx
import Avatar from './components/Avatar'
import Name from './components/Name'
import Bio from './components/Bio'

export default function App() {
  return (
    &lt;div&gt;
      &lt;Avatar /&gt;
      &lt;Name /&gt;
      &lt;Bio /&gt;
    &lt;/div&gt;
  )
}</code></pre>

<h2 class="react-assignment-h2">4. Task B — The News Snippet</h2>
<p>Compose three focused components into a "Breaking News" card.</p>
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

// src/App.tsx
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

<h2 class="react-assignment-h2">5. Task C — The Layout Shell</h2>
<p>Split a full-page layout into four files: one per component.</p>
<pre><code class="language-tsx">// src/components/Header.tsx
export default function Header() {
  return &lt;header&gt;&lt;h1&gt;My Site&lt;/h1&gt;&lt;/header&gt;
}

// src/components/Main.tsx
export default function Main() {
  return &lt;main&gt;&lt;p&gt;Welcome to the main content area.&lt;/p&gt;&lt;/main&gt;
}

// src/components/Footer.tsx
export default function Footer() {
  return &lt;footer&gt;&lt;p&gt;&amp;copy; 2026 My Site&lt;/p&gt;&lt;/footer&gt;
}

// src/App.tsx
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  )
}</code></pre>

<h2 class="react-assignment-h2">6. Task D — The Escalation</h2>
<p>Rebuild the same layout using only two files. Put Header, Main, and Footer inside a single <code>Layout.tsx</code> by composing them with JSX rather than splitting them out.</p>
<pre><code class="language-tsx">// src/Layout.tsx
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

// src/App.tsx
import Layout from './Layout'

export default function App() {
  return &lt;Layout /&gt;
}</code></pre>

<h2 class="react-assignment-h2">7. Technical Requirements</h2>
<ul>
  <li>Every component must be a named function (not an arrow function variable at the module level).</li>
  <li>Component names must start with a capital letter.</li>
  <li>Use <code>.tsx</code> extensions for all files that contain JSX.</li>
  <li>No CSS-in-JS libraries or styling frameworks — plain JSX structure only.</li>
  <li>Each component must render without runtime errors in the browser.</li>
</ul>

<h2 class="react-assignment-h2">This Assignment Is Considered Complete When...</h2>
<ul>
  <li>All four tasks render in the browser without errors.</li>
  <li>Each component is a self-contained function returning JSX.</li>
  <li>Task C uses four separate files; Task D achieves the same output with two files.</li>
  <li>Component names are capitalised and files use the <code>.tsx</code> extension.</li>
</ul>

<h2 class="react-assignment-h2">8. Grading Rubric</h2>
<table>
  <thead>
    <tr>
      <th>Criteria</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Task A renders a Bio page from at least three functional components</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Task B composes three distinct components into one article</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Task C uses four separate files (App + Header + Main + Footer)</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Task D achieves the same visual output with only two files</td>
      <td>3</td>
    </tr>
    <tr>
      <td>All component names follow the capitalisation rule</td>
      <td>2</td>
    </tr>
    <tr>
      <td>No runtime errors in any task</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>15</strong></td>
    </tr>
  </tbody>
</table>`

export default assignment
