import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(5, 5, 'AI-First Career Growth', 'Apply AI-first learning to accelerate real career growth.', 'Long-Term AI-First Learning Strategy')

export default lesson
