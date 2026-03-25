import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-5',
  slug: 'the-pull-request',
  title: 'The Pull Request (PR): The Professional Checkpost for Code Review Before Merging Into Protected Branches',
  order: 2,
  moduleTitle: 'Module 2: Global Sync (GitHub & Collaboration)',
  whyItMatters: 'The pull request is where code becomes team-visible, reviewable, and accountable. It is a quality gate, not just a button before merge.',
  focusPoints: [
    'Understand why teams protect important branches and require PR review before merging.',
    'Use PRs to discuss risk, review intent, and catch mistakes before they land on shared branches.',
    'Recognize merge conflicts as a signal that branch history needs cleanup before integration.',
  ],
})

export default lesson