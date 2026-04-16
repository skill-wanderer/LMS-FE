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
          position: index + 1,
          name: item.name,
          ...(item.url && { item: item.url }),
        })),
      }),
    )
  }

  useSchemaOrg(schemas)
}