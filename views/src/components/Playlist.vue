<template>
  <div>
    <wy-playlist-info v-if="playlistShow" :playlist="playlist"></wy-playlist-info>
    <div v-else style="position:relative;height:300px">
        <spin fix size="large"></spin>
    </div>
  </div>
</template>
<script>
  import wyPlaylistInfo from './wyPlaylistInfo.vue'
  import wyApi from '../wyApi.js'
  export default {
    components: {
      wyPlaylistInfo
    },
    data() {
      return {
        playlistShow: false,
        playlist: {}
      }
    },
    mounted() {
      wyApi.getPlaylistDetail(sessionStorage.getItem('playlistID')).then((data) => {
        console.log(data)
        if(data.code == 200){
            this.playlist = data.playlist
            this.playlistShow = true
        }
      })
    }
  }

</script>
