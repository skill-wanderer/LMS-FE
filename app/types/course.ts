export interface Course {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  thumbnail?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lessonCount: number
  lessons: Lesson[]
  tags: string[]
  instructor?: string
  progress?: number
  createdAt: string
  updatedAt: string
}

export interface Lesson {
  id: string
  slug: string
  title: string
  type: 'video' | 'article'
  content?: string
  videoUrl?: string
  completed?: boolean
  order: number
  module?: string
  durationMinutes?: number
}

export interface LearningPath {
  id: string
  slug: string
  title: string
  description: string
  courses: Course[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}
