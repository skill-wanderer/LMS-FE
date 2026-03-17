import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(4, 4, 'Build Your AI-First Learning System', 'Turn learners into independent, system-driven learners.', 'Tracking Progress and Feedback Loops')

export default lesson
