import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-11',
  slug: 'hotfix-procedure',
  title: 'Hotfix Procedure: Patching the Live Site on Production and Merging the Fix Downstream to Keep Environments in Sync',
  order: 2,
  moduleTitle: 'Module 4: Professional Workflow (The Dev-Beta-Prod Playbook)',
  whyItMatters: 'A production hotfix is urgent, but urgency does not remove process. If you patch prod and forget to merge downstream, the same bug can come back in the next release.',
  focusPoints: [
    'Create an emergency branch from production when live users are impacted.',
    'Ship the fix safely, then merge it back into beta and dev to prevent environment drift.',
    'Treat downstream propagation as part of the hotfix, not optional cleanup.',
  ],
})

export default lesson