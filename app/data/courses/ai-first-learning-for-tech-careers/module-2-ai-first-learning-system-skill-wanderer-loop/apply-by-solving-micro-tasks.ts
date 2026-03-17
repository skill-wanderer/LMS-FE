import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(2, 5, 'AI-First Learning System (Skill-Wanderer Loop)', 'Build a repeatable system to learn anything through assignments.', 'Apply by Solving Micro-Tasks')

export default lesson
