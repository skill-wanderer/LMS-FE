import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(4, 1, 'Build Your AI-First Learning System', 'Turn learners into independent, system-driven learners.', 'Design Your Assignment-Solving Workflow')

export default lesson
