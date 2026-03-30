import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-4',
  slug: 'local-vs-remote',
  title: 'Local vs. Remote: Your Machine and GitHub Are Two Separate Engines That Need to Talk',
  order: 1,
  moduleTitle: 'Module 2: Global Sync (GitHub & Collaboration)',
  whyItMatters: 'A local repository is not automatically shared truth. Professional work requires knowing what lives only on your machine and what has been published to the team on GitHub.',
  focusPoints: [
    'Separate local commits from remote branches and understand why both matter.',
    'See how push, fetch, and pull move information between your machine and the server.',
    'Avoid the false assumption that a local commit is automatically safe or visible to teammates.',
  ],
})

export default lesson