import allCourses from '~/data/courses'
import { getPublishedLesson } from '../../../../utils/course-publication'

export default defineEventHandler((event) => {
  setHeader(event, 'Cache-Control', 'no-store')
  const courseSlug = getRouterParam(event, 'slug') ?? ''
  const lessonSlug = getRouterParam(event, 'lessonSlug') ?? ''
  const lesson = getPublishedLesson(allCourses, courseSlug, lessonSlug)

  if (!lesson) {
    throw createError({ statusCode: 404, statusMessage: 'Lesson not published yet' })
  }

  return lesson
})
