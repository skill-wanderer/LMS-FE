import { createHtmlLessonShell } from '../html-lesson-shell'

const lesson = createHtmlLessonShell({
  id: 'lesson-html-5',
  slug: 'lesson-5-data-organizer-lists-and-tables',
  title: 'The Data Organizer (Lists & Tables)',
  order: 8,
  requirement: 'Master the art of grouping related items. This is the foundation of navigation bars and data dashboards.',
  optionalLessons: [
    'Unordered Lists: <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> (Bullet points).',
    'Ordered Lists: <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code> (Steps/Rankings).',
    'Description Lists: <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code> (Metadata/Glossaries).',
    'Tables: <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>.',
  ],
  summaryAndQuizzes: [
    'Grouping Relationships: Differentiate when to use numerical order vs bulleted lists. Challenge: Create a multi-level list inside a list (Nesting).',
    'Attribute Control: Managing list behavior without CSS. Challenge: Change a numbered list to start at "5" instead of "1".',
    'Data Grids: Architecting complex information structures. Challenge: Build a table header that spans two columns (colspan).',
  ],
})

export default lesson
