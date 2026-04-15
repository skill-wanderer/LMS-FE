interface SeoOptions {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  noIndex?: boolean
  datePublished?: string
  dateModified?: string
  breadcrumbs?: { name: string; url?: string }[]
}

export function useSeo(options: SeoOptions) {
  const config = useRuntimeConfig()
  const requestUrl = useRequestURL()
  const canonical = options.url || `${requestUrl.origin}${requestUrl.pathname}`

  useHead({
    title: options.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: options.description },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:type', content: options.type || 'website' },
      ...(options.image ? [{ property: 'og:image', content: options.image }] : []),
      ...(options.url ? [{ property: 'og:url', content: options.url }] : []),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      ...(options.image ? [{ name: 'twitter:image', content: options.image }] : []),
      ...(options.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      ...(options.datePublished ? [{ property: 'article:published_time', content: options.datePublished }] : []),
      ...(options.dateModified ? [{ property: 'article:modified_time', content: options.dateModified }] : []),
    ],
  })

  // Dev-mode SEO health checks — zero production impact
  if (import.meta.dev) {
    // Gap #9: title/description length enforcement
    if (options.title.length > 60) {
      console.warn(`[SEO] Title too long (${options.title.length} chars, max 60): "${options.title}"`)
    }
    if (options.description.length > 160) {
      console.warn(`[SEO] Description too long (${options.description.length} chars, max 160): "${options.description.slice(0, 80)}…"`)
    }

    // Gap #10: H1 uniqueness check — runs client-side after render
    onMounted(() => {
      const h1List = document.querySelectorAll('h1')
      if (h1List.length === 0) {
        console.warn(`[SEO] No <h1> found on page: "${options.title}"`)
      }
      else if (h1List.length > 1) {
        console.warn(`[SEO] Multiple <h1> tags found (${h1List.length}) on page: "${options.title}"`)
      }
    })
  }

  const schemas: any[] = [
    defineWebPage({
      name: options.title,
      description: options.description,
      ...(options.datePublished && { datePublished: options.datePublished }),
      ...(options.dateModified && { dateModified: options.dateModified }),
    }),
  ]

  // BreadcrumbList JSON-LD
  if (options.breadcrumbs?.length) {
    schemas.push(
      defineBreadcrumb({
        itemListElement: options.breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': item.name,
          ...(item.url && { item: item.url }),
        })),
      }),
    )
  }

  useSchemaOrg(schemas)
}

interface CourseSeoOptions {
  title: string
  description: string
  slug: string
  thumbnail?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  datePublished?: string
  dateModified?: string
  author?: { name: string; url?: string }
}

const difficultyToLevel: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export function useCourseSeo(course: CourseSeoOptions) {
  const siteUrl = 'https://dojo.skill-wanderer.com'

  useSeo({
    title: `${course.title} — Skill-Wanderer Dojo`,
    description: course.description,
    image: course.thumbnail || '/images/courses/manual-software-testing.png', // TODO: replace fallback with branded /og-image.png
    url: `${siteUrl}/courses/${course.slug}`,
    type: 'article',
    datePublished: course.datePublished,
    dateModified: course.dateModified,
    breadcrumbs: [
      { name: 'Home', url: siteUrl },
      { name: 'Courses', url: `${siteUrl}/courses` },
      { name: course.title },
    ],
  })

  useSchemaOrg([
    defineCourse({
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: 'Skill-Wanderer Dojo',
        url: siteUrl,
      },
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      ...(course.difficulty && { educationalLevel: difficultyToLevel[course.difficulty] }),
      ...(course.datePublished && { datePublished: course.datePublished }),
      ...(course.dateModified && { dateModified: course.dateModified }),
      ...(course.author && {
        author: {
          '@type': 'Person',
          'name': course.author.name,
          ...(course.author.url && { url: course.author.url }),
        },
      }),
    }),
  ])
}

interface LessonSeoOptions {
  title: string
  courseTitle: string
  courseSlug: string
  lessonSlug: string
  description?: string
  datePublished?: string
  dateModified?: string
  videoUrl?: string
  videoTitle?: string
  author?: { name: string; url?: string }
}

export function useLessonSeo(lesson: LessonSeoOptions) {
  const siteUrl = 'https://dojo.skill-wanderer.com'
  const lessonUrl = `${siteUrl}/courses/${lesson.courseSlug}/lessons/${lesson.lessonSlug}`

  useSeo({
    title: `${lesson.title} — ${lesson.courseTitle} — Skill-Wanderer Dojo`,
    description: lesson.description || `Lesson: ${lesson.title} from ${lesson.courseTitle}. Free and open learning at Skill-Wanderer Dojo.`,
    url: lessonUrl,
    type: 'article',
    datePublished: lesson.datePublished,
    dateModified: lesson.dateModified,
    breadcrumbs: [
      { name: 'Home', url: siteUrl },
      { name: 'Courses', url: `${siteUrl}/courses` },
      { name: lesson.courseTitle, url: `${siteUrl}/courses/${lesson.courseSlug}` },
      { name: lesson.title },
    ],
  })

  const schemas: any[] = []

  // VideoObject schema for lessons with embedded YouTube videos
  if (lesson.videoUrl) {
    const videoId = extractYouTubeId(lesson.videoUrl)
    if (videoId) {
      schemas.push({
        '@type': 'VideoObject',
        'name': lesson.videoTitle || lesson.title,
        'description': lesson.description || `Video lesson: ${lesson.title} from ${lesson.courseTitle}`,
        'thumbnailUrl': `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        'uploadDate': lesson.datePublished || undefined,
        'contentUrl': `https://www.youtube.com/watch?v=${videoId}`,
        'embedUrl': `https://www.youtube.com/embed/${videoId}`,
      })
    }
  }

  // Fallback structured data for lessons without video content
  if (!schemas.length) {
    schemas.push({
      '@type': 'LearningResource',
      'name': lesson.title,
      'description': lesson.description || `Lesson: ${lesson.title} from ${lesson.courseTitle}`,
      'learningResourceType': 'lesson',
      'url': lessonUrl,
      'isAccessibleForFree': true,
    })
  }

  useSchemaOrg(schemas)
}

/**
 * Extract YouTube video ID from various URL formats.
 */
function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube-nocookie\.com\/embed\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match?.[1] ?? null
}
