import type { Course } from '~/types/course'
import { thanhNguyen } from '~/data/authors'
import module1 from './module-1-atomic-structure-elements-and-text'
import module2 from './module-2-data-organizer-lists-and-tables'
import module3 from './module-3-interaction-layer-links-and-media'
import module4 from './module-4-input-engine-forms-and-validations'

const modules = [module1, module2, module3, module4]
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-html-fundamentals-from-structure-to-forms',
  slug: 'html-fundamentals-from-structure-to-forms',
  title: 'HTML Foundations: Building with Purpose',
  excerpt: 'Start your web journey with practical HTML foundations: structure, data organization, links, media, and forms.',
  description: 'Every strong website begins with clear structure, and HTML is where that discipline starts. This course is built for beginners who want to learn by doing: no unnecessary theory, just practical lessons that turn plain text into meaningful, accessible web pages.\n\nYou will build confidence step by step through four focused modules:\n- The Atomic Structure (Elements & Text): learn how documents are organized with semantic hierarchy\n- The Data Organizer (Lists & Tables): group and present information with clarity\n- The Interaction Layer (Links & Media): connect sections, references, and media assets effectively\n- The Input Engine (Forms & Validations): capture user input with reliable and user-friendly form structures\n\nThroughout the course, you will complete assignment-driven exercises that reflect real frontend tasks: writing clean markup, structuring content intentionally, and making interfaces easier to navigate and maintain.\n\nBy the end of this learning path, you will not only understand HTML tags-you will understand how to think in structure, purpose, and user experience, which is the foundation of professional frontend development.',
  thumbnail: '/images/courses/html-fundamentals-from-structure-to-forms.png',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['html', 'frontend', 'web-development', 'beginner', 'forms'],
  instructor: 'Skill-Wanderer',
  author: thanhNguyen,
  createdAt: '2026-03-17',
  updatedAt: '2026-03-18',
}

export default course
