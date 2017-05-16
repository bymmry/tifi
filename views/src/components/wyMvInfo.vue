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
    /*max-width: 120px*/
  }

</style>
<template>
  <div>
    <i-row>
      <i-col span="6" style="padding-top:.5rem">
        <img v-if="mv.cover" :src="mv.cover" class="cover card" />
        <div v-else class="cover-none card">
          {{mv.name[0]}}
        </div>
      </i-col>
      <i-col span="18" class="text-left">
        <i-row style="line-height:42px">
          <i-col span="24" style="font-size:1.5rem">
            MV - {{mv.name}}
            <i-icon v-if="like" style="color:red" type="android-favorite"></i-icon>
            <tooltip v-else trigger="hover" content="收藏该mv">
              <i-icon class="cursor" @click.native="likeControl" type="android-favorite-outline"></i-icon>
            </tooltip>
          </i-col>
          <!--<i-col span="2" style="font-size:1.2rem" class="cursor" offset="2">
            <tooltip trigger="hover" content="播放">
              <i-icon type="play"></i-icon>
            </tooltip>
          </i-col>
          <i-col span="2" class="text-right cursor" style="font-size:1.2rem">
            <tooltip trigger="hover" content="下载">
              <i-icon type="arrow-down-c"></i-icon>
            </tooltip>
          </i-col>-->
        </i-row>
        <div class="dir"></div>
        <br/>
        <span class="text-link">
            {{mv.artistName}}</span> {{mv.publishTime}}发行
        <br/><br/>
        <div v-if="mv.desc">
          介绍：{{mv.desc}}
        </div>
        <div v-else>
          介绍：没有相关描述
        </div>
      </i-col>
    </i-row>
    <br /><br />
    <i-row>
      <i-col span="1">
        <h1>视频详情</h1>
      </i-col>
      <i-col span="2" offset="1">
        <div class="dir"></div>
        <div>
          <div class="text-left" style="font-size:8px">
            播放
          </div>
          <div class="text-right" style="font-size:30px">
            {{(mv.playCount/10000).toFixed()}}w
          </div>
        </div>
        <div class="dir"></div>
        <div>
          <div class="text-left" style="font-size:8px">
            收藏
          </div>
          <div class="text-right" style="font-size:30px">
            {{mv.shareCount}}
          </div>
        </div>
        <div class="dir"></div>
        <div>
          <div class="text-left" style="font-size:8px">
            评论
          </div>
          <div class="text-right" style="font-size:30px">
            {{mv.commentCount}}
          </div>
        </div>
        <div class="dir"></div>
        <div>
          <div class="text-left" style="font-size:8px">
            清晰度
          </div>
          <div class="text-right" style="font-size:30px">
            <Dropdown @on-click="dropdown">
              <div>
                {{brs}}p
              </div>
              <dropdown-menu slot="list" style="text-align:center">
                <dropdown-item :key="index" :name="key" v-for="(val,key,index) in mv.brs" style="line-height:20px">
                  {{key}}p
                </dropdown-item>
              </dropdown-menu>
            </Dropdown>
          </div>
        </div>
        <div class="dir"></div>
      </i-col>
      <i-col span="18" offset="2">
        <div class="dir"></div>
        <div style="min-height:350px">
          <video style="width:100%" :src="'http://www.tifi.me:3000/mv/url?url='+mv.brs[brs]" controls="controls">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="dir"></div>
      </i-col>
    </i-row>
    <br /><br />
    <comment v-if="commentShow" @pageChange="pageChange" :data="commentData" :hot="hotComment"></comment>
  </div>
</template>
<script>
  import moment from 'moment'
  moment.locale('zh-cn')
  import comment from './comment.vue'
  import wyApi from '../wyApi.js'
  export default {
    components: {
      comment
    },
    props: {
      like: {
        type: Boolean,
        default: false
      },
      mv: {
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
            play: [],

          }
        }
      }
    },
    data() {
      return {
        commentData: [],
        hotComment: [],
        commentShow: false,
        brs: 0
      }
    },
    methods: {
      dropdown(key) {
        this.brs = key
      },
      likeControl() {
        this.$emit('like', true)
      },
      formatTime(val) {
        return moment(val).format('YYYY MMMDo hh:mm a 创建')
      },
      formatTimeForYear(val) {
        return moment(val).format('YYYY年')
      },
      getCommont(page) {
        wyApi.getMvComment(this.mv.id, page * 10).then((data) => {
          console.log(data)
          this.commentData = data
          if (page == 0) {
            this.hotComment = data.hotComments
          }
          this.commentShow = true
        })
      },
      pageChange(page) {
        this.getCommont(page)
      },
      playMusic(item) {
        wyApi.getMusicUrl(item.id).then((data) => {
          if (data.code == 200) {
            // console.log(data)
            this.$store.commit('playMusic', {
              url: data.data[0].url,
              artist: {
                name: item.ar[0].name
              },
              album: {
                picUrl: item.al.picUrl,
                name: item.al.name
              },
              music: {
                wyID: item.id,
                name: item.name
              }
            })
          }
        })
      }
    },
    mounted() {
      for (let key in this.mv.brs) {
        this.brs = key
      }
      this.getCommont(0)
    }
  }

</script>
