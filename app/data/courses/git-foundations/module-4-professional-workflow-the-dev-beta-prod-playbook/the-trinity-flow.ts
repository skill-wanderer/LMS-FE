import { createGitPlannedLesson } from '../git-lesson-shell'

const lesson = createGitPlannedLesson({
  id: 'lesson-git-10',
  slug: 'the-trinity-flow',
  title: 'The Trinity Flow: Managing dev, beta, and production Branches Across Real Release Environments',
  order: 1,
  moduleTitle: 'Module 4: Professional Workflow (The Dev-Beta-Prod Playbook)',
  whyItMatters: 'Real products need branch roles. dev is where change happens, beta is where release candidates are tested, and production is where the business lives.',
  focusPoints: [
    'Map each branch to its environment responsibility instead of treating all branches the same.',
    'Understand why unstable work belongs in dev and why production must remain calm and intentional.',
    'See how promotion flow creates discipline from coding to staging to live release.',
  ],
})

export default lesson