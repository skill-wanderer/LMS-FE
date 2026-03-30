import { createHtmlModuleSummaryQuizShell } from '../html-lesson-shell'

const summaryQuiz = createHtmlModuleSummaryQuizShell({
  id: 'lesson-html-summary-1',
  slug: 'summary-quiz-module-1-atomic-structure',
  title: 'Summary & Quiz: Module 1',
  order: 6,
  moduleTitle: 'Module 1: The Atomic Structure (Elements & Text)',
  takeaways: [
    'A valid document always separates metadata in <code>&lt;head&gt;</code> from visible content in <code>&lt;body&gt;</code>.',
    'Heading levels represent information hierarchy, not visual size preferences.',
    'Paragraph, inline spans, and emphasis tags should communicate meaning first, style second.',
  ],
  quiz: {
    title: 'Module 1 Checkpoint Quiz',
    passPercentage: 70,
    questions: [
      {
        question: 'Where should the page title for the browser tab be placed?',
        options: {
          A: '<body>',
          B: '<head>',
          C: '<footer>',
          D: '<main>',
        },
        answer: 'B',
      },
      {
        question: 'What is the best reason to use only one <h1> per page?',
        options: {
          A: 'It improves semantic clarity for document structure and accessibility.',
          B: 'Browsers allow only one heading tag total.',
          C: 'It is required to make CSS work.',
          D: 'It reduces HTML file size significantly.',
        },
        answer: 'A',
      },
      {
        question: 'When is <strong> preferred over <b>?',
        options: {
          A: 'When text should look bigger only',
          B: 'When text has semantic importance',
          C: 'When text is in a table cell',
          D: 'When text is hidden',
        },
        answer: 'B',
      },
      {
        question: 'Which element is most appropriate for a standalone paragraph of content?',
        options: {
          A: '<span>',
          B: '<br>',
          C: '<p>',
          D: '<label>',
        },
        answer: 'C',
      },
      {
        question: 'What is the most semantic fix for line-by-line text grouped as one thought?',
        options: {
          A: 'Replace all content with <div>',
          B: 'Wrap logical blocks with <p> and use <br> only when line break is meaningful',
          C: 'Use only <span> tags',
          D: 'Add more <h1> tags',
        },
        answer: 'B',
      },
    ],
  },
})

export default summaryQuiz
