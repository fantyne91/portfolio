/**IMPORT vue y vue router */
import { createApp } from 'vue';

import router from './router/index.js';

/**IMPORT COMPONENTS */
// import { Landing } from '../components/Landing.js'
// import { Uxui } from '../components/Uxui.js'
//import { Programming } from './components/Programming.js';
//import { Games } from './components/Games.js';
//import { Unreal } from './components/Unreal.js';

// import '../styles/forms.css'
// import '../styles/global.css'

//Instanciar vue al hacer click o eventos
const app = createApp({
  //Datos que van a ser reactivos
  data() {
    return {
      // currentPage: 'Landing', // Nombre del componente que se mostrará
      //currentPageClass: 'landing', // Clase que se aplica dinámicamente
      menuOpen: false, // Estado del menú hamburguesa
      isMobileOrTablet: false, // Indicador para tamaño de pantalla
    }
  },

  computed: {
    //  Computed property para generar la clase dinámica según la página actual
    currentPageClassComputed() {
      return `page-${this.currentPage.toLowerCase()}`
    },
  },

  //funciones que hacen reaccion
  methods: {
    // loadPage(page) {
    //   this.currentPage = page // Cambia el valor de currentPage
    //   this.menuOpen = false
    // },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      
    },

    updateScreenSize() {
      this.isMobileOrTablet = window.innerWidth < 801 // Detecta si es menor a 800px
      if (!this.isMobileOrTablet) {
        this.menuOpen = false // Cierra el menú si cambia a escritorio
      }
    },

    

  },

  mounted() {
    // Similar a "created" pero en createApp
    this.updateScreenSize() // Comprobamos el tamaño al iniciar
    window.addEventListener('resize', this.updateScreenSize) // Detectamos cambios
  
    //  document.body.classList.add('ready');

    document.getElementById('app').style.display = 'block'
    
  },
  
  beforeUnmount() {
      // Similar a "beforeDestroy"
      window.removeEventListener('resize', this.updateScreenSize) // Limpiamos el evento
    }
  
})

// Registrar los componentes
// app.component('Landing', Landing)
// app.component('Uxui', Uxui)
//app.component('Programming', Programming);
//app.component('Games', Games);
//app.component('Unreal', Unreal);

app.use(router); // Usa el router importado

app.mount('#app')// Montar la aplicación Vue en el elemento con id="app"
