// src/composables/useMetaData.js
import { useHead } from '@vueuse/head'

export function useMetaData({
  title,
  description,
  path,
  noindex = false,
  video = null,
  additionalLinks = [],
  jsonLd = null,// null por defecto
}) {

  // Variables dinámicas
  const baseUrl = 'https://www.mariadevdesign.com'
  const fullUrl = path ? `${baseUrl}${path}` : baseUrl

  // esquema básico (WebPage)
  const basicSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: fullUrl,
    description: description,
    author: {
      '@type': 'Person',
      name: 'María Ortiz',
      url: 'https://www.mariadevdesign.com/sobremi',
    },
    inLanguage: 'es',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://www.mariadevdesign.com/contacta',
    },
    
    // Si hay video,(no main entity)-> tipo a VideoObject
    ...(video && {
      ...(video && {
        hasPart: {
          '@type': 'VideoObject',
          name: video.name,
          description: video.description,
          thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
          uploadDate: video.uploadDate,
          embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
        },
      }),
    }),
  }

  
 

  // Si se pasa jsonLd, lo combinamos sin duplicar campos base
  const finalJsonLd = jsonLd
    ? {
        ...basicSchemaData,
        ...jsonLd,
        // opcional: sobreescribir solo los campos necesarios del jsonLd pasado
      }
    : basicSchemaData // Si no se pasa jsonLd, usamos el esquema básico

  // Metas dinámicas
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
      { property: 'og:type', content: 'website' }, // Open Graph type
      { property: 'og:url', content: fullUrl },
    ],
    link: [{ rel: 'canonical', href: fullUrl }, ...additionalLinks],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(finalJsonLd), // Usamos el jsonLd combinado
      },
    ],
  })
}
