import type { Lesson } from '~/types/course'

const finalProjectLesson: Lesson = {
  id: 'lesson-react-final-project',
  slug: 'storefront-build-challenge',
  title: 'Final Project: Storefront Build Challenge',
  type: 'assignment',
  status: 'draft',
  order: 1,
  durationMinutes: 120,
  hideCompletion: false,
  content: `
    <h2 class="react-assignment-h2">🚀 Storefront Build Challenge</h2>
    <ul>
      <li>Objective: Integrate all core React skills into a single data-driven application.</li>
      <li>Role: Junior Frontend Developer at GearNest.</li>
      <li>Outcome: A fully interactive product catalog with a functional shopping cart.</li>
    </ul>

    <h2 class="react-assignment-h2">🎯 Mission 1: Component Architecture</h2>
    <ul>
      <li>Core Concept: Decomposing a UI design into a nested component tree.</li>
    </ul>
    <h3 class="react-assignment-h3">React Hints</h3>
    <ul>
      <li>Root Orchestration: Use the <code>App component</code> to manage the primary state and overall layout.</li>
      <li>Structural Components: Build <code>Header</code>, <code>Main</code>, and <code>Footer</code> as independent functional components.</li>
      <li>Nesting Strategy: Practice nesting components to maintain a clean and readable tree structure.</li>
      <li>Props Flow: Prepare your child components to receive specific data passed from the parent.</li>
    </ul>

    <h2 class="react-assignment-h2">🎯 Mission 2: Dynamic Catalog</h2>
    <ul>
      <li>Core Concept: Rendering lists and handling empty data states.</li>
    </ul>
    <h3 class="react-assignment-h3">React Hints</h3>
    <ul>
      <li>Mock Data: Initialize an array containing unique product objects outside your component.</li>
      <li>The List Template: Use a <code>ProductCard</code> component to render each item from your data array.</li>
      <li>Guard Rendering: Use the logical AND (<code>&amp;&amp;</code>) operator to show a message if the list is empty.</li>
      <li>Key Discipline: Assign a unique <code>key</code> prop to every mapped element for stable rendering.</li>
    </ul>

    <h2 class="react-assignment-h2">🎯 Mission 3: Cart Logic</h2>
    <ul>
      <li>Core Concept: State Management and Inter-component Communication.</li>
    </ul>
    <h3 class="react-assignment-h3">React Hints</h3>
    <ul>
      <li>Central State: Lift the <code>cart</code> array state to your common parent (App component).</li>
      <li>Action Prop: Pass an <code>onAddToCart</code> function down to the individual product cards.</li>
      <li>Immutable Logic: Use the spread operator (<code>[...prev, newItem]</code>) to update your state array.</li>
      <li>Derived UI: Calculate the total item count and price directly during the render cycle.</li>
    </ul>

    <h2 class="react-assignment-h2">🎯 Mission 4: Interactive Controls</h2>
    <ul>
      <li>Core Concept: Handling Complex State Updates and UI Feedback.</li>
    </ul>
    <h3 class="react-assignment-h3">React Hints</h3>
    <ul>
      <li>Quantity Management: Implement functions to update specific items within your cart state.</li>
      <li>Conditional Action: Disable the 'Decrease' button if the item quantity is already at its minimum.</li>
      <li>Validation Logic: Use conditional rendering to prevent the checkout view if the cart is empty.</li>
      <li>UI State: Toggle a "Success" message using a simple boolean state after form submission.</li>
    </ul>

    <h2 class="react-assignment-h2">⚡ Core React Focus</h2>
    <ul>
      <li><strong>Components</strong>: Reusable, focused building blocks.</li>
      <li><strong>State</strong>: Centralized cart data and local UI toggles.</li>
      <li><strong>Events</strong>: Propagating user actions (clicks, inputs) up the tree.</li>
      <li><strong>Rendering</strong>: Using conditions and loops to drive the visual experience.</li>
    </ul>
  `
}

const module_final = {
  id: 'module-react-final',
  slug: 'module-5-final-project',
  title: 'Final Project',
  order: 5,
  lessons: [finalProjectLesson],
}

export default module_final
