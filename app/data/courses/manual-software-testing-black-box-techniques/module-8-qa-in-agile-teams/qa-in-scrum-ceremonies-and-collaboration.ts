import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-8-1',
  slug: 'qa-in-scrum-ceremonies-and-collaboration',
  title: 'QA in Scrum: Where Testers Add Value in Every Ceremony',
  order: 27,
  moduleTitle: 'Module 8: QA in Agile Teams',
  whyItMatters: 'In Agile teams, QA is not a phase at the end of the sprint — it is a voice in every ceremony. Testers who ask sharp questions in refinement prevent more bugs than testers who only execute at the end.',
  focusPoints: [
    'Know what QA contributes in refinement, planning, stand-ups, review, and retrospective.',
    'Challenge acceptance criteria early with concrete "what if" scenarios.',
    'Plan testing work inside a sprint so it does not pile up on the last day.',
  ],
})

export default lesson
