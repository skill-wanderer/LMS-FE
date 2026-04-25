import type { Lesson } from '~/types/course'

const assignments: Lesson[] = [
  {
    id: 'lesson-react-assignment-m4-1',
    slug: 'assignment-auth-wall',
    title: 'Assignment: The Auth Wall',
    type: 'assignment',
    status: 'draft',
    order: 1,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Auth Wall</h2>
      <ul>
        <li>Objective: Control entire UI layouts using React state.</li>
        <li>Core Concept: Conditional Rendering — Toggling views based on booleans.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>State Flag: Use a boolean (e.g., <code>isLoggedIn</code>) to track current access.</li>
        <li>Ternary UI: Wrap your layout in a <code>{isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}</code> block.</li>
        <li>Component Separation: Keep Login and Dashboard as independent functional components.</li>
        <li>Toggle Logic: Use a single function to flip your boolean state value.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m4-2',
    slug: 'assignment-product-catalog',
    title: 'Assignment: The Product Catalog',
    type: 'assignment',
    status: 'draft',
    order: 2,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Product Catalog</h2>
      <ul>
        <li>Objective: Dynamically generate complex list UIs from data arrays.</li>
        <li>Core Concept: Component Mapping — Turning objects into JSX.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Data Source: Define your products as an array of objects outside the component.</li>
        <li>The Map Method: Use <code>.map()</code> to transform each object into a React element.</li>
        <li>Props Injection: Pass object properties directly as props to your child components.</li>
        <li>Key Stability: Use unique IDs from your data (not array indexes) for the <code>key</code> prop.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m4-3',
    slug: 'assignment-empty-state',
    title: 'Assignment: The Empty State',
    type: 'assignment',
    status: 'draft',
    order: 3,
    durationMinutes: 20,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Empty State</h2>
      <ul>
        <li>Objective: Enhance UX by handling scenarios where no data is available.</li>
        <li>Core Concept: Guard Clauses and Inline Conditionals in JSX.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Conditionals: Use <code>items.length === 0</code> to detect empty data.</li>
        <li>Inline Logic: Use <code>{items.length === 0 &amp;&amp; &lt;EmptyState /&gt;}</code> for simple messages.</li>
        <li>Fallback UX: Ensure your component always returns valid JSX, even with empty lists.</li>
        <li>Reactivity: Watch how adding data automatically removes the empty state message.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m4-4',
    slug: 'assignment-filterable-todo',
    title: 'Assignment: The Escalation (Filterable Todo List)',
    type: 'assignment',
    status: 'draft',
    order: 4,
    durationMinutes: 45,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">Filterable Todo List</h2>
      <ul>
        <li>Objective: Build a data-driven app that responds to multiple state changes.</li>
        <li>Core Concept: Derived State — Calculating views from raw data.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Single Source: Manage one <code>todos</code> array as the primary source of truth.</li>
        <li>Filter View: Track the active filter name in a separate state variable.</li>
        <li>Computed Lists: Run <code>.filter()</code> inside the render cycle instead of storing results in state.</li>
        <li>Immutability: Use <code>.filter()</code> or <code>.map()</code> to create new arrays when updating state.</li>
        <li>Stable Keys: Use unique IDs or timestamps for every todo item in the list.</li>
      </ul>
    `
  }
]

const lessons: Lesson[] = [
  {
    id: 'lesson-react-m4-1',
    slug: 'lesson-ternary-rendering',
    title: 'Lesson: Ternary rendering',
    type: 'lesson',
    status: 'draft',
    order: 5,
    durationMinutes: 15,
    hideCompletion: true,
    content: '<p>condition ? &lt;A /&gt; : &lt;B /&gt; for if/else inside JSX.</p>'
  },
  {
    id: 'lesson-react-m4-2',
    slug: 'lesson-logical-and',
    title: 'Lesson: Logical &&',
    type: 'lesson',
    status: 'draft',
    order: 6,
    durationMinutes: 10,
    hideCompletion: true,
    content: '<p>Rendering an element only when a condition is true, nothing otherwise.</p>'
  },
  {
    id: 'lesson-react-m4-3',
    slug: 'lesson-array-map',
    title: 'Lesson: Array .map()',
    type: 'lesson',
    status: 'draft',
    order: 7,
    durationMinutes: 20,
    hideCompletion: true,
    content: '<p>Transforming a data array into a list of JSX elements.</p>'
  },
  {
    id: 'lesson-react-m4-4',
    slug: 'lesson-keys',
    title: 'Lesson: Keys',
    type: 'lesson',
    status: 'draft',
    order: 8,
    durationMinutes: 15,
    hideCompletion: true,
    content: '<p>Why React requires a stable key on each mapped element and what "stable" actually means.</p>'
  }
]

const summaryAndQuizzes: Lesson[] = [
  {
    id: 'lesson-react-summary-m4',
    slug: 'summary-quiz-module-4-conditional-lists',
    title: 'Summary & Quizzes: Conditional Rendering and Lists',
    type: 'lesson',
    status: 'draft',
    order: 9,
    durationMinutes: 20,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">Module Summary</h2>
      <h3 class="react-assignment-h3">Conditional Logic</h3>
      <ul>
        <li>Ternary (<code>? :</code>): Best for swapping between two distinct UI states.</li>
        <li>Logical AND (<code>&amp;&amp;</code>): Perfect for simple "show/hide" requirements.</li>
      </ul>

      <h3 class="react-assignment-h3">List Rendering</h3>
      <ul>
        <li>Transforming Data: Using <code>.map()</code> is the standard way to generate list items.</li>
        <li>Key Discipline: Unique keys allow React to optimize updates and maintain state.</li>
      </ul>

      <h3 class="react-assignment-h3">Data-Driven Design</h3>
      <ul>
        <li>Single Source of Truth: All UI changes should stem from state array updates.</li>
        <li>Performance: Calculating filtered or sorted views during render keeps logic simple.</li>
      </ul>
    `
  }
]

const module_4 = {
  id: 'module-react-4',
  slug: 'module-4-conditional-rendering-and-lists',
  title: 'Module 4: Conditional Rendering and Lists',
  order: 4,
  lessons: [...assignments, ...lessons, ...summaryAndQuizzes],
}

export default module_4
