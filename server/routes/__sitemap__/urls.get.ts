import { defineSitemapEventHandler, asSitemapUrl } from '#imports'
import allCourses from '~/data/courses'
import { getAllLessons, isPublishedLesson, isPublishedCourse } from '~/types/course'

/**
 * Provides all public URLs to the sitemap module.
 *
 * Imports course data dynamically — no hardcoded lesson slugs.
 * New courses are picked up automatically when added to the course registry.
 *
 * Senior Rule: read-only import, no mutation of course objects.
 */
export default defineSitemapEventHandler(() => {
  const urls: ReturnType<typeof asSitemapUrl>[] = []

  // Static pages
  const staticPages = [
    { loc: '/', priority: 1.0 },
    { loc: '/courses', priority: 0.9 },
    { loc: '/paths', priority: 0.7 },
    { loc: '/about', priority: 0.6 },
  ] as const

  for (const page of staticPages) {
    urls.push(asSitemapUrl({ ...page, changefreq: 'weekly' }))
  }

  // Dynamic: all published courses and their published lessons
  for (const course of allCourses) {
    if (!isPublishedCourse(course)) continue

    urls.push(asSitemapUrl({
      loc: `/courses/${course.slug}`,
      lastmod: course.updatedAt,
      changefreq: 'monthly',
      priority: 0.8,
    }))

    for (const lesson of getAllLessons(course)) {
      if (!isPublishedLesson(lesson)) continue
      urls.push(asSitemapUrl({
        loc: `/courses/${course.slug}/lessons/${lesson.slug}`,
        lastmod: lesson.updatedAt || course.updatedAt,
        changefreq: 'monthly',
        priority: 0.7,
      }))
    }
  }

  return urls
})
