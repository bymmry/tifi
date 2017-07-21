import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['@/components/fcHome'], resolve)
    },
    {
      path: '/fcHome',
      name: '/fcHome',
      component: resolve => require(['@/components/fcHome'], resolve)
    },
    {
      path: '/fcApp',
      name: '/fcApp',
      component: resolve => require(['@/components/fcApp'], resolve)
    }
  ]
})
