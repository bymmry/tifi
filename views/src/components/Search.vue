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
          <tag v-if="item.color" @click.native="searchDetil(index)" :key="index" v-for="(item,index) in type" :color="item.color" type="dot"
            style="margin:0 1rem">
            {{item.str}}{{index==activeType && resultShow? '('+result.count+')个结果':''}}
          </tag>
          <tag v-if="index==4" @click.native="searchDetil(index)" v-for="(item,index) in type" :key="index" type="dot" style="margin:0 1rem">
            {{item.str}}{{index==activeType && resultShow? '('+result.count+')个结果':''}}
          </tag>
        </div>
      </i-col>
    </i-row>
    <br/><br/>
    <div class="card" style="min-height:400px;padding:50px">
      <div v-if="type[activeType].code===1&&resultShow">
        <div class="song-result-content text-center" :class="{'active':index%2==0}" v-for="(item,index) in result.data">
          <i-row v-if="index==0" style="background:#fff">
            <i-col span="24">
              <i-row>
                <i-col span="2">
                  &nbsp;
                </i-col>
                <i-col span="4">
                  歌手名
                </i-col>
                <i-col span="10">
                  歌曲名
                </i-col>
                <i-col span="8">
                  所属专辑
                </i-col>
              </i-row>
              <div class="dir" style="margin-bottom:0"></div>
            </i-col>
          </i-row>
          <i-row>
            <i-col span="2">
              <i-icon @click.native="wyPlayMusic(item)" style="cursor:pointer" type="play"></i-icon>
            </i-col>
            <i-col span="4">
              <!--<div class="ellipsis">-->
              {{item.artists[0].name}}
              <!--</div>-->
            </i-col>
            <i-col span="10">
              <!--<div class="ellipsis">-->
              {{item.name}}
              <!--</div>-->
            </i-col>
            <i-col span="8">
              <!--<div class="ellipsis">-->
              {{item.album.name}}
              <!--</div>-->
            </i-col>
          </i-row>
        </div>
        <br><br>
      </div>
      <div v-if="type[activeType].code===10&&resultShow">
        <i-row>
          <i-col span="22" offset="1">
            <i-row class="text-center" :gutter="64" :key="row" v-for="(item,row) in result.data">
              <i-col span="6" v-if="row*4<=col && col<(row+1)*4" :key="col" v-for="(item,col) in result.data">
                <div style="height:150px;margin-bottom:.5rem">
                  <img @click="$store.commit('router',{path:'/album',id:item.id})" :src="item.picUrl" style="height:150px;width:100%" class="card card-hover">
                </div>
                <div style="font-size:13px">{{item.name}}</div>
                <div style="font-size:12px;color:#bbb">{{item.artist.name}} - {{formatTime(item.publishTime)}}</div>
                <br>
              </i-col>
            </i-row>
          </i-col>
        </i-row>
        <br><br>
      </div>
      <div v-if="type[activeType].code===100&&resultShow">
        <i-row>
          <i-col span="22" offset="1">
            <i-row :gutter="64" class="album-result-content text-center" :key="row" v-for="(rowItem,row) in result.data">
              <i-col span="6" v-if="row*4<=col && col<(row+1)*4" :key="col" v-for="(item,col) in result.data">
                <div class="cursor" style="height:150px">
                  <img @click="$store.commit('router',{path:'/artist',id:item.id})" :src="item.img1v1Url" style="height:150px;width:100%" class="card card-hover">
                </div>
                <div>{{item.name}}</div>
              </i-col>
            </i-row>
          </i-col>
        </i-row>
        <br><br>
      </div>
      <div v-if="type[activeType].code===1000&&resultShow">
        <i-row>
          <i-col span="22" offset="1">
            <i-row class="text-center" :gutter="64" :key="row" v-for="(item,row) in result.data">
              <i-col span="6" v-if="row*4<=col && col<(row+1)*4" :key="col" v-for="(item,col) in result.data">
                <div style="height:150px;margin-bottom:.5rem">
                  <img @click="$store.commit('router',{path:'/playlist',id:item.id})" :src="item.coverImgUrl" style="height:150px;width:100%"
                    class="card card-hover">
                </div>
                <div style="font-size:13px">{{item.name}}</div>
                <div style="font-size:12px;color:#bbb">
                  {{item.trackCount}}首 - {{item.playCount}}次播放
                </div>
                <br>
              </i-col>
            </i-row>
          </i-col>
        </i-row>
        <br><br>
      </div>
      <div v-if="type[activeType].code===1004&&resultShow">
        <i-row class="text-center" :gutter="64" :key="row" v-for="(item,row) in result.data">
          <i-col span="6" v-if="row*4<=col && col<(row+1)*4" :key="col" v-for="(item,col) in result.data">
            <div style="height:100px;margin-bottom:.5rem">
              <img @click="$store.commit('router',{id:item.id,path:'/playMv'})" :src="item.cover" style="height:100px;width:100%" class="card card-hover">
            </div>
            <div style="font-size:13px">{{item.name}}</div>
            <div style="font-size:12px;color:#bbb">
              {{item.artistName}} - {{formatTimeMi(item.duration/1000)}}
            </div>
            <br>
          </i-col>
        </i-row>
        <br><br>
      </div>
      <mu-pagination v-if="resultShow" style="justify-content: center" @pageChange="pageChange" :total="result.count" :current="currPage"
        :defaultPageSize="pageSize">
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
        }, {
          code: 1004,
          val: 'mv',
          str: 'MV',
        }],
        currPage: 1,
        resultShow: false,
        result: {
          count: 10,
          data: []
        },
        pageSize: 10
      }
    },
    watch: {

    },
    methods: {
      closeMic(val) {
        this.micPopup = false
      },
      pageChange(val) {
        this.currPage = val
        console.log(val)
        this.search()
      },
      search() {
        // 1: 单曲
        // 10: 专辑
        // 100: 歌手
        // 1000: 歌单
        //1004: mv
        this.resultShow = false
        let keywords = this.keywords
        let type = this.type[this.activeType]
        if (type.code == 10) {
          this.pageSize = 12
        }
        if (type.code == 100) {
          this.pageSize = 12
        }
        if (type.code == 1004) {
          this.pageSize = 12
        }
        let offset = (this.currPage - 1) * this.pageSize
        wyApi.search(keywords, type.code, offset, this.pageSize).then((data) => {
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
        this.$store.commit('playMusic', musicData)
      },
      formatTime(val) {
        return moment(val).format('YYYY 年')
      },
      formatTimeMi(time) {
        let minute = parseInt(time / 60)
        if (minute < 10) {
          minute = '0' + minute
        }
        let second = (time - minute * 60).toFixed(0)
        if (second < 10) {
          second = '0' + second
        }
        return minute + ':' + second
      },
      fixedPlayLeft(val) {
        this.playLeft = val
      },
    },
    mounted() {}
  }

</script>
