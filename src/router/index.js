import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Loadmore from '@/components/JSComponents/Loadmore'
import InfiniteScroll from '@/components/JSComponents/InfiniteScroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Menu
    },
    {
      name: 'load-more',
      path: '/load-more',
      component: Loadmore
    },
    {
      name: 'infinite-scroll',
      path: '/infinite-scroll',
      component: InfiniteScroll
    }
  ]
})
