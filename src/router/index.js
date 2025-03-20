import { createRouter, createWebHistory } from 'vue-router'

// Importa  vistas
import Landing from '../components/Landing.js'
import Uxui from '../components/Uxui.js'
 import Programming from '../components/Programming.js'
 import SobreMi from '../components/SobreMi.js'
 import Games from '../components/Games.js'
import Forms from '../components/Forms.js'
import Thanks from '../components/Thanks.js' 

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
    path: '/programming',
    name: 'Programming',
    component: Programming,
  },

  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/sobreMi',
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
