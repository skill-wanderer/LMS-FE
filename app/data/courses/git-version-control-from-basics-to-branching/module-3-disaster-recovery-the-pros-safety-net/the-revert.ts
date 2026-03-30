import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-9',
  slug: 'the-revert',
  title: 'The Revert: The Safe Undo for Code That Has Already Been Pushed and Shared With the Team',
  order: 3,
  moduleTitle: 'Module 3: Disaster Recovery (The Pro\'s Safety Net)',
  whyItMatters: 'When bad code is already on a shared branch, revert is the professional undo because it preserves history instead of rewriting it out from under other people.',
  focusPoints: [
    'Use revert to create a new commit that safely negates an earlier bad commit.',
    'Understand why revert is preferred over reset on shared branches like main or production.',
    'Treat history as a team artifact once it has been pushed and used by others.',
  ],
})

export default lesson