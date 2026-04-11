import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-1',
  slug: 'what-is-a-branch',
  title: 'What is a Branch? Creating a Separate Timeline to Experiment Without Fear',
  order: 2,
  moduleTitle: 'Module 1: Parallel Universes (Branching & Navigation)',
  whyItMatters: 'A branch is how you isolate risky or unfinished work from main, so experimentation does not damage the version of the product everyone depends on.',
  focusPoints: [
    'Understand a branch as a movable pointer to a line of commits, not a copied folder.',
    'See why feature branches protect main from incomplete work and broken experiments.',
    'Build the habit of creating a branch before starting meaningful changes.',
  ],
})

export default lesson