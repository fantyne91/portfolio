// src/composables/useMetaData.js
import { useHead } from '@vueuse/head'

export function useMetaData({
  title,
  description,
  path,
  noindex = false,
  video = null,
}) {
  const baseUrl = 'https://www.mariadevdesign.com'
  const fullUrl = path ? `${baseUrl}${path}` : baseUrl

  /**variables dinamicas para json */
     const schemaData = {
       '@context': 'https://schema.org',
       '@type': 'WebPage',
       name: title,
       url: fullUrl,
       description: description,
  }
   if (video) {
     schemaData['@type'] = 'VideoObject'
     schemaData.name = video.name
     schemaData.description = video.description
     schemaData.thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
     schemaData.uploadDate = video.uploadDate
     schemaData.embedUrl = `https://www.youtube.com/embed/${video.videoId}`
   }

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      {
        name: 'robots',
        content: noindex ? 'noindex, nofollow' : 'index, follow',
      },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: fullUrl },
    ],
    link: [{ rel: 'canonical', href: fullUrl }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schemaData),
      },
    ],
  })
}
