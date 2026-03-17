import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(6, 5, 'Final Assignment: Real-World AI Learning Challenge', 'Apply everything in a messy, real-world problem with no clear instructions.', 'Validation and Iteration')

export default lesson
