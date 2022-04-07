import Vue from 'vue'
import VueRouter from 'vue-router'

import PageComponent from "../components/PageComponent.vue";
import PageComponent2 from "../components/PageComponent2.vue";
import PageComponent3 from "../components/PageComponent3.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BoardView.vue')
    },
    children : [
      {
        path : "page", component:PageComponent},
      { 
        path : "page2", component:PageComponent2},
      {
        path : "page3", component:PageComponent3},
        
    ],
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
