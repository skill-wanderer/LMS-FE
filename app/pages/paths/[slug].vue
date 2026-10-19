<script setup lang="ts">
import allPaths, { LEGACY_PATH_SLUGS, featuredPath, type PathCourse } from '~/data/paths'

const route = useRoute()
const requestedSlug = route.params.slug as string

// Path slugs were renamed to match skill-wanderer.com/learning-path. Old links get a permanent redirect.
const renamedSlug = LEGACY_PATH_SLUGS[requestedSlug]
if (renamedSlug) {
  await navigateTo(`/paths/${renamedSlug}`, { redirectCode: 301 })
}

const { getCourseBySlug } = useCourses()
const path = allPaths.find(p => p.slug === (renamedSlug ?? requestedSlug))

if (!path) {
  throw createError({ statusCode: 404, statusMessage: 'Learning path not found' })
}

const siteUrl = 'https://dojo.skill-wanderer.com'

useSeo({
  title: path.seoTitle ?? `${path.title} Learning Path — Skill-Wanderer Dojo`,
  description: path.description,
  url: `${siteUrl}/paths/${path.slug}`,
  breadcrumbs: [
    { name: 'Home', url: siteUrl },
    { name: 'Learning Paths', url: `${siteUrl}/paths` },
    { name: path.title },
  ],
})

// Planned paths send learners to the one path that is open now.
const isPlanned = path.status === 'planned'

const cover = `learning-paths/${path.slug}`
// Until its cover exists (production skips empty slots), the text takes the whole header.
const { shown: hasCover } = useImageSlot(cover)

function isCourseOpen(course: PathCourse): boolean {
  return !!course.slug && !!getCourseBySlug(course.slug)
}

const openCourses = computed(() => path.courses.filter(isCourseOpen))
const firstCourse = computed(() => openCourses.value[0])
</script>

<template>
  <div>
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Home', to: '/' },
        { label: 'Learning Paths', to: '/paths' },
        { label: path.title },
      ]" />
    </div>

    <!-- Header -->
    <section class="px-5 pt-10 pb-[50px] max-md:px-4 max-md:pt-6 max-md:pb-8 max-sm:px-3 max-sm:pb-6">
      <div class="max-w-content mx-auto">
        <div
          class="glass-card grid items-center gap-8 p-8 max-md:gap-6 max-md:p-6 max-sm:p-4"
          :class="{ 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]': hasCover }"
        >
          <ImageSlot :name="cover" class="rounded-xl lg:order-last" priority />

          <div>
            <p class="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {{ isPlanned ? 'Planned Learning Path' : 'Featured Learning Path' }}
            </p>

            <div class="flex gap-4 items-start mb-5 max-md:flex-col max-md:gap-3">
              <Icon :name="path.icon" class="text-[2.2rem] text-brand-orange shrink-0 mt-1" />
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2 flex-wrap">
                  <h1 class="gradient-text text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.15]">{{ path.title }}</h1>
                  <span :class="['badge', isPlanned ? 'badge-planned' : 'badge-in-development']">
                    {{ isPlanned ? 'Planned' : 'In Development' }}
                  </span>
                </div>
                <p class="text-[rgba(224,224,224,0.72)] text-[1.02rem] leading-[1.75]">{{ path.description }}</p>
              </div>
            </div>

            <!-- Status notice -->
            <div
              class="flex items-start gap-3 rounded-xl border p-4 mb-5"
              :class="isPlanned ? 'border-brand-yellow/30 bg-brand-yellow/[0.06]' : 'border-semantic-success/35 bg-semantic-success/[0.08]'"
            >
              <Icon
                :name="isPlanned ? 'mdi:progress-clock' : 'mdi:check-circle-outline'"
                class="mt-0.5 shrink-0 text-lg"
                :class="isPlanned ? 'text-brand-yellow' : 'text-semantic-success'"
              />
              <p v-if="isPlanned" class="text-[0.95rem] leading-relaxed text-[rgba(224,224,224,0.8)]">
                <strong class="text-[#e0e0e0]">This path is planned, not open yet.</strong>
                We'll offer it later, once we've revised its content, so the details below will change. To start now,
                begin with our featured path,
                <NuxtLink :to="`/paths/${featuredPath.slug}`" class="font-semibold">{{ featuredPath.title }}</NuxtLink>.
              </p>
              <p v-else class="text-[0.95rem] leading-relaxed text-[rgba(224,224,224,0.8)]">
                <strong class="text-[#e0e0e0]">Open now and in development.</strong>
                It's free, and we add lessons as we finish them.
              </p>
            </div>

            <p v-if="path.intro" class="text-[rgba(224,224,224,0.72)] leading-[1.8] mb-5">{{ path.intro }}</p>

            <div class="flex flex-wrap gap-3 max-sm:flex-col">
              <NuxtLink v-if="isPlanned" :to="`/paths/${featuredPath.slug}`" class="btn btn-primary btn-sm max-sm:justify-center">
                Start With {{ featuredPath.title }} <Icon name="mdi:arrow-right" />
              </NuxtLink>
              <NuxtLink v-else-if="firstCourse" :to="`/courses/${firstCourse.slug}`" class="btn btn-primary btn-sm max-sm:justify-center">
                Take the First Lesson <Icon name="mdi:arrow-right" />
              </NuxtLink>
              <NuxtLink to="/paths" class="btn btn-outline btn-sm max-sm:justify-center">
                <Icon name="mdi:arrow-left" /> All Learning Paths
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The featured path's goals and stages -->
    <section v-if="path.goals?.length || path.stages?.length" class="section" style="padding-top: 0;">
      <div v-if="path.goals?.length" class="glass-card p-7 mb-10 max-md:p-5 max-sm:p-4">
        <div class="flex items-center gap-2 mb-5">
          <Icon name="mdi:flag-checkered" class="text-brand-orange text-xl" />
          <h2 class="text-2xl font-bold">What you should be able to do</h2>
        </div>
        <ul class="flex flex-col gap-3 list-none">
          <li v-for="goal in path.goals" :key="goal" class="flex items-start gap-3 leading-relaxed text-[rgba(224,224,224,0.8)]">
            <Icon name="mdi:check-circle-outline" class="mt-1 shrink-0 text-brand-orange" />
            {{ goal }}
          </li>
        </ul>
      </div>

      <template v-if="path.stages?.length">
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-2">
            <Icon name="mdi:map-marker-path" class="text-brand-orange text-xl" />
            <h2 class="text-2xl font-bold">What is inside the {{ path.title }} path</h2>
          </div>
          <p class="text-[rgba(224,224,224,0.65)] leading-relaxed">
            The path is split into practical stages. Each stage prepares you for the next one, so you don't just collect
            ideas, you build habits you can use.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article v-for="(stage, index) in path.stages" :key="stage.id" class="glass-card p-6 max-sm:p-5">
            <div class="flex items-center justify-between gap-3 mb-3">
              <span class="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange/15 text-[0.9rem] font-extrabold text-brand-yellow">{{ stage.id }}</span>
              <span class="text-xs uppercase tracking-widest text-[rgba(224,224,224,0.5)]">Stage {{ index + 1 }}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ stage.title }}</h3>
            <p class="text-sm text-[rgba(224,224,224,0.65)] leading-relaxed mb-3">{{ stage.description }}</p>
            <ul class="list-disc pl-5 space-y-1.5 text-sm text-[rgba(224,224,224,0.78)] marker:text-brand-orange">
              <li v-for="point in stage.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </template>
    </section>

    <!-- Lessons, or a planned path's earlier outline -->
    <section class="section" style="padding-top: 0;">
      <div class="glass-card p-7 max-md:p-5 max-sm:p-4">
        <div class="flex items-center gap-2 mb-2">
          <Icon name="mdi:format-list-numbered" class="text-brand-orange text-xl" />
          <h2 class="text-2xl font-bold">{{ isPlanned ? 'Earlier outline' : 'Lessons in this path' }}</h2>
        </div>
        <p class="text-[rgba(224,224,224,0.65)] leading-relaxed mb-5">
          <template v-if="isPlanned">
            These were the planned courses. Any marked available are open on the Dojo today, and the rest will change as
            we revise the path.
          </template>
          <template v-else>
            {{ openCourses.length === 1 ? 'The first lesson is open now.' : `${openCourses.length} lessons are open now.` }}
            We publish the rest one by one, as each is ready.
          </template>
        </p>

        <ol class="flex flex-col gap-3 list-none">
          <li
            v-for="(course, index) in path.courses"
            :key="course.code ?? course.title"
            class="flex items-start gap-x-3 gap-y-1 py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.06] max-sm:flex-wrap"
          >
            <span class="shrink-0 w-14 rounded-full bg-brand-orange/[0.12] py-1 text-center text-[0.78rem] font-bold text-brand-orange">
              {{ course.code ?? String(index + 1).padStart(2, '0') }}
            </span>
            <div class="flex-1 min-w-0">
              <NuxtLink
                v-if="isCourseOpen(course)"
                :to="`/courses/${course.slug}`"
                class="text-[#e0e0e0] no-underline text-[0.98rem] font-medium transition-colors duration-200 hover:text-brand-orange"
              >
                {{ course.title }}
              </NuxtLink>
              <span v-else class="text-[rgba(224,224,224,0.72)] text-[0.98rem] font-medium">{{ course.title }}</span>
              <p v-if="course.description" class="mt-1 text-sm leading-relaxed text-[rgba(224,224,224,0.6)]">{{ course.description }}</p>
            </div>
            <!-- On phones the status drops below the title, lined up with it -->
            <span v-if="isCourseOpen(course)" class="ml-auto shrink-0 whitespace-nowrap pt-1 text-[0.72rem] uppercase tracking-wider text-[#4caf50] max-sm:w-full max-sm:pl-[4.25rem] max-sm:pt-0">Available Now</span>
            <span v-else class="ml-auto shrink-0 whitespace-nowrap pt-1 text-[0.72rem] uppercase tracking-wider text-brand-orange/80 max-sm:w-full max-sm:pl-[4.25rem] max-sm:pt-0">Coming Soon</span>
          </li>
        </ol>
      </div>
    </section>

    <!-- Next step -->
    <section class="section section-narrow text-center" style="padding-top: 0;">
      <div class="glass-card p-10 max-md:p-7 max-sm:p-5">
        <template v-if="isPlanned">
          <h2 class="gradient-text text-2xl md:text-3xl font-bold mb-3">This path opens later</h2>
          <p class="text-gray-400 leading-relaxed mb-6">
            Until then, the best place to start is {{ featuredPath.title }}: the mindset, practical navigation and ways of
            learning that every other path builds on.
          </p>
          <div class="flex gap-3 justify-center flex-wrap max-sm:flex-col">
            <NuxtLink :to="`/paths/${featuredPath.slug}`" class="btn btn-primary btn-sm max-sm:justify-center">
              Start With {{ featuredPath.title }} <Icon name="mdi:arrow-right" />
            </NuxtLink>
            <a
              :href="`https://skill-wanderer.com/learning-path/${path.slug}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-sm max-sm:justify-center"
            >
              See the Full Plan <Icon name="mdi:open-in-new" />
            </a>
          </div>
        </template>
        <template v-else>
          <h2 class="gradient-text text-2xl md:text-3xl font-bold mb-3">More lessons are on the way</h2>
          <p class="text-gray-400 leading-relaxed mb-6">
            We publish each lesson as soon as it's ready. Stuck or unsure where to begin in the meantime? Ask us.
            Guidance is always free.
          </p>
          <div class="flex gap-3 justify-center flex-wrap max-sm:flex-col">
            <a
              href="https://skill-wanderer.com/contact?tab=join"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm max-sm:justify-center"
            >
              Ask for Guidance <Icon name="mdi:open-in-new" />
            </a>
            <NuxtLink to="/courses" class="btn btn-outline btn-sm max-sm:justify-center">
              Browse All Courses
            </NuxtLink>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
