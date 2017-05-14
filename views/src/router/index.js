import Vue from 'vue'
import Router from 'vue-router'
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
      component: resolve => require(['@/components/Recommend'], resolve)
    },
    {
      path: '/search',
      component: resolve => require(['@/components/Search'], resolve),
      // meta: {
      //   notKeepAlive: true
      // }
    },
    {
      path: '/myMusic',
      component: resolve => require(['@/components/MyMusic'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/friends',
      component: resolve => require(['@/components/Friends'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/musicVideo',
      component: resolve => require(['@/components/MusicVideo'], resolve)

    },
    {
      path: '/upload',
      component: resolve => require(['@/components/Upload'], resolve)
    },
    {
      path: '/user',
      component: resolve => require(['@/components/User'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/play',
      component: resolve => require(['@/components/Play'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/playlist',
      component: resolve => require(['@/components/Playlist'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/playMv',
      component: resolve => require(['@/components/PlayMv'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/artist',
      component: resolve => require(['@/components/Artist'], resolve),
      meta: {
        notKeepAlive: true
      }
    },
    {
      path: '/album',
      component: resolve => require(['@/components/Album'], resolve),
      meta: {
        notKeepAlive: true
      }
    }
  ]
})

export default router
