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

interface SeoAuthor {
  name: string
  url?: string
}

interface CourseSeoOptions {
  title: string
  description: string
  slug: string
  thumbnail?: string
  difficulty?: string
  datePublished?: string
  dateModified?: string
  author?: SeoAuthor
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
  author?: SeoAuthor
}

const SITE_NAME = 'Skill-Wanderer Dojo'

function getSiteUrl() {
  const config = useRuntimeConfig()
  return ((config.public.siteUrl as string | undefined) || useRequestURL().origin).replace(/\/+$/, '')
}

function toAbsoluteUrl(url: string | undefined, siteUrl: string) {
  if (!url) return undefined
  return new URL(url, siteUrl).href
}

function getAuthorSchema(author?: SeoAuthor) {
  if (!author) return undefined
  return {
    '@type': 'Person',
    name: author.name,
    ...(author.url && { url: author.url }),
  }
}

export function useSeo(options: SeoOptions) {
  const siteUrl = getSiteUrl()
  const requestUrl = useRequestURL()
  const canonical = toAbsoluteUrl(options.url || requestUrl.pathname, siteUrl)
  const image = toAbsoluteUrl(options.image, siteUrl)

  useHead({
    title: options.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: options.description },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:type', content: options.type || 'website' },
      ...(image ? [{ property: 'og:image', content: image }] : []),
      ...(canonical ? [{ property: 'og:url', content: canonical }] : []),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      ...(image ? [{ name: 'twitter:image', content: image }] : []),
      ...(options.noIndex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      ...(options.datePublished ? [{ property: 'article:published_time', content: options.datePublished }] : []),
      ...(options.dateModified ? [{ property: 'article:modified_time', content: options.dateModified }] : []),
    ],
  })

  const schemas: any[] = [
    defineWebPage({
      name: options.title,
      description: options.description,
      url: canonical,
      ...(image && { image }),
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
          position: index + 1,
          name: item.name,
          ...(item.url && { item: toAbsoluteUrl(item.url, siteUrl) }),
        })),
      }),
    )
  }

  useSchemaOrg(schemas)
}

export function useCourseSeo(options: CourseSeoOptions) {
  const siteUrl = getSiteUrl()
  const courseUrl = `${siteUrl}/courses/${options.slug}`
  const image = toAbsoluteUrl(options.thumbnail, siteUrl)

  useSeo({
    title: `${options.title} - ${SITE_NAME}`,
    description: options.description,
    image,
    url: courseUrl,
    type: 'article',
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    breadcrumbs: [
      { name: 'Home', url: siteUrl },
      { name: 'Courses', url: `${siteUrl}/courses` },
      { name: options.title },
    ],
  })

  useSchemaOrg([
    defineCourse({
      name: options.title,
      description: options.description,
      url: courseUrl,
      courseCode: options.slug,
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: siteUrl,
      },
      ...(image && { image }),
      ...(options.difficulty && { educationalLevel: options.difficulty }),
      ...(options.datePublished && { datePublished: options.datePublished }),
      ...(options.dateModified && { dateModified: options.dateModified }),
      ...(options.author && { author: getAuthorSchema(options.author) }),
    }),
  ])
}

export function useLessonSeo(options: LessonSeoOptions) {
  const siteUrl = getSiteUrl()
  const courseUrl = `${siteUrl}/courses/${options.courseSlug}`
  const lessonUrl = `${courseUrl}/lessons/${options.lessonSlug}`
  const description = options.description || `Learn ${options.title} in ${options.courseTitle}.`
  const author = getAuthorSchema(options.author)

  useSeo({
    title: `${options.title} - ${options.courseTitle} - ${SITE_NAME}`,
    description,
    url: lessonUrl,
    type: options.videoUrl ? 'video.other' : 'article',
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    breadcrumbs: [
      { name: 'Home', url: siteUrl },
      { name: 'Courses', url: `${siteUrl}/courses` },
      { name: options.courseTitle, url: courseUrl },
      { name: options.title },
    ],
  })

  const schemas: any[] = [
    defineArticle({
      headline: options.title,
      name: options.title,
      description,
      url: lessonUrl,
      isPartOf: {
        '@type': 'Course',
        name: options.courseTitle,
        url: courseUrl,
      },
      ...(options.datePublished && { datePublished: options.datePublished }),
      ...(options.dateModified && { dateModified: options.dateModified }),
      ...(author && { author }),
    }),
  ]

  if (options.videoUrl) {
    const videoUrl = toAbsoluteUrl(options.videoUrl, siteUrl)
    schemas.push(
      defineVideo({
        name: options.title,
        description,
        embedUrl: videoUrl,
        contentUrl: videoUrl,
        ...(options.datePublished && { uploadDate: options.datePublished }),
      }),
    )
  }

  useSchemaOrg(schemas)
}
