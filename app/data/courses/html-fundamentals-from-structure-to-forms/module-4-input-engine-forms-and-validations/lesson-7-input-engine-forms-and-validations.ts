import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-7',
  slug: 'lesson-7-input-engine-forms-and-validations',
  title: 'The Input Engine (Forms & Validations)',
  order: 14,
  requirement: 'Learn how to capture user data. This is the most complex part of HTML.',
  optionalLessons: [
    'Form Basics: <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>.',
    'Input Types: <code>text</code>, <code>password</code>, <code>email</code>, <code>checkbox</code>, <code>radio</code>.',
    'Selection: <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code>, and <code>&lt;textarea&gt;</code>.',
    'Validation: <code>required</code>, <code>pattern</code>, <code>minlength</code>.',
  ],
  summaryAndQuizzes: [
    'User Experience (UX): Connecting inputs to descriptions for better accessibility. Challenge: Linking a label to an input so clicking the text focuses the box.',
    'State Management: Controlling how users make selections. Challenge: Grouping radio buttons so only one can be selected.',
    'Metadata Capture: Handling background data without disrupting the UI. Challenge: Creating a hidden input field for metadata.',
  ],
})

export default lesson
