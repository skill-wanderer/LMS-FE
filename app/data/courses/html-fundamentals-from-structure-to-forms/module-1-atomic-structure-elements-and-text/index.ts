import type { Module } from '~/types/course'
import assignmentModule1AtomicStructure from './assignment-module-1-atomic-structure'
import lesson1RootHtmlHeadBody from './lesson-1-root-html-head-body'
import lesson2HeadingsHierarchyH1ToH6 from './lesson-2-headings-hierarchy-h1-to-h6'
import lesson3TextBlocksPSpanBr from './lesson-3-text-blocks-p-span-br'
import lesson4EmphasisStrongVsB from './lesson-4-emphasis-strong-vs-b'
import summaryQuizModule1AtomicStructure from './summary-quiz-module-1-atomic-structure'

const module1: Module = {
  id: 'module-html-1',
  slug: 'module-1-atomic-structure-elements-and-text',
  title: 'Module 1: The Atomic Structure (Elements & Text)',
  order: 1,
  lessons: [
    assignmentModule1AtomicStructure,
    lesson1RootHtmlHeadBody,
    lesson2HeadingsHierarchyH1ToH6,
    lesson3TextBlocksPSpanBr,
    lesson4EmphasisStrongVsB,
    summaryQuizModule1AtomicStructure,
  ],
}

export default module1
