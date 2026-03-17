import type { Lesson } from '~/types/course'

const lessonFlow = [
  'Assignment (Problem First)',
  'AI Interaction',
  'Guided Discovery',
  'Knowledge Extraction',
  'Reflection',
]

export function buildLessonContent(moduleTitle: string, moduleSummary: string, lessonTitle: string): string {
  const listItems = lessonFlow
    .map(step => `<li><strong>${step}:</strong> Fill in this section when the lesson issue is implemented.</li>`)
    .join('')

  return `<div class="lesson-template-placeholder">
<div class="glass-card" style="padding: 1.25rem; margin-bottom: 1.5rem;">
  <p><strong>Structure-first scaffold only.</strong> This lesson exists to define navigation and implementation scope, but it remains hidden from learners until the lesson issue is completed and reviewed.</p>
</div>

<h2>Lesson Intent</h2>
<p><strong>Module:</strong> ${moduleTitle}</p>
<p><strong>Lesson:</strong> ${lessonTitle}</p>
<p><strong>Module summary:</strong> ${moduleSummary}</p>

<h2>Standard Lesson Flow</h2>
<ol>${listItems}</ol>

<h2>Implementation Notes</h2>
<ul>
  <li>Keep the lesson assignment-first and AI-guided.</li>
  <li>Use AI as a thinking partner, not as an answer dump.</li>
  <li>End with reflection and knowledge extraction in the learner's own words.</li>
  <li>Do not publish this lesson until the linked GitHub issue is complete.</li>
</ul>
</div>`
}

export function createDraftLesson(moduleOrder: number, lessonOrder: number, moduleTitle: string, moduleSummary: string, lessonTitle: string): Lesson {
  return {
    id: `lesson-${moduleOrder}-${lessonOrder}`,
    slug: slugify(lessonTitle),
    title: lessonTitle,
    type: 'article',
    status: 'draft',
    durationMinutes: 12,
    order: lessonOrder,
    hideCompletion: true,
    content: buildLessonContent(moduleTitle, moduleSummary, lessonTitle),
  }
}

export function createPublishedLesson(id: string, title: string, order: number): Lesson {
  return {
    id,
    slug: slugify(title),
    title,
    type: 'article',
    status: 'published',
    durationMinutes: 15,
    order,
    hideCompletion: false,
    createdAt: '2026-03-17',
    updatedAt: '2026-03-17',
    content: `<div class="ai-first-lesson"><h2>AI-First vs Traditional Learning</h2><p>This published lesson remains available while the rest of the AI-first course is scaffolded into module and lesson files.</p></div>`,
  }
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
