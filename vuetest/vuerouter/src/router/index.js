import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowView from "../views/ShowView.vue";

import DoubleView from "../views/DoubleView.vue";
import DoubleDynamic from "../views/DoubleDynamic.vue";

import OneComponent from "../components/OneComponent.vue";
import TwoComponent from "../components/TwoComponent.vue";

// Vue 플러그인을 사용하기위한 use()메서드
Vue.use(VueRouter);

// 컴포넌트의 경로 설정
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 게으른 탐색 : 처음부터 가져오는 것이 아니라 실행할때 가져옴
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/show",
    name: "show",
    component: ShowView,
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
    path: "/show2",
    // redirect 를 사용하면 이미 작성된 경로로 이동시킬수있다.
    redirect: "/show",
  },
  {
    path: "/doubledynamic",
    name: "doubledynamic",
    component: DoubleDynamic,
    children: [
      {
        path: ":id",
        name: "doubledynamicid",
        component: function () {
          return import("../components/DynamicComponent.vue");
        },
      },
    ],
  },

  {
    path: "/double",
    component: DoubleView,
    children: [
      { path: "one", component: OneComponent },
      { path: "two", component: TwoComponent },
    ],
  },
];

// 라우터 객체 생성
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, //라우터 경로
});

let check = false;
// 네비게이션가드 확인
// 전역으로 만들어 두어서 이동할때마다 라우팅이 발생하여 확인하기 힘들다
// 라우터나 컴포넌트에 사용해서 각 라우터 혹은 컴포넌트 실행할때사용
// 라우터 : beforeEnter
router.beforeEach((to, from, next) => {
  if (check) {
    console.log(check);
    return next();
  }
  console.log(check);
  check = true;
  next({ path: "/show" });
});

// 해당 router를 export한다 (내보낸다)
export default router;