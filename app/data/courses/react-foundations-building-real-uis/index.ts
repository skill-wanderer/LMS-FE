import type { Course } from '~/types/course'
import { aryanSingh } from '~/data/authors'
import module1 from './module-1-the-ui-lego-blocks'
import module2 from './module-2-giving-your-app-a-brain'
import module3 from './module-3-generating-ui-from-data'
import module4 from './module-4-smart-interfaces'
import module5 from './module-5-final-project'

const modules = [module1, module2, module3, module4, module5]
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-react-foundations-building-real-uis',
  slug: 'react-foundations-building-real-uis',
  title: 'React Foundations: Building Real UIs',
  excerpt: 'A highly practical, hands-on module designed to transition you from writing static HTML to building dynamic, interactive user interfaces using React.',
  description: 'A highly practical, hands-on module designed to transition you from writing static HTML to building dynamic, interactive user interfaces using React. We skip the heavy theory and focus entirely on creating real-world UI components that you would actually use on the job.\n\nThere are two ways to build React apps: in the browser or locally on your machine. We will focus exclusively on Local Development using Vite. Real developers work in their own terminals and editors (like VS Code). Setting up locally builds muscle memory and prepares you for the actual workflows you will encounter in the industry.',
  thumbnail: '/images/courses/react-foundations-building-real-uis.png',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['react', 'frontend', 'web-development', 'beginner', 'ui'],
  instructor: 'Skill-Wanderer',
  author: aryanSingh,
  createdAt: '2026-04-28',
  updatedAt: '2026-04-28',
}

export default course
