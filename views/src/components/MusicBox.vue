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

</style>

<template>
  <div class="music-player card" v-if="show">
    <div style="width:1000px;margin:0 auto">
      <i-row :gutter="16">
        <i-col span="4" style="font-size:20px;">
          <i-icon type="ios-skipbackward"></i-icon>
          <i-icon class="cursor" style="margin:0 1rem;" @click.native="playToggle" :type="onPlay?'pause':'play'"></i-icon>
          <i-icon type="ios-skipforward"></i-icon>
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
          <i-icon v-else type="android-favorite-outline" @click.native="addSong" class="cursor"></i-icon>
          <i-icon style="margin:0 1rem" type="ios-list-outline"></i-icon>
          <i-icon @click.native="volumeToggle" :type="volume>0?'android-volume-up':'android-volume-off'"></i-icon>
        </i-col>
        <i-col span="2" style="padding-top:10px">
          <mu-slider style="margin:0" v-model="volume" @change="changeVolume"></mu-slider>
        </i-col>
      </i-row>
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
        hideBox: false
      }
    },
    computed: {
      likeFlag() {
        let result = false
        if (this.$store.state.user.type == 'member') {
          let song = this.$store.state.user.playlist.song
          if (song.length > 0) {
            song.forEach((item) => {
              if (item == this.$store.state.musicBox.musicData.music.id) {
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
      addSong() {
        if (this.$store.state.user.type == 'member') {
          this.$store.dispatch('addSong', {
            id: this.$store.state.user.playlist._id.$oid,
            songID: this.musicID
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
