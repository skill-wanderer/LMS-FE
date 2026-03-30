import { createHtmlModuleAssignmentShell } from '../html-lesson-shell'

const assignment = createHtmlModuleAssignmentShell({
  id: 'lesson-html-assignment-2',
  slug: 'assignment-module-2-data-organizer',
  title: 'Assignment: Module 2 Practice Pack',
  order: 7,
  moduleTitle: 'Module 2: The Data Organizer (Lists & Tables)',
  assignments: [
    'The Recipe Card: List ingredients (unordered) and cooking steps (ordered).',
    'The Tech Glossary: Use a Description List to define IT terms like Frontend, Backend, and DevOps.',
    'The Price Sheet: Create a 3-column table comparing Basic, Pro, and Enterprise plans.',
    'The Escalation: Build a Tournament Bracket. Use nested lists to show who plays whom in a semi-final and final.',
  ],
})

export default assignment
