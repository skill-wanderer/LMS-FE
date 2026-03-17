import type { Course } from '~/types/course'
import { quanNguyen } from '~/data/authors'
import module1 from './module-1-ai-first-mindset'
import module2 from './module-2-ai-first-learning-system-skill-wanderer-loop'
import module3 from './module-3-ai-first-collaboration'
import module4 from './module-4-build-your-ai-first-learning-system'
import module5 from './module-5-ai-first-career-growth'
import module6 from './module-6-final-assignment-real-world-ai-learning-challenge'

const modules = [module1, module2, module3, module4, module5, module6]
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-ai-first-learning-for-tech-careers',
  slug: 'ai-first-learning-for-tech-careers',
  title: 'AI-First Learning for Tech Careers',
  excerpt: 'Learn anything by solving problems with AI through an assignment-first learning system designed for modern tech careers.',
  thumbnail: '/images/courses/ai-first-learning-for-tech-careers.jpg',
  description: 'This course teaches a system to learn anything through AI-guided problem solving.\n\nThe structure is intentionally scaffolded first so the flow, sequence, and lesson boundaries are stable before full lesson content is published.\n\nLearners will eventually practice how to:\n- start with assignments instead of lectures\n- use AI as a thinking partner\n- break down ambiguous problems into smaller tasks\n- reflect and extract reusable knowledge\n- build a repeatable AI-powered learning system for career growth',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['ai-first', 'learning-system', 'career-growth', 'problem-solving', 'assignments'],
  instructor: 'Skill-Wanderer',
  author: quanNguyen,
  createdAt: '2026-03-17',
  updatedAt: '2026-03-17',
}

export default course
