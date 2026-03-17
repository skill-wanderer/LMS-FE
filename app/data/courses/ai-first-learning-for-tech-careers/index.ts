import type { Course, Lesson, Module } from '~/types/course'
import { quanNguyen } from '~/data/authors'

type ModuleBlueprint = {
  order: number
  title: string
  summary: string
  lessons: string[]
}

const lessonFlow = [
  'Assignment (Problem First)',
  'AI Interaction',
  'Guided Discovery',
  'Knowledge Extraction',
  'Reflection',
]

const moduleBlueprints: ModuleBlueprint[] = [
  {
    order: 1,
    title: 'AI-First Mindset',
    summary: 'Shift from passive learning to AI-guided problem solving.',
    lessons: [
      'AI-First vs Traditional Learning',
      'AI as a Thinking Partner (Not a Tool)',
      'Asking Better Questions',
      'Risks: Hallucination and Blind Trust',
      'Practice: Your First AI Learning Assignment',
    ],
  },
  {
    order: 2,
    title: 'AI-First Learning System (Skill-Wanderer Loop)',
    summary: 'Build a repeatable system to learn anything through assignments.',
    lessons: [
      'Why Most People Learn Slowly',
      'The Assignment-First Learning Approach',
      'Explore Through Problems with AI',
      'Break Down Complexity with AI',
      'Apply by Solving Micro-Tasks',
      'Challenge Your Understanding with AI',
      'Reflect and Extract Knowledge',
      'Practice: Solve an Unknown Topic End-to-End',
    ],
  },
  {
    order: 3,
    title: 'AI-First Collaboration',
    summary: 'Use AI to align thinking and solve problems together.',
    lessons: [
      'Why Teams Misunderstand Problems',
      'AI for Shared Understanding',
      'Solving Problems Across Roles with AI',
      'AI as a Team Thinking Assistant',
      'Practice: Group Problem-Solving with AI',
    ],
  },
  {
    order: 4,
    title: 'Build Your AI-First Learning System',
    summary: 'Turn learners into independent, system-driven learners.',
    lessons: [
      'Design Your Assignment-Solving Workflow',
      'Build Your Prompt Patterns',
      'Daily Learning Through Problems',
      'Tracking Progress and Feedback Loops',
      'Avoiding Over-Reliance on AI',
      'Final Project: Your Personal AI Learning System',
    ],
  },
  {
    order: 5,
    title: 'AI-First Career Growth',
    summary: 'Apply AI-first learning to accelerate real career growth.',
    lessons: [
      'Learning Faster Than Others',
      'Solving Harder Problems Over Time',
      'Building a Portfolio Through Assignments',
      'Standing Out in the Job Market',
      'Long-Term AI-First Learning Strategy',
    ],
  },
  {
    order: 6,
    title: 'Final Assignment: Real-World AI Learning Challenge',
    summary: 'Apply everything in a messy, real-world problem with no clear instructions.',
    lessons: [
      'The Challenge Brief (Ambiguous Problem)',
      'Understanding the Problem with AI',
      'Planning Your Approach',
      'Execution: Solving with AI Support',
      'Validation and Iteration',
      'Final Reflection and Knowledge Extraction',
    ],
  },
]

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function buildLessonContent(moduleTitle: string, moduleSummary: string, lessonTitle: string): string {
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

function createLesson(moduleOrder: number, moduleTitle: string, moduleSummary: string, lessonOrder: number, lessonTitle: string): Lesson {
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

function createModule(blueprint: ModuleBlueprint): Module {
  return {
    id: `module-${blueprint.order}`,
    slug: `module-${blueprint.order}-${slugify(blueprint.title)}`,
    title: `Module ${blueprint.order}: ${blueprint.title}`,
    order: blueprint.order,
    status: 'draft',
    lessons: blueprint.lessons.map((lessonTitle, lessonIndex) =>
      createLesson(blueprint.order, blueprint.title, blueprint.summary, lessonIndex + 1, lessonTitle)
    ),
  }
}

const modules = moduleBlueprints.map(createModule)
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-ai-first-learning-for-tech-careers',
  slug: 'ai-first-learning-for-tech-careers',
  title: 'AI-First Learning for Tech Careers',
  excerpt: 'Learn anything by solving problems with AI through an assignment-first learning system designed for modern tech careers.',
  thumbnail: '/images/courses/ai-first-learning-for-tech-careers.png',
  thumbnailFit: 'contain',
  thumbnailPosition: 'center center',
  description: 'This course teaches a system to learn anything through AI-guided problem solving.\n\nThe structure is intentionally scaffolded first so the flow, sequence, and lesson boundaries are stable before full lesson content is published.\n\nLearners will eventually practice how to:\n- start with assignments instead of lectures\n- use AI as a thinking partner\n- break down ambiguous problems into smaller tasks\n- reflect and extract reusable knowledge\n- build a repeatable AI-powered learning system for career growth',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['ai-first', 'learning-system', 'career-growth', 'problem-solving', 'assignments'],
  instructor: 'Skill-Wanderer',
  author: quanNguyen,
  createdAt: '2026-03-17',
  updatedAt: '2026-03-17',
}

export default course