import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-12',
  slug: 'cherry-picking',
  title: 'Cherry-Picking: Hand-Picking Specific Features From dev to Demo on Production Without Merging the Entire Unstable Branch',
  order: 3,
  moduleTitle: 'Module 4: Professional Workflow (The Dev-Beta-Prod Playbook)',
  whyItMatters: 'Sometimes the business needs one safe change now, not the entire branch history around it. Cherry-pick gives precision when a full merge would drag in unstable work.',
  focusPoints: [
    'Use cherry-pick when one commit or feature is ready but the source branch still contains unrelated risk.',
    'Understand the tradeoff: precision is useful, but duplicated history needs discipline and clear communication.',
    'Evaluate whether the cleaner long-term move is a selective merge or a true release branch instead.',
  ],
})

export default lesson