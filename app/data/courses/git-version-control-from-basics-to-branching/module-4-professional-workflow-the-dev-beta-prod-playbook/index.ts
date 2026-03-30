import type { Module } from '~/types/course'
import theTrinityFlow from './the-trinity-flow'
import hotfixProcedure from './hotfix-procedure'
import cherryPicking from './cherry-picking'

const module4: Module = {
  id: 'module-git-4',
  slug: 'module-4-professional-workflow-the-dev-beta-prod-playbook',
  title: 'Module 4: Professional Workflow (The Dev-Beta-Prod Playbook)',
  order: 4,
  lessons: [
    theTrinityFlow,
    hotfixProcedure,
    cherryPicking,
  ],
}

export default module4