import type { Module } from '~/types/course'
import lesson1 from './design-your-assignment-solving-workflow'
import lesson2 from './build-your-prompt-patterns'
import lesson3 from './daily-learning-through-problems'
import lesson4 from './tracking-progress-and-feedback-loops'
import lesson5 from './avoiding-over-reliance-on-ai'
import lesson6 from './final-project-your-personal-ai-learning-system'

const module4: Module = {
  id: 'module-4',
  slug: 'module-4-build-your-ai-first-learning-system',
  title: 'Module 4: Build Your AI-First Learning System',
  order: 4,
  status: 'draft',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6
  ],
}

export default module4
