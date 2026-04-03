import type { Lesson } from '~/types/course'

interface GitPlannedLessonOptions {
  id: string
  slug: string
  title: string
  order: number
  moduleTitle: string
  whyItMatters: string
  focusPoints: string[]
  durationMinutes?: number
}

interface AssignmentRubricRow {
  criteria: string
  points: string
}

interface GitFinalAssignmentOptions {
  id: string
  slug: string
  title: string
  order: number
  moduleTitle: string
  overview: string
  objectives: string[]
  scenario: string[]
  requirements: string[]
  deliverables: string[]
  completionChecklist: string[]
  submission: string[]
  rubric: AssignmentRubricRow[]
  durationMinutes?: number
}

function toList(items: string[], ordered = false) {
  const tag = ordered ? 'ol' : 'ul'
  const listItems = items.map(item => `<li>${item}</li>`).join('')
  return `<${tag}>${listItems}</${tag}>`
}

function toTable(rows: AssignmentRubricRow[]) {
  const body = rows
    .map(row => `<tr><td>${row.criteria}</td><td>${row.points}</td></tr>`)
    .join('')

  return [
    '<table>',
    '<thead><tr><th>Criteria</th><th>Points</th></tr></thead>',
    `<tbody>${body}</tbody>`,
    '</table>',
  ].join('')
}

export function createGitPlannedLesson(options: GitPlannedLessonOptions): Lesson {
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
    type: 'lesson',
    status: 'draft',
    order: options.order,
    durationMinutes: options.durationMinutes ?? 12,
    hideCompletion: true,
    content,
    createdAt: '2026-03-25',
    updatedAt: '2026-03-25',
  }
}

export function createGitFinalAssignment(options: GitFinalAssignmentOptions): Lesson {
  const content = [
    '<h2>Final Assignment</h2>',
    `<p>${options.overview}</p>`,
    '<h2>Learning Objectives</h2>',
    toList(options.objectives, true),
    '<h2>Scenario</h2>',
    toList(options.scenario, true),
    '<h2>Required Workflow</h2>',
    toList(options.requirements, true),
    '<h2>Expected Deliverables</h2>',
    toList(options.deliverables, true),
    '<h2>This Assignment Is Complete When...</h2>',
    toList(options.completionChecklist, true),
    '<h2>What to Submit</h2>',
    toList(options.submission, true),
    '<h2>Grading Rubric</h2>',
    toTable(options.rubric),
  ].join('')

  return {
    id: options.id,
    slug: options.slug,
    title: options.title,
    type: 'lesson',
    status: 'draft',
    order: options.order,
    durationMinutes: options.durationMinutes ?? 45,
    hideCompletion: false,
    content,
    createdAt: '2026-03-25',
    updatedAt: '2026-03-25',
  }
}