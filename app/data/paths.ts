export interface PathData {
  title: string
  slug: string
  description: string
  difficulty: string
  icon: string
  courseCount: number
  courses?: { title: string; slug: string; available?: boolean }[]
}

const paths: PathData[] = [
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Build strong AI and ML fundamentals from core concepts to real-world model deployment with a practical, beginner-friendly sequence.',
    difficulty: 'beginner',
    icon: 'mdi:brain',
    courseCount: 7,
    courses: [
      { title: 'AI Fundamentals: Concepts, History, and Modern Use Cases', slug: 'ai-fundamentals-concepts-history-use-cases', available: false },
      { title: 'Python for Machine Learning', slug: 'python-for-machine-learning', available: false },
      { title: 'Data Preparation and Exploratory Data Analysis', slug: 'data-preparation-and-eda-for-ml', available: false },
      { title: 'Supervised Learning Essentials', slug: 'supervised-learning-essentials', available: false },
      { title: 'Unsupervised Learning and Feature Engineering', slug: 'unsupervised-learning-and-feature-engineering', available: false },
      { title: 'Model Evaluation, Tuning, and Responsible AI', slug: 'model-evaluation-tuning-and-responsible-ai', available: false },
      { title: 'Build and Deploy Your First ML Project', slug: 'build-and-deploy-your-first-ml-project', available: false },
    ],
  },
  {
    title: 'Web Developer',
    slug: 'web-developer',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks to build responsive, accessible web applications from scratch.',
    difficulty: 'beginner',
    icon: 'mdi:web',
    courseCount: 0,
  },
  {
    title: 'Mobile Developer',
    slug: 'mobile-developer',
    description: 'Learn to build native and cross-platform mobile apps for iOS and Android using modern tools and frameworks.',
    difficulty: 'beginner',
    icon: 'mdi:cellphone',
    courseCount: 0,
  },
  {
    title: 'DevOps',
    slug: 'devops',
    description: 'Master CI/CD pipelines, containerization, cloud infrastructure, and automation to streamline software delivery.',
    difficulty: 'intermediate',
    icon: 'mdi:server-network',
    courseCount: 0,
  },
  {
    title: 'MLOps',
    slug: 'mlops',
    description: 'Learn to deploy, monitor, and maintain machine learning models in production using CI/CD, containerization, and orchestration tools.',
    difficulty: 'intermediate',
    icon: 'mdi:robot-outline',
    courseCount: 0,
  },
  {
    title: 'QA / Tester',
    slug: 'qa-tester',
    description: 'Learn manual and automated testing strategies, test frameworks, and quality assurance best practices.',
    difficulty: 'beginner',
    icon: 'mdi:bug-check-outline',
    courseCount: 1,
    courses: [
      { title: 'Manual Software Testing with Black Box Techniques', slug: 'manual-software-testing-black-box-techniques' },
    ],
  },
  {
    title: 'Software Development Roles & Career Path',
    slug: 'software-development-roles-career',
    description: 'Understand the different roles in software development teams and map your career growth from junior to senior and beyond.',
    difficulty: 'beginner',
    icon: 'mdi:account-group-outline',
    courseCount: 0,
  },
  {
    title: 'Project Management Path',
    slug: 'project-management',
    description: 'Learn Agile, Scrum, Kanban, and modern project management methodologies to lead software projects effectively.',
    difficulty: 'intermediate',
    icon: 'mdi:clipboard-check-outline',
    courseCount: 0,
  },
  {
    title: 'Business Analyst Path',
    slug: 'business-analyst',
    description: 'Bridge the gap between business needs and technical solutions. Master requirements gathering, process modeling, and stakeholder communication.',
    difficulty: 'intermediate',
    icon: 'mdi:chart-bar',
    courseCount: 0,
  },
  {
    title: 'Start-Up Foundation Path',
    slug: 'startup-foundation',
    description: 'From idea validation to MVP launch — learn the essential skills to build and scale a technology start-up.',
    difficulty: 'beginner',
    icon: 'mdi:rocket-launch-outline',
    courseCount: 0,
  },
  {
    title: 'Advanced Software Development Skills Path',
    slug: 'advanced-software-development-skills',
    description: 'Deepen your expertise with advanced algorithms, data structures, system design, and performance optimization techniques.',
    difficulty: 'advanced',
    icon: 'mdi:code-braces-box',
    courseCount: 0,
  },
  {
    title: 'Software Architecture & Design Patterns Path',
    slug: 'software-architecture-design-patterns',
    description: 'Learn architectural styles, design patterns, and principles for building scalable, maintainable software systems.',
    difficulty: 'advanced',
    icon: 'mdi:sitemap-outline',
    courseCount: 0,
  },
]

export default paths
