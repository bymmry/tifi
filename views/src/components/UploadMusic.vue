<style lang="" scoped>
  .g-upload {
    padding: 1rem;
    margin: 0 auto;
    width: 100%;
  }

  .result-content {
    max-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: auto
  }

</style>
<template lang="">
  <div>
    <modal v-model="searchBox" width="1000" :styles="{top: '2rem'}">
      <div slot="header">
        <h3>
          在网易云音乐中搜索
        </h3>
      </div>
      <div>
        <i-row class="text-center">
          <i-col span="8">
            <h2>歌手</h2>
          </i-col>
          <i-col span="8">
            <h2>专辑</h2>
          </i-col>
          <i-col span="8">
            <h2>歌曲</h2>
          </i-col>
        </i-row>
        <br/>
        <i-row :gutter="32">
          <i-col span="8">
            <i-row>
              <i-col span="18">
                <mu-text-field v-model="searchStr.artist" hintText="搜索歌手名" fullWidth/>
              </i-col>
              <i-col span="6">
                <div @click="searchArtist" class="c-btn card text-center" style="width:100%;height:35px;font-size:16px">
                  搜索
                  <i-icon type="search"></i-icon>
                </div>
              </i-col>
            </i-row>
            <br/>
            <div style="height:300px;overflow:auto">
              <i-row :key="index" v-for="(item,index) in artistOnlineResult">
                <i-col span="16">
                  <img :src="item.img1v1Url" style="width:200px;margin-top:8px">
                </i-col>
                <i-col span="7" offset="1">
                  <div class="dir"></div>
                  <div>
                    <div class="text-left" style="font-size:12px">
                      ID
                    </div>
                    <div class="text-right" style="font-size:18px">
                      {{item.id}}
                    </div>
                  </div>
                  <div class="dir"></div>
                  <div>
                    <div class="text-left" style="font-size:12px">
                      名称
                    </div>
                    <div class="text-right" style="font-size:20px">
                      {{item.name}}
                    </div>
                  </div>
                </i-col>
              </i-row>
            </div>
            <br/><br/>
            <div class="text-center">
              <button class="c-btn card text-center">添加所有歌手</button>
            </div>
          </i-col>
          <i-col span="8">
            <i-row>
              <i-col span="18" @click.native="searchType='byID'">
                <mu-text-field v-model="searchStr.album" hintText="歌手ID/专辑名" fullWidth/>
              </i-col>
              <i-col span="6">
                <Dropdown @on-click="changeSearchType">
                  <div @click="searchAlbum" class="c-btn card text-center" style="width:100%;height:35px;font-size:16px">
                    搜索
                    <i-icon type="search"></i-icon>
                  </div>
                  <Dropdown-menu slot="list">
                    <Dropdown-item name="10">按专辑名</Dropdown-item>
                    <Dropdown-item name="byID">按歌手ID</Dropdown-item>
                  </Dropdown-menu>
                </Dropdown>
              </i-col>
            </i-row>
            <br/>
            <div style="height:300px;overflow-y:auto;overflow-x:hidden">
              <i-row :key="index" v-for="(item,index) in albumOnlineResult">
                <i-col span="16">
                  <img :src="item.picUrl" style="width:200px;margin-top:8px">
                </i-col>
                <i-col span="7" offset="1">
                  <div class="dir"></div>
                  <div>
                    <div class="text-left" style="font-size:12px">
                      ID
                    </div>
                    <div class="text-right" style="font-size:18px">
                      {{item.id}}
                    </div>
                  </div>
                  <div class="dir"></div>
                  <div>
                    <div class="text-left" style="font-size:12px">
                      名称
                    </div>
                    <div class="text-right" style="font-size:20px">
                      {{item.name}}
                    </div>
                  </div>
                </i-col>
              </i-row>
            </div>
            <br/><br/>
            <div class="text-center">
              <button class="c-btn card text-center">添加所有专辑</button>
            </div>
          </i-col>
          <i-col span="8">
            <i-row>
              <i-col span="18" @click.native="searchType='byID'">
                <mu-text-field v-model="searchStr.music" hintText="专辑ID/歌曲名" fullWidth/>
              </i-col>
              <i-col span="6">
                <Dropdown @on-click="changeSearchType">
                  <div @click="searchMusic" class="c-btn card text-center" style="width:100%;height:35px;font-size:16px">
                    搜索
                    <i-icon type="search"></i-icon>
                  </div>
                  <Dropdown-menu slot="list">
                    <Dropdown-item name="1">按歌曲名</Dropdown-item>
                    <Dropdown-item name="byID">按专辑ID</Dropdown-item>
                  </Dropdown-menu>
                </Dropdown>
              </i-col>
            </i-row>
            <br/>
            <div style="height:300px;overflow:auto">
              <i-row class="text-center" style="line-height:40px" :key="index" v-for="(item,index) in musicOnlineResult">
                <i-col span="24">
                  {{item.artists[0].name}} - {{item.name}}
                </i-col>
              </i-row>
            </div>
            <br/><br/>
            <div class="text-center">
              <button class="c-btn card text-center">添加所有歌曲</button>
            </div>
          </i-col>
        </i-row>
      </div>
      <div slot="footer" class="text-center">
        <mu-float-button class="card3" style="font-size:20px">
          +
        </mu-float-button>
      </div>
    </modal>
    <div class="g-upload card card3">
      <div class="text-center">
        <h1>添加音乐</h1>
        <br/><br/>
        <i-row :gutter="32">
          <i-col span="8">
            <h2>歌手信息</h2>
            <br/>
            <i-row :key="index" :gutter="32" v-for="(item,index) in artists">
              <i-col span="12">
                <img v-if="item.picUrl" :src="item.picUrl" style="width:150px">
                <div v-else class="card-file min-card card-hover">
                  封面
                  <input type="file">
                </div>
              </i-col>
              <i-col span="12">
                <div class="dir"></div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    名称
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.name" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    <Dropdown @on-visible-change="getOnlinelArtist" trigger="click" placement="bottom-start">
                      <div @mouseover="searchStr.artist=item.name">
                        wyID
                        <i-icon type="arrow-down-b"></i-icon>
                      </div>
                      <Dropdown-menu slot="list" class="result-content">
                        <Dropdown-item v-if="artistOnlineResult.length==0">
                          正在请求或无数据
                        </Dropdown-item>
                        <Dropdown-item :key="index" @click.native="item.wyID=online.id;item.picUrl=online.img1v1Url;item.name=online.name" :name="online.id" v-for="(online,index) in artistOnlineResult">
                          {{online.name}}
                        </Dropdown-item>
                      </Dropdown-menu>
                    </Dropdown>
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.wyID" fullWidth/>
                  </div>
                </div>
              </i-col>
            </i-row>
            <br/>
            <i-row class="cursor" style="height:40px;line-height:40px">
              <i-col span="8" class="text-right" @click.native="searchBox=true">
                搜索
              </i-col>
              <i-col span="8">
                <mu-float-button @click.native="createArtist" class="card3" :mini="true">
                  +
                </mu-float-button>
              </i-col>
              <i-col span="8" class="text-left">
                本地
              </i-col>
            </i-row>
          </i-col>
          <i-col span="8">
            <h2>专辑信息</h2>
            <br/>
            <i-row :key="index" :gutter="32" v-for="(item,index) in albums">
              <i-col span="12">
                <img v-if="item.picUrl" :src="item.picUrl" style="width:150px">
                <div v-else class="card-file min-card card-hover">
                  封面
                  <input type="file">
                </div>
              </i-col>
              <i-col span="12">
                <div class="dir"></div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    名称
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.name" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    <Dropdown @on-visible-change="getOnlinelAlbum" trigger="click" placement="bottom-start">
                      <div @mouseover="searchStr.album=item.name">
                        wyID
                        <i-icon type="arrow-down-b"></i-icon>
                      </div>
                      <Dropdown-menu slot="list" class="result-content">
                        <Dropdown-item v-if="albumOnlineResult.length==0">
                          正在请求或无数据
                        </Dropdown-item>
                        <Dropdown-item :key="index" @click.native="item.artistID='';item.wyID=online.id;item.picUrl=online.picUrl;item.name=online.name;item.publishTime=online.publishTime" :name="online.id" v-for="(online,index) in albumOnlineResult">
                          {{online.artists[0].name}}-{{online.name}}
                        </Dropdown-item>
                      </Dropdown-menu>
                    </Dropdown>
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.wyID" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    <Dropdown @on-visible-change="getLocalArtist" trigger="click" placement="bottom-start">
                      <div>
                        歌手ID
                        <i-icon type="arrow-down-b"></i-icon>
                      </div>
                      <Dropdown-menu slot="list" class="result-content">
                        <Dropdown-item v-if="!artistLocalResult">
                          正在请求
                        </Dropdown-item>
                        <Dropdown-item :key="index" @click.native="item.artistID=local._id.$oid" :name="local._id.$oid" v-for="(local,index) in artistLocalResult">
                          {{local.name}}
                        </Dropdown-item>
                      </Dropdown-menu>
                    </Dropdown>
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.artistID" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    发行时间
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.publishTime" fullWidth/>
                  </div>
                </div>
              </i-col>
            </i-row>
            <br/>
            <i-row class="cursor" style="height:40px;line-height:40px">
              <i-col span="8" class="text-right">
                搜索
              </i-col>
              <i-col span="8">
                <mu-float-button @click.native="createAlbum" class="card3" :mini="true">
                  +
                </mu-float-button>
              </i-col>
              <i-col span="8" class="text-left">
                本地
              </i-col>
            </i-row>
          </i-col>
          <i-col span="8">
            <h2>歌曲信息</h2>
            <br/>
            <i-row :key="index" :gutter="32" v-for="(item,index) in musics">
              <i-col span="12">
                <img v-if="item.picUrl" :src="item.picUrl" style="width:150px">
                <div v-else class="card-file min-card card-hover">
                  文件
                  <input type="file" :id="'musicFile'+index">
                </div>
              </i-col>
              <i-col span="12">
                <div class="dir"></div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    名称
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.name" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    <Dropdown @on-visible-change="getOnlineMusic" trigger="click" placement="bottom-start">
                      <div @mouseover="searchStr.music=item.name">
                        wyID
                        <i-icon type="arrow-down-b"></i-icon>
                      </div>
                      <Dropdown-menu slot="list" class="result-content">
                        <Dropdown-item v-if="musicOnlineResult.length==0">
                          正在请求或无数据
                        </Dropdown-item>
                        <Dropdown-item :key="index" @click.native="item.wyID=online.id;item.picUrl=online.picUrl;item.name=online.name" :name="online.id" v-for="(online,index) in musicOnlineResult">
                          {{online.artists[0].name}}-{{online.name}}-{{online.album.name}}
                        </Dropdown-item>
                      </Dropdown-menu>
                    </Dropdown>
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.wyID" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    <Dropdown @on-visible-change="getLocalAlbum" trigger="click" placement="bottom-start">
                      <div @mouseover="searchStr.music=item.name">
                        专辑ID
                        <i-icon type="arrow-down-b"></i-icon>
                      </div>
                      <Dropdown-menu slot="list" class="result-content">
                        <Dropdown-item v-if="albumLocalResult.length==0">
                          正在请求或无数据
                        </Dropdown-item>
                        <Dropdown-item :key="index" @click.native="item.albumID=local._id.$oid" :name="local.id" v-for="(local,index) in albumLocalResult">
                          {{local.name}}
                        </Dropdown-item>
                      </Dropdown-menu>
                    </Dropdown>
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.albumID" fullWidth/>
                  </div>
                </div>
                <div>
                  <div class="text-left" style="font-size:12px">
                    码率
                  </div>
                  <div style="font-size:20px">
                    <mu-text-field v-model="item.bps" fullWidth/>
                  </div>
                </div>
              </i-col>
            </i-row>
            <br/>
            <i-row class="cursor" style="height:40px;line-height:40px">
              <i-col span="8" class="text-right">
                搜索
              </i-col>
              <i-col span="8">
                <mu-float-button @click.native="createMusic" class="card3" :mini="true">
                  +
                </mu-float-button>
              </i-col>
              <i-col span="8" class="text-left">
                本地
              </i-col>
            </i-row>
          </i-col>
        </i-row>
        <br/><br/>
        <a class="file card card3" style="font-size:1rem;width:100px">
				  确认上传
			    <input multiple accept="audio/*" type="file" @change="upload" />
		    </a>
      </div>
      <br/><br/><br/>
      <!--<i-row>
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
              <mu-text-field v-model="artistSearchID" hintText="搜索歌手id" fullWidth/>
            </i-col>
            <i-col span="6">
              <button @click="searchAlbum" class="c-btn card">网易搜索</button>
            </i-col>
          </i-row>
          <div style="max-height:325px;overflow:auto">
            <i-row :key="index" v-for="(item,index) in album" style="padding-bottom:.5rem">
              <i-col span="8">
                {{item.id}}
              </i-col>
              <i-col span="16">
                {{item.name}}
              </i-col>
              <img @click="albumSearchID=item.id;albumClickIndex=index" style="width:150px" :src="item.picUrl" alt="">
            </i-row>
          </div>
          <br/>
          <div class="text-center">
            <button @click="createAlbum" class="c-btn card">添加专辑</button>
          </div>
        </i-col>
        <i-col span="8">
          <div style="font-size:15px">
            添加歌曲信息
          </div>
          <br/>
          <i-row>
            <i-col span="18">
              <mu-text-field v-model="albumSearchID" hintText="搜索专辑id" fullWidth/>
            </i-col>
            <i-col span="6">
              <button @click="searchSong" class="c-btn card">网易搜索</button>
            </i-col>
          </i-row>
          <div style="max-height:322px;overflow:auto">
            <i-row :key="item.id" v-for="item in song" style="padding-bottom:.5rem">
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
            <button @click="createMusic" class="c-btn card">添加歌曲</button>
          </div>
        </i-col>
      </i-row>-->
    </div>
    <div style="height:50px"></div>
  </div>
</template>
<script lang="">
  import api from '../axios.js'
  import wyApi from '../wyApi.js'
  export default {
    data() {
      return {
        searchBox: false,
        searchStr: {
          artist: '',
          album: '',
          music: ''
        },
        searchType: 100,
        artistOnlineResult: [],
        albumOnlineResult: [],
        musicOnlineResult: [],
        artistLocalResult: [],
        albumLocalResult: [],
        musicLocalResult: [],
        artists: [{
          wyID: '',
          name: '',
          picUrl: '',
          base: true
        }],
        albums: [{
          wyID: '',
          artistID: '',
          name: '',
          publishTime:'',
          base: true
        }],
        musics: [{
          wyID: '',
          albumID: '',
          name: '',
          bps: '',
          base: true
        }],
        search: '',
        artist: '',
        artistSearchID: '',
        artistID: '',
        album: '',
        albumID: '',
        albumClickIndex: 0,
        albumSearchID: '',
        song: '',
        myArtist: '',
        myAlbum: '',
        myMusic: ''
      }
    },
    methods: {
      upload(e) {
        let uploadFile = e.srcElement || e.target
        let formdata = new FormData()
        let music = []
        for (let i = 0; i < uploadFile.files.length; i++) {
          formdata.append("file" + i, uploadFile.files[i])
          console.log(uploadFile.files[i].name)
          music.push({
            name: uploadFile.files[i].name
          })
        }
        formdata.append("music", JSON.stringify(music))
        // api.createMusic(formdata)
      },
      changeSearchType(val) {
        this.searchType = val
        console.log(this.searchType)
      },
      async searchArtist() {
        this.searchType = 100
        let result = await wyApi.search(this.searchStr.artist, this.searchType)
        if (result.code == 200) {
          this.artistOnlineResult = result.result.artists
        }
      },
      searchAlbum() {
        if (Number(this.searchType) === 10) {
          wyApi.search(this.searchStr.album, this.searchType).then((data) => {
            console.log(data)
            if (data.code === 200) {
              this.albumOnlineResult = data.result.albums
            }
          })
        } else {
          wyApi.getAlbum(this.searchStr.album).then((data) => {
            console.log(data)
            if (data.code === 200) {
              this.albumOnlineResult = data.hotAlbums
            }
          })
        }
      },
      searchMusic() {
        if (Number(this.searchType) === 1) {
          wyApi.search(this.searchStr.music, this.searchType).then((data) => {
            console.log(data)
            if (data.code === 200) {
              this.musicOnlineResult = data.result.songs
            }
          })
        } else {
          wyApi.getSong(this.searchStr.music).then((data) => {
            console.log(data)
            if (data.code === 200) {
              this.musicOnlineResult = data.songs
            }
          })
        }
      },
      createArtist() {
        this.artists.forEach(function (item) {
          wyApi.getArtistDesc(item.wyID).then((data)=>{
            item.introduction = data.introduction
          })
        })
        api.createArtist({artists:this.artists})
      },
      async retrieveArtist() {
        let result = await api.retrieveArtist()
        this.myArtist = result.artist
      },
      createAlbum() {
        api.createAlbum({albums:this.albums})
      },
      getOnlinelArtist(val) {
        if (val) {
          let str = this.searchStr.artist ? this.searchStr.artist : '阿'
          let result = wyApi.search(str, 100).then((data) => {
            if (data.code == 200) {
              this.artistOnlineResult = data.result.artists
              console.log(this.artistOnlineResult)
            }
          })
        }
      },
      getOnlinelAlbum(val) {
        if (val) {
          let str = this.searchStr.album ? this.searchStr.album : '阿'
          let result = wyApi.search(str, 10).then((data) => {
            if (data.code == 200) {
              this.albumOnlineResult = data.result.albums
              console.log(this.albumOnlineResult)
            }
          })
        }
      },
      getOnlineMusic(val) {
        if (val) {
          let str = this.searchStr.music ? this.searchStr.music : '阿'
          let result = wyApi.search(str, 1).then((data) => {
            if (data.code == 200) {
              this.musicOnlineResult = data.result.songs
              console.log(this.musicOnlineResult)
            }
          })
        }
      },
      getLocalArtist(val) {
        if (val) {
          api.retrieveArtist().then((data) => {
            if (data.code === 200) {
              console.log(data)
              this.artistLocalResult = data.artist
            }
          })
        }
      },
      getLocalAlbum(val) {
        if (val) {
          api.retrieveAlbum().then((data) => {
            if (data.code === 200) {
              console.log(data)
              this.albumLocalResult = data.album
            }
          })
        }
      },
      async retrieveAlbum() {
        let result = await api.retrieveAlbum()
        this.myAlbum = result.album
      },
      createMusic() {
        let formdata = new FormData()
        this.musics.forEach((item,index) => {
          formdata.append('file'+index,document.getElementById('musicFile'+index).files[0])
        })
        formdata.append("musics", JSON.stringify(this.musics))
        api.createMusic(formdata)
      },
      async retrieveMusic() {
        let music = await api.retrieveMusic()
        this.myMusic = music.data
      },
      test(item) {
        api.retrieveMusic({
          id: item._id.$oid
        })
      }
    }
  }

</script>
