import { createRouter, createWebHistory } from 'vue-router'

// Importa  vistas
import Landing from '../components/Landing.js'
import Uxui from '../components/Uxui.js'
 import Programacion from '../components/Programacion.js'
 import SobreMi from '../components/SobreMi.js'
 import Videojuegos from '../components/Videojuegos.js'
import Forms from '../components/Forms.js'
import Thanks from '../components/Thanks.js' 
 import NotFound from '../components/NotFound.js'; // Asegúrate de que la ruta sea correcta
// Define las rutas
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/uxui',
    name: 'Uxui',
    component: Uxui,
  },
  {
    path: '/programacion',
    name: 'Programacion',
    component: Programacion,
  },

  {
    path: '/videojuegos',
    name: 'Videojuegos',
    component: Videojuegos,
  },
  {
    path: '/sobre-mi',
    name: 'SobreMi',
    component: SobreMi,
  },
  {
    path: '/contacta',
    name: 'Contacta',
    component: Forms,
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
  },
   {
     path: '/:pathMatch(.*)*', // Captura TODAS las rutas no definidas
     name: 'NotFound',
     component: NotFound,
   },
]

// Configura el router
const router = createRouter({
  history: createWebHistory(),
  routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0, behavior: 'smooth' } // Siempre inicia en el top con scroll suave
    },
})

export default router
