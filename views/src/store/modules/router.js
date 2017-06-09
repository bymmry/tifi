import router from '../../router'
import {
  Message
} from 'iview'
const state = {
  routerIndex: 0,
  router: [{
    path: '/recommend',
    name: '发现音乐'
  }, {
    path: '/myMusic',
    name: '我的音乐'
  }, {
    path: '/friends',
    name: '动态'
  }, {
    path: '/musicVideo',
    name: 'MV'
  },  {
    path: '/search',
    name: '搜索'
  },{
    path: '/user',
    name: '用户中心'
  }, {
    path: '/upload',
    name: '上传'
  }, {
    path: '/play',
    name: '歌曲详情'
  }, {
    path: '/playlist',
    name: '歌单详情'
  }, {
    path: '/playMv',
    name: 'mv详情'
  }, {
    path: '/artist',
    name: '歌手详情'
  }, {
    path: '/album',
    name: '专辑详情'
  }]
}
const mutations = {
  router(state, payload) {
    state.routerIndex = -1
    let path = payload
    if (typeof (payload) === 'object') {
      path = payload.path
      if(path=='/playlist'){
        sessionStorage.setItem('playlistID', payload.id)
        sessionStorage.setItem('playlistPicUrl', payload.picUrl)
      }
      if(path=='/playMv'){
        sessionStorage.setItem('mvID', payload.id)
      }
      if(path=='/artist'){
        sessionStorage.setItem('artistID', payload.id)
      }
      if(path=='/album'){
        sessionStorage.setItem('albumID', payload.id)
      }
    }
    state.router.forEach((item, index) => {
      if (item.path == path) {
        state.routerIndex = index
        sessionStorage.setItem('router', path)
        router.push(path)
      }
    })


  }
}



export default {
  state,
  mutations
}
