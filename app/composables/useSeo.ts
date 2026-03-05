interface SeoOptions {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  noIndex?: boolean
}

export function useSeo(options: SeoOptions) {
  const config = useRuntimeConfig()

  useHead({
    title: options.title,
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
    ],
  })

  // JSON-LD structured data for courses
  useSchemaOrg([
    defineWebPage({
      name: options.title,
      description: options.description,
    }),
  ])
}

export function useCourseSeo(course: { title: string; description: string; slug: string; thumbnail?: string }) {
  useSeo({
    title: `${course.title} — Skill-Wanderer Dojo`,
    description: course.description,
    image: course.thumbnail || '/og-image.png',
    url: `https://dojo.skill-wanderer.com/courses/${course.slug}`,
    type: 'article',
  })

  useSchemaOrg([
    defineCourse({
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: 'Skill-Wanderer Dojo',
        url: 'https://dojo.skill-wanderer.com',
      },
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
  ])
}
