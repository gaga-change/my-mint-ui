import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Loadmore from '@/components/JSComponents/Loadmore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/loadmore',
      name: 'Hello',
      component: Loadmore
    }
  ]
})
