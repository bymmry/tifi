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
          推荐歌单
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<5" :key="rowIndex" v-for="row, rowIndex in personalized">
          <mu-col @click.native="$store.commit('showInfo',{type:0,info:item})" width="50" v-for="item, index in personalized" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2" :key="index">
            <mu-card>
              <mu-card-media :subTitle="item.copywriter+' - '+item.trackCount+'首'">
                <img :src="item.picUrl" />
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
          精选歌单
        </div>
        <br>
        <mu-row gutter v-if="rowIndex<10" :key="rowIndex" v-for="row, rowIndex in playlist">
          <mu-col @click.native="$store.commit('showInfo',{type:0,info:item})" width="50" v-for="item, index in playlist" v-if="index>=rowIndex*2&&index<(rowIndex+1)*2" :key="index">
            <mu-card>
              <mu-card-media :subTitle="'by - '+item.creator.nickname+' - '+item.trackCount+'首'">
                <img :src="item.coverImgUrl" />
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
        playlist: [],
        loading: true,
      }
    },
    computed: {

    },
    methods: {
      getPersonalized() {
        wyApi.personalized().then((data) => {
          if (data.code == 200) {
              this.personalized = data.result
          }
        }).then(() => {
          wyApi.getHotPlaylistByUser().then((data) => {
            if (data.code == 200) {
              this.playlist = data.playlists
            }
          })
        }).then(() => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        })
      }
    },
    mounted() {
      this.getPersonalized()
    }
  }

</script>
