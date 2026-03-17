import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(4, 2, 'Build Your AI-First Learning System', 'Turn learners into independent, system-driven learners.', 'Build Your Prompt Patterns')

export default lesson
