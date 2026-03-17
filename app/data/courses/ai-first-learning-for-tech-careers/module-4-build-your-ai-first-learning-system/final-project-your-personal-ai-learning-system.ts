import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(4, 6, 'Build Your AI-First Learning System', 'Turn learners into independent, system-driven learners.', 'Final Project: Your Personal AI Learning System')

export default lesson
