import api from '../../axios'
const state = {
  uid: '',
  name: '',
  picUrl: '',
  type: 'visitor',
  playlist: []
}
const mutations = {
  login(state, payload) {
    if (localStorage.getItem('uid')) {
      state.uid = localStorage.getItem('uid')
      state.name = localStorage.getItem('userName')
      state.picUrl = localStorage.getItem('picUrl')
      state.type = localStorage.getItem('userType')
      state.playlist = JSON.parse(localStorage.getItem('playlist'))
      // console.log(state.playlist)
    } else {
      if (payload.code === 200) {
        localStorage.setItem('uid', payload.uid)
        localStorage.setItem('userName', payload.name)
        localStorage.setItem('userPicUrl', payload.picUrl)
        localStorage.setItem('userType', 'member')
        localStorage.setItem('loginTime', payload.loginTime)
        localStorage.setItem('playlist', JSON.stringify(payload.playlist))
        // console.log(state.playlist)
        state.uid = payload.uid
        state.name = payload.name
        state.picUrl = payload.picUrl
        state.playlist = payload.playlist
        state.type = 'member'
      }
    }
  },
  logout(state) {
    localStorage.removeItem('uid')
    localStorage.removeItem('userName')
    localStorage.removeItem('userType')
    localStorage.removeItem('userPicUrl')
    localStorage.removeItem('loginTime')
    localStorage.removeItem('playlist')
    state.uid = ''
    state.name = ''
    state.picUrl = ''
    state.playlist = []
    state.type = 'visitor'
  },
  addSong(state,payload){
    localStorage.setItem('playlist', JSON.stringify(payload.playlist))
    state.playlist = payload.playlist
  }
}
const actions = {
  login({
    commit
  }, payload) {
    return api.login(payload).then((data) => {
      commit('login', data)
    })
  },
  addSong({
    commit
  }, payload){
    return api.addSong(payload).then((data) => {
      commit('addSong', data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
