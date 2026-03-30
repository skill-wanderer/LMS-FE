import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-8',
  slug: 'the-reflog',
  title: 'The Reflog: The Ultimate Undo Button for Finding Commits That Were Deleted or Lost During a Bad Reset',
  order: 2,
  moduleTitle: 'Module 3: Disaster Recovery (The Pro\'s Safety Net)',
  whyItMatters: 'Reflog remembers where HEAD and branch references have been. That makes it one of the best recovery tools after a bad reset, rebase, or accidental branch move.',
  focusPoints: [
    'Use reflog to recover commits that disappeared from normal log output after history rewriting.',
    'Understand the limit: reflog can help with commits and reference moves, not uncommitted edits that were never saved anywhere.',
    'Practice finding the recovery commit first before running a restore command.',
  ],
})

export default lesson