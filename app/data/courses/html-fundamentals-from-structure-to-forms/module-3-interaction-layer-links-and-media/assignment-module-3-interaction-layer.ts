import { createHtmlModuleAssignmentShell } from '../html-lesson-shell'

const assignment = createHtmlModuleAssignmentShell({
  id: 'lesson-html-assignment-3',
  slug: 'assignment-module-3-interaction-layer',
  title: 'Assignment: Module 3 Practice Pack',
  order: 10,
  moduleTitle: 'Module 3: The Interaction Layer (Links & Media)',
  assignments: [
    'The Navigation Bar: Create a list of links that point to different sections of the same page.',
    'The Photo Gallery: Display 5 images with captions. Each image opens the full-size version in a new tab when clicked.',
    'The Download Center: Create a list of buttons (styled links) that download files (mock links).',
    'The Escalation: Create a Mini-Wikipedia page. 5 sections, a Table of Contents at the top that links to each section, and external citations at the bottom.',
  ],
})

export default assignment
