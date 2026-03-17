import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(2, 2, 'AI-First Learning System (Skill-Wanderer Loop)', 'Build a repeatable system to learn anything through assignments.', 'The Assignment-First Learning Approach')

export default lesson
