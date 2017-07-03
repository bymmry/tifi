<template>
  <div>
    <div v-if="loading" class="text-center" style="padding-top:200px">
      <mu-circular-progress :size="40" />
    </div>
    <div v-else>
      <br>
      <div>
        <div class="card-title">
          <div class="title-border"></div>
          热门单曲
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in hotSong">
          <mu-col @click.native="play(item)" width="50" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2" :key="index" v-for="item, index in hotSong">
            <mu-card>
              <mu-card-media :subTitle="item.artists[0].name">
                <img :src="item.album.picUrl" />
              </mu-card-media>
            </mu-card>
            <div class="card-conten">
              {{item.name}}
            </div>
          </mu-col>
        </mu-row>
      </div>

      <div>
        <div class="card-title">
          <div class="title-border"></div>
          新歌速推
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in newTopSong">
          <mu-col @click.native="play(item)" width="50" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2" :key="index" v-for="item, index in newTopSong">
            <mu-card>
              <mu-card-media :subTitle="item.artists[0].name">
                <img :src="item.album.picUrl" />
              </mu-card-media>
            </mu-card>
            <div class="card-conten">
              {{item.name}}
            </div>
          </mu-col>
        </mu-row>
      </div>

      <div>
        <div class="card-title">
          <div class="title-border"></div>
          新碟上架
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in newAlbum">
          <mu-col @click.native="$store.commit('showInfo',{type:1,info:item})" width="50" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2"
            :key="index" v-for="item, index in newAlbum">
            <mu-card>
              <mu-card-media :subTitle="item.artist.name">
                <img :src="item.picUrl" />
              </mu-card-media>
            </mu-card>
            <div class="card-conten">
              {{item.name}}
            </div>
          </mu-col>
        </mu-row>
      </div>
    </div>
  </div>
</template>

<script>
  import wyApi from '../../wyApi'
  export default {
    data() {
      return {
        personalized: [],
        hotSong: [],
        newTopSong: [],
        newAlbum: [],
        loading: true,
      }
    },
    computed: {

    },
    methods: {
      getPersonalized() {
        wyApi.getToplist(1).then((data) => {
          if (data.code == 200) {
            this.hotSong = data.result.tracks
          }
        }).then(() => {
          wyApi.getToplist(0).then((data) => {
            if (data.code == 200) {
              this.newTopSong = data.result.tracks
            }
          })
        }).then(() => {
          wyApi.getNewAlbum(6).then((data) => {
            if (data.code == 200) {
              this.newAlbum = data.albums
            }
          })
        }).then(() => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        })
      },
      play(item) {
        let musicData = {
          url: item.mp3Url,
          cover: item.album.picUrl,
          artist: item.artists[0].name,
          name: item.name,
          wyID: item.id,
          needPost:true
        }
        this.$store.dispatch('playMusic', musicData)
        // this.$store.commit('playMusic', musicData)
      }
    },
    mounted() {
      this.getPersonalized()
    }
  }

</script>
