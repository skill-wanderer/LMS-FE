import type { Module } from '~/types/course'
import softVsHardReset from './soft-vs-hard-reset'
import theReflog from './the-reflog'
import theRevert from './the-revert'

const module3: Module = {
  id: 'module-git-3',
  slug: 'module-3-disaster-recovery-the-pros-safety-net',
  title: 'Module 3: Disaster Recovery (The Pro\'s Safety Net)',
  order: 3,
  lessons: [
    softVsHardReset,
    theReflog,
    theRevert,
  ],
}

export default module3