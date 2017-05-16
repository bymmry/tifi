<template>
  <div>
    <div v-if="loading" class="text-center" style="padding-top:200px">
      <mu-circular-progress :size="40" />
    </div>
    <div v-else>
      <br>
      <div class="card-title">
        <div class="title-border"></div>
        热门歌手 Top100
      </div>
      <br>
      <mu-grid-list class="gridlist-demo">
        <mu-grid-tile @click.native="$store.commit('showInfo',{type:2,info:item})" v-for="item, index in artist" :key="index">
          <img class="card" style="width:100%" :src="item.img1v1Url" />
          <div class="ellipsis" style="font-size:12px" slot="title">{{index+1}}.{{item.name}}&nbsp;&nbsp;{{item.albumSize}}张专辑&nbsp;&nbsp;{{item.musicSize}}首歌</div>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
  </div>
</template>

<script>
  import wyApi from '../../wyApi'
  export default {
    data() {
      return {
        personalized: [],
        artist: [],
        loading: true,
      }
    },
    computed: {

    },
    methods: {
      getPersonalized() {
        wyApi.getHotArtist().then((data) => {
          if (data.code == 200) {
            this.artist = data.artists
          }
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
