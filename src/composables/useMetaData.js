// src/composables/useMetaData.js
import { useHead } from '@vueuse/head'

export function useMetaData({ title, description, path, noindex = false }) {
  const baseUrl = 'https://www.mariadevdesign.com'
  const fullUrl = path ? `${baseUrl}${path}` : baseUrl

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: fullUrl },
      //   ...(image ? [{ property: 'og:image', content: image }] : []),
    ],
    link: [{ rel: 'canonical', href: fullUrl }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          url: fullUrl,
          description: description,
        }),
      },
    ],
  })
}
