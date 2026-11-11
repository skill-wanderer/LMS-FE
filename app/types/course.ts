export type PublishStatus = 'published' | 'draft'

export interface Course {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  thumbnail?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  status?: PublishStatus
  lessonCount: number
  modules: Module[]
  tags: string[]
  /**
   * Slugs of courses a learner is expected to finish first.
   * Rendered as a notice on the course page; does not hard-lock content.
   */
  prerequisites?: string[]
  instructor?: string
  author?: AuthorInfo
  coAuthor?: AuthorInfo
  progress?: number
  createdAt: string
  updatedAt: string
}

export interface Module {
  id: string
  slug: string
  title: string
  /** Short explanation of what this module is for. Shown above its lesson list. */
  description?: string
  order: number
  status?: PublishStatus
  lessons: Lesson[]
}

export interface QuizQuestion {
  question: string
  options: Record<string, string>
  answer: string
  correctExplanation?: string
  incorrectExplanation?: string
}

export interface Lesson {
  id: string
  slug: string
  title: string
  type: 'video' | 'lesson' | 'assignment'
  status?: PublishStatus
  /** ISO 8601 release time with a timezone, e.g. 2026-12-01T09:00:00+07:00. */
  publishAt?: string
  content?: string
  videoUrl?: string
  completed?: boolean
  order: number
  durationMinutes?: number
  hideCompletion?: boolean
  createdAt?: string
  updatedAt?: string
  quiz?: {
    title?: string
    passPercentage?: number
    questions: QuizQuestion[]
  }
}

export interface AuthorInfo {
  name: string
  title: string
  bio: string
  avatarUrl: string
  linkedinUrl: string
  websiteUrl: string
}

/**
 * Get a flat array of all lessons across all modules in the course.
 */
export function getAllLessons(course: Course): Lesson[] {
  return (course.modules ?? []).flatMap(m => m.lessons)
}

export function isPublishedCourse(course: Course): boolean {
  return course.status !== 'draft'
}

export function isPublishedLesson(lesson: Lesson): boolean {
  if (lesson.status === 'draft') return false
  if (lesson.publishAt === undefined) return true

  // Require an explicit timezone so release times do not depend on the server.
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/.test(lesson.publishAt)) {
    return false
  }

  const publishTime = Date.parse(lesson.publishAt)
  if (!Number.isFinite(publishTime)) return false

  // Date.parse normalizes dates such as February 30 instead of rejecting them.
  const datePart = lesson.publishAt.slice(0, 10)
  const calendarDate = new Date(`${datePart}T00:00:00Z`)
  if (calendarDate.toISOString().slice(0, 10) !== datePart) return false

  return publishTime <= Date.now()
}

export interface LearningPath {
  id: string
  slug: string
  title: string
  description: string
  courses: Course[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}
