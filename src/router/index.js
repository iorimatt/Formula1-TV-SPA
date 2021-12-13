import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Schedules from '../views/Schedules.vue'
import Report from '../views/ReportPage.vue'
import Login from '../views/Login.vue'
import { store } from '../store.js'
import LoginRequire from '../views/LoginRequire.vue'


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
    meta: {requireAuth: true},

  },

  {

    path: '/shows',
    name: 'Programas',
    meta: {requireAuth: true},

  },

    {

        path: '/login-require',
        name: 'Login Require',
        component: LoginRequire
    },


  {

    path: '/documentaries',
    name: 'Documentários',
    meta: {requireAuth: true},

  },

  {

    path: '/login',
    name: 'Login',
    component: Login


  }, 

  {
    path: '/error',
    name: 'Report',
    component: Report

         
    
  }
  

  
]




const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
 

if (to.meta.requireAuth) {

if (store.state.isLogged == false){

    next({name:'Login Require'})

} else next()


}

else next()

})

export default router
