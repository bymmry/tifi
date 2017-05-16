const state = {
  type: 0,
  infoVisible: false,
  baseInfo: ''
}
const mutations = {
  showInfo(state, payload) {
    state.infoVisible = true
    state.type = payload.type
    state.baseInfo = payload.info
  },
  hideInfo(state) {
    state.infoVisible = false
  }
}

export default {
  state,
  mutations
}
