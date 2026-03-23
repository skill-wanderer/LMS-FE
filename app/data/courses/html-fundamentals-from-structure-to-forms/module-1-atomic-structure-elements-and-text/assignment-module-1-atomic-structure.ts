import { createHtmlModuleAssignmentShell } from '../html-lesson-shell'

const assignment = createHtmlModuleAssignmentShell({
  id: 'lesson-html-assignment-1',
  slug: 'assignment-module-1-atomic-structure',
  title: 'Assignment: Module 1 Practice Pack',
  order: 1,
  moduleTitle: 'Module 1: The Atomic Structure (Elements & Text)',
  assignments: [
    'A. User Information: Build the required personal information fields with labels and validation.',
    'B. Preferences Section: Build gender radio buttons, hobbies checkboxes, and country select options.',
    'C. Profile Setup: Build file upload, bio textarea, and favorite number fields with constraints.',
    'D. Form Buttons: Add submit, reset, and regular button without JavaScript.',
  ],
})

assignment.content = `${assignment.content}
<h2 class="html-assignment-h2">1. Overview</h2>
<p>In this assignment, you will create a User Profile &amp; Registration Form using pure HTML (no CSS, no JavaScript). You will use Git Flow to manage your project development.</p>
<p>You will:</p>
<ul>
  <li>Build the HTML form in your Git repository.</li>
  <li>Use Git Flow branches: development in <code>dev</code>, testing/staging in <code>beta</code>, and final production in <code>main</code>.</li>
  <li>Publish your form using GitHub Pages, served from the <code>main</code> branch.</li>
  <li>Submit only the GitHub repository URL on Moodle.</li>
</ul>

<h2 class="html-assignment-h2">2. Learning Objectives</h2>
<p>You will learn to:</p>
<ul>
  <li>Create structured HTML forms.</li>
  <li>Use common HTML5 input types.</li>
  <li>Apply semantic form architecture: <code>&lt;fieldset&gt;</code>, <code>&lt;legend&gt;</code>, <code>&lt;label&gt;</code>.</li>
  <li>Organize work using a simple Git Flow workflow.</li>
  <li>Publish static HTML from the <code>main</code> branch using GitHub Pages.</li>
</ul>

<h2 class="html-assignment-h2">3. Task Description</h2>
<p>Create a single HTML file that contains a User Profile &amp; Registration Form.</p>
<p>Your file must be named:</p>
<p><code>index.html</code></p>
<p>This file must exist in the <code>main</code> branch at the end.</p>

<h2 class="html-assignment-h2">4. Form Requirements</h2>
<p>Your form must include the following elements and sections:</p>

<h3 class="html-assignment-h3">A. User Information</h3>
<p>Use <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code> for this group.</p>
<p>Required fields:</p>
<ul>
  <li>Full name - <code>&lt;input type="text" required&gt;</code></li>
  <li>Email - <code>&lt;input type="email" required&gt;</code></li>
  <li>Password - <code>&lt;input type="password" required&gt;</code></li>
  <li>Phone - <code>&lt;input type="tel"&gt;</code></li>
  <li>Birthdate - <code>&lt;input type="date"&gt;</code></li>
</ul>
<p>Each input must:</p>
<ul>
  <li>Have a <code>&lt;label for=""&gt;</code>.</li>
  <li>Use a proper <code>id=""</code>.</li>
  <li>Include appropriate validation (for example: <code>required</code>, <code>maxlength</code>, <code>pattern</code> if needed).</li>
</ul>

<h3 class="html-assignment-h3">B. Preferences Section</h3>
<p>Use another <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code>.</p>
<p>Include:</p>
<ul>
  <li>Gender - radio buttons (Male / Female / Other)</li>
  <li>Hobbies - at least 3 checkboxes</li>
  <li>Country - a <code>&lt;select&gt;</code> with at least 5 options</li>
</ul>

<h3 class="html-assignment-h3">C. Profile Setup</h3>
<p>Include:</p>
<ul>
  <li>Profile picture - <code>&lt;input type="file"&gt;</code></li>
  <li>Bio - <code>&lt;textarea rows="3"&gt;</code></li>
  <li>Favorite number - <code>&lt;input type="number" min="1" max="100"&gt;</code></li>
</ul>

<h3 class="html-assignment-h3">D. Form Buttons</h3>
<p>At the bottom of the form:</p>
<ul>
  <li>Submit - <code>&lt;input type="submit"&gt;</code></li>
  <li>Reset - <code>&lt;input type="reset"&gt;</code></li>
  <li>Regular button - <code>&lt;button type="button"&gt;</code></li>
</ul>
<p>No JavaScript required or allowed.</p>

<h2 class="html-assignment-h2">5. Technical Requirements</h2>
<ul>
  <li>HTML only (no CSS, no JavaScript)</li>
  <li>At least 2 <code>&lt;fieldset&gt;</code> groups</li>
  <li>At least 10 total inputs</li>
  <li>Every input must have a valid <code>&lt;label&gt;</code></li>
  <li>Clean indentation and readable structure</li>
  <li>Must render correctly in a browser</li>
</ul>

<h2 class="html-assignment-h2">This Assignment Is Considered Complete When...</h2>
<ul>
  <li>The file <code>index.html</code> exists in the repository root on <code>main</code>.</li>
  <li>All required form sections (A to D) are implemented in one form.</li>
  <li>Semantic structure is correct: <code>form</code>, <code>fieldset</code>, <code>legend</code>, and valid <code>label</code> bindings.</li>
  <li>Validation rules are applied correctly (<code>required</code>, <code>type</code>, <code>min/max</code>, and other constraints where needed).</li>
  <li>Git Flow is visible in history with merges from <code>dev</code> to <code>beta</code> to <code>main</code>.</li>
  <li>GitHub Pages is running from <code>main</code> and publicly accessible.</li>
</ul>

<h2 class="html-assignment-h2">6. Git Flow Requirement (Important)</h2>
<p>You must follow simple Git Flow branching:</p>
<ol>
  <li><strong>dev branch</strong>: All development work happens here. All new code is written in <code>dev</code>. Frequent commits are expected.</li>
  <li><strong>beta branch</strong>: Merge <code>dev</code> to <code>beta</code> when development is feature-complete. This branch represents testing/staging.</li>
  <li><strong>main branch</strong>: Merge <code>beta</code> to <code>main</code> only when the work is fully ready. This is the production branch.</li>
  <li><strong>GitHub Pages</strong>: Must be published from the <code>main</code> branch. Ensure <code>index.html</code> is in the root of <code>main</code>.</li>
</ol>

<h2 class="html-assignment-h2">7. What to Submit on Moodle</h2>
<p>Submit only the GitHub repository URL, for example:</p>
<p><code>https://github.com/your-username/html-form-assignment</code></p>
<p>The instructor will check:</p>
<ul>
  <li>Branch structure</li>
  <li>Commit history</li>
  <li>Git Flow usage (<code>dev</code> to <code>beta</code> to <code>main</code> merges)</li>
  <li>GitHub Pages working from <code>main</code></li>
  <li>HTML file correctness</li>
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
      <td>Correct form structure &amp; required input types</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Proper semantic elements (form, fieldset, legend, label)</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Validations (required, min/max, etc.)</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Git Flow followed correctly (dev to beta to main)</td>
      <td>3</td>
    </tr>
    <tr>
      <td>GitHub Pages published from main branch</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Code readability</td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>15</strong></td>
    </tr>
  </tbody>
</table>`

export default assignment
