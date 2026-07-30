import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-6-5',
  slug: 'error-guessing-and-experience-based-techniques',
  title: 'Error Guessing & Experience-Based Techniques: The Tester\'s Intuition, Systematized',
  order: 22,
  moduleTitle: 'Module 6: Black Box Test Design Techniques',
  whyItMatters: 'Formal techniques cover what the requirements describe; experience-based techniques catch what they forgot. Error guessing turns hard-won knowledge of where software usually breaks into a repeatable attack checklist.',
  focusPoints: [
    'Build a personal fault catalog: empty inputs, special characters, double submits, interrupted flows.',
    'Use checklist-based testing to make intuition systematic instead of random.',
    'Know when to reach for experience-based techniques versus formal test design.',
  ],
})

export default lesson
