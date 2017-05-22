import api from '../../axios'
import wyApi from '../../wyApi'
const state = {
  el:'',
  hideMain:false,
  miniBox: false,
  playBox: false,
  onPlay: false,
  currTime: 0,
  totalTime: 0,
  playProgress: 0,
  likelist:[],
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
  nextSong(state){
    if (state.songlist.length>1) {
      let nextIndex = false
      state.songlist.forEach((item,index)=>{
        if(item.wyID == state.musicData.wyID && index<state.songlist.length-1){
          nextIndex=index+1
        }
      })
      if (nextIndex != false ) {
        state.miniBox = true
        state.musicData = state.songlist[nextIndex]
      }
    }
  },
  lastSong(state){
    if (state.songlist.length>1) {
      state.songlist.forEach((item,index)=>{
        if(item.wyID == state.musicData.wyID && index>0){
          state.miniBox = true
          state.musicData = state.songlist[index-1]
        }
      })
    }
  },
  loadSonglist(state){
    if (localStorage.getItem('songlist')) {
      state.songlist = JSON.parse(localStorage.getItem('songlist'))
    }
  },
  loadLikelist(state){
    if (localStorage.getItem('likelist')) {
      state.likelist = JSON.parse(localStorage.getItem('likelist'))
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
  deleteLikelist(state, payload){
    if (payload != undefined) {
      if (state.likelist.length == 1) {
        state.likelist = []
        localStorage.removeItem('likelist')
        state.songlist.forEach((item,index)=>{
          let notLike = item
          notLike.like = false
          state.songlist.splice(index, 1, notLike)
        })
        localStorage.removeItem('likelist')
      } else {
        let notlikeID = state.likelist[payload].wyID
        state.likelist.splice(payload, 1)
        state.songlist.forEach((item,index)=>{
            if(item.wyID == notlikeID){
              let notlikeItem = item
              notlikeItem.like = false
              state.songlist.splice(index, 1, notlikeItem)
            }
        })
        localStorage.setItem('likelist', JSON.stringify(state.likelist))
      }
    } else {
      state.likelist = []
      localStorage.removeItem('likelist')
    }
    localStorage.setItem('songlist', JSON.stringify(state.songlist))
  },
  addToSonglist(state, data) {
    if (state.songlist.length==0) {
      state.songlist.push(data)
    } else {
      let addFlag = true
      state.songlist.forEach((item,index)=>{
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
  addToLikelist(state, data) {
    if (state.likelist.length==0) {
      state.likelist.push(data)
      state.songlist.forEach((item,index)=>{
        state.likelist.forEach((like)=>{
          if(like.wyID == item.wyID){
            let likeItem = item
            likeItem.like = true
            state.songlist.splice(index,1,likeItem)
          }
        })
      })
    } else {
      let addFlag = true
      state.likelist.forEach((item,index)=>{
        if(item.wyID == data.wyID){
          addFlag = false
        }
      })
      if(addFlag){
        state.likelist.push(data)
        state.songlist.forEach((item,index)=>{
          state.likelist.forEach((like)=>{
            if(like.wyID == item.wyID){
              let likeItem = item
              likeItem.like = true
              state.songlist.splice(index,1,likeItem)
            }
          })
        })
      }
    }
    localStorage.setItem('likelist', JSON.stringify(state.likelist))
    localStorage.setItem('songlist', JSON.stringify(state.songlist))
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
const actions = {
  playMusic({
    commit
  }, payload) {
    if(payload.needPost){
      return wyApi.getMusicUrl(payload.wyID).then((result) => {
        if (result.code == 200) {
          payload.url = result.data[0].url
          commit('playMusic', payload)
        }
      })

    }else{
      commit('playMusic', payload)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
