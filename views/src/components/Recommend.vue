<style scoped>
  .searchBtn {
    margin-top: .5rem;
    margin-bottom: 4rem;
    text-align: center;
    cursor: pointer;
    font-size: 1.5rem;
    padding: .5rem;
    width: 100%
  }

  /*.sm-searchBtn {
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    padding: .5rem;
    width: 100%
  }*/

  .demo-carousel {
    width: 100%;
    height: 200px;
    background: #f0f0f0;
    border-radius: 4px;
    text-align: center;
    line-height: 200px
  }

  .mini-box {
    background: #fff;
    position: fixed;
    padding: 0 1rem;
    bottom: 0%;
    right: 0%;
    width: 100%;
    z-index: 99;
    line-height: 50px;
    border: 1px solid #ebebeb;
    font-size: 20px
  }

  .cover {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
<template lang="">
  <div>
    <i-row :gutter="32">
      <i-col :span="18">
        <div style="margin-bottom:3rem">
          <div style="font-size:2rem">TIFI MUSIC - 忠实至上</div>
          <div style="font-size:1rem">好音乐，天然在你身边</div>
        </div>
        <i-row style="line-height:2rem;margin-bottom:2rem">
          <i-col span="4" style="text-align:left">
            <h1>热门歌单</h1>
          </i-col>
          <i-col span="18">
            <span v-for="(item,index) in hotPlayListTag" style="cursor:pointer;padding-left:0.7rem">
              <span class="text-hover">{{item}}</span>
            <span v-if="index!=hotPlayListTag.length-1" style="padding-left:0.7rem">|</span>
            </span>
          </i-col>
          <i-col span="2" style="text-align:right">
            <a>更多</a>
          </i-col>
        </i-row>
        <div style="margin-bottom:3rem">
          <i-row :gutter="32" style="margin-bottom:2rem">
            <i-col span="6" v-if="index<4" :key="index" v-for="(item,index) in hotPlaylist">
              <div class="min-card card-hover cover" style="height:150px;background:#f0f0f0">
                <img class="card" v-if="item.coverImgUrl" :src="item.coverImgUrl" style="height:150px;width:100%" alt="">
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
            </i-col>
          </i-row>
          <i-row :gutter="32" style="margin-bottom:2rem">
            <i-col span="6" v-if="index>=4" :key="index" v-for="(item,index) in hotPlaylist">
              <div class="min-card card-hover cover" style="height:150px;background:#f0f0f0">
                <img class="card" v-if="item.coverImgUrl" :src="item.coverImgUrl" style="height:150px;width:100%" alt="">
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
            </i-col>
          </i-row>
        </div>
        <i-row style="line-height:2rem;margin-bottom:2rem">
          <i-col span="4" style="text-align:left">
            <h1>新碟上线</h1>
          </i-col>
          <i-col span="18">
            <span v-for="(item,index) in hotPlayListTag" style="cursor:pointer;padding-left:0.7rem">
              <span class="text-hover">{{item}}</span>
            <span v-if="index!=hotPlayListTag.length-1" style="padding-left:0.7rem">|</span>
            </span>
          </i-col>
          <i-col span="2" style="text-align:right">
            <a>更多</a>
          </i-col>
        </i-row>
        <div>
          <i-row :gutter="32" style="margin-bottom:1rem">
            <i-col span="6" v-if="index<4" :key="index" v-for="(item,index) in newAlbum">
              <div class="min-card card-hover" style="height:150px;background:#f0f0f0">
                <img class="card" v-if="item.picUrl" :src="item.picUrl" style="height:150px;width:100%" alt="">
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
              <div style="font-size:10px;color:#bbb">
                {{item.artist.name}}
              </div>
            </i-col>
          </i-row>
          <i-row :gutter="32" style="margin-bottom:2rem">
            <i-col span="6" v-if="index>=4" :key="index" v-for="(item,index) in newAlbum">
              <div class="min-card card-hover" style="height:150px;background:#f0f0f0">
                <img class="card" v-if="item.picUrl" :src="item.picUrl" style="height:150px;width:100%" alt="">
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
              <div style="font-size:10px;color:#bbb">
                {{item.artist.name}}
              </div>
              <br/>
            </i-col>
          </i-row>
        </div>
      </i-col>
      <i-col span="6">
        <i-row>
          <i-col span="24">
            <button @click="$store.commit('routerActive', 'other');$router.push('/search')" class="btn card searchBtn">
              <i-icon type="search"></i-icon>&nbsp;&nbsp;今天也来点小曲
            </button>
          </i-col>
        </i-row>
        <i-row style="margin-bottom:2rem">
          <i-col span="12">
            <h3>今日播放最多</h3>
          </i-col>
          <i-col span="12" style="text-align:right">
            <a>Top 100</a>
          </i-col>
        </i-row>
        <i-row v-for="(item,index) in playTop" :key="index" style="margin-bottom:1rem">
          <i-col span="22">
            <div class="">
              <i-icon style="cursor:pointer" type="play" @click.native="playMusic(item)"></i-icon>
              &nbsp;&nbsp; {{item.music.name}} - {{item.artist.name}}
            </div>
          </i-col>
          <i-col span="2">
            <mu-badge :content="''+(10-index)*10" color="#41464b" />
          </i-col>
        </i-row>
        <br/><br/>
        <i-row style="margin-bottom:2rem">
          <i-col span="12">
            <h3>新歌榜</h3>
          </i-col>
          <i-col span="12" style="text-align:right">
            <a>Top 100</a>
          </i-col>
        </i-row>
        <i-row v-for="(item,index) in toplist" :key="index" style="margin-bottom:1rem">
          <i-col span="24">
            <div class="">
              <i-icon style="cursor:pointer" type="play" @click.native="wyPlayMusic(item)"></i-icon>
              &nbsp;&nbsp;{{item.name}} - {{item.artists[0].name}}
            </div>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
  </div>
</template>

<script>
  import api from '../axios'
  import wyApi from '../wyApi'
  export default {
    data() {
      return {
        msg: 'TIFI MUSIC - 大道至简 悟在天成',
        hotPlayListTag: ['华语', '流行', '老歌', '粤语', '英文', '摇滚', '民谣'],
        hotPlaylist: [],
        newAlbum: [],
        playTop: [],
        toplist: [],
        carImg: 0
      }
    },
    // computed: {
    //   sm() {
    //     return this.$store.state.body.sm
    //   }
    // },
    methods: {
      playMusic(item) {
        this.$store.commit('playMuisc', {
          url: 'http://localhost:5000' + item.music.url,
          artist: item.artist,
          album: item.album,
          music: item.music
        })
      },
      wyPlayMusic(item) {
        let musicData = {
          url: item.mp3Url,
          artist: {
            name: item.artists[0].name
          },
          album: {
            name: item.album.name,
            picUrl: item.album.picUrl
          },
          music: {
            name: item.name,
            wyID: item.id,
            url: item.mp3Url
          }
        }
        this.$store.commit('playMuisc', musicData)
      }
    },
    mounted() {
      wyApi.getHotPlaylist(8).then((data) => {
        if (data.code == 200) {
          this.hotPlaylist = data.playlists
        }
      }).then(() => {
        wyApi.getNewAlbum(8).then((data) => {
          if (data.code == 200) {
            this.newAlbum = data.albums
          }
        })
      }).then(() => {
        api.retrieveMusic().then((data) => {
          if (data.code === 200) {
            this.playTop = data.data
          }
        })
      }).then(() => {
        wyApi.getToplist().then((data) => {
          if (data.code === 200) {
            data.result.tracks.forEach((item, index) => {
              if (index < 10) {
                this.toplist.push(item)
              }
            })
            console.log(this.toplist)
          }
        })
      })
    }
  }

</script>
