import type { Module } from '~/types/course'
import lesson1 from './ai-first-vs-traditional-learning'
import lesson2 from './ai-as-a-thinking-partner-not-a-tool'
import lesson3 from './asking-better-questions'
import lesson4 from './risks-hallucination-and-blind-trust'
import lesson5 from './practice-your-first-ai-learning-assignment'

const module1: Module = {
  id: 'module-1',
  slug: 'module-1-ai-first-mindset',
  title: 'Module 1: AI-First Mindset',
  order: 1,
  status: 'draft',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5
  ],
}

export default module1
