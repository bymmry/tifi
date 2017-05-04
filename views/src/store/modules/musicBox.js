import api from '../../axios'
const state = {
  musicData:'',
  onPlay:false,
  currTime:0,
  totalTime:0,
  playProgress:0
}
const mutations = {
  playMuisc(state,payload) {
    state.musicData = payload
  },
  setCurrTime(state,payload){
    state.currTime = payload
  },
  setTotalTime(state,payload){
    state.totalTime = payload
  },
  setPlayProgress(state,payload){
    state.playProgress = payload
  },
  setOnPlay(state,payload){
    state.onPlay = payload
  }
}

export default {
  state,
  mutations
}
