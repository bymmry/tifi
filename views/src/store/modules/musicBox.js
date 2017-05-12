import api from '../../axios'
const state = {
  show:false,
  el: '',
  musicData: '',
  onPlay: false,
  currTime: 0,
  totalTime: 0,
  playProgress: 0,
  autoPlay:true
}
const mutations = {
  playMuisc(state, payload) {
    state.musicData = payload
    state.onPlay = false
    state.currTime = 0
    state.totalTime = 0
    state.playProgress = 0
    if(payload.hasOwnProperty('local')){
      state.autoPlay = false
    }else{
      state.autoPlay = true
    }
    localStorage.setItem('musicData', JSON.stringify(payload))
    state.show = true
  },
  setEl(state, payload) {
    state.el = payload
  },
  setCurrTime(state, payload) {
    state.currTime = payload
  },
  setTotalTime(state, payload) {
    state.totalTime = payload
  },
  setPlayProgress(state, payload) {
    state.playProgress = payload
  },
  setOnPlay(state, payload) {
    state.onPlay = payload
  },
  hideMusicBox(state){
    state.show = false
  }
}

export default {
  state,
  mutations
}
