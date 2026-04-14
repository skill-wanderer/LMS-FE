import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-2',
  slug: 'head-and-navigation',
  title: 'HEAD & Navigation: Understanding Exactly Where You Are Standing in the Timeline',
  order: 3,
  moduleTitle: 'Module 1: Parallel Universes (Branching & Navigation)',
  whyItMatters: 'If you do not know where HEAD points, you can create commits on the wrong branch, inspect the wrong history, or detach yourself from the work you thought you were saving.',
  focusPoints: [
    'Interpret HEAD as your current position in Git history.',
    'Recognize the difference between being on a branch and being in detached HEAD state.',
    'Use status and log output to verify where new commits will land before you type them.',
  ],
})

export default lesson