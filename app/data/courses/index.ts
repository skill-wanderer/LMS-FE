import type { Course } from '~/types/course'

/**
 * Course catalogue registry.
 *
 * Each course lives in its own folder for maintainability.
 * Import the course and add it to the array below.
 *
 * Structure:
 *   courses/<course-slug>/
 *     index.ts          — course metadata + module imports
 *     <module-slug>/
 *       index.ts        — module metadata + lesson imports
 *       <lesson-slug>.ts — individual lesson data
 */
import manualSoftwareTesting from './manual-software-testing-black-box-techniques'
import aiFirstLearningForTechCareers from './ai-first-learning-for-tech-careers'

const allCourses: Course[] = [
  manualSoftwareTesting,
  aiFirstLearningForTechCareers,
]

export default allCourses
