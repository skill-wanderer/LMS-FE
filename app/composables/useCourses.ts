import type { Course } from '~/types/course'

// Course data — replace with API calls when backend is ready
const mockCourses: Course[] = [
  {
    id: 'course-1',
    slug: 'manual-software-testing-black-box-techniques',
    title: 'Manual Software Testing with Black Box Techniques',
    excerpt: 'Learn the fundamentals of manual software testing using black box techniques — from equivalence partitioning to exploratory testing.',
    description: 'This beginner-friendly course covers the essential black box testing techniques every QA professional needs. You will learn how to design effective test cases without looking at source code, using industry-standard methods such as equivalence partitioning, boundary value analysis, decision tables, state transition testing, and exploratory testing. By the end, you will be able to confidently test any software application using structured, repeatable techniques.',
    thumbnail: undefined,
    difficulty: 'beginner',
    duration: '4h 30m',
    lessonCount: 10,
    lessons: [
      {
        id: 'lesson-1-1',
        slug: 'what-is-software-testing',
        title: 'What Is Software Testing?',
        type: 'article',
        duration: '20 min',
        order: 1,
      },
      {
        id: 'lesson-1-2',
        slug: 'black-box-vs-white-box-testing',
        title: 'Black Box vs White Box Testing',
        type: 'article',
        duration: '25 min',
        order: 2,
      },
      {
        id: 'lesson-1-3',
        slug: 'equivalence-partitioning',
        title: 'Equivalence Partitioning',
        type: 'article',
        duration: '30 min',
        order: 3,
      },
      {
        id: 'lesson-1-4',
        slug: 'boundary-value-analysis',
        title: 'Boundary Value Analysis',
        type: 'article',
        duration: '30 min',
        order: 4,
      },
      {
        id: 'lesson-1-5',
        slug: 'decision-table-testing',
        title: 'Decision Table Testing',
        type: 'article',
        duration: '30 min',
        order: 5,
      },
      {
        id: 'lesson-1-6',
        slug: 'state-transition-testing',
        title: 'State Transition Testing',
        type: 'article',
        duration: '30 min',
        order: 6,
      },
      {
        id: 'lesson-1-7',
        slug: 'use-case-testing',
        title: 'Use Case Testing',
        type: 'article',
        duration: '25 min',
        order: 7,
      },
      {
        id: 'lesson-1-8',
        slug: 'exploratory-testing',
        title: 'Exploratory Testing',
        type: 'article',
        duration: '25 min',
        order: 8,
      },
      {
        id: 'lesson-1-9',
        slug: 'writing-effective-test-cases',
        title: 'Writing Effective Test Cases',
        type: 'article',
        duration: '30 min',
        order: 9,
      },
      {
        id: 'lesson-1-10',
        slug: 'bug-reporting-best-practices',
        title: 'Bug Reporting Best Practices',
        type: 'article',
        duration: '25 min',
        order: 10,
      },
    ],
    tags: ['testing', 'qa', 'black-box', 'manual-testing', 'beginner'],
    instructor: 'Skill-Wanderer',
    createdAt: '2026-03-05',
    updatedAt: '2026-03-05',
  },
]

export function useCourses() {
  const courses = ref<Course[]>(mockCourses)

  function getCourseBySlug(slug: string): Course | undefined {
    return courses.value.find(c => c.slug === slug)
  }

  function getCoursesByTag(tag: string): Course[] {
    return courses.value.filter(c => c.tags.includes(tag.toLowerCase()))
  }

  function getCoursesByDifficulty(difficulty: string): Course[] {
    return courses.value.filter(c => c.difficulty === difficulty)
  }

  function searchCourses(query: string): Course[] {
    const q = query.toLowerCase()
    return courses.value.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.excerpt.toLowerCase().includes(q) ||
      c.tags.some(t => t.includes(q))
    )
  }

  return {
    courses,
    getCourseBySlug,
    getCoursesByTag,
    getCoursesByDifficulty,
    searchCourses,
  }
}
