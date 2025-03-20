/**IMPORT vue y vue router */
import { createApp, nextTick } from 'vue'
import { hideLoadingScreen } from './utils/hideLoadingScreen.js'
import router from './router/index.js';


 export function handleContactClick(page) {   
   localStorage.setItem('fromPage', page)
   router.push({ path: '/contacta' })
 }

//Instanciar vue 
const app = createApp({
  //Datos que van a ser reactivos
  data() {
    return {
      currentPage: 'Landing',
      menuOpen: false,
      isMobileOrTablet: false,
      isLoading: true,
    }
  },
  computed: {
    //  Computed property para generar la clase dinámica

    currentPageClassComputed() {
      return `page-${this.currentPage.toLowerCase()}`
    },
  },

  //funciones que hacen reaccion
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    updateScreenSize() {
      this.isMobileOrTablet = window.innerWidth <= 950
      if (!this.isMobileOrTablet) {
        this.menuOpen = false
      }
    },

  },
  watch: {
    $route(to, from) {
      // Asegúrate de que cada ruta tenga un nombre definido
      this.currentPage = to.name || 'Landing'

      if (this.currentPage !== 'Landing') {
        setTimeout(hideLoadingScreen, 500)
      }

      nextTick(() => {
        // El código dentro de nextTick se ejecutará después de que Vue haya terminado de renderizar
        const existingBtn = document.querySelector('.btn')
        if (existingBtn) {
          existingBtn.remove()
        }

        if (['Uxui', 'Programming', 'Games'].includes(this.currentPage)) {
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

        const contactButtons = document.querySelectorAll('.contact-btn')     

        contactButtons.forEach((button) => {
          button.addEventListener('click', (event) => {
            console.log(`desde ${this.currentPage}`)
            event.preventDefault() 
            handleContactClick(this.currentPage) 
          })
        })
      })

            
     
    
    }
  },
  mounted() {
    console.log('vue montado')
    this.updateScreenSize() // Comprobamos el tamaño al iniciar
    window.addEventListener('resize', this.updateScreenSize) // Detectamos cambios

    
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize) // Limpiamos el evento
  },
})





app.use(router); // Usa el router importado

app.mount('#app')// Montar la aplicación Vue en el elemento con id="app"
