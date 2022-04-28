import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 10. axios 모듈을 설치하고 사용
//서버와 비동기로 http 객체를 사용하여 연결하기 위함
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
