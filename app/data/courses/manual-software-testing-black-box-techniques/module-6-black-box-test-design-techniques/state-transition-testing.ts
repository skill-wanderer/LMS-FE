import { createTesterPlannedLesson } from '../tester-lesson-shell'

const lesson = createTesterPlannedLesson({
  id: 'lesson-6-4',
  slug: 'state-transition-testing',
  title: 'State Transition Testing: Following the System Through Its Life Cycle',
  order: 21,
  moduleTitle: 'Module 6: Black Box Test Design Techniques',
  whyItMatters: 'Orders, accounts, and documents all move through states — and bugs love illegal transitions, like cancelling an already-shipped order. State transition testing maps those flows so you can verify both the allowed paths and the forbidden ones.',
  focusPoints: [
    'Draw a state diagram from requirements: states, events, and transitions.',
    'Design test cases that cover every valid transition at least once.',
    'Probe invalid transitions deliberately to confirm the system blocks them gracefully.',
  ],
})

export default lesson
