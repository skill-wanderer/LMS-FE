import type { Module } from '~/types/course'
import webApplicationTestingEssentials from './web-application-testing-essentials'
import crossBrowserAndResponsiveTesting from './cross-browser-and-responsive-testing'
import mobileApplicationTestingEssentials from './mobile-application-testing-essentials'
import usabilityAndAccessibilityChecks from './usability-and-accessibility-checks'

const module7: Module = {
  id: 'module-7',
  slug: 'module-7-testing-web-and-mobile-applications',
  title: 'Module 7: Testing Web & Mobile Applications',
  order: 7,
  lessons: [
    webApplicationTestingEssentials,
    crossBrowserAndResponsiveTesting,
    mobileApplicationTestingEssentials,
    usabilityAndAccessibilityChecks,
  ],
}

export default module7
