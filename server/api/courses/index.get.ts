import allCourses from '~/data/courses'
import { getPublicCourses } from '../../utils/course-publication'

/** Evaluate scheduled releases on every request, without a rebuild. */
export default defineEventHandler((event) => {
  setHeader(event, 'Cache-Control', 'no-store')
  return getPublicCourses(allCourses)
})
