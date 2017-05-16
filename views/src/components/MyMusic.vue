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
    <i-row v-if="user.type=='member'">
      <i-col span="6">
        <affix @on-change="fixedListChange">
          <i-row>
            <i-col span="1">
              <h1>
                我的歌单
              </h1>
            </i-col>
            <i-col span="20" offset="3">
              <div class="dir"></div>
              <div style="height:50vh">
                <div class="my-playlist" :class="{active:index==activePlaylist}" v-for="(item,index) in myPlaylist">
                  <img v-if="item.picUrl" :src="item.picUrl" class="min-cover" />
                  <div v-else class="min-cover-none">
                    {{item.name[0]}}
                  </div>
                  <div style="float:left;padding-left:5px">
                    <p>
                      {{item.name}}
                    </p>
                    <p>
                      {{item.song.length}}曲 by {{item.user.id==user.uid ? '原创':item.user.name}}
                    </p>
                  </div>
                </div>
              </div>
              <div class="dir"></div>
              <div class="text-center">
                <i-row v-if="newPlaylistShow" style="line-height:20px">
                  <i-col span="18">
                    <mu-text-field v-model="newPlaylist" hintText="输入歌单名" fullWidth/>
                  </i-col>
                  <i-col span="6">
                    <button class="c-btn card">添加</button>
                    <div class="cursor" style="position:absolute;top:7px;left:115%;font-size:20px">
                      <!--<tooltip trigger="hover" content="取消添加" placement="right">-->
                      <i-icon @click.native="newPlaylistShow=false" type="ios-close-empty"></i-icon>
                      <!--</tooltip>-->
                    </div>
                  </i-col>
                </i-row>
                <mu-float-button v-else class="card2" :mini="true" @click.native="newPlaylistBtn">
                  +
                </mu-float-button>
              </div>
            </i-col>
          </i-row>
        </affix>
      </i-col>
      <i-col v-if="playlist" span="17" :offset="fixedList?'7':'1'" style="z-index:11">
        <playlist-info :like="true" :playlist="playlist"></playlist-info>
      </i-col>
    </i-row>
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
            },
            url:''
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
        this.$store.commit('playMusic', {
          url: item.url,
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
