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


</style>
<template>
  <div>
    <div v-if="artistShow">
      <i-row>
        <i-col span="6" style="padding-top:.5rem">
          <img v-if="artistBase.picUrl" :src="artistBase.picUrl" class="cover card" />
          <div v-else class="cover-none card">
            {{artistBase.name[0]}}
          </div>
        </i-col>
        <i-col span="18" class="text-left">
          <i-row style="line-height:42px">
            <i-col span="18" style="font-size:1.5rem">
              歌手 - {{artistBase.name}}
              <tooltip trigger="hover" content="收藏该歌手">
                <i-icon class="cursor" @click.native="likeControl" type="android-favorite-outline"></i-icon>
              </tooltip>
            </i-col>
          </i-row>
          <div class="dir"></div>
          <br/><br/>
          <div v-if="artistBase.briefDesc">
            介绍：{{artistBase.briefDesc}}
          </div>
          <div v-else>
            介绍：没有相关描述
          </div>
        </i-col>
      </i-row>
      <br /><br />
      <i-row>
        <i-col span="1">
          <h1>歌手详情</h1>
        </i-col>
        <i-col span="2" offset="1">
          <div class="dir"></div>
          <div>
            <div class="text-left" style="font-size:10px">
              曲目
            </div>
            <div class="text-right" style="font-size:30px">
              {{artistBase.musicSize}}
            </div>
          </div>
          <div class="dir"></div>
          <div>
            <div class="text-left" style="font-size:8px">
              专辑
            </div>
            <div class="text-right" style="font-size:30px">
              {{artistBase.albumSize}}
            </div>
          </div>
          <div class="dir"></div>
        </i-col>
        <i-col span="18" offset="2">
          <div class="dir"></div>
          <i-row class="text-center">
            <i-col span="12" offset="5">
              歌名
            </i-col>
            <i-col span="7">
              专辑
            </i-col>
          </i-row>
          <div class="dir" style="margin-bottom:0"></div>
          <div style="min-height:350px">
            <div class="playlist-detail" v-if="hotSong == []">
              可惜!还没有歌曲
            </div>
            <i-row v-else :gutter="16" class="playlist-detail text-center" :class="{active:(index+1)%2!==0}" :key="index" v-for="(song,index) in hotSong">
              <i-col span="2" class="text-center">
                {{index+1}}
              </i-col>
              <i-col span="3" class="text-center">
                <i-icon @click.native="wyPlayMusic(song)" class="cursor" type="play"></i-icon>
                <i-icon v-if="song.like" style="color:red;margin:0 .7rem" type="android-favorite"></i-icon>
                <i-icon v-else style="margin:0 .7rem" type="android-favorite-outline" @click.native="likeSong(song,index)" class="cursor"></i-icon>
                <i-icon @click.native="addToPlaylist(song)" class="cursor" type="android-add"></i-icon>
              </i-col>
              <i-col span="12">
                {{song.name}}
              </i-col>

              <i-col span="7">
                {{song.al.name}}
              </i-col>
            </i-row>
          </div>
        </i-col>
      </i-row>
      <br/><br/>
      <i-row>
        <i-col span="1" offset="3">
          <affix>
            <h1>{{artistBase.name}}的专辑</h1>
          </affix>
          &nbsp;
        </i-col>
        <i-col span="18" offset="2">
          <div class="dir"></div>
          <i-row class="text-center">
            <i-col span="10" offset="4">
              专辑名
            </i-col>
            <i-col span="6">
              发行公司
            </i-col>
            <i-col span="4">
              发行年份
            </i-col>
          </i-row>
          <div class="dir" style="margin-bottom:0"></div>
          <div class="text-center" style="min-height:350px">
            <div class="playlist-detail" v-if="hotSong == []">
              可惜!还没有专辑
            </div>
            <i-row v-else :gutter="16" class="playlist-detail text-center" style="line-height:50px" :class="{active:(index+1)%2!==0}"
              :key="index" v-for="(album,index) in hotAlbum">
              <i-col span="2" class="text-center">
                {{index+1}}
              </i-col>
              <i-col span="2">
                <div style="height:40px;width:40px;margin-top:5px">
                  <img @click="$store.commit('router',{path:'/album',id:album.id})"class="card card-hover" :src="album.picUrl" style="width:100%;height:100%">
                </div>
              </i-col>
              <i-col span="10">
                <!--<div class="ellipsis">-->
                  {{album.name}}
                <!--</div>-->
              </i-col>
              <i-col span="6">
                <!--<div class="ellipsis">-->
                  {{album.company}}&nbsp;
                <!--</div>-->
              </i-col>
              <i-col span="4">
                {{formatTimeForYear(album.publishTime)}}
              </i-col>
            </i-row>
          </div>
        </i-col>
      </i-row>
    </div>
    <div v-else style="position:relative;height:300px">
      <spin fix size="large"></spin>
    </div>
  </div>
</template>
<script>
import {
  Message
} from 'iview'
  import moment from 'moment'
  moment.locale('zh-cn')
  import wyApi from '../wyApi.js'
  export default {
    data() {
      return {
        artistID: sessionStorage.getItem('artistID'),
        artistBase: '',
        artistShow: false,
        hotSong: [],
        hotAlbum: []
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
      likeSong(item,itemIndex) {
        if (this.$store.state.user.type == 'member') {
          wyApi.getMusicUrl(item.id).then((data) => {
            if (data.code == 200) {
              this.$store.dispatch('likeSong', {
                pid: this.$store.state.user.likelistID,
                song: {
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
                }
              })
              let likelist = this.$store.state.user.likelist
              this.hotSong.forEach((item, index) => {
                likelist.forEach((like) => {
                  if (like.music.wyID == item.id) {
                    let newItem = item
                    item.like = true
                    this.hotSong.splice(itemIndex,1,newItem)
                    Message.success('成功收藏')
                  }
                })
              })

            }
          })
        } else {
          Message.error('您还没有登录')
        }
      },
      addToPlaylist(item) {
        wyApi.getMusicUrl(item.id).then((data) => {
          if (data.code == 200) {
            this.$store.commit('addPlaylist', {
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
            Message.success('成功添加到播放列表')
          }
        })
      }
    },
    mounted() {
      wyApi.getArtistSong(this.artistID).then((data) => {
        if (data.code == 200) {
          this.artistBase = data.artist
          this.hotSong = data.hotSongs
          let likelist = this.$store.state.user.likelist
          this.hotSong.forEach((item, index) => {
            likelist.forEach((like) => {
              if (like.music.wyID == item.id) {
                this.hotSong[index].like = true
              }
            })
          })
        }
      }).then(() => {
        wyApi.getArtistAlbum(this.artistID, 100).then((data) => {
          if (data.code == 200) {
            console.log(data)
            this.hotAlbum = data.hotAlbums
            this.artistShow = true
          }
        })
      })
    }
  }

</script>
