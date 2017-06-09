<style scoped>
  .activeLrc {
    color: #f45754;
    transition: all 418ms;
  }

  .rotateImg {
    width: 200px;
    height: 200px;
    margin-left: 10px;
    border-radius: 50%;
    transition: all 1s;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-animation: change 50s linear infinite
  }

  @-webkit-keyframes change {
    0% {
      -webkit-transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

</style>
<template>
  <div>
    <i-row>
      <div style="position:fixed;z-index:-1;opacity:0">{{wyID}}{{musicEl.paused}}</div>
      <i-col span="7" class="text-left">
        <affix @on-change="fixedPlayLeft">
          <div style="width:220px">
            <i-circle :percent="playProgress" stroke-color="#41464b" :size="220" :stroke-width="1" :trail-width="0.5">
              <div :style="onPlay?imgPlay:imgPause" :class="{rotateImg:true}">
              </div>
            </i-circle>
            <br/><br/>
            <div class="text-center" v-if="playLeft">
              <h3>{{musicData.music.name}}</h3>
              <small>{{musicData.artist.name}}</small>
              <br/><br/>
            </div>
            <div class="text-center">
              {{formatTime(currTime)}} / {{formatTime(totalTime)}}
            </div>
            <br/>
            <div style="padding:0 70px">
              <div class="dir"></div>
              <div class="text-left" style="font-size:10px">
                播放
              </div>
              <div class="text-right" style="font-size:25px">
                {{commentData.total*2}}
              </div>
              <div class="dir"></div>
              <div class="text-left" style="font-size:10px">
                收藏
              </div>
              <div class="text-right" style="font-size:25px">
                {{(commentData.total/2).toFixed()}}
              </div>
              <div class="dir"></div>
              <div class="text-left" style="font-size:10px">
                评论
              </div>
              <div class="text-right" style="font-size:25px">
                {{commentData.total}}
              </div>
              <div class="dir"></div>
            </div>
          </div>
        </affix>
      </i-col>
      <i-col span="17" :offset="playLeft?7:0">
        <i-row>
          <i-col span="18">
            <h2>
              {{musicData.music.name}} &nbsp;
              <i-icon v-if="likeFlag" style="color:red" type="android-favorite"></i-icon>
              <tooltip v-else trigger="hover" content="我喜欢">
                <i-icon type="android-favorite-outline" @click.native="likeSong(musicData)" class="cursor"></i-icon>
              </tooltip>
            </h2>
          </i-col>
          <i-col span="2" class="text-right">
            <h2 class="cursor">
              <tooltip v-if="onPlay" trigger="hover" content="点击暂停">
                <i-icon @click.native="musicEl.pause()" type="pause"></i-icon>
              </tooltip>
              <tooltip v-else trigger="hover" content="点击播放">
                <i-icon @click.native="musicEl.play()" type="play"></i-icon>
              </tooltip>
            </h2>
          </i-col>
          <i-col span="2" class="text-right">
            <h2 class="cursor">
              <tooltip trigger="hover" content="重新播放">
                <i-icon @click.native="replay" type="refresh"></i-icon>
              </tooltip>
            </h2>
          </i-col>
          <i-col span="2" class="text-right">
            <h2 class="cursor">
              <tooltip trigger="hover" content="下载该曲">
                <i-icon @click.native="download" type="arrow-down-c"></i-icon>
              </tooltip>
            </h2>
          </i-col>
        </i-row>
        <div class="dir"></div>
        <i-row>
          <i-col span="24" class="text-center">
            <div style="position:absolute;top:0;left:0">
              <i-row>
                <i-col span="2">
                  <div class="dir"></div>
                  来源<br/><br/>
                  <div class="text-link">
                    我喜欢的音乐
                  </div>
                  <div class="dir"></div>
                </i-col>
                <i-col span="2" offset="2">
                  <div class="dir"></div>
                  专辑<br/><br/>
                  <div class="text-link">
                    {{musicData.album.name}}
                  </div>
                  <div class="dir"></div>
                </i-col>
                <i-col span="2" offset="2">
                  <div class="dir"></div>
                  歌手<br/><br/>
                  <div class="text-link">
                    {{musicData.artist.name}}
                  </div>
                  <div class="dir"></div>
                </i-col>
              </i-row>
            </div>
            <div style="height:400px;overflow:auto" v-lyricScroll>
              <div v-getActiveLyricTop="index===activeLrcIndex" :class="{activeLrc:index===activeLrcIndex}" v-for="(item,index) in lyricText"
                style="line-height:30px">
                {{item}}
              </div>
            </div>
          </i-col>
        </i-row>
        <br/><br/>
        <comment v-if="commentShow" @pageChange="pageChange" :data="commentData" :hot="hotComment"></comment>
      </i-col>
    </i-row>
  </div>
</template>
<script>
  import api from '../axios.js'
  import wyApi from '../wyApi.js'
  import {
  	Message
  } from 'iview'
  import comment from './comment.vue'
  export default {
    components: {
      comment
    },
    data() {
      return {
        currTime:0,
        onPlay:false,
        lyric: [],
        lyricText: ['暂无歌词'],
        lyricTime: [0],
        activeLrcIndex: 0,
        commentShow: false,
        commentData: {},
        hotComment: '',
        imgPause: {
          'background-image': '',
          'animation-play-state': 'paused',
          '-webkit-animation-play-state': 'paused'
        },
        imgPlay: {
          'background-image': '',
          'animation-play-state': 'running',
          '-webkit-animation-play-state': 'running'
        },
        activeLyricTop: 0,
        playLeft: false,
        totalTime:0
      }
    },
    computed: {
      likeFlag() {
        let result = false
        if (this.$store.state.user.type == 'member') {
          let song = this.$store.state.user.likelist
          if (song.length > 0) {
            song.forEach((item) => {
              if (item.url == this.$store.state.musicBox.musicData.url) {
                result = true
              }
            })
          }
        }
        return result
      },
      musicData() {
        this.imgPause['background-image'] = 'URL(' + this.$store.state.musicBox.musicData.album.picUrl + ')'
        this.imgPlay['background-image'] = 'URL(' + this.$store.state.musicBox.musicData.album.picUrl + ')'
        return this.$store.state.musicBox.musicData
      },
      musicEl() {

        return this.$store.state.musicBox.el
      },
      // onPlay() {
      //   return this.$store.state.musicBox.onPlay
      // },
      // currTime() {
      //
      //   return this.$store.state.musicBox.el.currentTime
      // },
      // totalTime() {
      //   return this.$store.state.musicBox.totalTime
      // },
      playProgress() {
  			// console.log(this.currTime/this.totalTime)
  			return this.currTime / this.totalTime * 100
  		},
      wyID() {
        wyApi.getLyric(this.$store.state.musicBox.musicData.music.wyID).then((data) => {
          if (data.code === 200) {
            this.activeLrcIndex = 0
            this.lyric = data.lrc.lyric
            let left = [],
              right = []
            for (let index = 0; index < this.lyric.length; index++) {
              if (this.lyric.charAt(index) == "[") {
                left.push(index)
              }
              if (this.lyric.charAt(index) == "]") {
                right.push(index)
              }
            }
            let base = [],
              text = [],
              time = []
            for (let index = 0; index < left.length; index++) {
              if (index !== left.length - 1) {
                base.push(this.lyric.substring(left[index], left[index + 1]))
                text.push(this.lyric.substring(right[index] + 1, left[index + 1]))
              }
              time.push(this.lyric.substring(left[index] + 1, right[index]))
            }
            this.lyricText = text
            this.lyricTime = time
          }
        })
        this.getCommont(0)
        return this.$store.state.musicBox.musicData.music.wyID
      }
    },
    methods: {
      likeSong(item) {
        if (this.$store.state.user.type == 'member') {
          this.$store.dispatch('likeSong', {
            pid: this.$store.state.user.likelistID,
            song: item
          })
        } else {
          Message.info('您还没有登录')
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
      fixedPlayLeft(val) {
        this.playLeft = val
      },
      replay() {
        this.musicEl.currentTime = 0;
        this.activeLrcIndex = 0
        this.musicEl.play()
      },
      download() {
        window.location.href = 'http://localhost:5000/download' + this.musicData.music.url
        // api.download(this.musicData.music.url)
      },
      getCommont(page) {
        wyApi.getComment(this.musicData.music.wyID, page * 10).then((data) => {
          this.commentData = data
          if (page == 0) {
            this.hotComment = data.hotComments
          }
          this.commentShow = true
        })
      },
      pageChange(page) {
        this.getCommont(page)
      }
    },
    directives: {
      getActiveLyricTop(el, binding, vnode) {
        if (binding.value) {
          vnode.context.activeLyricTop = el.offsetTop
        }
      },
      lyricScroll(el, binding, vnode) {
        el.scrollTop = vnode.context.activeLyricTop - 200
      }
    },
    mounted() {
      console.log(this.wyID)
      let el = this.musicEl
      this.totalTime = el.duration
      let _this = this
      el.addEventListener('timeupdate',() => {
        _this.currTime = el.currentTime
        _this.onPlay = true
        for (let index = 0; index < _this.lyricTime.length; index++) {
          if (index !== _this.lyricTime.length - 1) {
            let leftTimeTemp = _this.lyricTime[index].split(':')
            let rightTimeTemp = _this.lyricTime[index + 1].split(':')
            let leftTime = Number(leftTimeTemp[0]) * 60 + Number(leftTimeTemp[1])
            let rightTime = Number(rightTimeTemp[0]) * 60 + Number(rightTimeTemp[1])
            if (_this.currTime > leftTime && _this.currTime < rightTime) {
              _this.activeLrcIndex = index
            }
          }
        }
      })
      el.addEventListener('pause',() => {
        _this.onPlay = false
      })
    }
  }

</script>
