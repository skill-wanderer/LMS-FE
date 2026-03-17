import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(3, 4, 'AI-First Collaboration', 'Use AI to align thinking and solve problems together.', 'AI as a Team Thinking Assistant')

export default lesson
