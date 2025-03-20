/**IMPORT vue y vue router */
import { createApp, watchEffect } from 'vue'
import { hideLoadingScreen } from './utils/hideLoadingScreen.js'
import router from './router/index.js';


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
    // hideLoadingScreen() {
    //   const loadingScreen = document.getElementById('loading-screen')
    //   if (loadingScreen) {
    //     loadingScreen.style.opacity = '0'
    //     setTimeout(() => loadingScreen.remove(), 500) // Se elimina después de la animación
    //   }
    // },
  },
  watch: {
    $route(to, from) {
      // Asegúrate de que cada ruta tenga un nombre definido
      this.currentPage = to.name || 'Landing'

      if (this.currentPage !== 'Landing') {
        setTimeout(hideLoadingScreen, 500)        
      }
      const btn = document.querySelector('.btn')
      if (btn) {
        if (
          this.currentPage == 'Uxui' ||
          this.currentPage == 'Programming' ||
          this.currentPage == 'Games' 
        ) {
          btn.style.opacity = '1' // Hacer el botón visible en las páginas que no sean 'Landing' ni 'Sobremi'
        } else {
          btn.style.opacity = '0' // Ocultar el botón en 'Landing' y 'Sobremi'
        }
      }
    },
    
  },
  mounted() {
    console.log('vue montado')
    this.updateScreenSize() // Comprobamos el tamaño al iniciar
    window.addEventListener('resize', this.updateScreenSize) // Detectamos cambios
    // this.currentPage = this.$route.name || 'Landing'


  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize) // Limpiamos el evento
  },
})





app.use(router); // Usa el router importado

app.mount('#app')// Montar la aplicación Vue en el elemento con id="app"
