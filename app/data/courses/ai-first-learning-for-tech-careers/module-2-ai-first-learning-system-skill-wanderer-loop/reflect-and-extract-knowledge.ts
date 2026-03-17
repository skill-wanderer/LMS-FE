import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(2, 7, 'AI-First Learning System (Skill-Wanderer Loop)', 'Build a repeatable system to learn anything through assignments.', 'Reflect and Extract Knowledge')

export default lesson
