import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(1, 6, 'AI-First Mindset', 'Shift from passive learning to AI-guided problem solving.', 'Practice: Your First AI Learning Assignment', 'assignment')

export default lesson
