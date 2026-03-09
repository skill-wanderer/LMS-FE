import { defineSitemapEventHandler, asSitemapUrl } from '#imports'

/**
 * Provides dynamic course and lesson URLs to the sitemap module.
 *
 * When adding a new course, add its course URL and all lesson URLs here
 * so they appear in /sitemap.xml.
 */
export default defineSitemapEventHandler(() => {
  const courseSlug = 'manual-software-testing-black-box-techniques'
  const lastmod = '2026-01-08'

  const lessonSlugs = [
    // Module 1 — Introduction to Software Testing
    'software-testing-fundamentals',
    'root-causes-of-software-bugs',
    'economics-of-software-failure',
    'manual-vs-automation-testing',
    'three-fundamental-testing-concepts',
    'module-1-summary-and-takeaway',
    // Module 2 — QA Role & Testing Fundamentals
    'the-quality-mindset-fundamentals-of-software-assurance',
    'software-quality-evolution-transitioning-from-tester-to-qa-engineer',
    'testing-throughout-the-sdlc',
    'waterfall-vs-agile-a-guide-for-black-box-testers',
    'shift-left-testing-for-black-box-testers',
    // Module 3 — Assignment: Exploratory Testing in Real Conditions
    'exploratory-testing-in-real-conditions',
    // Module 4 — Assignment: Test Case Writing & Professional Bug Reporting
    'test-case-writing-and-professional-bug-reporting',
  ]

  return [
    asSitemapUrl({
      loc: `/courses/${courseSlug}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8,
    }),
    ...lessonSlugs.map(lesson =>
      asSitemapUrl({
        loc: `/courses/${courseSlug}/lessons/${lesson}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.7,
      }),
    ),
  ]
})
