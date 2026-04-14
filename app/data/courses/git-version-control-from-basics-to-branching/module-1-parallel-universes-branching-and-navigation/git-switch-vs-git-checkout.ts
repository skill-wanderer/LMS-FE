import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-3',
  slug: 'git-switch-vs-git-checkout',
  title: 'The Switch: The Difference Between git checkout (Old) and git switch (New)',
  order: 4,
  moduleTitle: 'Module 1: Parallel Universes (Branching & Navigation)',
  whyItMatters: 'Git checkout used to do too many jobs at once. git switch makes branch movement clearer and reduces accidental mistakes, especially for beginners.',
  focusPoints: [
    'Understand why checkout became confusing because it handled both file restoration and branch movement.',
    'Use git switch for branch navigation and branch creation with clearer intent.',
    'Know when legacy documentation still shows checkout and how to translate it safely.',
  ],
})

export default lesson