import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-1',
  slug: 'lesson-1-root-html-head-body',
  title: 'The Root - <html>, <head>, <body>',
  order: 2,
  requirement: 'Understand how every HTML document is organized into root containers so browser metadata and visible content are separated correctly.',
  optionalLessons: [
    'Document root structure and nesting: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>.',
  ],
  summaryAndQuizzes: [
    'Challenge: Create a document that has a title in <code>&lt;head&gt;</code> but no visible content in <code>&lt;body&gt;</code>.',
  ],
})

export default lesson
