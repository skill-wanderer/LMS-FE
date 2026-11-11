import allCourses from '~/data/courses'
import { getPublicCourses } from '../../utils/course-publication'

export default defineEventHandler((event) => {
  setHeader(event, 'Cache-Control', 'no-store')
  const slug = getRouterParam(event, 'slug')
  const course = getPublicCourses(allCourses).find(course => course.slug === slug)

  if (!course) {
    throw createError({ statusCode: 404, statusMessage: 'Course not found' })
  }

  return course
})
