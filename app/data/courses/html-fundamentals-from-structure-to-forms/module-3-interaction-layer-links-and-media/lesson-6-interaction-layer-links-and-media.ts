import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-6',
  slug: 'lesson-6-interaction-layer-links-and-media',
  title: 'The Interaction Layer (Links & Media)',
  order: 11,
  requirement: 'Connect your page to the rest of the web and handle external assets.',
  optionalLessons: [
    'Hyperlinks: <code>&lt;a&gt;</code> with <code>href</code>, <code>target="_blank"</code> + <code>rel="noopener noreferrer"</code>, and internal anchors (<code>#id</code>).',
    'Images: <code>&lt;img&gt;</code> with <code>src</code>, <code>alt</code> (Accessibility), and <code>loading="lazy"</code>.',
    'Attributes: Understand <code>id</code> vs <code>class</code> as identifiers.',
  ],
  summaryAndQuizzes: [
    'Connectivity Logic: Mastering the relationship between nodes. Challenge: Making an image clickable so it leads to a website.',
    'Internal Routing: Creating smooth user movement within a single document. Challenge: Creating a Back to Top link that jumps to the top of a long page.',
    'Accessibility and Errors: Ensuring data is communicated even when assets fail. Challenge: Handling a Broken Image gracefully using alt text.',
  ],
})

export default lesson
