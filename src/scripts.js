/**IMPORT vue y vue router */
import { createApp } from 'vue'

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
      this.isMobileOrTablet = window.innerWidth < 799
      if (!this.isMobileOrTablet) {
        this.menuOpen = false
      }
    },
    
  },
  watch: {
    $route(to, from) {
      // Asegúrate de que cada ruta tenga un nombre definido
      this.currentPage = to.name || 'Landing'
    },
  },
  mounted() {
    console.log('vue montado')
    this.updateScreenSize() // Comprobamos el tamaño al iniciar
    window.addEventListener('resize', this.updateScreenSize) // Detectamos cambios
    this.currentPage = this.$route.name || 'Landing'

    /*carga-preload*/
     setTimeout(() => {
       const loadingScreen = document.getElementById('loading-screen')
       if (loadingScreen) {
         loadingScreen.style.opacity = '0'
         setTimeout(() => loadingScreen.remove(), 500) // Se elimina después de la animación
       }
     }, 500) // Un pequeño delay para suavizar la transición
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize) // Limpiamos el evento
  },
})





app.use(router); // Usa el router importado

app.mount('#app')// Montar la aplicación Vue en el elemento con id="app"
