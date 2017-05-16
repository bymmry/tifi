import api from '../../axios'
const state = {
  show: false,
  el: '',
  musicData: '',
  onPlay: false,
  currTime: 0,
  totalTime: 0,
  playProgress: 0,
  autoPlay: true,
  playlist: false
}
const mutations = {
  deletePlaylist(state, payload) {
    if (payload != undefined) {
      if (state.playlist.length == 1) {
        state.playlist = false
        localStorage.removeItem('playlist')
      } else {
        state.playlist.splice(payload, 1)
        localStorage.setItem('playlist', JSON.stringify(state.playlist))
      }
    } else {
      state.playlist = false
      localStorage.removeItem('playlist')
    }
  },
  loadPlaylist(state, payload) {
    state.playlist = payload
  },
  addPlaylist(state,payload) {
    if (state.playlist) {
      let addFlag = true
      state.playlist.forEach((item) => {
        if (item.music.wyID == payload.music.wyID) {
          addFlag = false
        }
      })
      if (addFlag) {
        state.playlist.push(payload)
      }
    } else {
      state.playlist = []
      state.playlist.push(payload)
    }
  },
  playMusic(state, payload) {
    state.musicData = payload
    state.onPlay = false
    state.currTime = 0
    state.totalTime = 0
    state.playProgress = 0
    if (payload.hasOwnProperty('local')) {
      state.autoPlay = false
    } else {
      state.autoPlay = true
      if (state.playlist) {
        let addFlag = true
        state.playlist.forEach((item) => {
          if (item.music.wyID == payload.music.wyID) {
            addFlag = false
          }
        })
        if (addFlag) {
          state.playlist.push(payload)
        }
      } else {
        state.playlist = []
        state.playlist.push(payload)
      }
    }
    localStorage.setItem('playlist', JSON.stringify(state.playlist))
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
  hideMusicBox(state) {
    state.show = false
  }
}

export default {
  state,
  mutations
}
