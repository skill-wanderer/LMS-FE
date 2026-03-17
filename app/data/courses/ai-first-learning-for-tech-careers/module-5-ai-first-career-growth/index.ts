import type { Module } from '~/types/course'
import lesson1 from './learning-faster-than-others'
import lesson2 from './solving-harder-problems-over-time'
import lesson3 from './building-a-portfolio-through-assignments'
import lesson4 from './standing-out-in-the-job-market'
import lesson5 from './long-term-ai-first-learning-strategy'

const module5: Module = {
  id: 'module-5',
  slug: 'module-5-ai-first-career-growth',
  title: 'Module 5: AI-First Career Growth',
  order: 5,
  status: 'draft',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5
  ],
}

export default module5
