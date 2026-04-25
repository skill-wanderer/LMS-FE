import { createReactModuleSummaryQuizShell } from '../react-lesson-shell'

const summaryQuiz = createReactModuleSummaryQuizShell({
  id: 'lesson-react-summary-1',
  slug: 'summary-quiz-module-1-component-blueprint',
  title: 'Summary & Quiz: Module 1',
  order: 6,
  moduleTitle: 'Module 1: The Component Blueprint (JSX and Composition)',
  takeaways: [
    '<code>main.tsx</code> is the entry point: it calls <code>ReactDOM.createRoot</code> and mounts <code>&lt;App /&gt;</code> into the <code>#root</code> div in <code>index.html</code>.',
    'JSX requires one root element per return — use a wrapper <code>&lt;div&gt;</code> or a Fragment (<code>&lt;&gt;...&lt;/&gt;</code>) to group siblings without adding an extra DOM node.',
    'React distinguishes your components from HTML tags by capitalisation: <code>&lt;Card /&gt;</code> is a component, <code>&lt;card&gt;</code> is an unknown HTML element.',
    'Composition means placing component calls (<code>&lt;Header /&gt;</code>, <code>&lt;Main /&gt;</code>, <code>&lt;Footer /&gt;</code>) inside other components — no inheritance needed.',
    'The escalation pattern shows that composition can replace file-splitting: keeping related pieces in one file is valid when they always appear together.',
  ],
  quiz: {
    title: 'Module 1 Checkpoint Quiz',
    passPercentage: 70,
    questions: [
      {
        question: 'Why does JSX require a single root element in every component return statement?',
        options: {
          A: 'The browser only supports one top-level DOM node per page.',
          B: 'JSX compiles to a single React.createElement call, which can only return one value.',
          C: 'React enforces this rule to make CSS selectors easier to write.',
          D: 'TypeScript requires functions to return a single type.',
        },
        answer: 'B',
        correctExplanation: 'JSX is syntactic sugar for React.createElement(). A function call returns one value, so JSX must produce one element at the top level.',
      },
      {
        question: 'Which of the following correctly returns two sibling elements without adding an extra DOM node?',
        options: {
          A: 'return (<div><h1>Title</h1><p>Body</p></div>)',
          B: 'return (<><h1>Title</h1><p>Body</p></>)',
          C: 'return (<h1>Title</h1>)(<p>Body</p>)',
          D: 'return [<h1>Title</h1>, <p>Body</p>]',
        },
        answer: 'B',
        correctExplanation: 'React.Fragment (written as <></>) groups children without producing a real DOM wrapper element.',
      },
      {
        question: 'What does React do when it encounters <badge /> (lowercase) in JSX?',
        options: {
          A: 'It looks for a component named badge in the current file.',
          B: 'It renders nothing and logs a warning.',
          C: 'It treats it as an unknown HTML element, not a React component.',
          D: 'It automatically finds and imports the Badge component.',
        },
        answer: 'C',
        correctExplanation: 'React uses capitalisation to distinguish custom components from built-in HTML tags. Lowercase tags are treated as HTML elements.',
      },
      {
        question: 'In a Vite + React project, which file is responsible for mounting the React component tree into the real DOM?',
        options: {
          A: 'App.tsx',
          B: 'index.html',
          C: 'main.tsx',
          D: 'vite.config.ts',
        },
        answer: 'C',
        correctExplanation: 'main.tsx calls ReactDOM.createRoot and renders <App /> into the #root element defined in index.html.',
      },
      {
        question: 'When does a block of JSX deserve to be extracted into its own component?',
        options: {
          A: 'Only when it contains more than 10 lines of code.',
          B: 'Only when it is used in more than three places.',
          C: 'When it represents a clear, named concept in the UI that can stand on its own.',
          D: 'Always — every HTML element should be its own component.',
        },
        answer: 'C',
        correctExplanation: 'A component is warranted when the block has a clear identity and purpose. Mechanical line-count or usage-count rules often lead to over-splitting or under-splitting.',
      },
    ],
  },
})

summaryQuiz.content = `${summaryQuiz.content}
<h2>Challenge Solutions</h2>
<h3>Fragment Challenge — return multiple elements without an extra div</h3>
<pre><code class="language-tsx">// Use React.Fragment shorthand &lt;&gt;...&lt;/&gt;
export default function Card() {
  return (
    &lt;&gt;
      &lt;h2&gt;Title&lt;/h2&gt;
      &lt;p&gt;Body&lt;/p&gt;
    &lt;/&gt;
  )
}</code></pre>

<h3>Five Times Challenge — render a component five times in a row</h3>
<pre><code class="language-tsx">import { Badge } from './components/Badge'

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
export default summaryQuiz
