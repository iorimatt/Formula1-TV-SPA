import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Schedules from '../views/Schedules.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {

    path: '/2021-season',
    name: 'Temporada 2021',

  }, 

  {

    path: '/schedules',
    name: 'Horários',
    component: Schedules

  },

  {

    path: '/archives',
    name: 'Arquivos',

  },

  {

    path: '/shows',
    name: 'Programas',

  },

  {

    path: '/documentaries',
    name: 'Documentários',

  }
  
]

const router = new VueRouter({
  routes
})

export default router
