import api from '../../axios'
const state = {
  uid: '',
  name: '',
  picUrl: '',
  type: 'visitor',
  likelistID:'',
  likelist: [],
  userBox: {
    show: false,
    type: 'login'
  }
}
const mutations = {
  hideUserBox(state){
    state.userBox.show=false
  },
  showUserBox(state, val) {
    state.userBox = {
      show: true,
      type: val
    }
  },
  login(state, payload) {
    if (localStorage.getItem('uid')) {
      state.uid = localStorage.getItem('uid')
      state.name = localStorage.getItem('userName')
      state.picUrl = localStorage.getItem('picUrl')
      state.type = localStorage.getItem('userType')
      state.likelist = JSON.parse(localStorage.getItem('likelist'))
      state.likelistID = localStorage.getItem('likelistID')
      // console.log(state.likelist)
    } else {
      if (payload.code === 200) {
        localStorage.setItem('uid', payload.uid)
        localStorage.setItem('userName', payload.name)
        localStorage.setItem('userPicUrl', payload.picUrl)
        localStorage.setItem('userType', 'member')
        localStorage.setItem('loginTime', payload.loginTime)
        localStorage.setItem('likelist', JSON.stringify(payload.likelist))
        localStorage.setItem('likelistID', payload.likelistID)
        state.uid = payload.uid
        state.name = payload.name
        state.picUrl = payload.picUrl
        state.likelist = payload.likelist
        state.likelistID = payload.likelistID
        console.log(state.likelistID)
        console.log(state.likelist)
        state.type = 'member'
        state.userBox.show = false
      }
    }
  },
  logout(state) {
    localStorage.removeItem('uid')
    localStorage.removeItem('userName')
    localStorage.removeItem('userType')
    localStorage.removeItem('userPicUrl')
    localStorage.removeItem('loginTime')
    localStorage.removeItem('likelist')
    localStorage.removeItem('likelistID')
    state.uid = ''
    state.name = ''
    state.picUrl = ''
    state.likelistID = ''
    state.likelist = []
    state.type = 'visitor'
  },
  likeSong(state,payload){
    localStorage.setItem('likelist', JSON.stringify(payload.likelist))
    state.likelist = payload.likelist
  }
}
const actions = {
  login({
    commit
  }, payload) {
    return api.login(payload).then((data) => {
      if(data.code==200){
        commit('login', data)
      }
    })
  },
  likeSong({
    commit
  }, payload){
    console.log('payload',payload)
    return api.addSongToPlaylist(payload).then((data) => {
      commit('likeSong', data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
