import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


// vue 플러그인을 사용하기 위한 use메소드
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
    path: '/show',
    name: 'show',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ShowView.vue')
    }
  },
  {
    path: "/dynamic/:id",
    name: "dynamic",
    component: function () {
      return import("../views/DynamicView.vue");
    },
  },
  {
    // * 기호를 이용해 다른 경로의 접근을 받아올 수 있다.
    path: "*",
    // redirect 를 사용하면 이미 작성된 경로로 이동시킬수있다.
    redirect: "/show",
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
