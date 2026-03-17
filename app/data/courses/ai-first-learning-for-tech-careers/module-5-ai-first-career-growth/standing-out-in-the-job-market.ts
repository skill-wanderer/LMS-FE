import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(5, 4, 'AI-First Career Growth', 'Apply AI-first learning to accelerate real career growth.', 'Standing Out in the Job Market')

export default lesson
