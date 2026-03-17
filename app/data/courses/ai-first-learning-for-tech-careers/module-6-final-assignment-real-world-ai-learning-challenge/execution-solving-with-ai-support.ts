import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(6, 4, 'Final Assignment: Real-World AI Learning Challenge', 'Apply everything in a messy, real-world problem with no clear instructions.', 'Execution: Solving with AI Support')

export default lesson
