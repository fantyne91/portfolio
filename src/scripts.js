/**IMPORT vue y vue router */
import { createApp } from 'vue';

import router from './router/index.js';


//Instanciar vue 
const app = createApp({
  //Datos que van a ser reactivos
  data() {
    return {
      currentPage: 'Landing',
      //currentPageClass: 'landing', // Clase que se aplica dinámicamente
      menuOpen: false, // Estado del menú hamburguesa
      isMobileOrTablet: false, // Indicador para tamaño de pantalla
    }
  },

  computed: {//  Computed property para generar la clase dinámica según la página actual    
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
    
    this.updateScreenSize() // Comprobamos el tamaño al iniciar
    window.addEventListener('resize', this.updateScreenSize) // Detectamos cambios
    this.currentPage = this.$route.name || 'Landing'
    //  document.body.classList.add('ready');
    // document.getElementById('app').style.display = 'block'
  },

  beforeUnmount() {
    
    window.removeEventListener('resize', this.updateScreenSize) // Limpiamos el evento
  },
})


app.use(router); // Usa el router importado

app.mount('#app')// Montar la aplicación Vue en el elemento con id="app"
