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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/about/:id',
    name: 'about',
    component: function () {
      return import( '../views/PageView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    }
  },
  {
    path: "/user/:user",
    name: "user",
    component: function () {
      return import("../views/UserView.vue");
    },
  },
  {
    path: '/writeform',
    name: 'writeform',
    
    component: function () {
      return import('../views/WriteForm.vue')
    }
  },
  {
    path: '/signup',
    name: 'signup',
    
    component: function () {
      return import('../views/SignUpView.vue')
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
