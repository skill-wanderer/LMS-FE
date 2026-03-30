import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-3',
  slug: 'lesson-3-text-blocks-p-span-br',
  title: 'Text Blocks - <p>, <span>, <br>',
  order: 4,
  requirement: 'Differentiate block-level and inline text semantics so text layout behavior is intentional and readable.',
  optionalLessons: [
    'Text containers with <code>&lt;p&gt;</code>, inline fragments with <code>&lt;span&gt;</code>, and line breaks with <code>&lt;br&gt;</code>.',
  ],
  summaryAndQuizzes: [
    'Challenge: Nest a <code>&lt;span&gt;</code> inside a paragraph without breaking the line flow unexpectedly.',
  ],
})

export default lesson
