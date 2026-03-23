import type { Module } from '~/types/course'
import assignmentModule2DataOrganizer from './assignment-module-2-data-organizer'
import lesson5DataOrganizerListsAndTables from './lesson-5-data-organizer-lists-and-tables'
import summaryQuizModule2DataOrganizer from './summary-quiz-module-2-data-organizer'

const module2: Module = {
  id: 'module-html-2',
  slug: 'module-2-data-organizer-lists-and-tables',
  title: 'Module 2: The Data Organizer (Lists & Tables)',
  order: 2,
  lessons: [
    assignmentModule2DataOrganizer,
    lesson5DataOrganizerListsAndTables,
    summaryQuizModule2DataOrganizer,
  ],
}

export default module2
