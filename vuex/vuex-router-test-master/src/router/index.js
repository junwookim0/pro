import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board/:id",
    name: "about",
    component: function () {
      return import("../views/PageView.vue");
    },
  },
  {
    path: "/write",
    name: "write",
    component: function () {
      return import("../views/WriteView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
