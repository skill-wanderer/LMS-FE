import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(1, 2, 'AI-First Mindset', 'Shift from passive learning to AI-guided problem solving.', 'AI as a Thinking Partner (Not a Tool)')

export default lesson
