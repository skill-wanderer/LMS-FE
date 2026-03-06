/**
 * GET /api/courses/:slug
 *
 * Course content is served from the frontend bundle.
 * This endpoint is reserved for future student-specific data
 * (e.g. lesson completion status, bookmarks) when auth is added.
 */
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  return {
    message: `Course content for "${slug}" is served from the frontend. This endpoint is reserved for student-specific data.`,
  }
})
