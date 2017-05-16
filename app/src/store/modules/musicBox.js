import api from '../../axios'
const state = {
  el:'',
  hideMain:false,
  miniBox: false,
  playBox: false,
  onPlay: false,
  currTime: 0,
  totalTime: 0,
  playProgress: 0,
  songlist:[],
  musicData: {
    wyID: 347230,
    url: 'http://m10.music.126.net/20170511162618/d475b2d1c07ef78ff44466d62dc7348f/ymusic/f1ae/0bd1/31a9/5d64960d0cbebc0d089bc85a6ef54680.mp3',
    name: '海阔天空',
    artist: 'beyond',
    cover: 'http://p1.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg'
  },


}
const mutations = {
  loadSonglist(state){
    if (localStorage.getItem('songlist')) {
      state.songlist = JSON.parse(localStorage.getItem('songlist'))
    }
  },
  deleteSonglist(state, payload) {
    if (payload != undefined) {
      if (state.songlist.length == 1) {
        state.songlist = []
        localStorage.removeItem('songlist')
      } else {
        state.songlist.splice(payload, 1)
        localStorage.setItem('songlist', JSON.stringify(state.songlist))
      }
    } else {
      state.songlist = []
      localStorage.removeItem('songlist')
    }
  },
  setMusicEl(state, payload){
    state.el = payload
  },
  playBox(state, payload) {
    if(payload){
      // setTimeout(()=>{
        state.playBox = payload
      // },300)
    }else{
      state.playBox = payload
    }
  },
  miniBox(state, payload) {
    state.miniBox = true
  },
  hideMusicBox(state) {
    state.show = false
  },
  playMusic(state,data){
    state.miniBox = true
    state.musicData = data
    if (state.songlist.length==0) {
      state.songlist.push(data)
    } else {
      let addFlag = true
      state.songlist.forEach((item)=>{
        if(item.wyID == data.wyID){
          addFlag = false
        }
      })
      if(addFlag){
        state.songlist.push(data)
      }
    }
    localStorage.setItem('songlist', JSON.stringify(state.songlist))
  },
  setCurrTime(state, payload) {
    state.currTime = payload
  },
  setPlayProgress(state, payload) {
    state.playProgress = payload
  },
  setOnPlay(state, payload) {
    state.onPlay = payload
  }
}

export default {
  state,
  mutations
}
