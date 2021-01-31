import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Hotel from '../views/Hotel.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/hotels/:id',
    name: 'hotel',
    component: Hotel,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
