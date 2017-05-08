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

</style>
<template lang="">
  <div>
    <i-row :gutter="32">
      <i-col span="18">
        <div style="margin-bottom:3rem">
          <div style="font-size:2rem">TIFI MUSIC - 忠实至上</div>
          <div style="font-size:1rem">好音乐，天然在你身边</div>
        </div>
        <i-row style="margin-bottom:2rem;line-height:2rem">
          <i-col span="4" style="text-align:left">
            <h1>热门歌单</h1>
          </i-col>
          <i-col span="18">
            <span v-for="(item,index) in hotPlayList" style="cursor:pointer;padding-left:0.7rem">
              <span class="text-hover">{{item}}</span>
            <span v-if="index!=hotPlayList.length-1" style="padding-left:0.7rem">|</span>
            </span>
          </i-col>
          <i-col span="2" style="text-align:right">
            <a>更多</a>
          </i-col>
        </i-row>
        <div style="margin-bottom:3rem">
          <i-row :gutter="32" :key="s.id" v-for="s in 2" style="margin-bottom:2rem">
            <i-col span="6" :key="n.id" v-for="n in 4">
              <div class="min-card card-hover" style="height:150px;background:#f0f0f0">
              </div>
              <div style="margin-top:.5rem">
                一曲肝肠断，天涯何处觅知音
              </div>
            </i-col>
          </i-row>
        </div>
        <i-row style="margin-bottom:2rem;line-height:2rem">
          <i-col span="4" style="text-align:left">
            <h1>新碟上线</h1>
          </i-col>
          <i-col span="18">
            <span v-for="(item,index) in hotPlayList" style="cursor:pointer;padding-left:0.7rem">
              <span class="text-hover">{{item}}</span>
            <span v-if="index!=hotPlayList.length-1" style="padding-left:0.7rem">|</span>
            </span>
          </i-col>
          <i-col span="2" style="text-align:right">
            <a>更多</a>
          </i-col>
        </i-row>
        <i-row :gutter="32" :key="s.id" v-for="s in 2" style="margin-bottom:2rem">
          <i-col span="6" :key="n.id" v-for="n in 4">
            <div class="min-card card-hover" style="height:150px;background:#f0f0f0">
            </div>
            <div style="margin-top:.5rem">
              一曲肝肠断，天涯何处觅知音
            </div>
          </i-col>
        </i-row>
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
              &nbsp;&nbsp; 
              {{item.artist.name}} - {{item.music.name}}
            </div>
          </i-col>
          <i-col span="2">
            <mu-badge :content="''+(10-index)*10" color="#41464b" />
          </i-col>
        </i-row>
      </i-col>
    </i-row>

  </div>
</template>

<script>
  import api from '../axios'
  export default {
    data() {
      return {
        msg: 'TIFI MUSIC - 大道至简 悟在天成',
        hotPlayList: ['华语', '流行', '老歌', '粤语', '英文', '摇滚', '民谣'],
        playTop: []
      }
    },
    methods: {
      async getMusics() {
        let data = await api.retrieveMusic()
        if (data.code===200) {
          this.playTop = data.data
        }
      },
      playMusic(item) {
        this.$store.commit('playMuisc', {
          url: 'http://localhost:5000' + item.music.url,
          artist:item.artist,
          album:item.album,
          music:item.music
        })
      }
    },
    mounted() {
      this.getMusics()
    }
  }

</script>
