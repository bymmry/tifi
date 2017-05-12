import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend'
import MyMusic from '@/components/MyMusic'
import UploadMusic from '@/components/UploadMusic'
import User from '@/components/User'
import Play from '@/components/Play'
import Search from '@/components/Search'
Vue.use(Router)

const router = new Router({
  base: 'spa',
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search,
      meta: { notKeepAlive: true }
    },
    {
      path: '/myMusic',
      component: MyMusic
    },
    {
      path:'/UploadMusic',
      component:UploadMusic
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/play',
      component:Play
    }
  ]
})

export default router
