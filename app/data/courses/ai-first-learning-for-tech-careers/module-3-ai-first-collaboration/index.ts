import type { Module } from '~/types/course'
import lesson1 from './why-teams-misunderstand-problems'
import lesson2 from './ai-for-shared-understanding'
import lesson3 from './solving-problems-across-roles-with-ai'
import lesson4 from './ai-as-a-team-thinking-assistant'
import lesson5 from './practice-group-problem-solving-with-ai'

const module3: Module = {
  id: 'module-3',
  slug: 'module-3-ai-first-collaboration',
  title: 'Module 3: AI-First Collaboration',
  order: 3,
  status: 'draft',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5
  ],
}

export default module3
