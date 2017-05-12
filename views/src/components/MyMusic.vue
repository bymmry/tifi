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

  .cover {
    width: 200px;
    height: 200px
  }

  .cover-none {
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 50px
  }

  .user-cover {
    width: 50px;
    height: 50px;
    border-radius: 50%
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

  .username {
    color: #3399ff
  }

  .playlist-detail {
    line-height: 35px
  }

  .playlist-detail.active {
    background: #f7f7f7
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100px
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
        <i-row>
          <i-col span="8" style="padding-top:.5rem">
            <img v-if="playlist.picUrl" src="../assets/img/mulai.jpg" class="cover card" />
            <div v-else class="cover-none card">
              {{playlist.name[0]}}
            </div>
          </i-col>
          <i-col span="16" class="text-left">
            <i-row style="line-height:42px">
              <i-col span="18" style="font-size:1.5rem">
                {{playlist.name}}
                <!--<tooltip v-if="playlist.user.id!==uid" trigger="hover" content="收藏该歌单">
                  <i-icon class="cursor" @click.native="collection=!collection" type="android-favorite-outline"></i-icon>
                </tooltip>-->
                <i-icon style="color:red" type="android-favorite"></i-icon>
              </i-col>
              <i-col span="2" style="font-size:1.2rem" class="cursor">
                <tooltip trigger="hover" content="播放该歌单">
                  <i-icon type="play"></i-icon>
                </tooltip>
              </i-col>
              <i-col span="2" class="text-center cursor" style="font-size:1.2rem">
                <tooltip trigger="hover" content="添加到播放列表">
                  <i-icon type="plus-round"></i-icon>
                </tooltip>
              </i-col>
              <i-col span="2" class="text-right cursor" style="font-size:1.2rem">
                <tooltip trigger="hover" content="下载该歌单">
                  <i-icon type="arrow-down-c"></i-icon>
                </tooltip>
              </i-col>
            </i-row>
            <div class="dir"></div>
            <br/>
            <span class="text-link">{{playlist.user.name}}</span> {{formatTime(playlist.createTime)}}
            <br/><br/> 标签：
            <tag v-if="playlist.tag.length==0" type="dot">无</tag>
            <tag v-else :key="index" v-for="(tag,index) in playlist.tag" type="dot" color="blue">{{tag}}</tag>
            <br/><br/>
            <div v-if="playlist.introduction">
              介绍：{{playlist.introduction}}
            </div>
            <div v-else>
              介绍：没有相关描述,但是从歌曲中明白了 - '用心去感受'
            </div>
          </i-col>
        </i-row>
        <br /><br />
        <i-row>
          <i-col span="1">
            <h1>歌单详情</h1>
          </i-col>
          <i-col span="2" offset="1">
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:10px">
                曲目
              </div>
              <div class="text-right" style="font-size:30px">
                {{playlist.song.length}}
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:8px">
                播放
              </div>
              <div class="text-right" style="font-size:30px">
                {{playlist.play.length}}
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:8px">
                收藏
              </div>
              <div class="text-right" style="font-size:30px">
                {{playlist.like.length}}
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:8px">
                评论
              </div>
              <div class="text-right" style="font-size:30px">
                {{playlist.comment.length}}
              </div>
            </div>
            <div class="dir"></div>
          </i-col>
          <i-col span="18" offset="2">
            <div class="dir"></div>
            <i-row>
              <i-col span="9" offset="4">
                歌名
              </i-col>
              <i-col span="4">
                歌手
              </i-col>
              <i-col span="5">
                专辑
              </i-col>
              <i-col span="2">
                年份
              </i-col>
            </i-row>
            <div class="dir" style="margin-bottom:0"></div>
            <div style="min-height:350px">
              <div class="playlist-detail text-center" v-if="playlist.song.length==0">
                可惜!还没有歌曲
              </div>
              <i-row v-else class="playlist-detail" :class="{active:(index+1)%2!==0}" :key="index" v-for="(song,index) in playlist.song">
                <i-col span="2" class="text-center">
                  {{index+1}}
                </i-col>
                <i-col span="2" class="text-center">
                  <i-icon @click.native="playMusic(song)" class="cursor" type="play"></i-icon>
                </i-col>
                <i-col span="9">
                  {{song.music.name}}
                </i-col>
                <i-col span="4">
                  {{song.artist.name}}
                </i-col>
                <i-col span="5">
                  <div class="ellipsis">
                    {{song.album.name}}
                  </div>
                </i-col>
                <i-col span="2">
                  {{formatTimeForYear(song.album.publishTime)}}
                </i-col>
              </i-row>
            </div>
            <div class="dir"></div>
          </i-col>
        </i-row>
        <br /><br />
        <comment></comment>
      </i-col>
    </i-row>
    <visitor v-else></visitor>
    <div style="height:50px"></div>
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
  export default {
    components: {
      comment,
      visitor
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
        Message.error('获取用户id失败')
      }
    }
  }

</script>
