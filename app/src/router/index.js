import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend/main'
    },
    {
      path: '/recommend',
      component: resolve => require(['@/components/Recommend'], resolve),
      children: [{
        path: 'main',
        component: resolve => require(['@/components/recommend/main'], resolve)
      },{
        path: 'playlist',
        component: resolve => require(['@/components/recommend/playlist'], resolve)
      },{
        path: 'artist',
        component: resolve => require(['@/components/recommend/artist'], resolve)
      },{
        path: 'toplist',
        component: resolve => require(['@/components/recommend/toplist'], resolve)
      }]
    },
    {
      path: '/search',
      component: resolve => require(['@/components/Search'], resolve),
      children: [{
        path: 'song',
        component: resolve => require(['@/components/search/song'], resolve)
      },{
        path: 'artist',
        component: resolve => require(['@/components/search/artist'], resolve)
      },{
        path: 'playlist',
        component: resolve => require(['@/components/search/playlist'], resolve)
      },{
        path: 'album',
        component: resolve => require(['@/components/search/album'], resolve)
      }]
    },
    {
      path: '/renew',
      component: resolve => require(['@/components/Renew'], resolve),
      children: [{
        path: 'main',
        component: resolve => require(['@/components/renew/main'], resolve)
      },{
        path: 'follow',
        component: resolve => require(['@/components/renew/follow'], resolve)
      },{
        path: 'friend',
        component: resolve => require(['@/components/renew/friend'], resolve)
      },{
        path: 'seft',
        component: resolve => require(['@/components/renew/seft'], resolve)
      }]
    },
    {
      path: '/seft',
      component: resolve => require(['@/components/Seft'], resolve),
      children: [{
        path: 'songlist',
        component: resolve => require(['@/components/seft/songlist'], resolve)
      },{
        path: 'myPlaylist',
        component: resolve => require(['@/components/seft/myPlaylist'], resolve)
      },{
        path: 'likePlaylist',
        component: resolve => require(['@/components/seft/likePlaylist'], resolve)
      },{
        path: 'info',
        component: resolve => require(['@/components/seft/info'], resolve)
      }]
    }
  ]
})
