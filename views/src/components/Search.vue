<style scoped>
  .search-bg {
    position: absolute;
    background: #f0f0f0;
    top: 0;
    height: calc(150px + 9rem);
    z-index: -1;
    width: 100%;
    left: 0
  }

  .search-input {
    background: #fff;
    width: 100%;
    border: none;
    outline: none;
    height: 50px;
    font-size: 20px;
    padding: 0 50px;
  }

  .search-icon {
    color: #bababa;
    font-size: 24px;
    position: absolute;
    top: 13px;
    right: 20px;
    cursor: pointer;
    z-index: 1
  }

  .search-mic {
    color: #bababa;
    font-size: 24px;
    position: absolute;
    top: 13px;
    left: 20px;
    cursor: pointer;
    z-index: 1
  }

  .song-result-content {
    line-height: 40px
  }

  .song-result-content.active {
    background: #f0f0f0
  }

  .album-result-content {
    line-height: 50px
  }
  .album-result-content.active {
    background: #f0f0f0
  }

</style>
<template lang="">
  <div>
    <div class="search-bg">
    </div>
    <i-row>
      <i-col span="18" offset="3">
        <input @keyup.enter="search" type="text" v-model="keywords" placeholder="今天想听点什么..." class="min-card search-input" />
        <i-icon @click.native="micPopup=!micPopup" type="mic-a" class="search-mic"></i-icon>
        <i-icon @click.native="search" type="search" class="search-icon"></i-icon>
        <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
          <mic-popup v-if="micPopup" @close="closeMic"></mic-popup>
        </transition>
      </i-col>
    </i-row>
    <br/><br/><br/>
    <!--<audio controls src="http://127.0.0.1:5000/mp3/hongzhuang.mp3"></audio>-->
    <i-row>
      <i-col span="24">
        <div class="min-card card text-center" style="line-height:60px;height:60px">
          <tag @click.native="searchDetil(index)" :key="index" v-for="(item,index) in type" :color="item.color" type="dot" style="margin:0 1rem">
            {{item.str}}{{index==activeType &&  resultShow? '('+result.count+')个结果':''}}
          </tag>
        </div>
      </i-col>
    </i-row>
    <br/><br/>
    <div class="card" style="min-height:400px;padding:50px">
      <div v-if="type[activeType].code===1&&resultShow">
        <div class="song-result-content text-center" :class="{'active':index%2==0}" v-for="(item,index) in result.data">
          <i-row>
            <i-col span="3">
              <i-icon @click.native="wyPlayMusic(item)" style="cursor:pointer" type="play"></i-icon>
            </i-col>
            <i-col span="7">
              {{item.name}}
            </i-col>
            <i-col span="7">
              {{item.artists[0].name}}
            </i-col>
            <i-col span="7">
              {{item.album.name}}
            </i-col>
          </i-row>
        </div>
      </div>
      <div v-if="type[activeType].code===10&&resultShow">
        <div class="album-result-content text-center" :class="{'active':index%2==0}" v-for="(item,index) in result.data">
          <i-row>
            <i-col span="3">
              <div style="height:40px;padding-top:5px">
                <img :src="item.picUrl" style="height:40px" class="min-card">
              </div>
            </i-col>
            <i-col span="7">
              {{item.name}}
            </i-col>
            <i-col span="7">
              {{item.artists[0].name}}
            </i-col>
            <i-col span="7">
              {{formatTime(item.publishTime)}}
            </i-col>
          </i-row>
        </div>
      </div>
      <div v-if="type[activeType].code===100&&resultShow">
        <div class="album-result-content text-center" :class="{'active':index%2==0}" v-for="(item,index) in result.data">
          <i-row>
            <i-col span="3">
              <div style="height:40px;padding-top:5px">
                <img :src="item.img1v1Url" style="height:40px" class="min-card">
              </div>
            </i-col>
            <i-col span="7">
              {{item.name}}
            </i-col>
            <i-col span="7">
              专辑数:{{item.albumSize}}
            </i-col>
          </i-row>
        </div>
      </div>
      <div v-if="type[activeType].code===1000&&resultShow">
        <div class="album-result-content text-center" :class="{'active':index%2==0}" v-for="(item,index) in result.data">
          <i-row>
            <i-col span="3">
              <div style="height:40px;padding-top:5px">
                <img :src="item.coverImgUrl" style="height:40px" class="min-card">
              </div>
            </i-col>
            <i-col span="7">
              {{item.name}}
            </i-col>
            <i-col span="7">
              歌曲数:{{item.trackCount}}
            </i-col>
            <i-col span="7">
              播放数:{{item.playCount}}
            </i-col>
          </i-row>
        </div>
      </div>
      <!--<i-row :key="m.id" v-for="m in 3" style="margin-bottom:3rem">
        <i-col span="6" :key="n.id" v-for="n in 4">
          <div class="text-center" style="width:150px;margin:0 auto">
            <div class="min-card card-hover" style="height:150px;width:150px;background:#f0f0f0;border-radius: 50%">
            </div>
            <br/> 朴信惠
            <br/> 歌曲:56 专辑:8
          </div>
        </i-col>
      </i-row>-->
      <mu-pagination v-if="resultShow" style="justify-content: center" @pageChange="pageChange"  :total="result.count" :current="currPage">
      </mu-pagination>
    </div>
    <div style="height:80px"></div>
  </div>
</template>

<script>
  import api from '../axios'
  import wyApi from '../wyApi'
  import MicPopup from './MicPopup'
  import moment from 'moment'
  moment.locale('zh-cn')
  export default {
    components: {
      MicPopup
    },
    data() {
      return {
        micPopup: false,
        micToggle: false,
        micPercent: 0,
        micText: '开始识别',
        keywords: '',
        activeType: 0,
        type: [{
          code: 1,
          val: 'song',
          str: '歌曲',
          color: 'blue'
        }, {
          code: 10,
          val: 'album',
          str: '专辑',
          color: 'green'
        }, {
          code: 100,
          val: 'artist',
          str: '歌手',
          color: 'red'
        }, {
          code: 1000,
          val: 'playlist',
          str: '歌单',
          color: 'yellow'
        }],
        currPage: 1,
        resultShow: false,
        result: {
          count: 10,
          data: []
        }
      }
    },
    watch: {

    },
    methods: {
      closeMic(val){
        this.micPopup = false
      },
      pageChange(val){
        this.currPage = val
        console.log(val)
        this.search()
      },
      search() {
        // 1: 单曲
        // 10: 专辑
        // 100: 歌手
        // 1000: 歌单
        this.resultShow = false
        let keywords = this.keywords
        let type = this.type[this.activeType]
        wyApi.search(keywords, type.code, (this.currPage - 1) * 20).then((data) => {
          if (data.code === 200) {
            this.result['count'] = data.result[type.val + 'Count']
            this.result['data'] = data.result[type.val + 's']
            // console.log(this.result)
            this.resultShow = true
          }
        })
      },
      searchDetil(index) {
        this.activeType = index
        this.currPage = 1
        this.search()
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
      },
      formatTime(val) {
        return moment(val).format('YYYY 年')
      }
    },
    mounted() {}
  }

</script>
