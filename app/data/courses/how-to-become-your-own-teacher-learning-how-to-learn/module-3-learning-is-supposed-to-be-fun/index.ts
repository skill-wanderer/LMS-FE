import type { Module } from '~/types/course'

/**
 * Lessons are added one by one. Keep `lessons` in sync with the files in
 * this folder and import them in reading order.
 */
const module3: Module = {
  id: 'module-own-teacher-3',
  slug: 'module-3-learning-is-supposed-to-be-fun',
  title: 'Module 3: Learning Is Supposed to Be Fun',
  description: 'This module reframes learning as something you enjoy rather than something you endure. Schooling and deadlines teach people to treat learning as a sprint that ends with a certificate, which is exactly why so many stop the moment the pressure is off. Here the journey is treated as the reward, and the timeline is honest: it lasts as long as you do. Learners leave this module with a way to keep curiosity, play, and sustainable pace in their learning so it survives long after any single course ends.',
  order: 3,
  lessons: [],
}

export default module3
