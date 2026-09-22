import type { Module } from '~/types/course'
import whatItMeansToBecomeYourOwnTeacher from './what-it-means-to-become-your-own-teacher'
import formalEducationCanOnlyTakeYouSoFar from './formal-education-can-only-take-you-so-far'
import theWorldWillNotStopChanging from './the-world-will-not-stop-changing'
import nobodyIsComingToTeachYou from './nobody-is-coming-to-teach-you'
import itIsMoreProductiveAndMoreFun from './it-is-more-productive-and-more-fun'
import thereIsNoDeadlineYouAreTheCaptain from './there-is-no-deadline-you-are-the-captain'
import summaryAndTakeaway from './summary-and-takeaway'

/**
 * Lessons are added one by one. Keep `lessons` in sync with the files in
 * this folder and import them in reading order.
 */
const module1: Module = {
  id: 'module-own-teacher-1',
  slug: 'module-1-the-importance-of-learning',
  title: 'Module 1: The Importance of Learning',
  description: 'This module answers the "why" before any technique is introduced. It makes the case that learning on your own is no longer a nice-to-have but a survival skill, especially in the AI era, where the tools, methods, and even whole professions people build a life around change faster than any school or curriculum can follow. Learners leave this module convinced that the ability to teach themselves is the one skill that keeps every other skill alive.',
  order: 1,
  lessons: [
    whatItMeansToBecomeYourOwnTeacher,
    formalEducationCanOnlyTakeYouSoFar,
    theWorldWillNotStopChanging,
    nobodyIsComingToTeachYou,
    itIsMoreProductiveAndMoreFun,
    thereIsNoDeadlineYouAreTheCaptain,
    summaryAndTakeaway,
  ],
}

export default module1
