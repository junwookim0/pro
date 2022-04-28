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
    path: '/modelingdew',
    name: 'living',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LivingView.vue')
    }
  },
  {
    path: '/modelingcafe',
    name: 'cafe',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CafeView.vue')
    }
  },
  {
    path: '/modelinghairshop',
    name: 'hairshop',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HairshopView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
