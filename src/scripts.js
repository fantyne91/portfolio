import { createApp, computed, nextTick, ref, watch } from 'vue'
// import { hideLoadingScreen } from './utils/hideLoadingScreen.js'
import router from './router/index.js'
import { createHead } from '@vueuse/head'

const app = createApp({
  setup() {
    // Datos reactivos
    const currentPage = ref('Landing')
    const menuOpen = ref(false)
    const isMobileOrTablet = ref(false)
    const isLoading = ref(true) // Estado de carga global
    const cachedImage = '/images/portfolio-img.webp?v=1' // Imagen a cargar
    const imageLoaded = ref(false) // Estado de la imagen cargada

    // Propiedad computada para clase dinámica
    const currentPageClassComputed = computed(() => {
      return `page-${currentPage.value.toLowerCase()}`
    })

    // Métodos
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const updateScreenSize = () => {
      isMobileOrTablet.value = window.innerWidth <= 950
      if (!isMobileOrTablet.value) {
        menuOpen.value = false
      }
    }

    // Función para manejar el clic en el botón de contacto
    const handleContactClick = (page) => {
      localStorage.setItem('fromPage', page)
      router.push({ path: '/contacta' })
    }

    // Lógica de creación de botones flotantes
    const createFloatingButton = () => {
      nextTick(() => {
        const existingBtn = document.querySelector('.btn')
        if (existingBtn) {
          existingBtn.remove() // Elimina el botón existente si lo hay
        }

        // Crear el botón solo en rutas específicas
        if (
          ['Uxui', 'Programacion', 'Videojuegos'].includes(currentPage.value)
        ) {
          const btn = document.createElement('button')
          btn.classList.add('btn', 'contact-btn')

          const svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
          )
          svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
          svg.setAttribute('height', '24px')
          svg.setAttribute('viewBox', '0 -960 960 960')
          svg.setAttribute('width', '32px')
          svg.setAttribute('fill', '#62626F')

          const path = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          )
          path.setAttribute(
            'd',
            'M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z'
          )
          svg.appendChild(path)
          btn.appendChild(svg)
          document.body.appendChild(btn)
        }

        // Añadir la funcionalidad de clic al botón de contacto
        const contactButtons = document.querySelectorAll('.contact-btn')
        contactButtons.forEach((button) => {
          button.addEventListener('click', (event) => {
            event.preventDefault()
            handleContactClick(currentPage.value)
          })
        })
      })
    }
    //elimina loading
 const hideLoadingScreen = () => {
   const loadingScreen = document.getElementById('loading-screen')
   if (loadingScreen) {
     loadingScreen.style.display = 'none'
     // Se elimina después de la animación
   }
 }

 // Función para mostrar la pantalla de carga
 const showLoadingScreen = () => {
   const loadingScreen = document.getElementById('loading-screen')
   if (loadingScreen) {
     loadingScreen.style.display = 'block'
   }
 }

 // Función para cargar la imagen solo en Landing
 const loadImage = () => {
   const img = new Image()
   img.src = cachedImage
   img.onload = img.onerror = () => {
     // Unifica onload y onerror
     imageLoaded.value = true
     setTimeout(hideLoadingScreen, 500)
   }
 }
    // Watcher para las rutas
    watch(
      () => router.currentRoute.value,
      (to, from) => {

        currentPage.value = to.name
        showLoadingScreen() // Activa el loading en cualquier cambio de ruta

        if (to.name === 'Landing') {
          loadImage() // En Landing, esperar la carga de la imagen
        } else {
          setTimeout(hideLoadingScreen, 500) // En otras rutas, ocultar sin esperar imagen
        }
    
        // Crear el botón flotante si es necesario
        createFloatingButton()

        // Cierra el menú si se hace clic fuera de él
        const main = document.querySelector('main')
        main.addEventListener('click', () => {
          if (menuOpen.value) {
            menuOpen.value = false
          }
        })
      }
    )

    // Método para actualizar el tamaño de la pantalla
    const mounted = () => {
      updateScreenSize() // Comprobamos el tamaño al iniciar
      window.addEventListener('resize', updateScreenSize) // Detectamos cambios
    }

    const beforeUnmount = () => {
      window.removeEventListener('resize', updateScreenSize) // Limpiamos el evento
    }

    // Llamar a la función `mounted` al montar el componente
    mounted()

    return {
      currentPage,
      currentPageClassComputed,
      menuOpen,
      isMobileOrTablet,
      isLoading,
      toggleMenu,
      updateScreenSize,
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
