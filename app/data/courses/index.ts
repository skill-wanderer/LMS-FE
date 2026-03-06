import type { Course } from '~/types/course'

/**
 * Course catalogue registry.
 *
 * Each course lives in its own file for maintainability.
 * Import the course and add it to the array below.
 *
 * Example:
 *   import newCourse from './new-course-slug'
 *   // then add `newCourse` to the allCourses array
 */
import manualSoftwareTesting from './manual-software-testing-black-box-techniques'

const allCourses: Course[] = [
  manualSoftwareTesting,
]

export default allCourses
