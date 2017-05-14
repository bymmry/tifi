<style lang="css" scoped>
  .br {
    margin: .5rem 0
  }

  .min-cover {
    width: 40px;
    height: 40px
  }

  .min-cover-none {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #41464b;
    float: left
  }

  .my-playlist {
    height: 50px;
    font-size: 13px;
    padding: 5px 5px;
    cursor: pointer;
    border-top: 1px solid #fff;
  }

  .my-playlist img {
    float: left;
    margin-right: 5px
  }

  .my-playlist p {
    height: 20px;
    line-height: 20px
  }

  .my-playlist p:last-child {
    font-size: 12px;
    color: #bbb
  }

  .my-playlist.active {
    background: #f0f0f0
  }

  .my-playlist:hover {
    background: #f0f0f0
  }

</style>
<template lang="">
  <div>
    <div v-if="user.type=='member'">
      朋友和自己的动态
    </div>
    <visitor v-else></visitor>
  </div>
</template>
<script lang="">
  import moment from 'moment'
  moment.locale('zh-cn')
  import api from '../axios.js'
  import {
    Message
  } from 'iview'
  import comment from './comment.vue'
  import visitor from './Visitor.vue'
  import playlistInfo from './PlaylistInfo.vue'
  export default {
    components: {
      comment,
      visitor,
      playlistInfo
    },
    data() {
      return {
        myPlaylist: [{
          id: "59117c64495a9ce3842683dd",
          name: "我喜欢的音乐",
          picUrl: '',
          song: ['59100e5b495a9c1629f02b91'],
          user: {
            id: "59117c64495a9ce3842683de",
            name: "寻声1537"
          }
        }],
        activePlaylist: 0,
        playlist: {
          comment: [],
          createTime: 1494317310000,
          id: "59117c64495a9ce3842683dd",
          introduction: null,
          like: [],
          name: "我喜欢的音乐",
          play: [],
          song: [{
            album: {
              name: 'test'
            },
            artist: {
              name: 'test'
            },
            music: {
              name: 'test'
            }
          }],
          tag: [],
          user: {
            id: "59117c64495a9ce3842683de",
            name: "寻声1537"
          },
        },
        collection: false,
        fixedList: false,
        fixedTalk: false,
        newPlaylistShow: false,
        newPlaylist: '',
        playlistID: ''
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      uid(){
        return localStorage.getItem('uid')
      }
    },
    methods: {
      getUser(data) {
        api.retrieveUser(data).then((result) => {
          if (result.code === 200) {
            this.myPlaylist = result.result
            this.getPlaylist({
              id: this.myPlaylist[this.activePlaylist].id
            })
          }
        })
      },
      async getPlaylist(data) {
        let result = await api.retrievePlaylist(data)
        if (result.code === 200) {
          console.log(result)
          this.playlist = result.result
        }
      },
      fixedListChange(val) {
        this.fixedList = val
      },
      fixedTalkChange(val) {
        this.fixedTalk = val
      },
      newPlaylistBtn() {
        this.newPlaylistShow = true
      },
      async createPlaylist() {
        if (this.newPlaylist) {
          let data = await api.createPlaylist({
            uid: this.user.uid,
            playlistName: this.newPlaylist
          })
          console.log(data)
        } else {
          Message.info('请输入有效的歌单名')
        }
      },
      formatTime(val) {
        return moment(val).format('YYYY MMMDo hh:mm a 创建')
      },
      formatTimeForYear(val) {
        return moment(val).format('YYYY年')
      },
      playMusic(item) {
        this.$store.commit('playMuisc', {
          url: 'http://localhost:5000' + item.music.url,
          artist: item.artist,
          album: item.album,
          music: item.music
        })
      }
    },
    mounted() {
      if (localStorage.getItem('uid')) {
        this.getUser({
          id: localStorage.getItem('uid')
        })
      } else {
        // Message.error('获取用户id失败')
      }
    }
  }

</script>
