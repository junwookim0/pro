import Vue from 'vue'
import Router from 'vue-router'
import mapbox from '@/components/mapbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mapbox',
      component: mapbox
    }
  ]
})
