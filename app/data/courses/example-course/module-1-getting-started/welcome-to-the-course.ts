import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-example-course-1-1',
  slug: 'welcome-to-the-course',
  title: 'Welcome to the Course',
  type: 'lesson',
  status: 'published',
  order: 1,
  durationMinutes: 5,
  createdAt: '2026-04-24',
  updatedAt: '2026-04-24',
  content: `
<h2>Welcome</h2>
<p>This is the first lesson of the <strong>Example Course</strong>. It serves as a minimal, working scaffold that contributors can copy when adding real course content.</p>

<h3>What you will learn</h3>
<ul>
  <li>How lessons are structured in this LMS</li>
  <li>How to navigate modules and lessons</li>
  <li>What the <code>Lesson</code>, <code>Module</code>, and <code>Course</code> types look like in practice</li>
</ul>

<h3>How this example is organised</h3>
<p>The folder structure for this course lives at:</p>
<pre><code>app/data/courses/example-course/
  index.ts                              ← course metadata
  module-1-getting-started/
    index.ts                            ← module metadata
    welcome-to-the-course.ts            ← this lesson
</code></pre>

<p>To add your own course, duplicate this folder, update the IDs, slugs, and content, then register the course in <code>app/data/courses/index.ts</code>. See <code>docs/ADDING_COURSES.md</code> for the full guide.</p>

<h3>Next steps</h3>
<p>Once you have finished reading through this example, head over to the <strong>Course Catalog</strong> to browse all available courses.</p>
`,
}

export default lesson
