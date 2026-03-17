import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(1, 4, 'AI-First Mindset', 'Shift from passive learning to AI-guided problem solving.', 'Risks: Hallucination and Blind Trust')

export default lesson
