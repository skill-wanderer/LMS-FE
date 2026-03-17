import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(2, 6, 'AI-First Learning System (Skill-Wanderer Loop)', 'Build a repeatable system to learn anything through assignments.', 'Challenge Your Understanding with AI')

export default lesson
