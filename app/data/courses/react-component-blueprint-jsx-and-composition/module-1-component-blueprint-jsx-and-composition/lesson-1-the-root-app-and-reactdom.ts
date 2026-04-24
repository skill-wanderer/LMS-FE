import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-1',
  slug: 'lesson-1-the-root-app-and-reactdom',
  title: 'The Root: App.tsx, main.tsx, and ReactDOM',
  order: 2,
  requirement: 'Understand how a React application starts: the entry file mounts a root component into a real DOM node using ReactDOM, and every other component lives inside that tree.',
  optionalLessons: [
    '<code>main.tsx</code> vs <code>App.tsx</code>: the entry file owns mounting, the App component owns structure.',
    '<code>ReactDOM.createRoot(document.getElementById("root")!).render(&lt;App /&gt;)</code> — what each part does.',
    '<code>React.StrictMode</code>: a wrapper that activates extra runtime warnings during development.',
    'Why the <code>id="root"</code> div in <code>index.html</code> is the only real DOM node React needs to know about.',
  ],
  summaryAndQuizzes: [
    'Structural logic: if you remove the <code>id="root"</code> attribute from <code>index.html</code>, what happens and why?',
    'Challenge: add a second root component mounted to a second <code>&lt;div id="portal"&gt;</code> on the same page.',
  ],
})

lesson.content = `${lesson.content}
<h2>Code Reference</h2>
<p>A minimal Vite + React + TypeScript project has this entry point after setup:</p>
<pre><code class="language-tsx">// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;,
)</code></pre>
<p>And the <code>index.html</code> file contains the single mount point:</p>
<pre><code class="language-html">&lt;!-- index.html --&gt;
&lt;body&gt;
  &lt;div id="root"&gt;&lt;/div&gt;
  &lt;script type="module" src="/src/main.tsx"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
<p>React replaces the contents of <code>#root</code> with the rendered component tree. Everything visible in the browser flows from <code>&lt;App /&gt;</code> downward.</p>`

export default lesson
