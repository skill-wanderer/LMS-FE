import type { Lesson } from '~/types/course'

interface TesterPlannedLessonOptions {
  id: string
  slug: string
  title: string
  order: number
  moduleTitle: string
  whyItMatters: string
  focusPoints: string[]
  type?: Lesson['type']
  durationMinutes?: number
}

function toList(items: string[], ordered = false) {
  const tag = ordered ? 'ol' : 'ul'
  const listItems = items.map(item => `<li>${item}</li>`).join('')
  return `<${tag}>${listItems}</${tag}>`
}

export function createTesterPlannedLesson(options: TesterPlannedLessonOptions): Lesson {
  const content = [
    '<h2>Module Context</h2>',
    `<p><strong>${options.moduleTitle}</strong></p>`,
    '<h2>Why This Matters</h2>',
    `<p>${options.whyItMatters}</p>`,
    '<h2>What You Will Focus On</h2>',
    toList(options.focusPoints, true),
    '<h2>Status</h2>',
    '<p>This lesson is planned and will unlock after the full walkthrough is written and reviewed.</p>',
  ].join('')

  return {
    id: options.id,
    slug: options.slug,
    title: options.title,
    type: options.type ?? 'lesson',
    status: 'draft',
    order: options.order,
    durationMinutes: options.durationMinutes ?? 12,
    hideCompletion: true,
    content,
    createdAt: '2026-07-08',
    updatedAt: '2026-07-08',
  }
}
