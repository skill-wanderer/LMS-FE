import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(3, 3, 'AI-First Collaboration', 'Use AI to align thinking and solve problems together.', 'Solving Problems Across Roles with AI')

export default lesson
