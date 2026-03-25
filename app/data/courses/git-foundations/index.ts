import type { Course } from '~/types/course'
import { thanhNguyen } from '~/data/authors'
import module1 from './module-1-parallel-universes-branching-and-navigation'
import module2 from './module-2-global-sync-github-and-collaboration'
import module3 from './module-3-disaster-recovery-the-pros-safety-net'
import module4 from './module-4-professional-workflow-the-dev-beta-prod-playbook'
import module5 from './module-5-final-assignment-release-rescue'

const modules = [module1, module2, module3, module4, module5]
const lessonCount = modules.reduce((sum, moduleItem) => sum + moduleItem.lessons.length, 0)

const course: Course = {
  id: 'course-git-foundations',
  slug: 'git-foundations',
  title: 'Git Foundations',
  excerpt: 'Build the Git instincts every developer needs: branching, collaboration, recovery, and production-safe workflows.',
  description: 'Git is the first brick in a developer\'s career. We move from the why behind the architecture to the how of professional history sculpting. From your first commit to recovering a deleted project, this course is your ultimate safety net.\n\nYou will work through four practical modules:\n- Parallel Universes: branching, navigation, and safe experimentation\n- Global Sync: GitHub collaboration, remotes, pull requests, and upstream updates\n- Disaster Recovery: reset, reflog, revert, and bisect for professional mistake handling\n- Professional Workflow: the dev-beta-prod playbook, hotfixes, cherry-picks, and rollback thinking\n\nAfter these four modules, you complete one dedicated final-assignment module to prove end-to-end workflow readiness in a realistic release scenario.\n\nThis course is intentionally structured around real team behavior instead of isolated commands. By the end, you should be able to reason about Git as a system for protecting code, coordinating teammates, and recovering from bad decisions without panic.',
  difficulty: 'beginner',
  status: 'published',
  lessonCount,
  modules,
  tags: ['git', 'github', 'version-control', 'branching', 'collaboration'],
  instructor: 'Skill-Wanderer',
  author: thanhNguyen,
  createdAt: '2026-03-25',
  updatedAt: '2026-03-25',
}

export default course