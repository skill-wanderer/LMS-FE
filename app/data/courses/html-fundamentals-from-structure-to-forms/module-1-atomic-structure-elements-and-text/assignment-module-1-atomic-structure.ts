import { createHtmlModuleAssignmentShell } from '../html-lesson-shell'

const assignment = createHtmlModuleAssignmentShell({
  id: 'lesson-html-assignment-1',
  slug: 'assignment-module-1-atomic-structure',
  title: 'Assignment: Module 1 Practice Pack',
  order: 1,
  moduleTitle: 'Module 1: The Atomic Structure (Elements & Text)',
  assignments: [
    'Build a minimal valid HTML skeleton and explain where metadata ends and visible content begins.',
    'Refactor a flat document into a proper heading hierarchy without changing the topic coverage.',
    'Compose a short article teaser using paragraphs and inline highlights while minimizing unnecessary line breaks.',
    'Audit a sample policy paragraph and replace non-semantic emphasis with accessible semantic markup.',
  ],
})

assignment.content = `${assignment.content}
<h2>Demo Brief: The Broken Announcement Page</h2>
<p>
  Your team received a rushed HTML file for a product announcement page.
  The message is important, but the structure is chaotic: metadata is mixed with visible text,
  heading levels are inconsistent, and emphasis is used for style instead of meaning.
  Your mission is to rebuild it into a clean, semantic document that another developer can maintain confidently.
</p>

<h2>Output Requirements</h2>
<ul>
  <li><strong>File:</strong> One valid HTML file with clear root structure: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>.</li>
  <li><strong>Hierarchy:</strong> Exactly one <code>&lt;h1&gt;</code>, then logical <code>&lt;h2&gt;</code>/<code>&lt;h3&gt;</code> levels.</li>
  <li><strong>Text Semantics:</strong> Use <code>&lt;p&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, and <code>&lt;em&gt;</code> intentionally.</li>
  <li><strong>Cleanliness:</strong> No decorative misuse of <code>&lt;b&gt;</code> or random line breaks for spacing.</li>
</ul>

<h2>Self-Check Rubric (Before You Move On)</h2>
<ol>
  <li>I can explain why metadata belongs in <code>&lt;head&gt;</code> and user-facing content belongs in <code>&lt;body&gt;</code>.</li>
  <li>I can defend my heading hierarchy as a content outline, not a visual trick.</li>
  <li>I used semantic emphasis tags for meaning, not just appearance.</li>
  <li>Another developer can read the page and instantly understand the structure.</li>
</ol>

<h2>Stretch Goal (Optional)</h2>
<p>
  Add a short “Editor Note” block where you describe <strong>one bad choice</strong> from the original draft
  and <strong>how your new structure fixes it</strong>. Keep it concise (3 to 5 lines).
</p>`

export default assignment
