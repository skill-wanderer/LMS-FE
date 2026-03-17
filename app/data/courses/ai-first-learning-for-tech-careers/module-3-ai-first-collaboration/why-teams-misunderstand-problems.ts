import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(3, 1, 'AI-First Collaboration', 'Use AI to align thinking and solve problems together.', 'Why Teams Misunderstand Problems')

export default lesson
