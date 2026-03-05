export interface Course {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  thumbnail?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
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
  duration: string
  content?: string
  videoUrl?: string
  completed?: boolean
  order: number
}

export interface LearningPath {
  id: string
  slug: string
  title: string
  description: string
  courses: Course[]
  estimatedDuration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}
