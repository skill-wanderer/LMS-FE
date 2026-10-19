/** in-development: open now and still growing. planned: offered later, once its old content is revised. */
export type PathStatus = 'in-development' | 'planned'

/** The two groups planned paths are listed in, as on skill-wanderer.com/learning-path. */
export type PathGroup = 'foundational' | 'advanced'

export interface PathStage {
  id: string
  title: string
  description: string
  points: string[]
}

export interface PathCourse {
  title: string
  /** Dojo course slug. Leave it out until the course exists; the step shows as coming soon until then. */
  slug?: string
  /** Step code from the path's lesson plan on skill-wanderer.com, e.g. "AE01". */
  code?: string
  description?: string
}

export interface PathData {
  title: string
  /** Same slug as the path on skill-wanderer.com/learning-path. */
  slug: string
  /** Replaces the default "<title> Learning Path — Skill-Wanderer Dojo" page title. */
  seoTitle?: string
  description: string
  icon: string
  status: PathStatus
  /** Planned paths only. */
  group?: PathGroup
  /** In order. For a planned path this is its earlier outline, which will change as we revise it. */
  courses: PathCourse[]
  /** The featured path's full overview, shown on its path page. */
  intro?: string
  goals?: string[]
  stages?: PathStage[]
}

/** The one path open now. Every other path is planned. */
export const FEATURED_PATH_SLUG = 'learning-in-the-ai-era'

/** Slugs from before the paths matched skill-wanderer.com. Old links redirect to the new slug. */
export const LEGACY_PATH_SLUGS: Record<string, string> = {
  'web-developer': 'web-development',
  'mobile-developer': 'mobile-development',
  'ai-machine-learning': 'ai-and-machine-learning',
  'software-development-roles-career': 'software-development-roles-and-career',
  'startup-foundation': 'start-up-foundation',
  'software-architecture-design-patterns': 'software-architecture-and-design-patterns',
}

// Every earlier outline started with these two courses.
const ownTeacher: PathCourse = { title: 'How to Become Your Own Teacher: Learning How to Learn', slug: 'how-to-become-your-own-teacher-learning-how-to-learn' }
const aiFirst: PathCourse = { title: 'AI-First Learning for Tech Careers', slug: 'ai-first-learning-for-tech-careers' }

const paths: PathData[] = [
  {
    title: 'Learning in the AI Era',
    slug: FEATURED_PATH_SLUG,
    seoTitle: 'Learning in the AI Era: Mindset & Direction — Skill-Wanderer Dojo',
    description: 'The mindset, practical navigation and ways of learning you need to keep growing while AI changes everything.',
    icon: 'mdi:compass-outline',
    status: 'in-development',
    intro: 'AI is changing what people need to learn, and how they learn it, faster than any course can keep up. Before you pick a skill, you need three things that last: a mindset that keeps you learning and adapting, a practical way to find your direction through endless content and hype, and ways of learning with AI that make you sharper instead of more dependent. This path builds all three. It is free, it is for learners in any field, and it grows as we finish each lesson.',
    goals: [
      'Keep learning and adapting with confidence while the tools around you keep changing.',
      'Find a clear direction through endless courses, opinions and hype, and decide what to learn next.',
      'Use AI to learn faster while keeping your own judgment.',
      'Avoid the beginner pitfalls, scams and wasted months that slow self-learners down.',
      'Turn what you learn into real experience by building, contributing and sharing it back.',
    ],
    stages: [
      {
        id: '01',
        title: 'A Mindset for the AI Era',
        description: 'Build the habits of mind that keep you growing when the tools, the jobs and the advice all keep changing.',
        points: [
          'Why the ability to learn and adapt matters more than any single tool',
          'Treating failure and confusion as a normal part of learning',
          'Thinking for yourself instead of handing your judgment to AI',
          'Staying curious and calm when the next wave of change arrives',
        ],
      },
      {
        id: '02',
        title: 'Practical Navigation',
        description: 'Find your way through a world of endless content, so your time goes into what actually moves you forward.',
        points: [
          'Breaking down a new field and deciding what to learn next',
          'Telling real opportunities apart from hype, scams and worthless courses',
          'Checking who profits from the advice you are given',
          'Avoiding the early pitfalls most self-learners fall into',
        ],
      },
      {
        id: '03',
        title: 'Ways to Learn With AI',
        description: 'Use AI as a tutor, a practice partner and a research assistant, without letting it do your thinking for you.',
        points: [
          'AI-first learning habits that speed you up',
          'Asking better questions and checking the answers you get',
          'Learning by building small, real things from day one',
          'A simple personal system for learning on your own',
        ],
      },
      {
        id: '04',
        title: 'From Learner to Contributor',
        description: 'Turn what you learn into experience you can show, and give it back so the next learner goes further.',
        points: [
          'Contributing to real projects to gain experience',
          'Teaching what you learn, one of the best ways to master it',
          'Building a body of real work that shows what you can do',
          'Staying ready for whatever changes next',
        ],
      },
    ],
    courses: [
      { ...aiFirst, code: 'AE01', description: 'Learn how to use AI tools effectively to accelerate your learning and build stronger habits for real-world work.' },
      { code: 'AE02', title: 'The Learner\'s Mindset in the AI Era' },
      { code: 'AE03', title: 'Finding Your Direction: How to Break Down a New Field' },
      { code: 'AE04', title: 'Spotting Hype, Scams and Worthless Courses' },
      { code: 'AE05', title: 'Learning With AI Without Losing Your Judgment' },
      { code: 'AE06', title: 'From Learner to Contributor: Sharing What You Learn' },
    ],
  },

  // ── Planned: Foundational ──
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Frontend, backend, and full-stack foundations to ship modern web products.',
    icon: 'mdi:web',
    status: 'planned',
    group: 'foundational',
    courses: [
      ownTeacher,
      aiFirst,
      { title: 'Git Version Control: From Basics to Branching', slug: 'git-version-control-from-basics-to-branching' },
      { title: 'HTML Foundations: Building with Purpose', slug: 'html-fundamentals-from-structure-to-forms' },
      { title: 'React Foundations: Building Real UIs', slug: 'react-foundations-building-real-uis' },
    ],
  },
  {
    title: 'Mobile Development',
    slug: 'mobile-development',
    description: 'Build native and cross-platform apps with production-ready workflows.',
    icon: 'mdi:cellphone',
    status: 'planned',
    group: 'foundational',
    courses: [
      ownTeacher,
      aiFirst,
      { title: 'Git Version Control: From Basics to Branching', slug: 'git-version-control-from-basics-to-branching' },
    ],
  },
  {
    title: 'QA / Tester',
    slug: 'qa-tester',
    description: 'Build quality-first testing skills across manual, automation, and strategy.',
    icon: 'mdi:bug-check-outline',
    status: 'planned',
    group: 'foundational',
    courses: [
      ownTeacher,
      aiFirst,
      { title: 'Manual Software Testing with Black Box Techniques', slug: 'manual-software-testing-black-box-techniques' },
    ],
  },
  {
    title: 'Business Analyst',
    slug: 'business-analyst',
    description: 'Bridge business and technical teams with strong analysis and communication.',
    icon: 'mdi:chart-bar',
    status: 'planned',
    group: 'foundational',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'Software Development Roles & Career',
    slug: 'software-development-roles-and-career',
    description: 'Understand role pathways, growth plans, and career transitions in tech.',
    icon: 'mdi:account-group-outline',
    status: 'planned',
    group: 'foundational',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'Project Management',
    slug: 'project-management',
    description: 'Plan, execute, and deliver projects with practical frameworks and tools.',
    icon: 'mdi:clipboard-check-outline',
    status: 'planned',
    group: 'foundational',
    courses: [ownTeacher, aiFirst],
  },

  // ── Planned: Advanced & Specialized ──
  {
    title: 'AI and Machine Learning',
    slug: 'ai-and-machine-learning',
    description: 'Learn core ML concepts, model building, and practical AI integration.',
    icon: 'mdi:brain',
    status: 'planned',
    group: 'advanced',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'DevOps',
    slug: 'devops',
    description: 'Automate delivery, improve reliability, and scale systems with confidence.',
    icon: 'mdi:server-network',
    status: 'planned',
    group: 'advanced',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'MLOps',
    slug: 'mlops',
    description: 'Operationalize ML pipelines from training and validation to monitoring.',
    icon: 'mdi:robot-outline',
    status: 'planned',
    group: 'advanced',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'Start-Up Foundation',
    slug: 'start-up-foundation',
    description: 'Learn startup essentials from validation and MVP planning to execution.',
    icon: 'mdi:rocket-launch-outline',
    status: 'planned',
    group: 'advanced',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'Advanced Software Development Skills',
    slug: 'advanced-software-development-skills',
    description: 'Strengthen architecture, performance, testing, and advanced engineering craft.',
    icon: 'mdi:code-braces-box',
    status: 'planned',
    group: 'advanced',
    courses: [ownTeacher, aiFirst],
  },
  {
    title: 'Software Architecture & Design Patterns',
    slug: 'software-architecture-and-design-patterns',
    description: 'Design scalable systems with proven patterns and architecture principles.',
    icon: 'mdi:sitemap-outline',
    status: 'planned',
    group: 'advanced',
    courses: [ownTeacher, aiFirst],
  },
]

export const featuredPath = paths.find(path => path.slug === FEATURED_PATH_SLUG)!

export const plannedPaths = paths.filter(path => path.status === 'planned')

/** Planned paths in their two groups, in the order skill-wanderer.com lists them. */
export const plannedPathGroups = [
  { title: 'Foundational', paths: plannedPaths.filter(path => path.group === 'foundational') },
  { title: 'Advanced & Specialized', paths: plannedPaths.filter(path => path.group === 'advanced') },
]

export default paths
