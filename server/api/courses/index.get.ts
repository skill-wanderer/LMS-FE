/**
 * GET /api/courses
 *
 * Course catalogue data is served directly from the frontend bundle
 * (see app/data/courses/) so this endpoint is intentionally minimal.
 *
 * Reserved for future use — e.g. returning student-specific course state
 * (progress, enrolment status) when authentication is added.
 */
export default defineEventHandler(async () => {
  return {
    message: 'Course content is served from the frontend. This endpoint is reserved for student-specific data (progress, enrolment).',
  }
})
