import type { Course } from '~/types/course'
import module1 from './module-1-getting-started'

const modules = [module1]
const lessonCount = modules.reduce((sum, m) => sum + m.lessons.length, 0)

const course: Course = {
  id: 'course-example-course',
  slug: 'example-course',
  title: 'Example Course',
  excerpt: 'A minimal working example that shows contributors exactly how to add a new course to this LMS.',
  description: 'This course is a scaffold template for contributors. It demonstrates the required folder structure, TypeScript types, and registration steps needed to add a new course to the Skill-Wanderer Dojo LMS.\n\nThe course contains one module with one lesson. Use it as a starting point: duplicate the folder, replace the IDs, slugs, and content, then register your course in app/data/courses/index.ts.\n\nSee docs/ADDING_COURSES.md for the complete step-by-step guide.',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['example', 'template', 'contributor-guide'],
  instructor: 'Skill-Wanderer',
  createdAt: '2026-04-24',
  updatedAt: '2026-04-24',
}

export default course
