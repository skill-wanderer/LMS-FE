import type { Module } from '~/types/course'
import lesson1 from './why-most-people-learn-slowly'
import lesson2 from './the-assignment-first-learning-approach'
import lesson3 from './explore-through-problems-with-ai'
import lesson4 from './break-down-complexity-with-ai'
import lesson5 from './apply-by-solving-micro-tasks'
import lesson6 from './challenge-your-understanding-with-ai'
import lesson7 from './reflect-and-extract-knowledge'
import lesson8 from './practice-solve-an-unknown-topic-end-to-end'

const module2: Module = {
  id: 'module-2',
  slug: 'module-2-ai-first-learning-system-skill-wanderer-loop',
  title: 'Module 2: AI-First Learning System (Skill-Wanderer Loop)',
  order: 2,
  status: 'draft',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8
  ],
}

export default module2
