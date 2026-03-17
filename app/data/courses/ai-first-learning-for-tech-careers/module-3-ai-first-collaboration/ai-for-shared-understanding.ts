import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(3, 2, 'AI-First Collaboration', 'Use AI to align thinking and solve problems together.', 'AI for Shared Understanding')

export default lesson
