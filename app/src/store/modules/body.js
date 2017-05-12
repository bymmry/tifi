const state = {
  sm: false,
  userBox: {
    show: false,
    type: ''
  }
}
const mutations = {
  setSm(state, val) {
    state.sm = val
  },
  showUserBox(state, val) {
    state.userBox = {
      show: true,
      type: val
    }
  },
  hideUserBox(state) {
    state.userBox = {
      show: false,
      type: ''
    }
  }
}

export default {
  state,
  mutations
}
