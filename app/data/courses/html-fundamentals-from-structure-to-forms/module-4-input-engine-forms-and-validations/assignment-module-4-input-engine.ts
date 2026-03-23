import { createHtmlModuleAssignmentShell } from '../html-lesson-shell'

const assignment = createHtmlModuleAssignmentShell({
  id: 'lesson-html-assignment-4',
  slug: 'assignment-module-4-input-engine',
  title: 'Assignment: Module 4 Practice Pack',
  order: 13,
  moduleTitle: 'Module 4: The Input Engine (Forms & Validations)',
  assignments: [
    'The Contact Form: Name, Email, and a Message box. All fields must be required.',
    'The Survey: A Job Preference form using checkboxes for skills and radio buttons for Expected Salary.',
    'The Login/Signup: Create a toggleable form layout (structure only) with password masking.',
    'The Escalation: Build a Flight Booking form. It must include date pickers, seat selection (dropdown), and a Passenger Details section that repeats for 2 people.',
  ],
})

export default assignment
