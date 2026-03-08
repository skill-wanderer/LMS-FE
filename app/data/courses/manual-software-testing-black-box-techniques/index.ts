import type { Course } from '~/types/course'
import { quanNguyen } from '~/data/authors'
import module1 from './module-1-introduction-to-software-testing'
import module2 from './module-2-qa-role-and-testing-fundamentals'
import module3 from './module-3-assignment-exploratory-testing-in-real-conditions'
import module4 from './module-4-assignment-test-case-writing-and-professional-bug-reporting'

const course: Course = {
  id: 'course-1',
  slug: 'manual-software-testing-black-box-techniques',
  title: 'Manual Software Testing with Black Box Techniques',
  excerpt: 'Learn how to test software without writing code, using practical black box testing techniques applied in real-world software teams.',
  description: 'This course teaches you how to test software without writing code, using practical black box testing techniques applied in real-world software teams.\n\nYou will learn how to:\n• Understand software requirements from a user\'s perspective\n• Design effective manual test cases using black box techniques\n• Perform exploratory testing to uncover hidden defects\n• Test web and mobile applications systematically\n• Write clear, professional bug reports that developers can act on\n• Collaborate effectively with developers and product managers in Agile teams\n\nThe course focuses on hands-on practice, not theory. You will work with real application scenarios and complete a final manual testing project that can be used as part of your QA portfolio.\n\nThis course is ideal for:\n• Beginners with no programming background\n• Career switchers entering the QA / testing field\n• Junior developers who want to strengthen their testing mindset\n\nBy the end of the course, you will have the skills and confidence required to perform the role of a Junior Manual QA / Software Tester in a professional environment.',
  thumbnail: '/images/courses/manual-software-testing.png',
  difficulty: 'beginner',
  lessonCount: 13,
  modules: [
    module1,
    module2,
    module3,
    module4,
  ],
  tags: ['testing', 'qa', 'black-box', 'manual-testing', 'beginner'],
  instructor: 'Skill-Wanderer',
  author: quanNguyen,
  createdAt: '2026-01-07',
  updatedAt: '2026-01-08',
}

export default course
