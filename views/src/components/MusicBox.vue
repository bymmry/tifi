<style scoped>
  .music-player {
    background: #fff;
    position: fixed;
    padding: 0 2rem;
    bottom: 0%;
    right: 0%;
    width: 100%;
    z-index: 99;
    line-height: 50px;
    min-width: 1200px
  }

  .play-main {
    position: fixed;
    top: 9rem;
    bottom: 0%;
    right: 0%;
    width: 100%;
    z-index: 99;
    background: #fff;
  }

  .cover {
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40px;
    width: 40px;
    float: right;
    margin-top: 5px;
    /*border: 1px solid #ccc*/
  }

  .playlist {
    position: absolute;
    height: 300px;
    width: 400px;
    bottom: 60px;
    z-index: -1;
    background: #fff;
    right: 0;
    padding: .8rem 1rem;
    line-height: 30px;
  }

  .playlist-content {
    padding: 5px 5px;
    border-bottom: 1px solid #f0f0f0
  }

  .playlist-content:hover {
    background: #f0f0f0;
    cursor: pointer
  }
  .playlist-content.active {
    background: #ccc
  }
  .playlist-close{
    position: absolute;
    top:0;
    left:102%;
    font-size: 18px;
    cursor: pointer
  }

</style>

<template>
  <div class="music-player card" v-if="show">
    <div style="width:1000px;margin:0 auto;position:relative;z-index: 1;">
      <i-row :gutter="16">
        <i-col span="4" style="font-size:20px;">
          <i-icon @click.native="lastSong" class="cursor" type="ios-skipbackward"></i-icon>
          <i-icon class="cursor" style="margin:0 1rem;" @click.native="playToggle" :type="onPlay?'pause':'play'"></i-icon>
          <i-icon @click.native="nextSong" class="cursor" type="ios-skipforward"></i-icon>
          <div @click="$store.commit('router', '/play')" class="cover" :style="{'background-image':'URL('+musicData.album.picUrl+')'}">
          </div>
        </i-col>
        <i-col span="15">
          <i-row style="line-height:25px">
            <i-col span="20">
              <div class="text-left">
                {{musicData.artist.name}} - {{musicData.music.name}}
              </div>
            </i-col>
            <i-col span="4" class="text-right">
              {{formatTime(currTime)}} / {{formatTime(totalTime)}}
            </i-col>
          </i-row>
          <div style="line-height:25px">
            <mu-slider style="margin:0" v-model="playProgress" @change="fastSeek"></mu-slider>
          </div>
        </i-col>
        <i-col span="3" style="font-size:20px;text-align:right">
          <i-icon v-if="likeFlag" style="color:red" type="android-favorite"></i-icon>
          <i-icon v-else type="android-favorite-outline" @click.native="likeSong(musicData)" class="cursor"></i-icon>
          <i-icon @click.native="playlistVisible = !playlistVisible" class="cursor" style="margin:0 1rem" type="ios-list-outline"></i-icon>
          <i-icon @click.native="volumeToggle" :type="volume>0?'android-volume-up':'android-volume-off'"></i-icon>
        </i-col>
        <i-col span="2" style="padding-top:10px">
          <mu-slider style="margin:0" v-model="volume" @change="changeVolume"></mu-slider>
        </i-col>
      </i-row>
      <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div v-if="playlistVisible" class="playlist card">
          <div class="playlist-close">
            <i-icon type="android-close" @click.native="playlistVisible=false"></i-icon>
          </div>
          <i-row>
            <i-col span="1">
              <h2>播放列表</h2>
            </i-col>
            <i-col span="22" offset="1">
              <div style="height:25px" class="cursor">
                <div style="float:left" @click.stop="playlist?$store.commit('playMusic',playlist[0]):''">
                  <i-icon type="play"></i-icon> 从头播放
                </div>
                <div style="float:right" >
                  <i-icon type="android-favorite-outline"></i-icon> 收藏全部&nbsp;&nbsp;|&nbsp;&nbsp;
                  <span @click.stop="playlist?$store.commit('deletePlaylist'):''"><i-icon type="ios-trash-outline" style="font-size:14px"></i-icon> 清空</span>
                </div>
              </div>
              <div class="dir"></div>
              <div v-if="playlist" style="max-height:calc(300px - 25px - 2.6rem);overflow-y:auto">
                <div @click="$store.commit('playMusic', item)" class="playlist-content" :class="{'active':index==playlistActiveIndex}" v-for="item,index in playlist">
                  <i-row>
                    <i-col span="2">
                      {{index+1}}
                      <!--<i-icon type="android-favorite-outline" class="cursor" style="margin-right:1rem"></i-icon>-->
                    </i-col>
                    <i-col span="20">
                      {{item.music.name}} - {{item.artist.name}}
                    </i-col>
                    <i-col span="2" class="text-right">
                      <i-icon @click.native.stop="$store.commit('deletePlaylist', index)" type="ios-trash-outline" style="font-size:14px"></i-icon>
                    </i-col>
                  </i-row>
                </div>
              </div>
              <div v-else>
                  可惜!还没有歌曲在列表中
                </div>
            </i-col>
          </i-row>
        </div>
      </transition>
    </div>
    <div class="cursor" style="position:absolute;right:10px;top:-10px;">
      <i-icon @click.native="$store.commit('hideMusicBox')" type="arrow-shrink"></i-icon>
    </div>
    <audio v-audio v-if="musicData.url" :src="musicData.url"></audio>

  </div>
</template>

<script>
  import api from '../axios'
  import {
    Message
  } from 'iview'
  export default {
    data() {
      return {
        music: '',
        volume: 100,
        hideBox: false,
        playlistVisible: false
      }
    },
    computed: {
      playlistActiveIndex(){
        let active = -1
        if(this.playlist){
          this.playlist.forEach((item,index) =>{
            if(item.music.wyID==this.musicData.music.wyID){
              active = index
            }
          })
        }
        return active
      },
      playlist() {
        return this.$store.state.musicBox.playlist
      },
      likeFlag() {
        let result = false
        if (this.$store.state.user.type == 'member') {
          let song = this.$store.state.user.likelist
          if (song.length > 0) {
            song.forEach((item) => {
              if (item.music.wyID == this.$store.state.musicBox.musicData.music.wyID) {
                result = true
              }
            })
          }
        }
        return result
      },
      musicID() {
        return this.$store.state.musicBox.musicData.music.id
      },
      musicData() {
        return this.$store.state.musicBox.musicData
      },
      currTime() {
        return this.$store.state.musicBox.currTime
      },
      totalTime() {
        return this.$store.state.musicBox.totalTime
      },
      playProgress() {
        return this.$store.state.musicBox.playProgress
      },
      onPlay() {
        return this.$store.state.musicBox.onPlay
      },
      autoPlay() {
        return this.$store.state.musicBox.autoPlay
      },
      show() {
        return this.$store.state.musicBox.show
      }
    },
    methods: {
      lastSong(){
        if(this.playlistActiveIndex>0){
          let lastSongIndex = this.playlistActiveIndex -1
          this.$store.commit('playMusic',this.playlist[lastSongIndex])
        }
      },
      nextSong(){
        if(this.playlistActiveIndex<this.playlist.length-1){
          let nextSongIndex = this.playlistActiveIndex + 1
          this.$store.commit('playMusic',this.playlist[nextSongIndex])
        }
      },
      formatTime(time) {
        let minute = parseInt(time / 60)
        if (minute < 10) {
          minute = '0' + minute
        }
        let second = (time - minute * 60).toFixed(0)
        if (second < 10) {
          second = '0' + second
        }
        return minute + ':' + second
      },
      closeMusicBox() {
        this.$emit('closeMusicBox')
      },
      fastSeek(time) {
        this.music.currentTime = time / 100 * this.music.duration
      },
      changeVolume(volume) {
        this.music.volume = volume / 100
      },
      volumeToggle() {
        if (this.music.volume > 0) {
          this.oldVolume = this.music.volume
          this.volume = 0
          this.music.volume = 0
        } else {
          this.music.volume = this.oldVolume
          this.volume = Number((this.oldVolume * 100).toFixed(0))
        }
      },
      playToggle() {
        if (this.music.paused) {
          this.music.play()
        } else {
          this.music.pause()
        }
      },
      likeSong(item) {
        if (this.$store.state.user.type == 'member') {
          this.$store.dispatch('likeSong', {
            pid: this.$store.state.user.likelistID,
            song: item
          })
        } else {
          Message.info('您还没有登录')
        }
      }
    },
    directives: {
      audio: {
        inserted(el, binding, vnode) {
          el.oncanplaythrough = function () {
            vnode.context.music = el
            vnode.context.$store.commit('setEl', el)
            vnode.context.$store.commit('setTotalTime', el.duration)
            if (vnode.context.autoPlay) {
              vnode.context.playToggle()
            } else {
              vnode.context.$store.commit('setOnPlay', false)
            }
            el.ontimeupdate = function () {
              vnode.context.$store.commit('setOnPlay', true)
              if (el.currentTime <= 0) {
                vnode.context.$store.commit('setOnPlay', false)
              }
              vnode.context.$store.commit('setCurrTime', el.currentTime)
              vnode.context.$store.commit('setPlayProgress', el.currentTime / el.duration * 100)
            }
            el.onpause = function () {
              vnode.context.$store.commit('setOnPlay', false)
            }
            el.onseeked = function () {
              vnode.context.playToggle()
            }
          }
        }
      }
    }
  }

</script>
