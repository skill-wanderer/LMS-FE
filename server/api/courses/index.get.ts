import type { Course } from '~/types/course'

/**
 * GET /api/courses
 * Returns all courses. Replace with database query when backend is ready.
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { q, difficulty } = query as { q?: string; difficulty?: string }

  // TODO: Replace with actual database/API call
  // This is a placeholder that returns an empty array
  // The real data currently lives in composables/useCourses.ts as mock data
  const courses: Course[] = []

  return {
    data: courses,
    meta: {
      total: courses.length,
      query: q || null,
      difficulty: difficulty || null,
    },
  }
})
