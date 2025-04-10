 <script setup>
    import { onMounted } from 'vue'

import { useRouter } from 'vue-router'
import { useMetaData } from '@/composables/useMetaData'
const router = useRouter()

onMounted(() => {
    // Redirige después de 2s (solo para usuarios, no bots)
        if (!navigator.userAgent.match(/bot|crawl|spider|googlebot/i)) {
          setTimeout(() => router.replace('/'), 3000)
        }
    })


useMetaData({
  title: 'Página no encontrada | María Portfolio',
  description: 'La página solicitada no existe en este sitio',
  path: '/404',
   noindex: true
})
   
if (import.meta.env.SSR && typeof document === 'undefined') {
  throw new Error('404'); // Esto funciona con prerender.io
}      
</script>
  


<template>
  <div class="not-found" style="height:100vh; justify-items:center; align-content:center">
    <h1>404 - Página no encontrada</h1>
    <p>Redirigiendo a la página principal...</p>
  </div>
</template>




