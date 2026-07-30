import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-8-2',
  slug: 'bug-triage-and-communicating-impact',
  title: 'Bug Triage & Communicating Impact: Getting Your Bugs Fixed',
  order: 28,
  moduleTitle: 'Module 8: QA in Agile Teams',
  whyItMatters: 'Finding a bug is only half the job — the other half is convincing the team it matters. Severity, priority, and user impact are the language that turns a bug report into a fix instead of a backlog entry.',
  focusPoints: [
    'Distinguish severity from priority and argue each with evidence, not opinion.',
    'Run and survive bug triage: defending, downgrading, and closing defects professionally.',
    'Handle "works on my machine" and "not a bug" conversations with developers constructively.',
  ],
})

export default lesson
