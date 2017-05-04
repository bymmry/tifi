<style lang="css" scoped>
  .br {
    margin: .5rem 0
  }

  .min-cover {
    width: 40px;
    height: 40px
  }

  .cover {
    width: 200px;
    height: 200px
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

</style>
<template lang="">
  <div>
    <i-row>
      <i-col span="6">
        <affix @on-change="fixedListChange">
          <i-row>
            <i-col span="1">
              <h1>我的歌单</h1>
            </i-col>
            <i-col span="20" offset="3">
              <div class="dir"></div>
              <div style="height:60vh">
                <div class="my-playlist" :class="{active:n==1}" v-for="n in 3">
                  <img src="../assets/img/mulai.jpg" class="min-cover" />
                  <div style="float:left">
                    <p>
                      我喜欢的音乐
                    </p>
                    <p>
                      48曲 by 原创
                    </p>
                  </div>
                </div>
              </div>
              <div class="dir"></div>
            </i-col>
          </i-row>
        </affix>
      </i-col>
      <i-col span="17" :offset="fixedList?'7':'1'" style="z-index:11">
        <i-row>
          <i-col span="8" style="padding-top:.5rem">
            <img src="../assets/img/mulai.jpg" class="cover card" />
          </i-col>
          <i-col span="16" class="text-left">
            <i-row style="line-height:42px">
              <i-col span="18" style="font-size:1.5rem">
                我喜欢的音乐
                <tooltip v-if="!collection" trigger="hover" content="收藏该歌单">
                  <i-icon class="cursor" @click.native="collection=!collection" type="android-favorite-outline"></i-icon>
                </tooltip>
                <i-icon v-else style="color:red" type="android-favorite"></i-icon>
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
            <br/> 多部未华子的眼睛 2016-12-25创建
            <br/><br/> 标签：
            <tag type="dot" color="blue">粤语</tag>
            <tag type="dot" color="green">轻松</tag>
            <tag type="dot" color="red">金曲</tag>
            <tag type="dot" color="yellow">怀旧</tag>
            <br/><br/> 介绍：一曲肝肠断，天涯何处觅知音
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
                48
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:8px">
                播放
              </div>
              <div class="text-right" style="font-size:30px">
                152
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:8px">
                收藏
              </div>
              <div class="text-right" style="font-size:30px">
                19
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:8px">
                评论
              </div>
              <div class="text-right" style="font-size:30px">
                28
              </div>
            </div>
            <div class="dir"></div>
          </i-col>
          <i-col span="18" offset="2">
            <div class="dir"></div>
            <i-row>
              <i-col span="10" offset="4">
                歌名
              </i-col>
              <i-col span="4">
                歌手
              </i-col>
              <i-col span="4">
                专辑
              </i-col>
              <i-col span="2">
                年份
              </i-col>
            </i-row>
            <div class="dir" style="margin-bottom:0"></div>
            <i-row class="playlist-detail" :class="{active:n%2!==0}" :key="n.id" v-for="n in 20">
              <i-col span="2" class="text-center">
                {{n}}
              </i-col>
              <i-col span="2" class="text-center">
                <i-icon type="play"></i-icon>
              </i-col>
              <i-col span="10">
                伤感的恋人
              </i-col>
              <i-col span="4">
                黄凯芹
              </i-col>
              <i-col span="4">
                Moody
              </i-col>
              <i-col span="2">
                1987年
              </i-col>
            </i-row>
            <div class="dir"></div>
          </i-col>
        </i-row>
        <br /><br />
        <talk></talk>
      </i-col>
    </i-row>
    <div style="height:50px"></div>
  </div>
</template>
<script lang="">
  import talk from './Talk.vue'
  export default {
    components:{
      talk
    },
    data() {
      return {
        collection: false,
        fixedList: false,
        fixedTalk: false
      }
    },
    computed: {
      userName() {
        return this.$store.state.user.name
      }
    },
    methods: {
      fixedListChange(val) {
        this.fixedList = val
      },
      fixedTalkChange(val) {
        this.fixedTalk = val
      }
    }
  }

</script>
