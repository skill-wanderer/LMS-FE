import type { Course } from '~/types/course'

export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp()
  const courses = useState<Course[]>('course-catalogue', () => [])
  // The server already resolved availability for the initial hydrated page.
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

  const fetchCourses = useRequestFetch()
  try {
    courses.value = await fetchCourses<Course[]>('/api/courses')
  }
  catch {
    throw createError({ statusCode: 503, statusMessage: 'Unable to load courses' })
  }
})
