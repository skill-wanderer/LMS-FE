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

function buildAiFirstVsTraditionalLearningLesson(): string {
  return `<div class="ai-first-lesson">
<p>Most people are taught to learn by collecting information first and using it later. They read, watch, highlight, and take notes before they try anything real. This can feel safe because it gives the impression of progress. But it also trains a passive learning mindset, where understanding is measured by exposure instead of by clarity, judgment, or action.</p>

<p>This lesson is not about practicing a task yet. It is about shifting the way you think about learning. Before learners can use AI well, they need a different mental model. They need to see learning not as the act of storing as much information as possible, but as the act of building usable understanding around what matters most right now.</p>

<div class="glass-card" style="padding: 1.25rem; margin: 1.5rem 0;">
  <p><strong>Lesson goal:</strong> Shift from a content-first learning mindset to an AI-first learning mindset.</p>
  <p><strong>Core idea:</strong> AI-first learning values clarity, relevance, and timely understanding over collecting large amounts of disconnected information.</p>
</div>

<h2>1. Traditional Learning Mindset</h2>
<p>Traditional learning usually starts from the belief that learners should gather as much knowledge as possible before they begin. In this model, learning is often organized around lectures, chapters, explanations, and step-by-step instruction. The learner receives information first and is expected to apply it later.</p>

<p>This approach is useful in some situations. It can provide structure, broad coverage, and a stable foundation. It can also help learners see ideas they would not discover on their own. But it has a common weakness: it can create the illusion of understanding before anything has been tested against reality.</p>

<ul>
  <li>You may recognize terms without being able to use them.</li>
  <li>You may feel prepared without being able to make decisions.</li>
  <li>You may spend too much time learning things that are not yet relevant.</li>
</ul>

<h2>2. AI-First Learning Mindset</h2>
<p>AI-first learning starts from a different belief. It assumes that learners do not need complete coverage before they begin. Instead, they need enough clarity to move forward, enough awareness to notice what they do not understand, and enough discipline to keep ownership of the thinking.</p>

<p>In this mindset, AI is not mainly a machine for answers. It is a partner for clarification, comparison, questioning, and surfacing missing understanding. The value of AI-first learning is not that it eliminates effort. The value is that it can shorten the path between confusion and useful insight.</p>

<p>This is why AI-first learning is often associated with <strong>just-in-time learning</strong>. Instead of trying to know everything in advance, the learner focuses on the knowledge that matters now. A small amount of the right knowledge can unlock a large amount of meaningful progress. Many people describe this as the 20/80 effect: a smaller portion of high-value knowledge often drives most of the immediate results.</p>

<h2>3. The Tradeoff</h2>
<p>The speed of AI-first learning is one of its biggest strengths. It helps learners reach practical understanding faster, especially when the goal is to make progress in the real world rather than to master a full theory map first. But speed always comes with a tradeoff.</p>

<p>If learners only follow what is immediately useful, they can develop blind spots. They may miss supporting concepts, edge cases, deeper principles, or important background knowledge that does not appear early. That means AI-first learning is powerful, but not complete by itself.</p>

<p>This is where traditional learning still matters. It is not irrelevant. It becomes most useful as a way to patch blind spots, strengthen weak areas, and widen understanding after the learner sees what is missing. In other words, traditional learning works best here as a complement, not as the default starting point for everything.</p>

<table>
<thead>
<tr><th>Mindset</th><th>Main Strength</th><th>Main Risk</th></tr>
</thead>
<tbody>
<tr><td><strong>Traditional learning</strong></td><td>Broad coverage and structured foundation.</td><td>Passive familiarity without usable understanding.</td></tr>
<tr><td><strong>AI-first learning</strong></td><td>Fast movement toward relevant understanding.</td><td>Blind spots caused by learning only what seems immediately necessary.</td></tr>
</tbody>
</table>

<h2>4. What Mindset Shift Looks Like</h2>
<p>The real shift is not from one method to another. It is from one assumption to another.</p>

<ul>
  <li>From "I must learn everything before I begin" to "I need enough understanding to move intelligently."</li>
  <li>From "More information means more progress" to "Better judgment means more progress."</li>
  <li>From "AI can tell me the answer" to "AI can help me see what I understand and what I still lack."</li>
  <li>From "Traditional learning is old" to "Traditional learning is useful when it patches what action-first learning misses."</li>
</ul>

<p>Every approach has strengths and weaknesses. AI-first learning is often the fastest route to momentum, but it requires awareness. Traditional learning is slower to activate, but it can fill in important gaps. Strong learners are able to use both intentionally rather than treating one as fully right and the other as fully wrong.</p>

<h2>5. Micro-Action: Turn Learning into Action</h2>
<p>Before moving on, take one small step that turns this mindset into behavior. The goal is not to master a topic right now. The goal is to experience what it feels like to start from action and learn with awareness.</p>

<p>Open your AI tool and do the following:</p>

<ol>
  <li>Think of something you want to learn right now.</li>
  <li>Ask: <strong>"Give me a small, practical assignment to practice this. It should be doable in under 30 minutes."</strong></li>
  <li>Then ask: <strong>"What should I pay attention to while doing this so I actually understand it, not just complete it?"</strong></li>
</ol>

<p><strong>Optional, but powerful:</strong></p>
<blockquote>
  <p>"What mistakes will beginners usually make in this assignment?"</p>
</blockquote>

<p>This micro-action is intentionally small. It helps you practice the mindset of starting with a focused action, noticing what understanding is required, and using AI to support awareness instead of replacing thought.</p>

<p>In practice, many learners still return to traditional learning <strong>after</strong> the doing phase. That is often the right move. Once you have tried something real, you can browse chapters, articles, or explanations with a sharper eye for what you actually missed. You are no longer studying everything in advance. You are looking specifically for the concepts, names, or topics that appeared during the work but that you did not recognize or fully understand.</p>

<h2>6. Reflection</h2>
<p>Use these questions to examine your current learning mindset.</p>

<ol>
  <li>When you start learning something new, do you usually seek full coverage first or useful clarity first?</li>
  <li>How often do you mistake familiarity with real understanding?</li>
  <li>What makes a content-first approach feel safe to you?</li>
  <li>What makes a faster, AI-supported learning approach feel risky to you?</li>
  <li>Where might just-in-time learning help you move faster?</li>
  <li>What blind spots would you need to watch for if you learned that way?</li>
  <li>After doing first, what chapters, terms, or concepts would you go back and study more traditionally?</li>
  <li>How could traditional learning help patch those blind spots without becoming your default for everything?</li>
</ol>

<div class="glass-card" style="padding: 1.25rem; margin: 1.5rem 0;">
  <p><strong>Reflection prompts</strong></p>
  <ul>
    <li>I currently define learning as...</li>
    <li>The mindset I need to leave behind is...</li>
    <li>The mindset I want to build is...</li>
    <li>The risk I need to watch for in AI-first learning is...</li>
    <li>Traditional learning is still valuable to me when it helps me...</li>
  </ul>
</div>

<h2>Key Takeaways</h2>
<ul>
  <li>This lesson is about mindset before method.</li>
  <li>Traditional learning gives structure and breadth, but can create passive familiarity.</li>
  <li>AI-first learning prioritizes relevant understanding and just-in-time learning.</li>
  <li>The 20/80 idea explains why a smaller amount of useful knowledge can drive most early progress.</li>
  <li>AI-first learning is fast, but it can produce blind spots if missing knowledge is ignored.</li>
  <li>Traditional learning still matters because it helps patch those blind spots and deepen understanding.</li>
  <li>The goal is not to choose one side forever, but to adopt a better learning mindset first.</li>
</ul>
</div>`
}

function createLesson(moduleOrder: number, moduleTitle: string, moduleSummary: string, lessonOrder: number, lessonTitle: string): Lesson {
  if (moduleOrder === 1 && lessonOrder === 1 && lessonTitle === 'AI-First vs Traditional Learning') {
    return {
      id: `lesson-${moduleOrder}-${lessonOrder}`,
      slug: slugify(lessonTitle),
      title: lessonTitle,
      type: 'article',
      status: 'published',
      durationMinutes: 15,
      order: lessonOrder,
      hideCompletion: false,
      createdAt: '2026-03-17',
      updatedAt: '2026-03-17',
      content: buildAiFirstVsTraditionalLearningLesson(),
    }
  }

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
  thumbnail: '/images/courses/ai-first-learning-for-tech-careers.jpg',
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