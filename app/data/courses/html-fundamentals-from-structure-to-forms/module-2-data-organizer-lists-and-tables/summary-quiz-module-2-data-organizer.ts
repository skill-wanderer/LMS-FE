import { createHtmlModuleSummaryQuizShell } from '../html-lesson-shell'

const summaryQuiz = createHtmlModuleSummaryQuizShell({
  id: 'lesson-html-summary-2',
  slug: 'summary-quiz-module-2-data-organizer',
  title: 'Summary & Quiz: Module 2',
  order: 9,
  moduleTitle: 'Module 2: The Data Organizer (Lists & Tables)',
  takeaways: [
    'Choose list types by intent: sequence, grouping, or term-definition pairs.',
    'Tables are for relational data, not layout spacing.',
    'Clear headers and structural grouping improve readability and maintainability.',
  ],
  quiz: {
    title: 'Module 2 Checkpoint Quiz',
    passPercentage: 70,
    questions: [
      {
        question: 'Which list is best for step-by-step instructions?',
        options: { A: '<ul>', B: '<ol>', C: '<dl>', D: '<table>' },
        answer: 'B',
      },
      {
        question: 'Which element pair defines term-and-description content?',
        options: { A: '<thead> and <tbody>', B: '<ul> and <li>', C: '<dt> and <dd>', D: '<tr> and <td>' },
        answer: 'C',
      },
      {
        question: 'What is the role of <th> in a table?',
        options: {
          A: 'Adds spacing between rows',
          B: 'Marks header cells for rows/columns',
          C: 'Creates a hyperlink',
          D: 'Sorts table data automatically',
        },
        answer: 'B',
      },
      {
        question: 'When should nested lists be used?',
        options: {
          A: 'To represent hierarchy within grouped items',
          B: 'To make text bold',
          C: 'To replace every table',
          D: 'Only for mobile devices',
        },
        answer: 'A',
      },
      {
        question: 'What is a good rule before using a table?',
        options: {
          A: 'Use it for all page sections',
          B: 'Ensure data has row-column relationships',
          C: 'Use table to center content',
          D: 'Avoid any headers',
        },
        answer: 'B',
      },
    ],
  },
})

export default summaryQuiz
