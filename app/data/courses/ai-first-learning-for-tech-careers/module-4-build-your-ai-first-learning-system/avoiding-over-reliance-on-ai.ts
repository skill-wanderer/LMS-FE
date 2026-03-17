import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(4, 5, 'Build Your AI-First Learning System', 'Turn learners into independent, system-driven learners.', 'Avoiding Over-Reliance on AI')

export default lesson
