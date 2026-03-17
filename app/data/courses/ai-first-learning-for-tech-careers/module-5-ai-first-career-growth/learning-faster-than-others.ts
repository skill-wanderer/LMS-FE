import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(5, 1, 'AI-First Career Growth', 'Apply AI-first learning to accelerate real career growth.', 'Learning Faster Than Others')

export default lesson
