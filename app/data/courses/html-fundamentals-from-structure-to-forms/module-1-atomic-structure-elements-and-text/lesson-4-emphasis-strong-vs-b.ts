import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-4',
  slug: 'lesson-4-emphasis-strong-vs-b',
  title: 'Emphasis - <strong> vs <b>',
  order: 5,
  requirement: 'Choose semantic emphasis correctly: use <code>&lt;strong&gt;</code> for importance and <code>&lt;b&gt;</code> for stylistic offset only.',
  optionalLessons: [
    'Meaning vs style in emphasis tags and how assistive technologies interpret semantic weight.',
  ],
  summaryAndQuizzes: [
    'Challenge: Rewrite warning text so critical terms use semantic importance instead of visual styling alone.',
  ],
})

export default lesson
