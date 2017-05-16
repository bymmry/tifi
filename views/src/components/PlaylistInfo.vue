<style>
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
<template>
  <div>
    <i-row>
      <i-col span="8" style="padding-top:.5rem">
        <img v-if="playlist.picUrl" :src="playlist.picUrl" class="cover card" />
        <div v-else class="cover-none card">
          {{playlist.name[0]}}
        </div>
      </i-col>
      <i-col span="16" class="text-left">
        <i-row style="line-height:42px">
          <i-col span="18" style="font-size:1.5rem">
            {{playlist.name}}
            <i-icon v-if="like" style="color:red" type="android-favorite"></i-icon>
            <tooltip v-else trigger="hover" content="收藏该歌单">
              <i-icon class="cursor" @click.native="likeControl" type="android-favorite-outline"></i-icon>
            </tooltip>     
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
              <div class="ellipsis">
              {{song.artist.name}}
              </div>
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
  </div>
</template>
<script>
  import moment from 'moment'
  moment.locale('zh-cn')
  import comment from './comment.vue'
  export default {
    components: {
      comment
    },
    props: {
      like: {
        type: Boolean,
        default: false
      },
      playlist: {
        type: Object,
        default () {
          return {
            name: '我喜欢的音乐',
            createTime: 2000000000000,
            user: {
              name: '自己'
            },
            tag: [],
            introduction: '',
            song: [],
            like: [],
            comment: [],
            play: []
          }
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      likeControl() {
        this.$emit('like', true)
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
    }
  }

</script>
