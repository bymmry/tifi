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
      <br>
      <mu-row gutter :key="rowIndex" v-for="row, rowIndex in result">
        <mu-col @click.native="$store.commit('showInfo',{type:0,info:item})" width="50" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2"
          :key="index" v-for="item, index in result">
          <mu-card>
            <mu-card-media :subTitle="'by - '+item.creator.nickname">
              <img :src="item.coverImgUrl" />
            </mu-card-media>
          </mu-card>
          <div class="card-conten">
            {{item.name}}
          </div>
        </mu-col>
      </mu-row>
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
    </div>
  </div>
</template>
<script>
  import wyApi from '../../wyApi'
  export default {
    data() {
      return {
        isNull: true,
        loading: true,
        noResult: false,
        noMore: false,
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
              if (data.result.hasOwnProperty('playlists')) {
                this.result = data.result.playlists
                this.key = key
                this.searchType = searchType
                this.count = data.result.playlistCount
                this.noResult = false
                this.loading = false
              } else {
                this.count = 0
                this.loading = true
                this.noResult = true
              }
            }
          })
        }
      },
      getMoreResult() {
        this.moreTimes = this.moreTimes + 1
        this.moreloading = true
        wyApi.search(this.key, this.searchType, this.moreTimes, this.limit).then((data) => {
          if (data.code == 200) {
            if (data.result.hasOwnProperty('playlists')) {
              data.result.playlists.forEach((item) => {
                this.result.push(item)
              })
              this.noMore = false
            }else{
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
