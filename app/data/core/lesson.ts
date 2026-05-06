// app/data/core/lesson.ts

import type { Lesson } from '~/types/course'

const DEFAULT_METADATA = {
  durationMinutes: 15,
  hideCompletion: false,
} as const

export function createLesson(
  config: Lesson
): Lesson {
  return {
    ...DEFAULT_METADATA,
    ...config,
  }
}