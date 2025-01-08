import { createRouter, createWebHistory } from 'vue-router'

// Importa  vistas
import Landing from '../components/Landing.js'
import UXUI from '../components/Uxui.js'
 import Programming from '../components/Programming.js'
 import Unreal from '../components/Unreal.js'
 import Games from '../components/Games.js'

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
     path: '/unreal',
     name: 'Unreal',
     component: Unreal,
   },
   {
     path: '/games',
     name: 'Games',
     component: Games,
  },
]

// Configura el router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
