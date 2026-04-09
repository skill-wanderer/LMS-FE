import type { Module } from '~/types/course'
import theRepositoryTheRepo from './the-repository-the-repo'
import whatIsABranch from './what-is-a-branch'
import headAndNavigation from './head-and-navigation'
import gitSwitchVsGitCheckout from './git-switch-vs-git-checkout'

const module1: Module = {
  id: 'module-git-1',
  slug: 'module-1-parallel-universes-branching-and-navigation',
  title: 'Module 1: Parallel Universes (Branching & Navigation)',
  order: 1,
  lessons: [
    theRepositoryTheRepo,
    whatIsABranch,
    headAndNavigation,
    gitSwitchVsGitCheckout,
  ],
}

export default module1