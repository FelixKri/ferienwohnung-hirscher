import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/house',
      name: 'house',
      component: () => import('./views/House.vue')
    },
    {
      path: '/pricing',
      name: 'prices',
      component: () => import('./views/Prices.vue')
    },
    {
      path: '/annaberg',
      name: 'annaberg',
      component: () => import('./views/Annaberg.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
