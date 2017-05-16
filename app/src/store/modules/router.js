import router from '../../router'
const state = {
  routerIndex: 0,
  router: [{
    path:'/recommend',
    msg: '发现音乐'
  }, {
    path:'/myMusic',
    msg: '我的音乐'
  }, {
    path:'/friends',
    msg: '朋友'
  }, {
    path:'/stories',
    msg: '故事'
  }]
}
const mutations = {
  router(state, index) {
    state.routerIndex = index
    if(index!=='other'){
      router.push(state.router[index].path)
      sessionStorage.setItem('routerIndex',index)
    }else{
      sessionStorage.removeItem('routerIndex')
    }
    
  }
}



export default {
  state,
  mutations
}
