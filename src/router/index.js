import { createRouter, createWebHistory } from 'vue-router'

// Importa  vistas
import Landing from '../views/Landing.vue'
import Uxui from '../views/Uxui.vue'
 import Programacion from '../views/Programacion.vue'
 import SobreMi from '../views/SobreMi.vue'
 import Videojuegos from '../views/Videojuegos.vue'
import Forms from '../views/Forms.vue'
import Thanks from '../components/Thanks.vue' 
 import NotFound from '../views/NotFound.vue'; // Asegúrate de que la ruta sea correcta
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
      return { top: 0, behavior: 'smooth' }
    },
})

export default router
