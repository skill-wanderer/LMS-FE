import type { Course } from '~/types/course'
import { quanNguyen } from '~/data/authors'
import module1 from './module-1-the-importance-of-learning'
import module2 from './module-2-many-ways-to-learn'
import module3 from './module-3-learning-is-supposed-to-be-fun'
import module4 from './module-4-bonus-learning-in-the-ai-era'

const modules = [module1, module2, module3, module4]
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-how-to-become-your-own-teacher-learning-how-to-learn',
  slug: 'how-to-become-your-own-teacher-learning-how-to-learn',
  title: 'How to Become Your Own Teacher: Learning How to Learn',
  excerpt: 'The prerequisite for everything else on the Dojo. It covers why self-directed learning matters, how to combine learning methods, and how to keep it enjoyable for life.',
  thumbnail: '/images/courses/how-to-become-your-own-teacher-learning-how-to-learn.png',
  description: 'Every other course on this platform teaches you a subject. This one teaches you the skill that makes all of them work: the ability to teach yourself.\n\nIt is the prerequisite course for every learning path on the Dojo, and it is not a quick detour. What you learn here applies to anything you will ever want to get good at, whether that is a language, an instrument, a trade, a sport, a business, a habit you have failed to keep, or the subjects taught on this platform. Before you spend months or years on any of them, it is worth taking the time to understand how learning actually works, why so much of it fails, and how to make it stick.\n\nThe course is built around four ideas:\n- The Importance of Learning: why self-directed learning became a survival skill in the AI era\n- Many Ways to Learn: why no single method wins, and how to combine several so their blind spots cancel out\n- Learning Is Supposed to Be Fun: how to enjoy a journey that only ends when you do\n- Learning in the AI Era (bonus): using AI to raise your ceiling instead of hollowing out your foundation\n\nThe module structure is published first so the sequence and scope are stable. Individual lessons are written and released one at a time, and this page updates as each one goes live.',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['learning-how-to-learn', 'self-directed-learning', 'study-skills', 'beginner', 'prerequisite'],
  instructor: 'Skill-Wanderer',
  author: quanNguyen,
  createdAt: '2026-09-22',
  updatedAt: '2026-09-22',
}

export default course
