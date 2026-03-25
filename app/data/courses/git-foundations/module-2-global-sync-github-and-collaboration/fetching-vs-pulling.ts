import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-6',
  slug: 'fetching-vs-pulling',
  title: 'Fetching vs. Pulling: The Difference Between Checking for Updates and Automatically Applying Them',
  order: 4,
  moduleTitle: 'Module 2: Global Sync (GitHub & Collaboration)',
  whyItMatters: 'Professionals choose fetch when they want visibility before change, and pull when they are ready to integrate. Confusing those two can create avoidable merge noise.',
  focusPoints: [
    'Use fetch to inspect incoming work without changing your current branch state.',
    'Use pull when you intentionally want to bring remote changes into the branch you are standing on.',
    'Understand why fetch is often safer during investigation and pull is stronger during active synchronization.',
  ],
})

export default lesson