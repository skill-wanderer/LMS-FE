import type { Module } from '~/types/course'
import welcomeToTheCourse from './welcome-to-the-course'

const module1: Module = {
  id: 'module-example-course-1',
  slug: 'module-1-getting-started',
  title: 'Module 1: Getting Started',
  order: 1,
  status: 'published',
  lessons: [welcomeToTheCourse],
}

export default module1
