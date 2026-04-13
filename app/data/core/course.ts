// app/data/core/course.ts

import type { Course } from '~/types/course'

export type CourseInput = Omit<Course, 'lessonCount'>

interface CreateCourseOptions {
  openLessonSlugs?: Set<string>
}

export function createCourse(
  course: CourseInput,
  options?: CreateCourseOptions
): Course {
  const openLessons = options?.openLessonSlugs ?? new Set<string>()

  const modules = course.modules.map(module => ({
    ...module,
    lessons: module.lessons.map(lesson => ({
      ...lesson,
      status: openLessons.has(lesson.slug)
      ? ('published' as const)
      : (lesson.status ?? course.status ?? 'draft'),
    })),
  }))

  const lessonCount = modules.reduce(
    (sum, m) => sum + m.lessons.length,
    0
  )

  return {
    ...course,
    modules,
    lessonCount,
  }
}