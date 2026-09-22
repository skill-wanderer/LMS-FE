import type { Module } from '~/types/course'

/**
 * Lessons are added one by one. Keep `lessons` in sync with the files in
 * this folder and import them in reading order.
 */
const module4: Module = {
  id: 'module-own-teacher-4',
  slug: 'module-4-bonus-learning-in-the-ai-era',
  title: 'Module 4 Bonus: Learning in the AI Era',
  description: 'This bonus module applies everything above to the tool that has changed learning the most. It covers where AI genuinely accelerates a self-taught learner (explaining on demand, generating practice, giving feedback, acting as a tireless study partner) and where it quietly replaces the struggle that produces real understanding. Learners leave this module able to use AI as a thinking partner that raises their ceiling, rather than a shortcut that hollows out their foundation.',
  order: 4,
  lessons: [],
}

export default module4
