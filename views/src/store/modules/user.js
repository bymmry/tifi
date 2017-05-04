import api from '../../axios'
const state = {
  name: '',
  type: 'visitor'
}
const mutations = {
  login(state, payload) {
    if (localStorage.getItem('token')) {
      state.name = localStorage.getItem('userName')
      state.type = localStorage.getItem('userType')
    } else {
      let userName = payload.data.name ? payload.data.name : payload.data.phone
      localStorage.setItem('token', payload.data.token)
      localStorage.setItem('userName', userName)
      localStorage.setItem('userType', 'member')
      state.name = userName
      state.type = 'member'
    }
  },
  logout(state) {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userType')
    state.name = ''
    state.type = 'visitor'
  }
}
const actions = {
  login({
    commit
  }, payload) {
    api.userLogin(payload).then((data) => {
      commit('login', data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
