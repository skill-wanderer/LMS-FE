import type { Module } from '~/types/course'
import lesson1 from './the-challenge-brief-ambiguous-problem'
import lesson2 from './understanding-the-problem-with-ai'
import lesson3 from './planning-your-approach'
import lesson4 from './execution-solving-with-ai-support'
import lesson5 from './validation-and-iteration'
import lesson6 from './final-reflection-and-knowledge-extraction'

const module6: Module = {
  id: 'module-6',
  slug: 'module-6-final-assignment-real-world-ai-learning-challenge',
  title: 'Module 6: Final Assignment: Real-World AI Learning Challenge',
  order: 6,
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

export default module6
