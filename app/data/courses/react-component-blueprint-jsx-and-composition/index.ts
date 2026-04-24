import type { Course } from '~/types/course'
import { thanhNguyen } from '~/data/authors'
import module1 from './module-1-component-blueprint-jsx-and-composition'

const OPEN_LESSON_SLUGS = new Set([
  'assignment-module-1-component-blueprint',
])

const modules = [module1].map(moduleItem => ({
  ...moduleItem,
  lessons: moduleItem.lessons.map(lesson => ({
    ...lesson,
    status: OPEN_LESSON_SLUGS.has(lesson.slug) ? ('published' as const) : ('draft' as const),
  })),
}))
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-react-component-blueprint-jsx-and-composition',
  slug: 'react-component-blueprint-jsx-and-composition',
  title: 'React Foundations: The Component Blueprint',
  excerpt: 'Learn to think in components: build reusable UI building blocks with JSX, functional components, and composition in TypeScript.',
  description: 'A React app is a tree of nested components, and this course teaches you to build every node in that tree with confidence.\n\nYou will work through one focused module:\n- The Component Blueprint (JSX and Composition): understand how functional components are declared, named, and composed into complex UIs.\n\nThrough four assignment-first exercises you will create a Simple Bio page, a News Snippet composed of three focused sub-components, a full Layout Shell split across separate files, and an Escalation version that achieves the same result with only two files using composition.\n\nOptional reference lessons explain how ReactDOM mounts the app, why JSX differs from HTML (className, camelCase, single root), how capitalisation separates your components from HTML tags, and when a block of JSX deserves its own component.\n\nBy the end you will be able to look at any UI mockup, identify the natural component boundaries, and build the structure from the ground up using only TypeScript-friendly React.',
  thumbnail: '/images/courses/react-component-blueprint-jsx-and-composition.png',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['react', 'jsx', 'typescript', 'frontend', 'components', 'beginner'],
  instructor: 'Skill-Wanderer',
  author: thanhNguyen,
  createdAt: '2026-04-24',
  updatedAt: '2026-04-24',
}

export default course
