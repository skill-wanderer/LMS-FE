import type { Course, Lesson } from '~/types/course'
import { getAllLessons, isPublishedCourse, isPublishedLesson } from '~/types/course'

/** Keep lesson bodies on the server; the catalogue only needs the outline. */
export function getPublicCourses(courses: Course[]): Course[] {
  return courses.filter(isPublishedCourse).map(course => ({
    ...course,
    modules: course.modules.map(module => ({
      ...module,
      lessons: module.lessons.map(lesson => {
        // The browser uses the server's resolved status, regardless of its clock.
        const { content, videoUrl, quiz, publishAt, ...outline } = lesson
        return {
          ...outline,
          // Freeze availability at the server's time, including during hydration.
          status: isPublishedLesson(lesson) ? 'published' as const : 'draft' as const,
        }
      }),
    })),
  }))
}

export function getPublishedLesson(courses: Course[], courseSlug: string, lessonSlug: string): Lesson | undefined {
  const course = courses.find(course => course.slug === courseSlug && isPublishedCourse(course))
  if (!course) return undefined

  return getAllLessons(course).find(lesson => lesson.slug === lessonSlug && isPublishedLesson(lesson))
}
