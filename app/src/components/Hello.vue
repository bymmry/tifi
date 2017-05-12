<style scoped>
  .swipe-test {
    height: 200px;
    background-color: #f0f0f0;
    color: #fff
  }

  .playlist-title {
    border-left: 2px solid #41464b;
    height: 14px;
    line-height: 14px;
    font-size: 20px;
    padding: 0 .5rem;
    margin-bottom: 1rem
  }

  .g-test-card {
    width: 32%;
    float: left;
    margin-bottom: .5rem
  }

  .test-card {
    width: 100%;
    height: 100px;
    background: #f0f0f0;
  }

  .tag-top-card {
    padding: 10px;
    margin: 8px 5px;
    min-height: 250px;
  }

</style>

<template>
  <div class="hello">
    <my-header @changeTag="changeTag"></my-header>
    <div style="margin-top:104px;margin-bottom:50px;;height:calc(100vh - 104px);overflow-y:auto;overflow-x:hidden">
      <div v-if="tagIndex==0">
        <mt-swipe :auto="4000" class="swipe-test">
          <mt-swipe-item :key="index" v-for="(item,index) in personalized">
            <img v-if="personalized.length>0" :src="item.picUrl" style="width:100%;height:200px" />
            <span style="position:absolute;top:0;margin:0 auto">
            {{item.name}}
          </span>
          </mt-swipe-item>
        </mt-swipe>
        <div style="margin-top:1.5rem;margin-left:1px">
          <div class="playlist-title">
            热门歌单
          </div>
          <div v-if="hotPlaylist.length>0">
            <div v-if="index<3" v-for="(item,index) in hotPlaylist" class="g-test-card" :style="{'margin-right':index==2?'0%':'2%'}">
              <div class="test-card">
                <img :src="item.coverImgUrl" style="width:100%;height:100px" />
              </div>
              <div style="font-size:12px">
                {{item.name}}
              </div>
            </div>
            <div v-if="index>=3" v-for="(item,index) in hotPlaylist" class="g-test-card" :style="{'margin-right':index==5?'0%':'2%'}">
              <div class="test-card">
                <img :src="item.coverImgUrl" style="width:100%;height:100px" />
              </div>
              <div style="font-size:12px">
                {{item.name}}
              </div>
            </div>
          </div>
          <div style="margin-bottom:0rem">&nbsp;</div>
          <div class="playlist-title">
            热门单曲
          </div>
          <div v-if="hotSong.length>0">
            <div @click="play(item)" v-if="index<3" v-for="(item,index) in hotSong" class="g-test-card" :style="{'margin-right':index==2?'0%':'2%'}">
              <div class="test-card">
                <img :src="item.album.picUrl" style="width:100%;height:100px" />
              </div>
              <div style="font-size:12px">
                {{item.artists[0].name}} - {{item.name}}
              </div>
            </div>
            <div @click="play(item)" v-if="index>=3 && index<6" v-for="(item,index) in hotSong" class="g-test-card" :style="{'margin-right':index==5?'0%':'2%'}">
              <div class="test-card">
                <img :src="item.album.picUrl" style="width:100%;height:100px" />
              </div>
              <div style="font-size:12px">
                {{item.artists[0].name}} - {{item.name}}
              </div>
            </div>
          </div>
          <div style="margin-bottom:1rem">&nbsp;</div>
          <div style="margin-bottom:1rem">&nbsp;</div>
          <div class="playlist-title">
            新碟上架
          </div>
          <div v-if="newAlbum.length>0">
            <div v-if="index<3" v-for="(item,index) in newAlbum" class="g-test-card" :style="{'margin-right':index==2?'0%':'2%'}">
              <div class="test-card">
                <img :src="item.picUrl" style="width:100%;height:100px" />
              </div>
              <div style="font-size:12px;overflow:hidden;width:100%;height:20px">
                {{item.name}}
              </div>
              <div style="font-size:10px;color:#bbb">
                {{item.artist.name}}
              </div>
            </div>
            <div v-if="index>=3" v-for="(item,index) in newAlbum" class="g-test-card" :style="{'margin-right':index==5?'0%':'2%'}">
              <div class="test-card">
                <img :src="item.picUrl" style="width:100%;height:100px" />
              </div>
              <div style="font-size:12px;overflow:hidden;width:100%;height:20px">
                {{item.name}}
              </div>
              <div style="font-size:10px;color:#bbb">
                {{item.artist.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tagIndex==1">
        <div class="card" style="line-height:50px;padding:5px;margin:8px 5px" v-for="(item,index) in playlist">
          <img :src="item.coverImgUrl" style="width:50px;height:50px;float:left">
          <div style="height:25px;line-height:25px;padding-left:10px;overflow:hidden">
            {{item.name}}
          </div>
          <div style="height:25px;line-height:25px;padding-left:60px;font-size:12px;color:#bbb">
            {{item.creator.nickname}}
          </div>
        </div>
      </div>
      <div v-if="tagIndex==2">
        <div class="card" style="line-height:50px;padding:5px;margin:8px 5px" v-for="(item,index) in artist">
          <img :src="item.img1v1Url" style="width:50px;height:50px;float:left">
          <div style="height:25px;line-height:25px;padding-left:10px;overflow:hidden">
            {{item.name}}
          </div>
          <div style="height:25px;line-height:25px;padding-left:60px;font-size:12px;color:#bbb">
            歌曲数:{{item.musicSize}} 专辑数:{{item.albumSize}}
          </div>
        </div>
      </div>
      <div v-if="tagIndex==3">
        <div class="card tag-top-card">
          <div style="width:40px;font-size:25px;float:left;height:250px;padding-left:20px">
            热歌排行榜
          </div>
          <div @click="play(item)" v-if="index<10" v-for="(item,index) in hotTopSong">
            <div style="height:25px;line-height:25px;padding-left:50px;overflow:hidden">
              {{item.artists[0].name}} - {{item.name}}
            </div>
          </div>
        </div>
        <div class="card tag-top-card">
          <div style="width:40px;font-size:25px;float:left;height:250px;padding-left:20px">
            新歌排行榜
          </div>
          <!--<img :src="item.img1v1Url" style="width:50px;height:50px;float:left">-->
          <div @click="play(item)" v-if="index<10" v-for="(item,index) in newTopSong">
            <div style="height:25px;line-height:25px;padding-left:50px;overflow:hidden">
              {{item.artists[0].name}} - {{item.name}}
            </div>
          </div>
        </div>
        <div class="card tag-top-card">
          <div style="width:40px;font-size:25px;float:left;height:250px;padding-left:20px">
            国语金曲榜
          </div>
          <!--<img :src="item.img1v1Url" style="width:50px;height:50px;float:left">-->
          <div @click="play(item)"  v-if="index<10" v-for="(item,index) in chinaTopSong">
            <div style="height:25px;line-height:25px;padding-left:50px;overflow:hidden">
              {{item.artists[0].name}} - {{item.name}}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import wyApi from '../wyApi'
  import myHeader from './Header.vue'
  export default {
    name: 'hello',
    components: {
      myHeader
    },
    data() {
      return {
        tagIndex: 0,
        msg: 'TIFI音乐 忠实至上',
        personalized: [],
        hotPlaylist: [],
        hotSong: [],
        newAlbum: [],
        showMusicBox: false,
        musicData: {},
        playlist: [],
        artist: [],
        loading: false,
        newTopSong: [],
        hotTopSong: [],
        chinaTopSong: []
      }
    },
    computed: {

    },
    methods: {
      changeTag(val) {
        this.tagIndex = val
        if (val == 1) {
          wyApi.getHotPlaylistByUser().then((data) => {
            if (data.code == 200) {
              this.playlist = data.playlists
            }
          })
        }
        if (val == 2) {
          wyApi.getHotArtist().then((data) => {
            if (data.code == 200) {
              this.artist = data.artists
            }
          })
        }
        if (val == 3) {
          wyApi.getToplist(1).then((data) => {
            if (data.code == 200) {
              this.hotTopSong = data.result.tracks
            }
          }).then(() => {
            wyApi.getToplist(0).then((data) => {
              this.newTopSong = data.result.tracks
            })
          }).then(() => {
            wyApi.getToplist(17).then((data) => {
              this.chinaTopSong = data.result.tracks
            })
          })
        }
      },
      getPersonalized() {
        wyApi.personalized().then((data) => {
          if (data.code == 200) {
            this.personalized = data.result
          }
        }).then(() => {
          wyApi.getHotPlaylist(6).then((data) => {
            if (data.code == 200) {
              this.hotPlaylist = data.playlists
            }
          })
        }).then(() => {
          wyApi.getToplist(1).then((data) => {
            if (data.code == 200) {
              this.hotSong = data.result.tracks
            }
          })
        }).then(() => {
          wyApi.getNewAlbum(6).then((data) => {
            if (data.code == 200) {
              this.newAlbum = data.albums
            }
          })
        })
      },
      play(item) {
        let musicData = {
          url: item.mp3Url,
          cover: item.album.picUrl,
          artist: item.artists[0].name,
          name: item.name,
          wyID: item.id
        }
        this.musicData = musicData
        this.showMusicBox = true
        this.$store.commit('playMusic', musicData)
      }
    },
    mounted() {
      this.getPersonalized()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
