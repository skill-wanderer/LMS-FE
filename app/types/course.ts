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
  instructor?: string
  author?: AuthorInfo
  progress?: number
  createdAt: string
  updatedAt: string
}

export interface Module {
  id: string
  slug: string
  title: string
  order: number
  status?: PublishStatus
  lessons: Lesson[]
}

export interface QuizQuestion {
  question: string
  options: Record<string, string>
  answer: string
}

export interface Lesson {
  id: string
  slug: string
  title: string
  type: 'video' | 'article'
  status?: PublishStatus
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

export interface LearningPath {
  id: string
  slug: string
  title: string
  description: string
  courses: Course[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}
