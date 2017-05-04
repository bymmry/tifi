<style scoped>
  .activeLrc {
    color: #f45754;
    transition: all 418ms;
  }

  .rotateImg {
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
      <i-col span="7" class="text-left">
        <affix @on-change="fixedPlayLeft">
          <div style="width:220px">
            <i-circle :percent="playProgress" stroke-color="#f45754" :size="220" :stroke-width="1" :trail-width="0.5">
              <img :style="onPlay?imgPlay:imgPause" :class="{rotateImg:true}" src="../assets/img/mulai.jpg" style="width:200px;height:200px;border-radius:50%;transition: all 1s;">
            </i-circle>
            <br/><br/>
            <div class="text-center" v-if="playLeft">
              <h3>霜雪千年</h3>
              <small>排骨教主</small>
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
                3062
              </div>
              <div class="dir"></div>
              <div class="text-left" style="font-size:10px">
                收藏
              </div>
              <div class="text-right" style="font-size:25px">
                4312
              </div>
              <div class="dir"></div>
              <div class="text-left" style="font-size:10px">
                评论
              </div>
              <div class="text-right" style="font-size:25px">
                5016
              </div>
              <div class="dir"></div>
            </div>
          </div>
        </affix>
      </i-col>
      <i-col span="17" :offset="playLeft?7:0">
        <i-row>
          <i-col span="12">
            <h2>霜雪千年</h2>
          </i-col>
          <i-col span="2" offset="4" class="text-right">
            <h2>
              <i-icon style="color:red" type="android-favorite"></i-icon>
            </h2>
          </i-col>
          <i-col span="2" class="text-right">
            <h2>
              <i-icon type="refresh"></i-icon>
            </h2>
          </i-col>
          <i-col span="2" class="text-right">
            <h2>
              <i-icon type="shuffle"></i-icon>
            </h2>
          </i-col>
          <i-col span="2" class="text-right">
            <h2>
              <i-icon type="arrow-down-c"></i-icon>
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
                    排骨翻唱的合集
                  </div>
                  <div class="dir"></div>
                </i-col>
                <i-col span="2" offset="2">
                  <div class="dir"></div>
                  歌手<br/><br/>
                  <div class="text-link">
                    排骨教主
                  </div>
                  <div class="dir"></div>
                </i-col>
              </i-row>
            </div>
            <div id="lyricScroll" style="height:400px;overflow:auto" v-lyricScroll>
              <div v-getActiveLyricTop="index===activeLrcIndex" :class="{activeLrc:index===activeLrcIndex}" v-for="(item,index) in lyricText"
                style="line-height:30px">
                {{item}}
              </div>
            </div>
          </i-col>
        </i-row>
        <br/><br/>
        <talk></talk>
      </i-col>
    </i-row>
    <div style="height:50px"></div>
  </div>
</template>
<script>
  import talk from './Talk.vue'
  export default {
    components: {
      talk
    },
    data() {
      return {
        lyric: "[00:00.00] 作曲 : COP [00:01.00] 作词 : COP [00:14.01]梨花香缠着衣角掠过熙攘 [00:19.69]复悄入红帘深帐 [00:22.98]听枝头黄鹂斗渠儿细风绕指淌 [00:27.80]坐船舫兰桨拨开雾霭迷茫 [00:33.27]不觉已一日过半 [00:36.53]过眼的葱郁风光悉数泛了黄 [00:41.74]褪尽温度的风无言牵引中 [00:45.29]便清晰了在此的眉目 [00:48.98]暮色的消融隐约了晦朔葱茏 [00:54.36]在这老街回眸烟云中追溯我是谁 [00:58.90]只消暮雨点滴便足以粉饰这是非 [01:02.43]待这月色涌起谁人轻叩这门扉 [01:09.03]苔绿青石板街 [01:11.40]斑驳了流水般岁月 [01:12.81]小酌三盏两杯理不清缠绕的情结 [01:16.13]在你那淡漠眉间 [01:19.35]瞥见离人的喜悲霜雪 [01:36.22]楼阁现尘飞雾散荧光蹁跹 [01:41.73]显露出斑驳石阶 [01:45.24]入眼是落英纷然芳草入深院 [01:49.80]凭栏杆小桌上置琼觞两盏 [01:55.54]阖眼听清风疏叶 [01:58.92]似曾有欢声笑言萦绕这高轩 [02:04.07]云动寂静鸣蝉雨坠激漪涟 [02:07.59]皴擦点染勾勒这世间 [02:11.36]缘起的一眼定格了三生千年 [02:16.48]在这老街回眸烟云中追溯我是谁 [02:21.26]只消暮雨点滴便足以粉饰这是非 [02:24.68]待这月色涌起谁人轻叩这门扉 [02:31.27]苔绿青石板街 [02:33.49]斑驳了流水般岁月 [02:34.84]小酌三盏两杯理不清缠绕的情结 [02:38.40]在你那淡漠眉间 [02:41.64]瞥见离人的喜悲霜雪 [02:58.96]三月梨花雪几载开了又败 [03:02.25]笔锋走黑白丹青中穿插无奈 [03:05.88]彼时那弯月何时初现于江畔 [03:09.32]而我又在待何人 [03:12.00]在这亭台回眸千年后 [03:14.72]忆起你是谁 [03:16.30]只消月色隐约便足以勾勒这是非 [03:19.49]待这回忆涌起恍惚之间已下泪 [03:25.94]枫红十里长街 [03:27.92]红帘后谁人蹙着眉 [03:29.81]遥梦桑竹桃源 [03:31.37]轮回中曾道别的地点 [03:34.08]再相见 [03:35.10]消融你眉间 [03:38.98]悲戚霜雪 [03:53.13] ",
        lyricText: [],
        lyricTime: [],
        activeLrcIndex: 0,
        imgPause: {
          'animation-play-state': 'paused',
          '-webkit-animation-play-state': 'paused'
        },
        imgPlay: {
          'animation-play-state': 'running',
          '-webkit-animation-play-state': 'running'
        },
        activeLyricTop: 0,
        playLeft:false
      }
    },
    computed: {
      onPlay() {
        return this.$store.state.musicBox.onPlay
      },
      currTime() {
        for (let index = 0; index < this.lyricTime.length; index++) {
          if (index !== this.lyricTime.length - 1) {
            let leftTimeTemp = this.lyricTime[index].split(':')
            let rightTimeTemp = this.lyricTime[index + 1].split(':')
            let leftTime = Number(leftTimeTemp[0]) * 60 + Number(leftTimeTemp[1])
            let rightTime = Number(rightTimeTemp[0]) * 60 + Number(rightTimeTemp[1])
            if (this.$store.state.musicBox.currTime > leftTime && this.$store.state.musicBox.currTime < rightTime) {
              this.activeLrcIndex = index
            }
          }
        }
        return this.$store.state.musicBox.currTime
      },
      totalTime() {
        return this.$store.state.musicBox.totalTime
      },
      playProgress() {
        return this.$store.state.musicBox.playProgress
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
      fixedPlayLeft(val){
        this.playLeft=val
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
  }

</script>
