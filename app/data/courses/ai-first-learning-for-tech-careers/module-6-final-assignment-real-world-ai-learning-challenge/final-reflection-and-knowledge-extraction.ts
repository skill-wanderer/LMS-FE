import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(6, 6, 'Final Assignment: Real-World AI Learning Challenge', 'Apply everything in a messy, real-world problem with no clear instructions.', 'Final Reflection and Knowledge Extraction', 'assignment')

export default lesson
