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
    height:161.5px;
    width:100%;
    /*margin-bottom: 1rem;*/
    text-align: center;
    line-height: 161.5px;
    background: #f0f0f0;
    border-radius: 4px
  }
  .cover img{
    height:150px;
    width:100%;
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
          <i-row :gutter="32" :key="n" style="margin-bottom:2rem" v-for="n in 2">
            <i-col span="6" v-if="(n-1)*4<=index && index<n*4" :key="index" v-for="(item,index) in hotPlaylist">
              <div class="cover">
                <progressive-img @click.native="$store.commit('router',{id:item.id,path:'/playlist',picUrl:item.coverImgUrl})" class="card card-hover"
                :src="item.coverImgUrl"
                :placeholder="item.coverImgUrl"/>
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
            </i-col>
            <i-col span="6" v-if="(n-1)*4<=(index-1) && (index-1)<n*4 && hotPlaylist.length<=0" :key="index" v-for="index in 8">
              <div class="cover">
                loading...
              </div>
              <div style="margin-top:.5rem">
                ...
              </div>
            </i-col>
          </i-row>
        </div>
        <i-row style="line-height:2rem;margin-bottom:2rem">
          <i-col span="4" style="text-align:left">
            <h1>热门单曲</h1>
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
          <i-row :gutter="32" :key="n" style="margin-bottom:2rem" v-for="n in 2">
            <i-col span="6" v-if="(n-1)*4<=index && index<n*4" :key="index" v-for="(item,index) in hotSong">
              <div class="cover">
                <progressive-img @click.native="wyPlayMusic(item)" class="card card-hover"
                :src="item.album.picUrl"
                :placeholder="item.album.picUrl"/>
              </div>
              <div style="margin-top:.5rem">
                {{item.name}} - {{item.artists[0].name}}
              </div>
            </i-col>
            <i-col span="6" v-if="(n-1)*4<=(index-1) && (index-1)<n*4 && hotPlaylist.length<=0" :key="index" v-for="index in 8">
              <div class="cover">
                loading...
              </div>
              <div style="margin-top:.5rem">
                ...
              </div>
            </i-col>
          </i-row>
        </div>
        <i-row style="line-height:2rem;margin-bottom:2rem">
          <i-col span="4" style="text-align:left">
            <h1>精选歌单</h1>
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
          <i-row :gutter="32" :key="n" style="margin-bottom:2rem" v-for="n in 2">
            <i-col span="6" v-if="(n-1)*4<=index && index<n*4" :key="index" v-for="(item,index) in hightPlaylist">
              <div class="cover">
                  <progressive-img @click.native="$store.commit('router',{id:item.id,path:'/playlist',picUrl:item.coverImgUrl})" class="card card-hover"
                  :src="item.coverImgUrl"
                  :placeholder="item.coverImgUrl"/>
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
            </i-col>
            <i-col span="6" v-if="(n-1)*4<=(index-1) && (index-1)<n*4 && hotPlaylist.length<=0" :key="index" v-for="index in 8">
              <div class="cover">
                loading...
              </div>
              <div style="margin-top:.5rem">
                ...
              </div>
            </i-col>
          </i-row>
        </div>
        <i-row style="line-height:2rem;margin-bottom:2rem">
          <i-col span="4" style="text-align:left">
            <h1>热门歌手</h1>
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
          <i-row :gutter="32" :key="n" style="margin-bottom:2rem" v-for="n in 2">
            <i-col span="6" v-if="(n-1)*4<=index && index<n*4" :key="index" v-for="(item,index) in hotArtist">
              <div class="cover">
                  <progressive-img @click.native="$store.commit('router',{id:item.id,path:'/artist'})" class="card card-hover"
                  :src="item.img1v1Url"
                  :placeholder="item.img1v1Url"/>
              </div>
              <div style="margin-top:.5rem">
                {{item.name}}
              </div>
            </i-col>
            <i-col span="6" v-if="(n-1)*4<=(index-1) && (index-1)<n*4 && hotPlaylist.length<=0" :key="index" v-for="index in 8">
              <div class="cover">
                loading...
              </div>
              <div style="margin-top:.5rem">
                ...
              </div>
            </i-col>
          </i-row>
        </div>
      </i-col>
      <i-col span="6">
        <i-row>
          <i-col span="24">
            <!-- <button @click="$store.commit('router', '/search')" class="btn card searchBtn">
              <i-icon type="search"></i-icon>&nbsp;&nbsp;今天也来点小曲
            </button> -->
            <md-button @click.native="$store.commit('router', '/search')" class="btn card searchBtn">
              <i-icon type="search"></i-icon>&nbsp;&nbsp;今天也来点小曲
            </md-button>
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
          <i-col span="22">
            <div class="">
              <i-icon style="cursor:pointer" type="play" @click.native="wyPlayMusic(item)"></i-icon>
              &nbsp;&nbsp;{{item.name}} - {{item.artists[0].name}}
            </div>
          </i-col>
          <i-col span="2">
            <mu-badge :content="index+1+''" color="#41464b" />
          </i-col>
        </i-row>
        <br/><br/>
        <i-row style="margin-bottom:2rem">
          <i-col span="12">
            <h3>KTV榜</h3>
          </i-col>
          <i-col span="12" style="text-align:right">
            <a>Top 100</a>
          </i-col>
        </i-row>
        <i-row v-for="(item,index) in ktvTop" :key="index" style="margin-bottom:1rem">
          <i-col span="22">
            <div class="">
              <i-icon style="cursor:pointer" type="play" @click.native="wyPlayMusic(item)"></i-icon>
              &nbsp;&nbsp;{{item.name}} - {{item.artists[0].name}}
            </div>
          </i-col>
          <i-col span="2">
            <mu-badge :content="index+1+''" color="#41464b" />
          </i-col>
        </i-row>
      </i-col>
    </i-row>
  </div>
</template>

<script>
  import api from '../axios'
  import wyApi from '../wyApi'
  import mdButton from './mdButton'
  export default {
    components:{
      mdButton
    },
    data() {
      return {
        msg: 'TIFI MUSIC - 大道至简 悟在天成',
        hotPlayListTag: ['华语', '流行', '老歌', '粤语', '英文', '摇滚', '民谣'],
        hotPlaylist: [],
        hotSong:[],
        hightPlaylist: [],
        hotArtist: [],
        playTop: [],
        toplist: [],
        ktvTop:[],
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
        this.$store.commit('playMusic', {
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
        this.$store.dispatch('playMusic', musicData)
      }
    },
    mounted() {

      wyApi.getHotPlaylist(8).then((data) => {
        if (data.code == 200) {
          this.hotPlaylist = data.playlists
        }
      }).then(()=>{
        wyApi.getToplist(1).then((data) => {
          if (data.code == 200) {
            this.hotSong = data.result.tracks
          }
        })
      }).then(() => {
        wyApi.getHightPlaylist(8).then((data) => {
          if (data.code == 200) {
            // console.log(data)
            this.hightPlaylist = data.playlists
          }
        })
      }).then(() => {
        wyApi.getHotArtist(8).then((data) => {
          if (data.code == 200) {
            console.log(data)
            this.hotArtist = data.artists
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
          }
        })
      }).then(() => {
        wyApi.getToplist(7).then((data) => {
          if (data.code === 200) {
            data.result.tracks.forEach((item, index) => {
              if (index < 10) {
                this.ktvTop.push(item)
              }
            })
          }
        })
      })
    }
  }

</script>
