import type { Lesson } from '~/types/course'

interface ReactLessonShellOptions {
  id: string
  slug: string
  title: string
  order: number
  durationMinutes?: number
  requirement: string
  assignments?: string[]
  optionalLessons: string[]
  summaryAndQuizzes: string[]
  status?: Lesson['status']
}

function parseMarkdown(text: string): string {
  return text.replace(/`([^`]+)`/g, (_, p1) => {
    const escaped = p1.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return `<code>${escaped}</code>`
  })
}

function toList(items: string[], ordered = false) {
  const tag = ordered ? 'ol' : 'ul'
  const listItems = items.map(item => `<li>${parseMarkdown(item)}</li>`).join('')
  return `<${tag}>${listItems}</${tag}>`
}

export function createReactLessonShell(options: ReactLessonShellOptions): Lesson {
  const assignments = options.assignments ?? []
  const content = [
    '<h2>Requirement</h2>',
    `<p>${parseMarkdown(options.requirement)}</p>`,
    ...(assignments.length
      ? ['<h2>Assignments (Start First)</h2>', toList(assignments, true)]
      : []),
    '<h2>Lessons (Optional)</h2>',
    toList(options.optionalLessons, false),
    '<h2>The Summary and Quizzes</h2>',
    toList(options.summaryAndQuizzes, true),
  ].join('')

  return {
    id: options.id,
    slug: options.slug,
    title: options.title,
    type: 'lesson',
    status: options.status ?? 'draft',
    order: options.order,
    durationMinutes: options.durationMinutes ?? 15,
    hideCompletion: false,
    content,
    createdAt: '2026-04-28',
    updatedAt: '2026-04-28',
  }
}
