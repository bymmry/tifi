const state = {
  percent: 0,
}
const mutations = {
  setProgress(state, val) {
    state.percent = val
  }
}

export default {
  state,
  mutations
}
