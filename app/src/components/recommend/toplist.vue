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
          上升最快
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in personalized">
          <mu-col @click.native="play(item)" width="50" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2" :key="index" v-for="item, index in personalized">
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
          KTV榜
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in ktvTop">
          <mu-col @click.native="play(item)" width="50" v-for="item, index in ktvTop" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2"
            :key="index">
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
          华语金曲榜
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in chinaTopSong">
          <mu-col @click.native="play(item)" width="50" v-for="item, index in chinaTopSong" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2"
            :key="index">
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
          美国Billboard周榜
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in Billboard">
          <mu-col @click.native="play(item)" width="50" v-for="item, index in Billboard" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2"
            :key="index">
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
    </div>
  </div>
</template>

<script>
  import wyApi from '../../wyApi'
  export default {
    data() {
      return {
        personalized: [],
        ktvTop: [],
        loading: true,
        chinaTopSong: [],
        Billboard: []
      }
    },
    computed: {

    },
    methods: {
      getPersonalized() {
        wyApi.getToplist(3).then((data) => {
          this.personalized = data.result.tracks
        }).then(() => {
          wyApi.getToplist(7).then((data) => {
            this.ktvTop = data.result.tracks
          })
        }).then(() => {
          wyApi.getToplist(17).then((data) => {
            this.chinaTopSong = data.result.tracks
          })
        }).then(() => {
          wyApi.getToplist(6).then((data) => {
            this.Billboard = data.result.tracks
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
          wyID: item.id
        }
        this.$store.commit('playMusic', musicData)
      }
    },
    mounted() {
      this.getPersonalized()
    }
  }

</script>
