import { createRouter, createWebHistory } from 'vue-router'

// Importa  vistas
import Landing from '../components/Landing.js'
import UXUI from '../components/Uxui.js'
 import Programming from '../components/Programming.js'
 import Unreal from '../components/Unreal.js'
 import Games from '../components/Games.js'
import Forms from '../components/Forms.js'

// Define las rutas
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/uxui',
    name: 'UXUI',
    component: UXUI,
  },
  {
    path: '/programming',
    name: 'Programming',
    component: Programming,
  },
  {
    path: '/unrealEngine',
    name: 'Unreal',
    component: Unreal,
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/contacta',
    name: 'Contacta',
    component: Forms,
  },
]

// Configura el router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
