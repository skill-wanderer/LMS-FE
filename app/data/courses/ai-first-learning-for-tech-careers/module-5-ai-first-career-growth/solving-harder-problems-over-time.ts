import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(5, 2, 'AI-First Career Growth', 'Apply AI-first learning to accelerate real career growth.', 'Solving Harder Problems Over Time')

export default lesson
