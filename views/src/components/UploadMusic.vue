<style lang="" scoped>
.g-upload {
  padding: 1rem;
  margin: 0 auto;
  width: 800px;
  text-align: center;
}
</style>
<template lang="">
<div>
  <div class="g-upload card card3">
    <a class="file card card3" style="font-size:1rem;width:100px">
				确认上传
				<input  type="file" @change="upload" />
			</a>
  </div>
</div>
</template>
<script lang="">
import api from '../axios.js'
export default {
  data() {
    return {
      musicModel: [{
        singer: '',
        name: '',
        album: '',
        categories: '',
        bps: ''
      }]
    }
  },
  methods: {
    upload(e) {
      let uploadFile = e.srcElement || e.target;
      let formdata = new FormData();
      for (let i = 0; i < uploadFile.files.length; i++) {
        formdata.append("music", uploadFile.files[i]);
      }
      api.uploadMusic(formdata)
    }
  }
}
</script>
