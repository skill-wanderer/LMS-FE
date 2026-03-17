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
<p>Most people learn in the order of content first, action later. They watch, read, bookmark, and collect notes before they try anything real. AI-first learning reverses that order. You begin with a concrete problem, use AI to expose what you do not yet understand, and build knowledge while solving.</p>

<div class="glass-card" style="padding: 1.25rem; margin: 1.5rem 0;">
  <p><strong>Lesson goal:</strong> Experience the difference between traditional learning and AI-first learning by working through the same skill in two different ways.</p>
  <p><strong>Important:</strong> AI is your thinking partner in this lesson. It should help you clarify, question, and test your reasoning. It should not do the learning for you.</p>
</div>

<h2>1. Assignment (Problem First)</h2>
<p>Choose one real skill you want to build for your career right now. Keep it small enough to explore in one session.</p>

<p><strong>Examples:</strong></p>
<ul>
  <li>Understand how an API login flow works.</li>
  <li>Write a basic test case for a registration form.</li>
  <li>Read an unfamiliar error message and decide what to check first.</li>
  <li>Explain a Git workflow your team uses.</li>
</ul>

<h3>Your task</h3>
<ol>
  <li>Write a one-sentence problem statement for the skill you chose.</li>
  <li>Create a short <strong>traditional learning plan</strong> for how you would normally approach it.</li>
  <li>Create a short <strong>AI-first learning plan</strong> that starts from a realistic task instead of a lecture.</li>
  <li>Compare both approaches in your own words.</li>
</ol>

<p><strong>Minimum deliverable:</strong></p>
<ul>
  <li>A problem statement.</li>
  <li>A traditional plan with 3 to 5 steps.</li>
  <li>An AI-first plan with 3 to 5 steps.</li>
  <li>A short comparison explaining which plan would help you discover confusion faster.</li>
</ul>

<blockquote>
  <p><strong>Example problem statement:</strong> "I want to understand enough about API authentication to trace why a user cannot stay logged in."</p>
</blockquote>

<h2>2. AI Interaction</h2>
<p>Now use AI to pressure-test your thinking. Do not ask for a full solution. Ask for questions, constraints, and alternative ways to approach the problem.</p>

<h3>Rules for using AI in this lesson</h3>
<ul>
  <li>Ask AI to help you think, not to finish the task.</li>
  <li>Prefer questions such as "What am I missing?" over commands such as "Do this for me."</li>
  <li>Keep ownership of the final explanation in your own words.</li>
  <li>If AI gives an answer too quickly, ask it to slow down and challenge your assumptions.</li>
</ul>

<h3>Starter prompts</h3>
<blockquote>
  <p>"I am learning <strong>[skill]</strong>. Do not solve it for me. Ask me 5 questions that will help me define the problem more clearly."</p>
</blockquote>
<blockquote>
  <p>"I wrote this traditional learning plan. What hidden assumptions does it make, and where might I stay passive instead of practicing?"</p>
</blockquote>
<blockquote>
  <p>"Help me redesign this into an AI-first learning plan that starts with a realistic task, breaks the task into smaller parts, and keeps me responsible for the final reasoning."</p>
</blockquote>
<blockquote>
  <p>"Challenge my plan. Where am I likely to confuse memorizing with understanding?"</p>
</blockquote>

<h3>What good AI support looks like</h3>
<ul>
  <li>It helps define the task more sharply.</li>
  <li>It points out unknowns and missing context.</li>
  <li>It suggests smaller experiments.</li>
  <li>It asks you to explain your reasoning back.</li>
</ul>

<p><strong>What bad AI support looks like:</strong> generating the complete answer, hiding the hard thinking, or giving you polished words you do not truly understand.</p>

<h2>3. Guided Discovery</h2>
<p>Compare the two learning modes below, then map your own experience onto them.</p>

<table>
<thead>
<tr><th>Aspect</th><th>Traditional Learning</th><th>AI-First Learning</th></tr>
</thead>
<tbody>
<tr><td><strong>Starting point</strong></td><td>Consume content first.</td><td>Start with a concrete problem.</td></tr>
<tr><td><strong>Learner role</strong></td><td>Receiver of information.</td><td>Active problem solver.</td></tr>
<tr><td><strong>Feedback speed</strong></td><td>Slow. Confusion stays hidden until later.</td><td>Fast. Gaps appear while working.</td></tr>
<tr><td><strong>Use of AI</strong></td><td>Optional shortcut or answer source.</td><td>Thinking partner for questions, breakdowns, and checks.</td></tr>
<tr><td><strong>Main risk</strong></td><td>Passive familiarity without real capability.</td><td>Over-trusting AI instead of validating your thinking.</td></tr>
<tr><td><strong>Best outcome</strong></td><td>Broad exposure to concepts.</td><td>Practical understanding built through action.</td></tr>
</tbody>
</table>

<h3>Notice the shift</h3>
<ul>
  <li>Traditional learning often makes you feel productive before you have tested anything.</li>
  <li>AI-first learning exposes confusion early because the problem fights back.</li>
  <li>In traditional learning, progress is often measured by pages consumed.</li>
  <li>In AI-first learning, progress is measured by clearer reasoning and better next actions.</li>
</ul>

<p>The goal is not to reject books, videos, or lessons. The goal is to <strong>put them in service of a problem</strong> so learning becomes usable instead of abstract.</p>

<h2>4. Knowledge Extraction</h2>
<p>Finish the lesson by turning your experience into explicit knowledge. Write these answers in your own words without copying AI output.</p>

<ol>
  <li>What is the main difference between starting with content and starting with a problem?</li>
  <li>How did AI help you think more clearly in this exercise?</li>
  <li>Where could AI have made you lazy if you had used it carelessly?</li>
  <li>What signals tell you that you understand a topic versus only recognize the words?</li>
  <li>What is one rule you want to keep for future AI-first learning sessions?</li>
</ol>

<div class="glass-card" style="padding: 1.25rem; margin: 1.5rem 0;">
  <p><strong>Knowledge extraction template</strong></p>
  <ul>
    <li>Traditional learning usually starts with...</li>
    <li>AI-first learning starts with...</li>
    <li>AI adds value when it helps me...</li>
    <li>AI becomes dangerous when I let it...</li>
    <li>My next learning session will begin with this problem...</li>
  </ul>
</div>

<h2>5. Reflection</h2>
<p>Use these questions to close the lesson.</p>

<ol>
  <li>Which approach felt more uncomfortable, and why?</li>
  <li>At what point did you notice a real gap in your understanding?</li>
  <li>Did you ask AI for clarity, or were you tempted to ask it for completion?</li>
  <li>How would an AI-first approach change the way you learn in your current role?</li>
  <li>What would you do differently the next time you face an unfamiliar topic?</li>
</ol>

<h2>Key Takeaways</h2>
<ul>
  <li>AI-first learning begins with a problem, not a lecture.</li>
  <li>AI should increase your thinking, not replace it.</li>
  <li>Fast feedback matters more than passive content collection.</li>
  <li>Real learning becomes visible when you can explain, choose, and act with your own reasoning.</li>
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