<template>
  <div>
    <wy-mv-info v-if="mvShow" :mv="mv"></wy-mv-info>
    <div v-else style="position:relative;height:300px">
      <spin fix size="large"></spin>
    </div>
  </div>
</template>
<script>
  import wyMvInfo from './wyMvInfo.vue'
  import wyApi from '../wyApi.js'
  export default {
    components: {
      wyMvInfo
    },
    data() {
      return {
        mvShow: false,
        mv: {}
      }
    },
    mounted() {
      wyApi.getMvInfo(sessionStorage.getItem('mvID')).then((data) => {

        if (data.code == 200) {
          console.log(data)
          this.mv = data.data
          this.mvShow = true
        }
      })
    }
  }

</script>
