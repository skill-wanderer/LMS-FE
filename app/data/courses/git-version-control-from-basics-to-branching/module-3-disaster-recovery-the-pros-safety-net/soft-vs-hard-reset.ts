import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-7',
  slug: 'soft-vs-hard-reset',
  title: 'Soft vs. Hard Reset: Undoing a Commit and Knowing When to Keep Your Work or Wipe the Slate Clean',
  order: 1,
  moduleTitle: 'Module 3: Disaster Recovery (The Pro\'s Safety Net)',
  whyItMatters: 'Reset is powerful because it changes branch history. Used correctly, it cleans up local mistakes. Used carelessly, it can destroy work you still needed.',
  focusPoints: [
    'Choose soft reset when you want to move the branch pointer but keep changes ready to recommit.',
    'Understand why hard reset is destructive and should be reserved for work you truly want to discard.',
    'Build the instinct to verify whether history is shared before rewriting it.',
  ],
})

export default lesson