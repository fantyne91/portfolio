


import { Landing } from './components/Landing.js';
import { Uxui } from './components/Uxui.js';
//import { Programming } from './components/Programming.js';
//import { Games } from './components/Games.js';
//import { Unreal } from './components/Unreal.js';



//Instanciar vue
const app = Vue.createApp({
    data() {
        return {
            currentPage: 'Landing',  // Nombre del componente que se mostrará
            currentPageClass: 'landing'  // Clase que se aplica dinámicamente
        };
    },
    methods: {
        loadPage(page) {
            console.log('Cambiando a la página:', page); // Verifica que el valor sea correcto

            this.currentPage = page;  // Cambia el valor de currentPage
            this.currentPageClass = page.toLowerCase();  // Cambia la clase de la página
        }
    }
   
});

// Registrar los componentes
app.component('Landing', Landing);
app.component('Uxui', Uxui);
//app.component('Programming', Programming);
//app.component('Games', Games);
//app.component('Unreal', Unreal);

// Montar la aplicación Vue en el elemento con id="app"
app.mount('#app');