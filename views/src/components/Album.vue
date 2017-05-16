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
  }

</style>
<template>
  <div>
    <div v-if="albumShow">
      <i-row>
        <i-col span="6" style="padding-top:.5rem">
          <img v-if="albumBase.picUrl" :src="albumBase.picUrl" class="cover card" />
          <div v-else class="cover-none card">
            {{albumBase.name[0]}}
          </div>
        </i-col>
        <i-col span="18" class="text-left">
          <i-row style="line-height:42px">
            <i-col span="18" style="font-size:1.5rem">
              专辑 - {{albumBase.name}}
            </i-col>
          </i-row>
          <div class="dir"></div>
          <br/> 发行公司:{{albumBase.company}} 发行时间:{{formatTimeForYear(albumBase.publishTime)}}
          <br/><br/>
          <div v-if="albumBase.description">
            介绍：{{albumBase.description}}
          </div>
          <div v-else>
            介绍：没有相关描述
          </div>
        </i-col>
      </i-row>
      <br /><br />
      <i-row>
        <i-col span="1">
          <h1>专辑详情</h1>
        </i-col>
        <i-col span="2" offset="1">
          <div class="dir"></div>
          <div>
            <div class="text-left" style="font-size:10px">
              曲目
            </div>
            <div class="text-right" style="font-size:30px">
              {{albumBase.size}}
            </div>
          </div>
          <div class="dir"></div>
          <div>
            <div class="text-left" style="font-size:8px">
              收藏
            </div>
            <div class="text-right" style="font-size:30px">
              {{albumBase.info.shareCount}}
            </div>
          </div>
          <div class="dir"></div>
          <div>
            <div class="text-left" style="font-size:8px">
              评论
            </div>
            <div class="text-right" style="font-size:30px">
              {{albumBase.info.commentCount}}
            </div>
          </div>
          <div class="dir"></div>
        </i-col>
        <i-col span="18" offset="2">
          <div class="dir"></div>
          <i-row class="text-center">
            <i-col span="8" offset="4">
              歌名
            </i-col>
            <i-col span="4">
              歌手
            </i-col>
            <i-col span="8">
              专辑
            </i-col>
          </i-row>
          <div class="dir" style="margin-bottom:0"></div>
          <div style="min-height:350px">
            <div class="playlist-detail" v-if="song == []">
              可惜!还没有歌曲
            </div>
            <i-row v-else :gutter="16" class="playlist-detail text-center" :class="{active:(index+1)%2!==0}" :key="index" v-for="(song,index) in song">
              <i-col span="2" class="text-center">
                {{index+1}}
              </i-col>
              <i-col span="2">
                <i-icon @click.native="wyPlayMusic(song)" class="cursor" type="play"></i-icon>
              </i-col>
              <i-col span="8">
                {{song.name}}
              </i-col>
              <i-col span="4">
                {{song.ar[0].name}}
              </i-col>
              <i-col span="8">
                {{song.al.name}}
              </i-col>
            </i-row>
          </div>
        </i-col>
      </i-row>
      <br><br>
      <comment v-if="commentShow" @pageChange="pageChange" :data="commentData" :hot="hotComment"></comment>
    </div>
    <div v-else style="position:relative;height:300px">
      <spin fix size="large"></spin>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  moment.locale('zh-cn')
  import wyApi from '../wyApi.js'
  import comment from './comment.vue'
  export default {
    components: {
      comment
    },
    data() {
      return {
        albumID: sessionStorage.getItem('albumID'),
        albumBase: '',
        albumShow: false,
        song: [],
        commentShow: false,
        hotComment: [],
        commentData: []
      }
    },
    methods: {
      wyPlayMusic(item) {
        let mp3Url = ''
        wyApi.getMusicUrl(item.id).then((data) => {
          if (data.code == 200) {
            mp3Url = data.data[0].url
          }
        }).then(() => {
          let musicData = {
            url: mp3Url,
            artist: {
              name: item.ar[0].name
            },
            album: {
              name: item.al.name,
              picUrl: item.al.picUrl
            },
            music: {
              name: item.name,
              wyID: item.id,
              url: mp3Url
            }
          }
          console.log(musicData)
          this.$store.commit('playMusic', musicData)
        })
      },
      formatTimeForYear(val) {
        return moment(val).format('YYYY年')
      },
      getCommont(page) {
        wyApi.getAlbumComment(this.albumBase.id, page * 10).then((data) => {
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
      }
    },
    mounted() {
      wyApi.getAlbumInfo(this.albumID).then((data) => {
        if (data.code == 200) {
          console.log(data)
          this.albumBase = data.album
          this.song = data.songs
          this.albumShow = true
        }
      }).then(() => {
        this.getCommont(0)
      })
    }
  }

</script>
