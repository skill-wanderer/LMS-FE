// app/data/core/lesson.ts

import type { Lesson } from '~/types/course'

const DEFAULT_METADATA = {
  durationMinutes: 15,
  hideCompletion: false,
  createdAt: '2026-01-01',
  updatedAt: '2026-01-01',
} as const

export function createLesson(
  config: Omit<Lesson, 'createdAt' | 'updatedAt'>
): Lesson {
  return {
    ...DEFAULT_METADATA,
    ...config,
  }
}