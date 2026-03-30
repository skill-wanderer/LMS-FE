import { createHtmlModuleAssignmentShell } from '../html-lesson-shell'

const assignment = createHtmlModuleAssignmentShell({
  id: 'lesson-html-assignment-1',
  slug: 'assignment-module-1-atomic-structure',
  title: 'Assignment: Introduce Yourself with HTML',
  order: 1,
  moduleTitle: 'Module 1: The Atomic Structure (Elements & Text)',
  assignments: [
    'A. Identity: Add your name and a short title or role.',
    'B. About You: Write a short paragraph about yourself.',
    'C. Goals: List a few things you want to learn.',
    'D. Contact: Add a simple email link or placeholder contact section.',
  ],
})

assignment.content = `${assignment.content}
<h2 class="html-assignment-h2">1. Overview</h2>
<p>In this assignment, you will create a very simple HTML page to introduce yourself. This comes before Lesson 1 on purpose: learners should start by making one small page first, then study the structure behind it.</p>
<p>You will:</p>
<ul>
  <li>Create one basic HTML file named <code>index.html</code>.</li>
  <li>Use headings, paragraphs, lists, and links to present yourself clearly.</li>
  <li>Focus on structure only. No CSS and no JavaScript.</li>
  <li>Practice turning plain text into meaningful HTML elements.</li>
</ul>

<h2 class="html-assignment-h2">2. Learning Objectives</h2>
<p>You will learn to:</p>
<ul>
  <li>Create a valid basic HTML page.</li>
  <li>Use headings to organize content.</li>
  <li>Use paragraphs and lists for readable text structure.</li>
  <li>Add at least one meaningful link.</li>
  <li>Build confidence before the deeper module lessons start.</li>
</ul>

<h2 class="html-assignment-h2">3. Task Description</h2>
<p>Create a single HTML file that introduces who you are.</p>
<p>Your file must be named:</p>
<p><code>index.html</code></p>
<p>The page should be readable in a browser and structured with basic HTML tags only.</p>

<h2 class="html-assignment-h2">4. Page Requirements</h2>
<p>Your page must include the following sections:</p>

<h3 class="html-assignment-h3">A. Header Section</h3>
<ul>
  <li>One main heading using <code>&lt;h1&gt;</code> for your name.</li>
  <li>One short sentence or title under your name.</li>
</ul>

<h3 class="html-assignment-h3">B. About Me</h3>
<ul>
  <li>Add one section heading using <code>&lt;h2&gt;</code>.</li>
  <li>Write one short paragraph about yourself using <code>&lt;p&gt;</code>.</li>
</ul>

<h3 class="html-assignment-h3">C. Learning Goals</h3>
<ul>
  <li>Add a section that lists at least 3 things you want to learn.</li>
  <li>Use either <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>.</li>
</ul>

<h3 class="html-assignment-h3">D. Contact or Favorite Link</h3>
<p>Include:</p>
<ul>
  <li>At least one link using <code>&lt;a&gt;</code>.</li>
  <li>This can be an email link, GitHub profile, LinkedIn, or a favorite website.</li>
</ul>

<h3 class="html-assignment-h3">E. Bonus Section</h3>
<p>Optional but encouraged:</p>
<ul>
  <li>Add a favorite quote, hobby list, or fun fact section.</li>
</ul>

<h2 class="html-assignment-h2">5. Technical Requirements</h2>
<ul>
  <li>HTML only (no CSS, no JavaScript)</li>
  <li>Use a proper HTML document structure: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code></li>
  <li>Use at least one <code>&lt;h1&gt;</code>, one <code>&lt;h2&gt;</code>, one <code>&lt;p&gt;</code>, one list, and one link</li>
  <li>Clean indentation and readable structure</li>
  <li>Must render correctly in a browser</li>
</ul>

<h2 class="html-assignment-h2">This Assignment Is Considered Complete When...</h2>
<ul>
  <li>The file <code>index.html</code> exists and opens correctly in a browser.</li>
  <li>Your page includes your name, a short introduction, learning goals, and one link.</li>
  <li>The content is structured with meaningful HTML tags instead of plain unformatted text.</li>
  <li>The page is simple, readable, and complete.</li>
</ul>

<h2 class="html-assignment-h2">6. Suggested Structure</h2>
<p>You can organize your page like this:</p>
<ol>
  <li>Page title</li>
  <li>Your introduction</li>
  <li>Your learning goals</li>
  <li>Your contact or favorite link</li>
</ol>

<h2 class="html-assignment-h2">7. What the Instructor Will Look For</h2>
<ul>
  <li>Correct basic HTML structure</li>
  <li>Clear use of headings and paragraphs</li>
  <li>Proper use of lists and links</li>
  <li>Readable content that actually introduces the learner</li>
</ul>

<h2 class="html-assignment-h2">8. Grading Rubric</h2>
<table>
  <thead>
    <tr>
      <th>Criteria</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Correct HTML document structure</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Proper use of headings, paragraphs, lists, and links</td>
      <td>3</td>
    </tr>
    <tr>
      <td>All required self-introduction content is included</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Readable content structure and indentation</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Page renders correctly in the browser</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Bonus section or extra personal detail</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>15</strong></td>
    </tr>
  </tbody>
</table>`

export default assignment
