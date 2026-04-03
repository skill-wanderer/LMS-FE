import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(3, 5, 'AI-First Collaboration', 'Use AI to align thinking and solve problems together.', 'Practice: Group Problem-Solving with AI', 'assignment')

export default lesson
