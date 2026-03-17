import type { Lesson } from '~/types/course'
import { createDraftLesson } from '../shared'

const lesson: Lesson = createDraftLesson(2, 1, 'AI-First Learning System (Skill-Wanderer Loop)', 'Build a repeatable system to learn anything through assignments.', 'Why Most People Learn Slowly')

export default lesson
