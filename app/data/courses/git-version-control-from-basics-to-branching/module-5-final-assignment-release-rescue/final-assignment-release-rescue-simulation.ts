import { createGitFinalAssignment } from '../git-lesson-shell'

const lesson = createGitFinalAssignment({
  id: 'lesson-git-13',
  slug: 'final-assignment-release-rescue-simulation',
  title: 'Final Assignment: Release Rescue Simulation',
  order: 1,
  moduleTitle: 'Module 5: Final Assignment (Release Rescue Simulation)',
  overview: 'You are the release owner for a small product team. Your job is to prove that you can create isolated feature work, sync with GitHub correctly, recover from mistakes, and promote safe code through dev, beta, and production without losing history control.',
  objectives: [
    'Practice branching, switching, and stash usage without risking main.',
    'Show that you can synchronize local and remote work through upstream tracking and pull-request-ready branches.',
    'Demonstrate professional recovery using reset, reflog, revert, and a documented bisect investigation.',
    'Execute a real release scenario using dev, beta, production, hotfix, cherry-pick, and rollback thinking.',
  ],
  scenario: [
    'Create a repository for a fictional app release called Release Rescue.',
    'Prepare three long-lived branches: dev, beta, and main to represent coding, staging, and production.',
    'Build Feature A on a feat/ branch and a broken Feature B on a separate feat/ branch so the histories stay isolated.',
    'Connect the repository to GitHub and publish your working branches so the collaboration model is visible.',
    'Simulate an urgent production problem that requires a hotfix directly from main.',
  ],
  requirements: [
    'Create at least two feature branches using clear professional names such as feat/client-demo-a and feat/broken-experiment-b.',
    'Use git switch for branch navigation. At least once, create uncommitted work, then use git stash before moving branches and restore it later.',
    'Push your branches to GitHub with upstream tracking enabled so the remote history reflects your local work.',
    'Document one pull request path from a feature branch into dev. If you cannot use a real review, add a short README note explaining what the PR would validate.',
    'Perform one soft reset on a local commit, then use reflog to prove you can still find the earlier commit reference.',
    'Introduce a bad commit on main intentionally, then undo it safely with git revert instead of rewriting shared history.',
    'Create a short commit sequence that contains a bug and describe how you would use git bisect to locate the bad commit. Include the good commit, bad commit, and identified culprit in your README.',
    'Promote stable work from dev to beta. Then cherry-pick Feature A into main for a client demo without merging the broken Feature B.',
    'Create a hotfix branch from main, patch the production issue, merge that fix back into main, then merge it downstream into beta and dev.',
    'Write a rollback note in the README explaining exactly how you would recover if the production release still failed after the hotfix.',
  ],
  deliverables: [
    'A public GitHub repository URL.',
    'A README that explains your branch model, the commands you used, and the reasoning behind your recovery decisions.',
    'Visible commit history showing feature branches, promotion flow, cherry-pick usage, revert usage, and downstream hotfix propagation.',
    'A short section in the README called Evidence that lists the commit hashes used for soft reset recovery, revert, bisect, and cherry-pick.',
  ],
  completionChecklist: [
    'The repository shows main, beta, dev, at least two feature branches, and one hotfix branch.',
    'Feature A and Feature B were developed in isolation instead of directly on main.',
    'At least one stash operation was necessary and documented clearly.',
    'Remote tracking and synchronization are visible through pushes and branch history on GitHub.',
    'A bad shared commit was undone with revert, not with reset plus force push.',
    'The hotfix was merged back into dev so the fix cannot be lost in a later release.',
    'The README explains a realistic rollback path instead of saying only undo the change.',
  ],
  submission: [
    'Submit only the GitHub repository URL.',
    'Make sure the README is complete enough that the instructor can verify your decisions without guessing your intent.',
  ],
  rubric: [
    { criteria: 'Correct branch architecture: dev, beta, main, feature, and hotfix branches', points: '4' },
    { criteria: 'Safe navigation with git switch and proper stash usage', points: '2' },
    { criteria: 'Clear GitHub synchronization and upstream management', points: '2' },
    { criteria: 'Professional recovery evidence using reset, reflog, revert, and bisect reasoning', points: '4' },
    { criteria: 'Correct release handling using cherry-pick, hotfix propagation, and rollback planning', points: '5' },
    { criteria: 'README clarity and traceable evidence', points: '3' },
  ],
  durationMinutes: 60,
})

export default lesson