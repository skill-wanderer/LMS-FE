import type { Lesson } from '~/types/course'

const assignments: Lesson[] = [
  {
    id: 'lesson-react-assignment-m2-1',
    slug: 'assignment-product-card',
    title: 'Assignment: The Product Card',
    type: 'assignment',
    status: 'draft',
    order: 1,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Product Card</h2>
      <ul>
        <li>Objective: Pass and display dynamic data using React Props.</li>
        <li>Core Concept: Unidirectional data flow from parent to child.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Props Strategy: Define exactly what data your component needs from its parent.</li>
        <li>Passing Data: Use the <code>&lt;ProductCard name="..." price={20} /&gt;</code> syntax.</li>
        <li>Lists: Store item objects in an array and use <code>.map()</code> to render them.</li>
        <li>Keys: Assign a unique <code>key</code> prop to every mapped React element.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m2-2',
    slug: 'assignment-tech-glossary',
    title: 'Assignment: The Tech Glossary',
    type: 'assignment',
    status: 'draft',
    order: 2,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Tech Glossary</h2>
      <ul>
        <li>Objective: Practice prop destructuring and semantic component mapping.</li>
        <li>Core Concept: Decomposing complex objects into simple child props.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Destructuring: Read props directly in the function arguments: <code>({ term, definition })</code>.</li>
        <li>Clean Structure: Focus on returning semantic JSX (<code>dt</code> and <code>dd</code> tags).</li>
        <li>Data Handling: Keep your glossary array outside the component to keep the logic clean.</li>
        <li>Prop Mapping: Ensure the child component receives the specific data it needs.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m2-3',
    slug: 'assignment-like-counter',
    title: 'Assignment: The Like Counter',
    type: 'assignment',
    status: 'draft',
    order: 3,
    durationMinutes: 30,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">The Like Counter</h2>
      <ul>
        <li>Objective: Manage local component state with the <code>useState</code> hook.</li>
        <li>Core Concept: Triggering React re-renders via state updates.</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>The Hook: Import <code>useState</code> and initialize it with <code>0</code>.</li>
        <li>Event Handler: Use <code>onClick={() => setCount(prev => prev + 1)}</code> to update values.</li>
        <li>Isolated State: Each component instance tracks its own counter independently.</li>
        <li>Re-rendering: Watch how React updates the UI every time the state changes.</li>
      </ul>
    `
  },
  {
    id: 'lesson-react-assignment-m2-4',
    slug: 'assignment-shopping-cart-item',
    title: 'Assignment: The Escalation (Shopping Cart Item)',
    type: 'assignment',
    status: 'draft',
    order: 4,
    durationMinutes: 45,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">Shopping Cart Item</h2>
      <ul>
        <li>Objective: Combine Props (static data) and State (dynamic data) in one component.</li>
        <li>Core Concept: Using derived values for computed data (Price × Quantity).</li>
      </ul>
      <h3 class="react-assignment-h3">React Hints</h3>
      <ul>
        <li>Static Props: Pass item details like name and unit price through props.</li>
        <li>Dynamic State: Track the <code>quantity</code> locally as it changes.</li>
        <li>Computed Data: Calculate the total price (price × quantity) inside the component body.</li>
        <li>Input Logic: Add checks to ensure the quantity stays within valid ranges.</li>
        <li>Combined Logic: Practice using props for data and state for user interaction.</li>
      </ul>
    `
  }
]

const lessons: Lesson[] = [
  {
    id: 'lesson-react-m2-1',
    slug: 'lesson-props-passing-data',
    title: 'Lesson: Props',
    type: 'lesson',
    status: 'draft',
    order: 5,
    durationMinutes: 15,
    hideCompletion: true,
    content: '<p>Passing strings, numbers, booleans, and objects into child components.</p>'
  },
  {
    id: 'lesson-react-m2-2',
    slug: 'lesson-destructuring-props',
    title: 'Lesson: Destructuring',
    type: 'lesson',
    status: 'draft',
    order: 6,
    durationMinutes: 10,
    hideCompletion: true,
    content: '<p>Reading props cleanly with { name, price } instead of props.name.</p>'
  },
  {
    id: 'lesson-react-m2-3',
    slug: 'lesson-usestate',
    title: 'Lesson: useState',
    type: 'lesson',
    status: 'draft',
    order: 7,
    durationMinutes: 20,
    hideCompletion: true,
    content: '<p>Declaring state, reading the current value, updating with the setter.</p>'
  },
  {
    id: 'lesson-react-m2-4',
    slug: 'lesson-props-vs-state',
    title: 'Lesson: Props vs State',
    type: 'lesson',
    status: 'draft',
    order: 8,
    durationMinutes: 15,
    hideCompletion: true,
    content: '<p>When data belongs to the parent vs when it lives inside the component.</p>'
  }
]

const summaryAndQuizzes: Lesson[] = [
  {
    id: 'lesson-react-summary-m2',
    slug: 'summary-quiz-module-2-data-pipeline',
    title: 'Summary & Quizzes: The Data Pipeline',
    type: 'lesson',
    status: 'draft',
    order: 9,
    durationMinutes: 20,
    hideCompletion: false,
    content: `
      <h2 class="react-assignment-h2">Module Summary</h2>
      <h3 class="react-assignment-h3">One-Way Data Flow</h3>
      <ul>
        <li>Props are read-only: Only parents can update the data they pass down.</li>
        <li>Lifting State: Pass functions as props to allow children to notify parents.</li>
      </ul>

      <h3 class="react-assignment-h3">State Discipline</h3>
      <ul>
        <li>React only re-renders when you use the state setter function.</li>
        <li>Direct mutations (e.g., <code>count++</code>) will not update the screen.</li>
      </ul>

      <h3 class="react-assignment-h3">Derived Values</h3>
      <ul>
        <li>Calculate computed values during render — don't put them in state.</li>
        <li>Keep state minimal: If you can calculate it, don't store it.</li>
      </ul>
    `
  }
]

const module_2 = {
  id: 'module-react-2',
  slug: 'module-2-data-pipeline-props-and-state',
  title: 'Module 2: The Data Pipeline (Props and State)',
  order: 2,
  lessons: [...assignments, ...lessons, ...summaryAndQuizzes],
}

export default module_2
