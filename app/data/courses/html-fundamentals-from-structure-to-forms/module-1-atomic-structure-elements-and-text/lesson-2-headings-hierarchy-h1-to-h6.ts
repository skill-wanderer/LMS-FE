import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-2',
  slug: 'lesson-2-headings-hierarchy-h1-to-h6',
  title: 'Headings Hierarchy - <h1> to <h6>',
  order: 3,
  requirement: 'Use heading levels to represent content hierarchy and ensure <code>&lt;h1&gt;</code> is unique for the page main topic.',
  optionalLessons: [
    'Semantic heading levels from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> and why this impacts accessibility and SEO.',
  ],
  summaryAndQuizzes: [
    'Challenge: Structure a news article with one main headline and nested sub-headlines in logical order.',
  ],
})

export default lesson
