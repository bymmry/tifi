<style lang="" scoped>
  .g-upload {
    padding: 1rem;
    margin: 0 auto;
    width: 100%;
  }

</style>
<template lang="">
  <div>
    <div class="g-upload card card3">
      <i-row>
        <i-col span="8">
          <div style="font-size:15px">
            添加歌手信息
          </div>
          <br/>
          <i-row>
            <i-col span="18">
              <mu-text-field v-model="search" hintText="搜索歌手名" fullWidth/>
            </i-col>
            <i-col span="6">
              <button @click="searchArtist" class="c-btn card">网易搜索</button>
            </i-col>
          </i-row>
          <div v-for="item in artist.artists">
            <i-row>
              <i-col span="10">
                <mu-text-field value="id" fullWidth/>
              </i-col>
              <i-col span="12" offset="2">
                <mu-text-field :value="item.id" fullWidth/>
              </i-col>
            </i-row>
            <i-row>
              <i-col span="10">
                <mu-text-field value="name" fullWidth/>
              </i-col>
              <i-col span="12" offset="2">
                <mu-text-field :value="item.name" fullWidth/>
              </i-col>
            </i-row>
            <i-row>
              <i-col span="10">
                <mu-text-field value="专辑数量" fullWidth/>
              </i-col>
              <i-col span="12" offset="2">
                <mu-text-field :value="item.albumSize" fullWidth/>
              </i-col>
            </i-row>
            <i-row>
              <i-col span="10">
                <mu-text-field value="歌手封面" fullWidth/>
              </i-col>
              <i-col span="12" offset="2">
                <img style="width:150px" :src="item.img1v1Url">
              </i-col>
            </i-row>
            <br/>
            <div class="text-center">
              <button @click="createArtist(item)" class="c-btn card">添加歌手</button>
            </div>
          </div>
        </i-col>
        <i-col span="8">
          <div style="font-size:15px">
            添加专辑信息
          </div>
          <br/>
          <i-row>
            <i-col span="18">
              <mu-text-field v-model="artistID" hintText="搜索歌手id" fullWidth/>
            </i-col>
            <i-col span="6">
              <button @click="searchAlbum" class="c-btn card">网易搜索</button>
            </i-col>
          </i-row>
          <div style="height:325px;overflow:auto">
            <i-row v-for="item in album" style="padding-bottom:.5rem">
              <i-col span="8">
                {{item.id}}
              </i-col>
              <i-col span="16">
                {{item.name}}
              </i-col>
              <img @click="albumID=item.id" style="width:150px" :src="item.picUrl" alt="">
            </i-row>
          </div>
          <br/>
          <div class="text-center">
            <button class="c-btn card">添加专辑</button>
          </div>
        </i-col>
        <i-col span="8">
          <div style="font-size:15px">
            添加歌曲信息
          </div>
          <br/>
          <i-row>
            <i-col span="18">
              <mu-text-field v-model="albumID" hintText="搜索专辑id" fullWidth/>
            </i-col>
            <i-col span="6">
              <button @click="searchSong" class="c-btn card">网易搜索</button>
            </i-col>
          </i-row>
          <div style="height:322px;overflow:auto">
            <i-row v-for="item in song" style="padding-bottom:.5rem">
              <i-col span="8">
                {{item.id}}
              </i-col>
              <i-col span="16">
                {{item.name}}
              </i-col>
            </i-row>
          </div>
          <br/>
          <div class="text-center">
            <button class="c-btn card">添加歌曲</button>
          </div>
        </i-col>
      </i-row>
      <br/><br/><br/>
      <div class="text-center">
        <h2>上传音乐文件</h2>
        <br/>
        <a class="file card card3" style="font-size:1rem;width:100px">
				  确认上传
			    <input  type="file" @change="upload" />
		    </a>
      </div>
    </div>
  </div>
</template>
<script lang="">
  import api from '../axios.js'
  import wyApi from '../wyApi.js'
  export default {
    data() {
      return {
        search: '',
        artist: '',
        artistID: '',
        album: '',
        albumID: '',
        song: ''
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
      },
      async searchArtist() {
        let postback = await wyApi.search(this.search)
        this.artist = postback.result
        this.artistID = this.artist.artists[0].id
      },
      async searchAlbum() {
        let postback = await wyApi.getAlbum(this.artistID)
        this.album = postback.hotAlbums
      },
      async searchSong() {
        let postback = await wyApi.getSong(this.albumID)
        this.song = postback.songs
      },
      async createArtist(data){
        let music = {
          wyID:data.id,
          name:data.name,
          picUrl:data.picUrl
        }
        music.introduction = await wyApi.getArtistDesc(data.id)
        api.createArtist(music)
      }
    }
  }

</script>
