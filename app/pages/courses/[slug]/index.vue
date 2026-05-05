<script setup lang="ts">
import type { Lesson, Module } from '~/types/course'
import { getAllLessons, isPublishedLesson } from '~/types/course'

const route = useRoute()
const slug = route.params.slug as string
const { isAuthEnabled, isAuthenticated } = useKeycloak()
const showLoginModal = ref(false)

const { getCourseBySlug, formatDuration, getCourseDuration } = useCourses()
const course = getCourseBySlug(slug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found' })
}

useCourseSeo({
  title: course.title,
  description: course.description,
  slug: course.slug,
  thumbnail: course.thumbnail,
  difficulty: course.difficulty,
  datePublished: course.createdAt,
  dateModified: course.updatedAt,
  author: course.author ? { name: course.author.name, url: course.author.websiteUrl } : undefined,
})

const allLessons = computed(() => getAllLessons(course))
const availableLessons = computed(() => allLessons.value.filter(isPublishedLesson))

const completedLessons = ref<string[]>([])

const progressPercent = computed(() =>
  availableLessons.value.length
    ? Math.round((completedLessons.value.length / availableLessons.value.length) * 100)
    : 0
)

function isUnlocked(lesson: Lesson) {
  const index = allLessons.value.findIndex(l => l.slug === lesson.slug)
  if (index <= 0) return true
  const prevLesson = allLessons.value[index - 1]
  return prevLesson ? completedLessons.value.includes(prevLesson.slug) : true
}

function isModuleUnlocked(mod: Module) {
  const firstLesson = mod.lessons?.[0]
  if (!firstLesson) return true
  return isUnlocked(firstLesson)
}

const difficultyClass = computed(() => {
  switch (course.difficulty) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
})

const totalDuration = computed(() => getCourseDuration(course))

onMounted(() => {
  try {
    const stored = JSON.parse(localStorage.getItem(`completedLessons-${course.slug}`) || '[]')
    completedLessons.value = stored
  } catch (e) {
    console.error('Failed to parse progress', e)
  }
})
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Home', to: '/' },
        { label: 'Courses', to: '/courses' },
        { label: course.title },
      ]" />
    </div>

    <!-- Course Header -->
    <section class="px-5 pt-10 pb-[60px] max-md:px-4 max-md:pt-6 max-md:pb-10 max-sm:px-3 max-sm:pb-8">
      <div class="max-w-content mx-auto grid grid-cols-[1fr_340px] gap-12 items-start max-[900px]:grid-cols-1 max-[900px]:gap-6">
        <div>
          <div class="flex gap-2 mb-4">
            <span :class="['badge', difficultyClass]">{{ course.difficulty }}</span>
            <span class="badge badge-free">Free</span>
          </div>

          <h1 class="gradient-text text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-[1.15] mb-4">{{ course.title }}</h1>
          <p class="text-[rgba(224,224,224,0.7)] text-[1.05rem] leading-[1.8] mb-5" style="white-space: pre-line;">{{ course.description }}</p>

          <div class="flex gap-5 flex-wrap mb-4 max-sm:gap-3">
            <span class="flex items-center gap-1.5 text-sm text-[rgba(224,224,224,0.6)] max-sm:text-[0.82rem]">
              <Icon name="mdi:play-circle-outline" /> {{ course.lessonCount }} lessons
            </span>
            <span v-if="totalDuration" class="flex items-center gap-1.5 text-sm text-[rgba(224,224,224,0.6)] max-sm:text-[0.82rem]">
              <Icon name="mdi:clock-outline" /> {{ formatDuration(totalDuration) }}
            </span>
            <span class="flex items-center gap-1.5 text-sm text-[rgba(224,224,224,0.6)] max-sm:text-[0.82rem]">
              <Icon name="mdi:account-outline" /> {{ course.instructor || 'Skill-Wanderer' }}
            </span>
          </div>

          <div class="flex gap-2 flex-wrap">
            <span v-for="tag in course.tags" :key="tag" class="py-1 px-3 rounded-full text-[0.78rem] bg-brand-orange/10 text-brand-orange border border-brand-orange/15">
              {{ tag }}
            </span>
          </div>

          <NuxtLink
            v-if="availableLessons.length && (!isAuthEnabled || isAuthenticated)"
            :to="`/courses/${course.slug}/lessons/${availableLessons[0]?.slug}`"
            class="btn btn-primary mt-6"
          >
            <Icon name="mdi:play" /> Start Learning
          </NuxtLink>
          
          <button
            v-else-if="availableLessons.length && isAuthEnabled && !isAuthenticated"
            class="btn btn-primary mt-6"
            @click="showLoginModal = true"
          >
            <Icon name="mdi:lock-open-variant" /> Sign in to Start
          </button>

          <div v-else class="mt-6 rounded-xl border border-dashed border-brand-orange/20 bg-brand-orange/5 py-3 px-4 text-sm text-[rgba(224,224,224,0.68)]">
            Lesson content is being rolled out. The course structure is visible now, and lesson pages will unlock as they are completed.
          </div>
        </div>

        <!-- Progress Card (sidebar) -->
        <div class="sticky top-[100px] max-[900px]:static">
          <div class="glass-card p-6">
            <h3 class="text-lg font-bold mb-4">Your Progress</h3>
            <div class="progress-bar mb-2">
              <div class="progress-bar-fill transition-all duration-500 ease-out" :style="{ width: `${progressPercent}%` }" />
            </div>
            <p class="text-sm text-gray-400 mb-4">
              {{ completedLessons.length }} / {{ availableLessons.length }} available lessons completed
            </p>

            <div class="text-sm text-gray-500 space-y-2">
              <div class="flex items-center gap-2">
                <Icon name="mdi:trophy-outline" class="text-brand-yellow" />
                <span>Certificate on completion</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:infinity" class="text-semantic-growth" />
                <span>Lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Author Bio -->
    <section v-if="course.author" class="section" style="padding-bottom: 0;">
      <div class="glass-card flex gap-5 p-6 items-start max-sm:flex-col max-sm:items-center max-sm:text-center">
        <img
          :src="course.author.avatarUrl"
          :alt="`${course.author.name} — Course Author`"
          class="w-20 h-20 rounded-full object-cover border-2 border-brand-orange/30 shrink-0"
          width="80"
          height="80"
          loading="lazy"
        />
        <div class="flex-1">
          <h2 class="text-[1.1rem] font-bold text-[#e0e0e0] mb-1">About the Author</h2>
          <p class="text-sm text-brand-orange mb-2 font-semibold">{{ course.author.name }} · {{ course.author.title }}</p>
          <p class="text-sm text-[rgba(224,224,224,0.65)] leading-relaxed mb-3">{{ course.author.bio }}</p>
          <div class="flex gap-4 max-sm:justify-center">
            <a v-if="course.author.linkedinUrl" :href="course.author.linkedinUrl" target="_blank" rel="noopener" class="flex items-center gap-1 text-[0.85rem] text-[rgba(224,224,224,0.5)] transition-colors duration-300 hover:text-brand-orange">
              <Icon name="mdi:linkedin" /> LinkedIn
            </a>
            <a v-if="course.author.websiteUrl" :href="course.author.websiteUrl" target="_blank" rel="noopener" class="flex items-center gap-1 text-[0.85rem] text-[rgba(224,224,224,0.5)] transition-colors duration-300 hover:text-brand-orange">
              <Icon name="mdi:web" /> Website
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Last Updated -->
    <section class="section" style="padding-top: 12px; padding-bottom: 0;">
      <div class="flex gap-5 flex-wrap">
        <span class="flex items-center gap-1.5 text-[0.85rem] text-[rgba(224,224,224,0.45)]">
          <Icon name="mdi:calendar-outline" /> Published: {{ new Date(course.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
        <span v-if="course.updatedAt !== course.createdAt" class="flex items-center gap-1.5 text-[0.85rem] text-[rgba(224,224,224,0.45)]">
          <Icon name="mdi:update" /> Last updated: {{ new Date(course.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
      </div>
    </section>

    <!-- Lessons List -->
    <section class="section">
      <h2 class="text-2xl font-bold mb-6">Course Content</h2>

      <div v-for="mod in course.modules" :key="mod.id" class="mb-8 last:mb-0">
        <div :class="[
          'flex items-center gap-3 mb-4 p-3 px-4 rounded-xl border transition-all duration-300',
          isModuleUnlocked(mod) ? 'bg-brand-orange/[0.06] border-brand-orange/[0.12]' : 'bg-white/[0.02] border-white/[0.05] opacity-60'
        ]">
          <Icon :name="isModuleUnlocked(mod) ? 'mdi:book-open-variant' : 'mdi:lock'" :class="['text-[1.4rem]', isModuleUnlocked(mod) ? 'text-brand-orange' : 'text-gray-500']" />
          <div>
            <h3 class="text-[1.1rem] font-bold text-[#e0e0e0]">{{ mod.title }} <span v-if="!isModuleUnlocked(mod)" class="text-[0.7rem] uppercase tracking-wider text-gray-500 ml-2 font-normal">Locked</span></h3>
            <span class="text-[0.8rem] text-[rgba(224,224,224,0.5)]">
              {{ mod.lessons.length }} lesson{{ mod.lessons.length !== 1 ? 's' : '' }}
              <template v-if="mod.lessons.some(l => l.durationMinutes)">
                · {{ formatDuration(mod.lessons.reduce((s, l) => s + (l.durationMinutes || 0), 0)) }}
              </template>
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <LessonItem
            v-for="lesson in mod.lessons"
            :key="lesson.id"
            :lesson="lesson"
            :course-slug="course.slug"
            :index="allLessons.findIndex(l => l.slug === lesson.slug)"
            :is-locked="!isUnlocked(lesson)"
          />
        </div>
      </div>
    </section>

    <!-- Login Required Modal -->
    <LoginRequiredModal :visible="showLoginModal" :return-to="route.fullPath" @close="showLoginModal = false" />
  </div>
</template>


