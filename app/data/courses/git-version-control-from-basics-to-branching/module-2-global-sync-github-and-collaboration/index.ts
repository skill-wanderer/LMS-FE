import type { Module } from '~/types/course'
import localVsRemote from './local-vs-remote'
import thePullRequest from './the-pull-request'
import fetchingVsPulling from './fetching-vs-pulling'

const module2: Module = {
  id: 'module-git-2',
  slug: 'module-2-global-sync-github-and-collaboration',
  title: 'Module 2: Global Sync (GitHub & Collaboration)',
  order: 2,
  lessons: [
    localVsRemote,
    thePullRequest,
    fetchingVsPulling,
  ],
}

export default module2