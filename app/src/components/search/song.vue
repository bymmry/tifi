<style scoped>
  .active {
    background: #f0f0f0
  }

</style>

<template>
  <div>
    <br>
    <div class="card-title">
      <div class="title-border"></div>
      {{typeVal}} <span v-if="!isNull" style="color:#bbb;font-size:14px">得到 {{count}} 条结果</span>
    </div>
    <mu-divider/>
    <div v-if="loading" class="text-center" style="padding-top:200px">
      <div v-if="isNull">
        可惜!还没有输入内容
      </div>
      <div v-else>
        <div v-if="noResult">
          可惜!没有搜索到相关{{typeVal}}
        </div>
        <mu-circular-progress :size="40" v-else />
      </div>
    </div>
    <div v-else>
      <mu-list style="font-size:14px">
        <mu-list-item @click.native="play(item)" :key="index" :class="{active:(index+1)%2!==0}" v-for="item,index in result">
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
            {{index+1}} {{item.name}} - {{item.artists[0].name}}
          </div>
          <div slot="right">
            <svg t="1494778069842" class="icon" style="padding-bottom:3px;font-size:20px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3150">
              <path d="M936.5504 332.5952c-23.2448-54.8864-56.4224-104.1408-98.7136-146.432-42.2912-42.2912-91.5456-75.5712-146.432-98.7136C634.5728 63.3856 574.1568 51.2 512 51.2S389.4272 63.3856 332.5952 87.4496c-54.8864 23.2448-104.1408 56.4224-146.432 98.7136-42.2912 42.2912-75.5712 91.5456-98.7136 146.432C63.3856 389.4272 51.2 449.8432 51.2 512c0 62.1568 12.1856 122.5728 36.2496 179.4048 23.2448 54.8864 56.4224 104.1408 98.7136 146.432s91.5456 75.5712 146.432 98.7136C389.4272 960.6144 449.8432 972.8 512 972.8c51.3024 0 101.5808-8.3968 149.7088-24.8832 46.4896-15.9744 89.9072-39.2192 129.1264-69.0176 11.776-9.0112 23.2448-18.6368 34.0992-28.672 12.4928-11.5712 13.2096-30.9248 1.6384-43.4176s-30.9248-13.2096-43.4176-1.6384c-9.4208 8.704-19.3536 17.1008-29.5936 24.8832-69.9392 53.248-153.4976 81.408-241.664 81.408-220.2624 0-399.36-179.2-399.36-399.36 0-220.16 179.2-399.36 399.36-399.36s399.36 179.2 399.36 399.36c0 48.3328-8.4992 95.4368-25.2928 140.288-5.9392 15.872 2.048 33.5872 17.92 39.5264 15.872 5.9392 33.5872-2.048 39.5264-17.92 19.3536-51.712 29.184-106.0864 29.184-161.792C972.8 449.8432 960.6144 389.4272 936.5504 332.5952z"
                p-id="3151"></path>
              <path d="M512 772.1984c16.9984 0 30.72-13.7216 30.72-30.72L542.72 537.088l193.1264 0c16.9984 0 30.72-13.7216 30.72-30.72s-13.7216-30.72-30.72-30.72L542.72 475.648 542.72 282.5216c0-16.9984-13.7216-30.72-30.72-30.72s-30.72 13.7216-30.72 30.72l0 193.1264L288.1536 475.648c-16.9984 0-30.72 13.7216-30.72 30.72s13.7216 30.72 30.72 30.72L481.28 537.088l0 204.4928C481.28 758.4768 495.0016 772.1984 512 772.1984z"
                p-id="3152"></path>
            </svg>
          </div>
        </mu-list-item>
        <mu-list-item v-if="index==result.length-1 && index!=count-1" style="border-top:1px solid #f0f0f0" @click.native="getMoreResult"
          :key="index" v-for="item,index in result">
          <div slot="title" class="text-center">
            <mu-circular-progress :size="20" v-if="moreloading" />
            <span v-else>
              <div v-if="noMore">
                没有更多了!
              </div>
              <div v-else>
                显示更多...
              </div>
            </span>
          </div>
        </mu-list-item>

      </mu-list>
    </div>
  </div>
</template>
<script>
  import wyApi from '../../wyApi'
  export default {
    data() {
      return {
        isNull: true,
        noResult: false,
        noMore: false,
        loading: true,
        count: '',
        result: [],
        key: '',
        searchType: '',
        moreloading: false,
        moreTimes: 0,
        limit:50
      }
    },
    methods: {
      play(item) {
        let musicData = {
          url: item.mp3Url,
          cover: item.album.picUrl,
          artist: item.artists[0].name,
          name: item.name,
          wyID: item.id
        }
        this.$store.commit('playMusic', musicData)
      },

      getResult(key, searchType, offset = 0) {
        function isNull(str) {
          if (str == "") return true
          let regu = "^[ ]+$"
          let re = new RegExp(regu)
          return re.test(str)
        }
        if (isNull(key)) {
          this.isNull = true
        } else {
          this.isNull = false
          wyApi.search(key, searchType, offset, this.limit).then((data) => {
            if (data.code == 200) {
              if (data.result.hasOwnProperty('songs')) {
                this.result = data.result.songs
                this.key = key
                this.searchType = searchType
                this.count = data.result.songCount
                this.noResult = false
                this.loading = false
              } else {
                this.loading = true
                this.count = 0
                this.noResult = true
              }    
            }
          })
        }
      },
      getMoreResult() {
        this.moreTimes = this.moreTimes + 1
        this.moreloading = true
        wyApi.search(this.key, this.searchType, this.moreTimes,this.limit).then((data) => {
          if (data.code == 200) {
            if (data.result.hasOwnProperty('songs')) {
              data.result.songs.forEach((item) => {
                this.result.push(item)
              })
              this.noMore = false
            } else {
              this.noMore = true
            }
            this.moreloading = false
          }
        })
      }
    },
    computed: {
      typeVal() {
        let type = this.$store.state.search.type
        let key = this.$store.state.search.key
        let searchType = 1
        if (type == 0) {
          searchType = 1
        }
        if (type == 1) {
          searchType = 100
        }
        if (type == 2) {
          searchType = 1000
        }
        if (type == 3) {
          searchType = 10
        }
        this.getResult(key, searchType)
        return this.$store.state.search.typeVal[type]
      }
    }
  }

</script>
