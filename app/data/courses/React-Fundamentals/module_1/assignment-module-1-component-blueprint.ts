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
<ul>
  <li>Objective: Master the "Component Thinking" mental model in React.</li>
  <li>Core Focus: Building UIs as a tree of independent, reusable JSX functions.</li>
  <li>Deliverables: Four isolated mini-projects demonstrating composition.</li>
</ul>

<h2 class="react-assignment-h2">2. Getting Started</h2>
<ul>
  <li>Component Structure: Every component is a JavaScript function that returns JSX.</li>
  <li>Entry Point: React starts by rendering a root component into your HTML.</li>
  <li>Reactivity: When you change your React code, the browser updates automatically.</li>
</ul>

<h2 class="react-assignment-h2">3. Task A — The Simple Bio</h2>
<p>Build an "About Me" page from functional components only. No logic, no state.</p>
<h3 class="react-assignment-h3">React Hints</h3>
<ul>
  <li>Component Breakdown: Identify the Avatar, Name, and Bio as separate React functions.</li>
  <li>Project Files: Keep the <code>App component</code> clean by importing components from your components folder.</li>
  <li>The Return: Every React function must return a single JSX element or Fragment.</li>
  <li>Component Naming: Always use PascalCase for your component function names.</li>
</ul>

<h2 class="react-assignment-h2">4. Task B — The News Snippet</h2>
<p>Compose three focused components into a "Breaking News" card.</p>
<h3 class="react-assignment-h3">React Hints</h3>
<ul>
  <li>Granularity: Small, focused components are easier to read and reuse in React.</li>
  <li>Nesting Logic: Practice nesting <code>CategoryBadge</code> and <code>Headline</code> inside a main container.</li>
  <li>Composition: Wrap all three components inside an <code>&lt;article&gt;</code> tag in the <code>App component</code>.</li>
  <li>Markup: Use semantic tags like <code>h2</code> and <code>p</code> within your React components.</li>
</ul>

<h2 class="react-assignment-h2">5. Task C — The Layout Shell</h2>
<p>Split a full-page layout into four files: one per component.</p>
<h3 class="react-assignment-h3">React Hints</h3>
<ul>
  <li>Organization: Give every major layout piece (Header, Main, Footer) its own React file.</li>
  <li>Layout Assembly: The <code>App component</code> should act as the orchestrator for your layout parts.</li>
  <li>The Wrapper: Use a React Fragment (<code>&lt;&gt;...&lt;/&gt;</code>) if you need to return multiple siblings.</li>
</ul>

<h2 class="react-assignment-h2">6. Task D — The Escalation</h2>
<p>Rebuild the same layout using only two files. Use composition to eliminate unnecessary splits.</p>
<h3 class="react-assignment-h3">React Hints</h3>
<ul>
  <li>Internal Components: You can define multiple React functions within a single file for simple logic.</li>
  <li>Component Nesting: Pass components as children or nest them directly in the <code>Layout</code> component.</li>
  <li>The Root: Keep your <code>App component</code> minimal by rendering only the primary <code>Layout</code>.</li>
</ul>

<h2 class="react-assignment-h2">7. Technical Requirements</h2>
<ul>
  <li>Every component must be a named function.</li>
  <li>Strict PascalCase naming for all components.</li>
  <li>Proper React component organization.</li>
  <li>Zero console errors or runtime warnings.</li>
</ul>

<h2 class="react-assignment-h2">This Assignment Is Considered Complete When...</h2>
<ul>
  <li>The React component tree renders correctly in the browser.</li>
  <li>Tasks C and D demonstrate two different ways to organize component files.</li>
  <li>All components are properly exported and imported.</li>
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
      <td>Task A: Successful composition of three React components</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Task B: Proper nesting of semantic JSX components</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Task C: Clean separation of layout concerns into 4 files</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Task D: Efficient file organization using internal composition</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Naming: Consistent use of PascalCase and named functions</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Stability: App renders without React runtime errors</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>15</strong></td>
    </tr>
  </tbody>
</table>`

export default assignment