import { createReactLessonShell } from '../react-lesson-shell'

const lesson = createReactLessonShell({
  id: 'lesson-react-2',
  slug: 'lesson-2-jsx-rules-classname-camelcase-single-root',
  title: 'JSX Rules: className, camelCase, and Single Root',
  order: 3,
  requirement: 'Write valid JSX by applying the three core syntax rules: use <code>className</code> instead of <code>class</code>, write event and style attributes in camelCase, and always return a single root element.',
  optionalLessons: [
    '<code>className</code> vs <code>class</code>: JSX compiles to JavaScript, so reserved words like <code>class</code> must be renamed.',
    'camelCase attributes: <code>onClick</code>, <code>onChange</code>, <code>htmlFor</code>, <code>tabIndex</code>, <code>strokeWidth</code> — the full pattern.',
    'Single root element: why the JSX transformer requires one top-level node per return statement.',
    'Self-closing tags: all tags without children must be closed — <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code>, <code>&lt;br /&gt;</code>.',
  ],
  summaryAndQuizzes: [
    'Structural logic: JSX is syntactic sugar for <code>React.createElement</code> calls — a function call can only return one value, hence one root.',
    'Challenge: convert a block of plain HTML (with <code>class</code>, <code>for</code>, and <code>onclick</code> attributes) into valid JSX.',
  ],
})

lesson.content = `${lesson.content}
<h2>Code Reference</h2>
<p>Common attribute differences between HTML and JSX:</p>
<pre><code class="language-tsx">// ❌ HTML attributes that are invalid in JSX
&lt;div class="card"&gt;...&lt;/div&gt;
&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input tabindex="0" /&gt;

// ✅ Correct JSX equivalents
&lt;div className="card"&gt;...&lt;/div&gt;
&lt;label htmlFor="email"&gt;Email&lt;/label&gt;
&lt;input tabIndex={0} /&gt;</code></pre>
<p>Single root element rule — every component return must have one top-level node:</p>
<pre><code class="language-tsx">// ❌ Two sibling elements at the top level — syntax error
export default function Card() {
  return (
    &lt;h2&gt;Title&lt;/h2&gt;
    &lt;p&gt;Body&lt;/p&gt;
  )
}

// ✅ Wrapped in a container div
export default function Card() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Title&lt;/h2&gt;
      &lt;p&gt;Body&lt;/p&gt;
    &lt;/div&gt;
  )
}</code></pre>`

export default lesson
