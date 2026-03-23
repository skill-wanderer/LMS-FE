import { createHtmlModuleSummaryQuizShell } from '../html-lesson-shell'

const summaryQuiz = createHtmlModuleSummaryQuizShell({
  id: 'lesson-html-summary-4',
  slug: 'summary-quiz-module-4-input-engine',
  title: 'Summary & Quiz: Module 4',
  order: 15,
  moduleTitle: 'Module 4: The Input Engine (Forms & Validations)',
  takeaways: [
    'Well-structured forms improve completion rates and data quality.',
    'Input types, labels, and grouping choices directly affect usability.',
    'Native validation attributes provide a reliable first layer of data checks.',
  ],
  quiz: {
    title: 'Module 4 Checkpoint Quiz',
    passPercentage: 70,
    questions: [
      {
        question: 'Which element explicitly associates text with an input control?',
        options: { A: '<legend>', B: '<label>', C: '<section>', D: '<span>' },
        answer: 'B',
      },
      {
        question: 'Which input type should be used for email addresses?',
        options: { A: 'text', B: 'number', C: 'email', D: 'search' },
        answer: 'C',
      },
      {
        question: 'What does the required attribute do?',
        options: {
          A: 'Makes the field readonly',
          B: 'Prevents submission when field is empty',
          C: 'Encrypts the input',
          D: 'Hides field from user',
        },
        answer: 'B',
      },
      {
        question: 'When should radio buttons be used?',
        options: {
          A: 'When multiple choices can be selected simultaneously',
          B: 'When exactly one option must be selected from a group',
          C: 'For long text paragraphs',
          D: 'For file uploads only',
        },
        answer: 'B',
      },
      {
        question: 'What is a good reason to use minlength or pattern?',
        options: {
          A: 'To improve client-side data quality checks',
          B: 'To style placeholders',
          C: 'To skip backend validation forever',
          D: 'To replace labels',
        },
        answer: 'A',
      },
    ],
  },
})

export default summaryQuiz
