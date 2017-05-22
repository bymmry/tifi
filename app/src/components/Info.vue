<style scoped>
  .info-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: #fff;
    padding: 10px
  }

  .active {
    background: #f0f0f0
  }

</style>
<template>
  <div class="info-box">
    <mu-row gutter style="line-height:40px;font-size:19px">
      <mu-col width="80" class="ellipsis">
        {{data.name}}
      </mu-col>
      <mu-col width="20" class="text-right" @click.native="$store.commit('hideInfo')">
        <svg t="1494498763016" class="icon" style="width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10186">
          <path d="M917.333333 490.666667l-759.146667 0 368.896-368.917333c8.341333-8.341333 8.341333-21.824 0-30.165333-8.341333-8.362667-21.824-8.341333-30.165333 0l-405.312 405.312c-1.984 1.984-3.541333 4.330667-4.629333 6.954667-1.002667 2.432-1.472 5.013333-1.536 7.594667 0 0.192-0.106667 0.362667-0.106667 0.533333s0.106667 0.341333 0.106667 0.512c0.064 2.602667 0.533333 5.184 1.536 7.616 2.176 5.226667 6.314667 9.365333 11.541333 11.541333 2.538667 1.045333 5.205333 1.557333 7.893333 1.6 0.085333 0 0.170667 0.042667 0.256 0.042667l810.666667 0c11.776 0 21.333333-9.536 21.333333-21.333333S929.109333 490.666667 917.333333 490.666667z"
            p-id="10187"></path>
          <path d="M346.069333 721.237333 346.069333 721.237333l-96.32-96.32c-8.341333-8.341333-21.824-8.341333-30.186667 0s-8.341333 21.824 0 30.165333l181.013333 181.013333 0 0 96.32 96.32c8.341333 8.341333 21.824 8.341333 30.186667 0s8.341333-21.824 0-30.165333L346.069333 721.237333z"
            p-id="10188"></path>
        </svg>
      </mu-col>
    </mu-row>
    <mu-row gutter v-if="type!=2" style="line-height:20px">
      <mu-col width="80">
        {{typeStr[type]}} <span style="margin:0 10px">by</span> <span class="text-link">{{data.creator}}</span>
      </mu-col>
    </mu-row>
    <mu-row gutter v-else style="line-height:20px">
      <mu-col width="80">
        歌手
      </mu-col>
    </mu-row>
    <div v-if="loading" class="text-center" style="padding-top:200px">
      <mu-circular-progress :size="40" />
    </div>
    <div v-else style="overflow-y:auto;overflow-x:hidden;padding-right:5px;padding-bottom:50px" :style="{'height':'calc(100vh - '+(type!=2?80:60)+'px)'}">
      <div class="dir"></div>
      <mu-row gutter>
        <mu-col width="60">
          <img :src="data.picUrl" style="width:100%">
        </mu-col>
        <mu-col width="40">
          <div v-for="item, index in data.info">
            <div class="text-left">
              {{item.name}}
            </div>
            <div class="text-right" style="font-size:28px">
              {{item.val}}
            </div>
            <div v-if="index < data.info.length" class="dir"></div>
          </div>
        </mu-col>
      </mu-row>
      <br>
      <mu-row style="font-size:17px">
        <mu-col width="50">
          歌曲详情({{data.songSize}}首)
        </mu-col>
        <mu-col width="50" class="text-right" v-if="type == 0 || type ==1">
          查看评论
        </mu-col>
      </mu-row>
      <div class="dir" style="margin-bottom:0"></div>
      <div>
        <mu-list style="font-size:14px">
          <mu-list-item @click.native="play(item)" :key="index" :class="{active:(index+1)%2!==0}" v-for="item,index in data.song">
            <div slot="left">
              <svg t="1494489248487" class="icon" style="padding-bottom:3px;font-size:20px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373">
                <path d="M513.856 13.312c-276.736 0-500.992 224.256-500.992 500.992 0 77.568 17.6 151.04 49.152 216.704 0 0 0 0.128 0 0.128 0.064 0 0.064 0 0.064 0 0.064 0.32 0.192 0.576 0.32 0.704 0 0 0.064 0 0.128 0 3.456 4.864 13.248 4.032 22.464-0.704 9.472-4.736 13.824-13.632 11.072-19.52-28.288-59.968-44.16-126.72-44.16-197.312 0-255.104 206.784-461.952 461.952-461.952 255.04 0 461.888 206.784 461.888 461.952 0 255.232-206.784 462.08-461.888 462.08-81.408 0-157.888-21.184-224.32-58.176-0.128-0.192-0.256-0.32-0.384-0.448-5.184-3.968-14.656-0.32-21.248 8.256-6.336 8.32-6.08 19.456-1.344 23.744-0.064 0-0.064 0.192-0.192 0.192 73.024 41.536 157.376 65.472 247.488 65.472 276.608 0 500.992-224.384 500.992-501.12C1014.848 237.632 790.528 13.312 513.856 13.312z"
                  p-id="2374"></path>
                <path d="M155.456 836.928m-26.496 0a0.414 0.414 0 1 0 52.992 0 0.414 0.414 0 1 0-52.992 0Z" p-id="2375"></path>
                <path d="M372.992 725.248c0 8 6.848 14.4 15.232 14.4 3.264 0 6.336-1.024 8.832-2.688l358.592-206.976c6.272-2.112 10.944-8.192 10.944-15.488 0-7.36-4.736-13.504-11.264-15.488L398.4 292.8C395.648 290.56 392.128 289.152 388.224 289.152c-8.384 0-15.232 6.464-15.232 14.4 0 1.152 0.192 2.24 0.384 3.264l0 415.104C373.184 723.008 372.992 724.032 372.992 725.248zM412.16 372.16c0-5.376 4.544-9.728 10.304-9.728 2.624 0 5.056 0.96 6.784 2.496l240.832 139.072c4.288 1.344 7.552 5.44 7.552 10.432 0 4.992-3.2 9.024-7.488 10.432l-241.792 139.84c-1.664 1.088-3.712 1.6-5.888 1.6-5.696 0-10.304-4.288-10.304-9.728 0-0.704 0.064-1.344 0.256-2.176L412.416 374.336C412.224 373.632 412.16 372.928 412.16 372.16z"
                  p-id="2376"></path>
              </svg>
            </div>
            <div slot="title" class="ellipsis">
              <svg t="1494777919068" class="icon" style="padding-bottom:3px;font-size:18px;width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1943">
                <path d="M800.436 471.085h-56.363v199.156h-199.158v56.363h199.158v199.157h56.363v-199.157h199.156v-56.363h-199.156v-199.156z"
                  p-id="1944"></path>
                <path d="M514.191 905.997c0 0-266.877-186.039-372.53-350.613-38.966-60.753-73.855-118.5-73.855-198.288 0-137.777 102.88-249.507 229.809-249.507 93.806 0 161.095 61.108 196.819 148.589v-0.431h0.097c2.66 9.12 10.42 15.771 19.661 15.771 9.272 0 17.032-6.652 19.674-15.771h0.272c35.809-87.222 102.989-148.156 196.663-148.156 126.898 0 229.809 111.734 229.809 249.507 0 55.217-16.719 99.873-39.934 142.277l48.291 35.613c25.793-47.207 47.647-103.554 47.647-174.401 0-173.272-129.843-314.225-289.433-314.225-88.535 0-158.111 44.099-212.289 116.812-54.15-72.736-123.709-116.812-212.291-116.812-159.594 0-289.433 140.952-289.433 314.225 0 103.368 46.503 175.884 83.887 234.145 108.642 169.232 369.072 352.005 380.641 360.886 11.149 8.555 24.18 12.838 37.182 12.838 13.031 0 26.042-4.281 37.176-12.838 2.873-2.203 21.042-15.093 48.392-35.812l-44.020-44.604c-26.015 19.491-42.23 30.798-42.23 30.798v0z"
                  p-id="1945"></path>
              </svg>
              {{item.name}} - {{item.ar[0].name}}
            </div>
            <div slot="right">
              <svg @click.stop="addToSonglist(item)" t="1494778069842" class="icon" style="padding-bottom:4px;font-size:20px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3150">
                <path d="M936.5504 332.5952c-23.2448-54.8864-56.4224-104.1408-98.7136-146.432-42.2912-42.2912-91.5456-75.5712-146.432-98.7136C634.5728 63.3856 574.1568 51.2 512 51.2S389.4272 63.3856 332.5952 87.4496c-54.8864 23.2448-104.1408 56.4224-146.432 98.7136-42.2912 42.2912-75.5712 91.5456-98.7136 146.432C63.3856 389.4272 51.2 449.8432 51.2 512c0 62.1568 12.1856 122.5728 36.2496 179.4048 23.2448 54.8864 56.4224 104.1408 98.7136 146.432s91.5456 75.5712 146.432 98.7136C389.4272 960.6144 449.8432 972.8 512 972.8c51.3024 0 101.5808-8.3968 149.7088-24.8832 46.4896-15.9744 89.9072-39.2192 129.1264-69.0176 11.776-9.0112 23.2448-18.6368 34.0992-28.672 12.4928-11.5712 13.2096-30.9248 1.6384-43.4176s-30.9248-13.2096-43.4176-1.6384c-9.4208 8.704-19.3536 17.1008-29.5936 24.8832-69.9392 53.248-153.4976 81.408-241.664 81.408-220.2624 0-399.36-179.2-399.36-399.36 0-220.16 179.2-399.36 399.36-399.36s399.36 179.2 399.36 399.36c0 48.3328-8.4992 95.4368-25.2928 140.288-5.9392 15.872 2.048 33.5872 17.92 39.5264 15.872 5.9392 33.5872-2.048 39.5264-17.92 19.3536-51.712 29.184-106.0864 29.184-161.792C972.8 449.8432 960.6144 389.4272 936.5504 332.5952z"
                  p-id="3151"></path>
                <path d="M512 772.1984c16.9984 0 30.72-13.7216 30.72-30.72L542.72 537.088l193.1264 0c16.9984 0 30.72-13.7216 30.72-30.72s-13.7216-30.72-30.72-30.72L542.72 475.648 542.72 282.5216c0-16.9984-13.7216-30.72-30.72-30.72s-30.72 13.7216-30.72 30.72l0 193.1264L288.1536 475.648c-16.9984 0-30.72 13.7216-30.72 30.72s13.7216 30.72 30.72 30.72L481.28 537.088l0 204.4928C481.28 758.4768 495.0016 772.1984 512 772.1984z"
                  p-id="3152"></path>
              </svg>
            </div>
          </mu-list-item>
        </mu-list>
      </div>

    </div>

  </div>
</template>
<script>
  import moment from 'moment'
  moment.locale('zh-cn')
  import wyApi from '../wyApi.js'
  export default {
    data() {
      return {
        //0:歌单 1:专辑 2:歌手
        value: 0,
        loading: true,
        typeStr: ['歌单', '专辑', '歌手'],
        data: {
          picUrl: '../assets/logo.png',
          name: '我喜欢的歌曲',
          song: [],
          album: false,
          info: [],
          desc: '无介绍',
          creator: '',
          songSize: 10
        }
      }
    },
    computed: {
      id() {
        return this.$store.state.info.baseInfo.id
      },
      baseInfo() {
        return this.$store.state.info.baseInfo
      },
      type() {
        let baseInfo = this.$store.state.info.baseInfo
        // console.log(baseInfo)
        let type = this.$store.state.info.type
        this.data.name = baseInfo.name
        if (type == 0) {
          this.data.songSize = baseInfo.trackCount
          wyApi.getPlaylistDetail(this.id).then((data) => {
            if (data.code == 200) {
              console.log(data)
              this.data.picUrl = data.playlist.picUrl
              this.data.info = [{
                name: '播放',
                val: data.playlist.playCount
              }, {
                name: '收藏',
                val: data.playlist.subscribedCount
              }, {
                name: '评论',
                val: data.playlist.commentCount
              }]
              this.data.song = data.playlist.tracks
              this.data.creator = data.playlist.creator.nickname
              this.loading = false
            }
          })
        }
        if (type == 1) {
          this.data.picUrl = baseInfo.picUrl
          this.data.songSize = baseInfo.size
          this.data.creator = baseInfo.artist.name
          wyApi.getAlbumInfo(this.id).then((data) => {
            if (data.code == 200) {
              // console.log(data)
              this.data.info = [{
                name: '发行年份',
                val: this.formatTimeForYear(data.album.publishTime)
              }, {
                name: '发行公司',
                val: data.album.company ? data.album.company : '无'
              }, {
                name: '评论',
                val: data.album.info.commentCount
              }]
              this.data.song = data.songs
              this.loading = false
            }
          })
        }

        if (type == 2) {
          this.data.picUrl = baseInfo.picUrl
          wyApi.getArtistSong(this.id).then((data) => {
            if (data.code == 200) {
              this.data.picUrl = data.artist.img1v1Url
              this.data.songSize = '热门' + data.hotSongs.length
              this.data.info = [{
                name: '歌曲',
                val: data.artist.musicSize
              }, {
                name: '专辑',
                val: data.artist.albumSize
              }, {
                name: 'MV',
                val: data.artist.mvSize
              }]
              this.data.song = data.hotSongs
              this.loading = false
            }
          })
        }

        return type
      }
    },
    methods: {
      formatTimeForYear(val) {
        return moment(val).format('YYYY年')
      },
      addToSonglist(item){
        let musicData = {}
        // if (this.type == 1 || this.type == 0) {
        musicData = {
          cover: item.al.picUrl,
          artist: item.ar[0].name,
          name: item.name,
          wyID: item.id,
          needPost:true
        }
        this.$store.commit('addToSonglist', musicData)
        // }
        // wyApi.getMusicUrl(item.id).then((data) => {
        //   if (data.code == 200) {
        //     musicData.url = data.data[0].url
        //     this.$store.commit('addToSonglist', musicData)
        //   }
        // })
      },
      play(item) {
        let musicData = {}
        // if (this.type == 1 || this.type == 0) {
        musicData = {
          cover: item.al.picUrl,
          artist: item.ar[0].name,
          name: item.name,
          wyID: item.id,
          needPost:true
        }
        this.$store.dispatch('playMusic', musicData)
        // }
        // wyApi.getMusicUrl(item.id).then((data) => {
        //   if (data.code == 200) {
        //     musicData.url = data.data[0].url
        //     this.$store.commit('playMusic', musicData)
        //   }
        // })
      }
    }
  }

</script>
