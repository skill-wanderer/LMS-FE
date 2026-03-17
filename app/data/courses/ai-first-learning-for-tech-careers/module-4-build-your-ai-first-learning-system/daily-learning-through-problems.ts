import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(4, 3, 'Build Your AI-First Learning System', 'Turn learners into independent, system-driven learners.', 'Daily Learning Through Problems')

export default lesson
