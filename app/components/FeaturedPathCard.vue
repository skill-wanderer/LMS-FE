<script setup lang="ts">
import type { PathData } from '~/data/paths'

const props = defineProps<{
  path: PathData
}>()

const { getCourseBySlug } = useCourses()

const cover = computed(() => `learning-paths/${props.path.slug}`)
// Until its cover exists (production skips empty slots), the text takes the whole card.
const { shown: hasCover } = useImageSlot(cover)

const openCourses = computed(() => props.path.courses.filter(course => course.slug && getCourseBySlug(course.slug)))
const firstCourse = computed(() => openCourses.value[0])
</script>

<template>
  <article
    class="grid items-center gap-9 rounded-[22px] border border-brand-orange/40 bg-gradient-to-br from-brand-orange/10 to-brand-yellow/[0.04] p-7 shadow-[0_20px_44px_rgba(0,0,0,0.3)] max-md:gap-6 max-md:p-5 max-sm:p-4"
    :class="hasCover ? 'md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]' : 'max-w-[820px] mx-auto'"
  >
    <ImageSlot :name="cover" class="rounded-card" />

    <div>
      <div class="flex items-center justify-between gap-3">
        <Icon :name="path.icon" class="text-brand-orange text-2xl" />
        <span class="badge badge-in-development">In Development</span>
      </div>

      <h3 class="mt-3.5 mb-2.5 text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-white">{{ path.title }}</h3>
      <p class="mb-5 text-[1.05rem] leading-relaxed text-[rgba(224,224,224,0.8)]">{{ path.description }}</p>

      <ol v-if="path.stages?.length" class="mb-5 grid list-none gap-2.5 p-0 sm:grid-cols-2" aria-label="Stages in this path">
        <li
          v-for="stage in path.stages"
          :key="stage.id"
          class="flex items-center gap-2.5 rounded-xl border border-brand-orange/20 bg-white/[0.04] py-2.5 px-3 text-[0.95rem] font-semibold leading-snug text-[#e0e0e0]"
        >
          <span class="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-brand-orange/15 text-[0.8rem] font-extrabold text-brand-yellow">{{ stage.id }}</span>
          {{ stage.title }}
        </li>
      </ol>

      <p class="mb-6 flex items-center gap-1.5 text-sm text-[rgba(224,224,224,0.6)]">
        <Icon name="mdi:check-circle-outline" class="text-semantic-success" />
        {{ openCourses.length }} of {{ path.courses.length }} lessons open now
      </p>

      <div class="flex flex-wrap gap-3 max-sm:flex-col">
        <NuxtLink :to="`/paths/${path.slug}`" class="btn btn-primary btn-sm max-sm:justify-center">
          Open the Path <Icon name="mdi:arrow-right" />
        </NuxtLink>
        <NuxtLink v-if="firstCourse" :to="`/courses/${firstCourse.slug}`" class="btn btn-secondary btn-sm max-sm:justify-center">
          Take the First Lesson
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
