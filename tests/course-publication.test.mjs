import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import { createJiti } from 'jiti'

const jiti = createJiti(import.meta.url, {
  alias: { '~': fileURLToPath(new URL('../app', import.meta.url)) },
})
const { isPublishedLesson } = await jiti.import('../app/types/course.ts')
const { getPublicCourses, getPublishedLesson } = await jiti.import('../server/utils/course-publication.ts')

const release = '2026-12-01T09:00:00+07:00'
const releaseTime = Date.parse(release)

function makeLesson(overrides = {}) {
  return {
    id: 'lesson-1', slug: 'scheduled-lesson', title: 'Scheduled lesson',
    type: 'lesson', order: 1, status: 'published', publishAt: release,
    content: '<p>Scheduled lesson body</p>', videoUrl: 'https://example.com/video',
    quiz: { questions: [{ question: 'Question', options: { a: 'Answer' }, answer: 'a' }] },
    ...overrides,
  }
}

function makeCourse(lesson = makeLesson(), overrides = {}) {
  return {
    id: 'course-1', slug: 'test-course', title: 'Test course', status: 'published',
    excerpt: '', description: '', difficulty: 'beginner', tags: [], lessonCount: 1,
    createdAt: '2026-11-01', updatedAt: '2026-11-01',
    modules: [{ id: 'module-1', slug: 'module-1', title: 'Module 1', order: 1, lessons: [lesson] }],
    ...overrides,
  }
}

test('releases at the exact scheduled instant, without recreating the lesson', (t) => {
  let now = releaseTime - 1
  t.mock.method(Date, 'now', () => now)
  const lesson = makeLesson()
  assert.equal(isPublishedLesson(lesson), false)
  now = releaseTime
  assert.equal(isPublishedLesson(lesson), true)
  now += 1
  assert.equal(isPublishedLesson(lesson), true)
})

test('accepts timezone offsets and UTC as the same instant', (t) => {
  t.mock.method(Date, 'now', () => releaseTime)
  assert.equal(isPublishedLesson(makeLesson({ publishAt: '2026-12-01T02:00:00Z' })), true)
  assert.equal(isPublishedLesson(makeLesson({ publishAt: '2026-11-30T21:00:00-05:00' })), true)
  assert.equal(isPublishedLesson(makeLesson({ publishAt: '2026-12-01T02:00:00.001Z' })), false)
})

test('preserves legacy lessons and keeps drafts unavailable after their release time', (t) => {
  t.mock.method(Date, 'now', () => releaseTime + 1)
  assert.equal(isPublishedLesson(makeLesson({ publishAt: undefined })), true)
  assert.equal(isPublishedLesson(makeLesson({ status: undefined, publishAt: undefined })), true)
  assert.equal(isPublishedLesson(makeLesson({ status: 'draft' })), false)
  assert.equal(isPublishedLesson(makeLesson({ status: 'draft', publishAt: undefined })), false)
})

test('invalid or timezone-free schedules stay unavailable', (t) => {
  t.mock.method(Date, 'now', () => releaseTime + 1)
  for (const publishAt of ['', 'invalid', '2026-12-01', '2026-12-01T02:00:00', '2026-13-01T02:00:00Z', '2026-02-30T02:00:00Z', '2026-12-01T25:00:00Z']) {
    assert.equal(isPublishedLesson(makeLesson({ publishAt })), false, publishAt)
  }
})

test('works as an array filter for navigation and sitemap consumers', (t) => {
  t.mock.method(Date, 'now', () => releaseTime)
  const lessons = [makeLesson({ status: 'draft' }), makeLesson(), makeLesson({ publishAt: '2027-01-01T00:00:00Z' })]
  assert.deepEqual(lessons.filter(isPublishedLesson), [lessons[1]])
})

test('catalogues contain outlines and server-resolved availability without mutating sources', (t) => {
  let now = releaseTime - 1
  t.mock.method(Date, 'now', () => now)
  const course = makeCourse()
  const original = structuredClone(course)
  const before = getPublicCourses([course])[0].modules[0].lessons[0]
  assert.equal(before.status, 'draft')
  for (const key of ['content', 'videoUrl', 'quiz']) assert.equal(key in before, false)

  now = releaseTime
  const after = getPublicCourses([course])[0].modules[0].lessons[0]
  assert.equal(after.status, 'published')
  for (const key of ['content', 'videoUrl', 'quiz']) assert.equal(key in after, false)
  assert.deepEqual(course, original)
  assert.deepEqual(getPublicCourses([makeCourse(makeLesson(), { status: 'draft' })]), [])
})

test('lesson requests withhold all content until release and respect course and lesson drafts', (t) => {
  let now = releaseTime - 1
  t.mock.method(Date, 'now', () => now)
  const courses = [makeCourse()]
  assert.equal(getPublishedLesson(courses, 'test-course', 'scheduled-lesson'), undefined)
  now = releaseTime
  assert.equal(getPublishedLesson(courses, 'test-course', 'scheduled-lesson')?.content, '<p>Scheduled lesson body</p>')
  assert.equal(getPublishedLesson(courses, 'missing', 'scheduled-lesson'), undefined)
  assert.equal(getPublishedLesson(courses, 'test-course', 'missing'), undefined)
  assert.equal(getPublishedLesson([makeCourse(makeLesson({ status: 'draft' }))], 'test-course', 'scheduled-lesson'), undefined)
  assert.equal(getPublishedLesson([makeCourse(makeLesson(), { status: 'draft' })], 'test-course', 'scheduled-lesson'), undefined)
  assert.equal(getPublishedLesson([makeCourse(makeLesson({ publishAt: 'invalid' }))], 'test-course', 'scheduled-lesson'), undefined)
})

test('browser clock differences cannot change the server-resolved outline availability', (t) => {
  let now = releaseTime - 1
  t.mock.method(Date, 'now', () => now)
  const courses = [makeCourse()]
  const before = getPublicCourses(courses)[0].modules[0].lessons[0]
  now = releaseTime + 1
  assert.equal(isPublishedLesson(before), false)
  const after = getPublicCourses(courses)[0].modules[0].lessons[0]
  now = releaseTime - 60_000
  assert.equal(isPublishedLesson(after), true)
})
