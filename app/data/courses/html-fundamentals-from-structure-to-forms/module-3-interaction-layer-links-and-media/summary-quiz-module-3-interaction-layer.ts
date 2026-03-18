import { createHtmlModuleSummaryQuizShell } from '../html-lesson-shell'

const summaryQuiz = createHtmlModuleSummaryQuizShell({
  id: 'lesson-html-summary-3',
  slug: 'summary-quiz-module-3-interaction-layer',
  title: 'Summary & Quiz: Module 3',
  order: 12,
  moduleTitle: 'Module 3: The Interaction Layer (Links & Media)',
  takeaways: [
    'Links should communicate destination clearly and support both internal and external navigation.',
    'Images require meaningful alt text for accessibility and resilience.',
    'Anchor-based navigation improves long-form page usability.',
  ],
  quiz: {
    title: 'Module 3 Checkpoint Quiz',
    passPercentage: 70,
    questions: [
      {
        question: 'Which attribute defines where an <a> link navigates?',
        options: { A: 'src', B: 'href', C: 'alt', D: 'name' },
        answer: 'B',
      },
      {
        question: 'What does alt text primarily support?',
        options: {
          A: 'File compression',
          B: 'Accessibility and fallback meaning when image fails',
          C: 'Video autoplay',
          D: 'CSS styling',
        },
        answer: 'B',
      },
      {
        question: 'What does an internal anchor like #contact do?',
        options: {
          A: 'Opens a new browser tab',
          B: 'Downloads a file',
          C: 'Jumps to an element with matching id on the same page',
          D: 'Adds metadata to head',
        },
        answer: 'C',
      },
      {
        question: 'Which is a better link text for UX?',
        options: {
          A: 'Click here',
          B: 'Link',
          C: 'Read pricing plans',
          D: 'Go',
        },
        answer: 'C',
      },
      {
        question: 'Why add loading="lazy" to suitable images?',
        options: {
          A: 'To improve initial page load performance',
          B: 'To make images larger',
          C: 'To disable alt text',
          D: 'To replace src',
        },
        answer: 'A',
      },
    ],
  },
})

export default summaryQuiz
