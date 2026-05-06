// app/data/core/module.ts

import type { Module } from '~/types/course'

export function createModule(module: Module): Module {
  return {
    ...module,
    lessons: [...module.lessons].sort((a, b) => a.order - b.order),
  }
}