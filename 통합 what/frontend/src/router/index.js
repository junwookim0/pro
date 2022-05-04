import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modelinghotel',
    name: 'hotel',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HotelView.vue')
    }
  },
  {
    path: '/modelingportfolio',
    name: 'portfolio',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PortFolio.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
