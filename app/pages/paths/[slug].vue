<script setup lang="ts">
import allPaths from '~/data/paths'

const route = useRoute()
const slug = route.params.slug as string

const { formatDuration, getCourseDuration, getCourseBySlug } = useCourses()
const path = allPaths.find(p => p.slug === slug)

if (!path) {
  throw createError({ statusCode: 404, statusMessage: 'Learning path not found' })
}

const siteUrl = 'https://dojo.skill-wanderer.com'

useSeo({
  title: `${path.title} Learning Path — Skill-Wanderer Dojo`,
  description: path.description,
  url: `${siteUrl}/paths/${path.slug}`,
  breadcrumbs: [
    { name: 'Home', url: siteUrl },
    { name: 'Learning Paths', url: `${siteUrl}/paths` },
    { name: path.title },
  ],
})

const totalDuration = computed(() => {
  if (!path.courses?.length) return 0
  return path.courses.reduce((sum, course) => {
    const found = getCourseBySlug(course.slug)
    return sum + (found ? getCourseDuration(found) : 0)
  }, 0)
})

const availableCourses = computed(() => {
  if (!path.courses?.length) return 0
  return path.courses.filter(course => isCourseAvailable(course.slug)).length
})

function isCourseAvailable(slugValue: string): boolean {
  return !!getCourseBySlug(slugValue)
}

function difficultyClass(d: string): string {
  switch (d) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
}
</script>

<template>
  <div>
    <div class="pt-[170px] px-5 max-md:pt-[150px] max-md:px-4 max-sm:pt-[140px] max-sm:px-3 max-w-content mx-auto">
      <BreadcrumbNav :items="[
        { label: 'Home', to: '/' },
        { label: 'Learning Paths', to: '/paths' },
        { label: path.title },
      ]" />
    </div>

    <section class="px-5 pt-10 pb-[50px] max-md:px-4 max-md:pt-6 max-md:pb-8 max-sm:px-3 max-sm:pb-6">
      <div class="max-w-content mx-auto">
        <div class="glass-card p-8 max-md:p-6 max-sm:p-4">
          <div class="flex gap-4 items-start mb-4 max-md:flex-col">
            <Icon :name="path.icon" class="text-[2.2rem] text-brand-orange shrink-0 mt-1" />
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2 flex-wrap">
                <h1 class="gradient-text text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.15]">{{ path.title }}</h1>
                <span :class="['badge', difficultyClass(path.difficulty)]">{{ path.difficulty }}</span>
              </div>
              <p class="text-[rgba(224,224,224,0.72)] text-[1.02rem] leading-[1.75]">{{ path.description }}</p>

              <div class="flex items-center gap-5 mt-4 flex-wrap">
                <span class="text-sm text-[rgba(224,224,224,0.6)]">
                  <Icon name="mdi:book-open-outline" class="inline" /> {{ path.courseCount }} planned courses
                </span>
                <span class="text-sm text-[rgba(224,224,224,0.6)]">
                  <Icon name="mdi:check-circle-outline" class="inline" /> {{ availableCourses }} currently available
                </span>
                <span v-if="totalDuration" class="text-sm text-[rgba(224,224,224,0.6)]">
                  <Icon name="mdi:clock-outline" class="inline" /> {{ formatDuration(totalDuration) }} available content
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="glass-card p-7 max-md:p-5 max-sm:p-4">
        <div class="flex items-center gap-2 mb-5">
          <Icon name="mdi:map-marker-path" class="text-brand-orange text-xl" />
          <h2 class="text-2xl font-bold">Curriculum Roadmap</h2>
        </div>

        <div v-if="path.courses?.length" class="flex flex-col gap-3">
          <div
            v-for="(course, index) in path.courses"
            :key="course.slug"
            class="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/[0.12] text-brand-orange text-[0.85rem] font-bold shrink-0">{{ index + 1 }}</span>

            <NuxtLink
              v-if="isCourseAvailable(course.slug)"
              :to="`/courses/${course.slug}`"
              class="text-[#e0e0e0] no-underline text-[0.98rem] font-medium transition-colors duration-200 hover:text-brand-orange"
            >
              {{ course.title }}
            </NuxtLink>

            <span v-else class="text-[rgba(224,224,224,0.72)] text-[0.98rem] font-medium">
              {{ course.title }}
            </span>

            <span v-if="isCourseAvailable(course.slug)" class="ml-auto text-[0.72rem] uppercase tracking-wider text-[#4caf50]">Available</span>
            <span v-else class="ml-auto text-[0.72rem] uppercase tracking-wider text-brand-orange/80">Planned</span>
          </div>
        </div>

        <div v-else class="flex items-center gap-2.5 py-3 px-4 rounded-lg bg-brand-orange/5 border border-dashed border-brand-orange/20">
          <Icon name="mdi:hammer-wrench" class="text-brand-orange text-lg" />
          <span class="text-sm text-gray-400">Courses for this path are being developed. Stay tuned!</span>
        </div>

        <div class="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
          <NuxtLink to="/courses" class="btn btn-primary btn-sm">
            <Icon name="mdi:school-outline" /> Browse Available Courses
          </NuxtLink>
          <NuxtLink to="/paths" class="btn btn-outline btn-sm">
            <Icon name="mdi:arrow-left" /> Back to Learning Paths
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
