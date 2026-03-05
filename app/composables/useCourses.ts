import type { Course } from '~/types/course'

// Course data — replace with API calls when backend is ready
const mockCourses: Course[] = []

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
