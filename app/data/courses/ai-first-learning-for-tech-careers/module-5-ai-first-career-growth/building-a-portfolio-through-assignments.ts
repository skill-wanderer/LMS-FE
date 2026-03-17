import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(5, 3, 'AI-First Career Growth', 'Apply AI-first learning to accelerate real career growth.', 'Building a Portfolio Through Assignments')

export default lesson
