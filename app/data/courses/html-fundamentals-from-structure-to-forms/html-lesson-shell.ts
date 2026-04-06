import type { Lesson } from '~/types/course'

interface HtmlLessonShellOptions {
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

interface HtmlModuleAssignmentShellOptions {
  id: string
  slug: string
  title: string
  order: number
  durationMinutes?: number
  moduleTitle: string
  assignments: string[]
}

interface HtmlModuleSummaryQuizShellOptions {
  id: string
  slug: string
  title: string
  order: number
  durationMinutes?: number
  moduleTitle: string
  takeaways: string[]
  quiz: Lesson['quiz']
}

function toList(items: string[], ordered = false) {
  const tag = ordered ? 'ol' : 'ul'
  const listItems = items.map(item => `<li>${item}</li>`).join('')
  return `<${tag}>${listItems}</${tag}>`
}

export function createHtmlLessonShell(options: HtmlLessonShellOptions): Lesson {
  const assignments = options.assignments ?? []
  const content = [
    '<h2>Requirement</h2>',
    `<p>${options.requirement}</p>`,
    '<h2>Teach to Master Flow</h2>',
    '<p><strong>Step 1 - Assignments First:</strong> Try to solve the assignment before reading references.</p>',
    '<p><strong>Step 2 - Optional Lessons:</strong> If you get stuck, review the optional lessons for hints and patterns.</p>',
    '<p><strong>Step 3 - Summary and Quizzes:</strong> Validate understanding through concept checks and mini challenges.</p>',
    ...(assignments.length
      ? ['<h2>Assignments (Start First)</h2>', toList(assignments, true)]
      : []),
    '<h2>Lessons (Optional)</h2>',
    toList(options.optionalLessons, true),
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
    hideCompletion: true,
    content,
    createdAt: '2026-03-17',
    updatedAt: '2026-03-18',
  }
}

export function createHtmlModuleAssignmentShell(options: HtmlModuleAssignmentShellOptions): Lesson {
  const content = [
    '<h2>Module Assignment</h2>',
    `<p>Complete these assignments for <strong>${options.moduleTitle}</strong> before moving to the optional lesson references.</p>`,
    '<h2>Assignments (Start First)</h2>',
    toList(options.assignments, true),
    '<h2>What to Do Next</h2>',
    '<p>After finishing this assignment pack, continue to the lessons in this module for guidance, patterns, and review.</p>',
  ].join('')

  return {
    id: options.id,
    slug: options.slug,
    title: options.title,
    type: 'assignment',
    status: 'published',
    order: options.order,
    durationMinutes: options.durationMinutes ?? 30,
    hideCompletion: false,
    content,
    createdAt: '2026-03-17',
    updatedAt: '2026-03-18',
  }
}

export function createHtmlModuleSummaryQuizShell(options: HtmlModuleSummaryQuizShellOptions): Lesson {
  const content = [
    '<h2>Module Summary</h2>',
    `<p>You have completed <strong>${options.moduleTitle}</strong>. Use this recap before taking the quiz.</p>`,
    '<h2>Key Takeaways</h2>',
    toList(options.takeaways, true),
    '<h2>Before You Submit</h2>',
    '<p>Try to answer from memory first. If you are unsure, review the lesson notes, then re-check your reasoning.</p>',
  ].join('')

  return {
    id: options.id,
    slug: options.slug,
    title: options.title,
    type: 'lesson',
    status: 'published',
    order: options.order,
    durationMinutes: options.durationMinutes ?? 12,
    hideCompletion: false,
    content,
    quiz: options.quiz,
    createdAt: '2026-03-17',
    updatedAt: '2026-03-18',
  }
}
