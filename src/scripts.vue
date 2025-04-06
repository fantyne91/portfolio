<!-- <script setup>

import { createApp, computed, nextTick, ref, watch } from 'vue'

import router from './router/index.js'
import { createHead } from '@vueuse/head'

const app = createApp({
  setup() {
    // Datos reactivos
 
    // Métodos



    // Función para manejar el clic en el botón de contacto
    const handleContactClick = (page) => {
      localStorage.setItem('fromPage', page)
      router.push({ path: '/contacta' })
    }

    // Lógica de creación de botones flotantes
    




    // Método para actualizar el tamaño de la pantalla
  

    // Llamar a la función `mounted` al montar el componente
    mounted()

    return {
      currentPage,
      currentPageClassComputed,
      
      
      
      handleContactClick,
      mounted,
      beforeUnmount,
    }
  },
})

const head = createHead()
app.use(router)
app.use(head)
app.mount('#app')
</script> -->