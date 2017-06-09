import api from '../../axios'
import wyApi from '../../wyApi'
const state = {
  show: false,
  el: '',
  url:'',
  musicData: '',
  autoPlay: true,
  playlist: false,
  songlist:[]
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
        localStorage.setItem('playlist', JSON.stringify(state.playlist))
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
  hideMusicBox(state) {
    state.show = false
  }
}

const actions = {
  playMusic({
    commit
  }, payload) {
    // if(payload.url){
    //   commit('playMusic', payload)
    // }else{
      return wyApi.getMusicUrl(payload.music.wyID).then((result) => {
        if (result.code == 200) {
          payload.url = result.data[0].url
          commit('playMusic', payload)
        }
      })
    // }
  }
}

export default {
  state,
  mutations,
  actions
}
