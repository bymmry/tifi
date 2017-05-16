const state = {
  typeVal:['单曲','歌手','歌单','专辑'],
  type: 0,
  key:''
}
const mutations = {
  search(state,payload) {
    state.type = payload.type
    state.key = payload.key
  },
  deleteKey(state){
    state.key = ''
  }
}

export default {
  state,
  mutations
}
