import type { Course } from '~/types/course'
import { getAllLessons, isPublishedCourse } from '~/types/course'
import allCourses from '~/data/courses'

/**
 * Format a duration in minutes into a human-readable string.
 * Examples: "15 min", "1h 23m", "2h"
 */
function formatDuration(totalMinutes: number): string {
  if (totalMinutes <= 0) return '0 min'
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  if (hours === 0) return `${minutes} min`
  if (minutes === 0) return `${hours}h`
  return `${hours}h ${minutes}m`
}

/**
 * Calculate total duration of a course in minutes by summing lesson durations.
 */
function getCourseDuration(course: Course): number {
  return getAllLessons(course).reduce((sum, l) => sum + (l.durationMinutes || 0), 0)
}

/**
 * Composable for accessing course catalogue data.
 *
 * Course content (lessons, descriptions, metadata) is bundled on the frontend
 * for instant access with zero network latency. The backend is only used for
 * student-specific actions (progress tracking, assignment submissions, etc.).
 *
 * To add a new course, create a file in ~/data/courses/ and register it in
 * ~/data/courses/index.ts.
 */
export function useCourses() {
  const courses = ref<Course[]>(allCourses.filter(isPublishedCourse))

  function getCourseBySlug(slug: string): Course | undefined {
    return courses.value.find(c => c.slug === slug)
  }

  function getCoursesByTag(tag: string): Course[] {
    return courses.value.filter(c => c.tags.includes(tag.toLowerCase()))
  }

  function getCoursesByDifficulty(difficulty: string): Course[] {
    return courses.value.filter(c => c.difficulty === difficulty)
  }

  function searchCourses(query: string): Course[] {
    const q = query.toLowerCase()
    return courses.value.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.excerpt.toLowerCase().includes(q) ||
      c.tags.some(t => t.includes(q))
    )
  }

  return {
    courses,
    getCourseBySlug,
    getCoursesByTag,
    getCoursesByDifficulty,
    searchCourses,
    formatDuration,
    getCourseDuration,
  }
}