/**
 * GET /api/courses/:slug
 * Returns a single course by slug. Replace with database query when backend is ready.
 */
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  // TODO: Replace with actual database/API call
  return {
    data: null,
    error: `Course "${slug}" not found. Connect to backend API.`,
  }
})
