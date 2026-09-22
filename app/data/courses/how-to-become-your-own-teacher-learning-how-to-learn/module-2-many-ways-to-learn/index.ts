import type { Module } from '~/types/course'

/**
 * Lessons are added one by one. Keep `lessons` in sync with the files in
 * this folder and import them in reading order.
 */
const module2: Module = {
  id: 'module-own-teacher-2',
  slug: 'module-2-many-ways-to-learn',
  title: 'Module 2: Many Ways to Learn',
  description: 'This module surveys the main ways people learn (reading, watching, listening, discussing, building, teaching others, and trial and error) and is honest about the strengths and blind spots of each. The point is not to crown one winner or to sort learners into "types", but to show that every method covers what another one misses. Learners leave this module able to deliberately combine methods into a personal mix instead of defaulting to whichever one feels most comfortable.',
  order: 2,
  lessons: [],
}

export default module2
