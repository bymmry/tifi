<style scoped>
  .header {

    font-size: 20px;
    text-align: center;
    background-color: #fff;
    /*color: #fff;*/
    /*padding: 0 5px;*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1
  }

  .list {
    float: left
  }

  .main {
    height: 60px;
    position: relative;
    padding: 20px 0
    /*transition: all .1s*/
  }

  .mu-flat-button-label {
    font-size: 20px !important;
  }

  .main-text {
    font-size: 20px !important;
  }

  .search {
    float: right;
    color: #000
  }

  .line {
    background: #fff;
    color: #fff;
    border-bottom: 2px solid #ccc
  }

  .search-main {
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 10px 0
  }

</style>
<template>
  <div class="header">
    <div class="main">
      <div class="search-main" v-if="active==3">
        <mu-row>
          <mu-col width="10" style="padding:5px 0">
            <svg t="1494498763016" @click="keywords='';$store.commit('deleteKey');changeMain(router[1],1)" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10186">
              <path d="M917.333333 490.666667l-759.146667 0 368.896-368.917333c8.341333-8.341333 8.341333-21.824 0-30.165333-8.341333-8.362667-21.824-8.341333-30.165333 0l-405.312 405.312c-1.984 1.984-3.541333 4.330667-4.629333 6.954667-1.002667 2.432-1.472 5.013333-1.536 7.594667 0 0.192-0.106667 0.362667-0.106667 0.533333s0.106667 0.341333 0.106667 0.512c0.064 2.602667 0.533333 5.184 1.536 7.616 2.176 5.226667 6.314667 9.365333 11.541333 11.541333 2.538667 1.045333 5.205333 1.557333 7.893333 1.6 0.085333 0 0.170667 0.042667 0.256 0.042667l810.666667 0c11.776 0 21.333333-9.536 21.333333-21.333333S929.109333 490.666667 917.333333 490.666667z"
                p-id="10187"></path>
              <path d="M346.069333 721.237333 346.069333 721.237333l-96.32-96.32c-8.341333-8.341333-21.824-8.341333-30.186667 0s-8.341333 21.824 0 30.165333l181.013333 181.013333 0 0 96.32 96.32c8.341333 8.341333 21.824 8.341333 30.186667 0s8.341333-21.824 0-30.165333L346.069333 721.237333z"
                p-id="10188"></path>
            </svg>
          </mu-col>
          <mu-col width="80" style="padding:0 10px">
            <mu-text-field @.keyup.native.enter="$store.commit('search',{type:activeTab,key:keywords})" v-model="keywords" fullWidth hintText="今天也来点小曲..."
            />
          </mu-col>
          <mu-col width="10" style="padding:5px 0">
            <svg @click="$store.commit('search',{type:activeTab,key:keywords})" t="1494752842907" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3583">
              <path d="M746.3013 656.0273c0 0-14.2549 18.8622-33.3428 37.3497l219.773 215.354 36.4768-34.1019L746.3013 656.0273zM824.3495 422.5726c0 213.7901-164.6831 374.2772-368.8031 374.2772C242.705 793.761 88.3684 626.1566 88.3684 422.8624c0-196.3739 166.1232-361.9626 367.1781-361.9626C659.6664 60.8998 824.3495 228.6441 824.3495 422.5726zM454.2033 109.9626c-174.9625 0-316.7702 141.9208-316.7702 318.9128 0 176.993 141.8077 319.8931 316.7702 319.8931 174.9865 0 321.0815-142.9001 321.0815-319.8931C775.2848 251.8824 629.1899 109.9626 454.2033 109.9626z"
                p-id="3584"></path>
            </svg>
          </mu-col>
        </mu-row>
      </div>
      <mu-row>
        <mu-col width="10">
          <svg t="1494444038907" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8425">
            <path d="M96 192l832 0c17.673 0 32-14.327 32-32s-14.327-32-32-32L96 128c-17.673 0-32 14.327-32 32S78.327 192 96 192z" p-id="8426"></path>
            <path d="M928 448 96 448c-17.673 0-32 14.327-32 32s14.327 32 32 32l832 0c17.673 0 32-14.327 32-32S945.673 448 928 448z" p-id="8427"></path>
            <path d="M928 768 96 768c-17.673 0-32 14.327-32 32s14.327 32 32 32l832 0c17.673 0 32-14.327 32-32S945.673 768 928 768z" p-id="8428"></path>
          </svg>
        </mu-col>
        <mu-col width="80">
          <span>
		    <span style="margin:0 1rem" v-if="index<3" @click="changeMain(item,index)" :style="{'font-size':active==index?'22px':'18px'}" v-for="(item,index) in router">
			    {{item.name}}
		    </span>
          </span>
        </mu-col>
        <mu-col width="10">
          <svg @click="changeMain(router[3],3)" t="1494752842907" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3583">
            <path d="M746.3013 656.0273c0 0-14.2549 18.8622-33.3428 37.3497l219.773 215.354 36.4768-34.1019L746.3013 656.0273zM824.3495 422.5726c0 213.7901-164.6831 374.2772-368.8031 374.2772C242.705 793.761 88.3684 626.1566 88.3684 422.8624c0-196.3739 166.1232-361.9626 367.1781-361.9626C659.6664 60.8998 824.3495 228.6441 824.3495 422.5726zM454.2033 109.9626c-174.9625 0-316.7702 141.9208-316.7702 318.9128 0 176.993 141.8077 319.8931 316.7702 319.8931 174.9865 0 321.0815-142.9001 321.0815-319.8931C775.2848 251.8824 629.1899 109.9626 454.2033 109.9626z"
              p-id="3584"></path>
          </svg>
        </mu-col>
      </mu-row>
    </div>
    <mu-tabs style="background:#fff" :value="activeTab">
      <mu-tab style="color:#41464b" @click.native="changeTag(index)" :key="index" :value="index" v-for="(item,index) in router[active].children">
        {{item.name}}
      </mu-tab>
    </mu-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 1,
        msg: ['我的', '发现', '朋友'],
        selecte: ['推荐', '歌单', '歌手', '排行榜'],
        selected: 0,
        activeTab: 0,
        router: [{
          name: '我的',
          path: '/seft',
          children: [{
            name: '播放列表',
            path: '/seft/songlist'
          }, {
            name: '我的歌单',
            path: '/seft/myPlaylist'
          }, {
            name: '收藏歌单',
            path: '/seft/likePlaylist'
          }, {
            name: '个人资料',
            path: '/seft/info'
          }]
        }, {
          name: '发现',
          path: '/recommend',
          children: [{
            name: '推荐',
            path: '/recommend/main'
          }, {
            name: '歌单',
            path: '/recommend/playlist'
          }, {
            name: '歌手',
            path: '/recommend/artist'
          }, {
            name: '榜单',
            path: '/recommend/toplist'
          }]
        }, {
          name: '动态',
          path: '/renew',
          children: [{
            name: '所有',
            path: '/renew/main'
          }, {
            name: '关注',
            path: '/renew/follow'
          }, {
            name: '朋友',
            path: '/renew/friend'
          }, {
            name: '我的',
            path: '/renew/seft'
          }]
        }, {
          name: '搜索',
          path: '/search',
          children: [{
            name: '单曲',
            path: '/search/song'
          }, {
            name: '歌手',
            path: '/search/artist'
          }, {
            name: '歌单',
            path: '/search/playlist'
          }, {
            name: '专辑',
            path: '/search/album'
          }]
        }],
        keywords: ''
      }
    },
    methods: {
      changeMain(item, index) {
        this.active = index
        this.activeTab = 0
        this.$router.push(item.children[this.activeTab].path)
      },
      changeTag(val) {
        this.activeTab = val
        if (this.active == 3) {
          this.$store.commit('search', {
            type: this.activeTab,
            key: this.keywords
          })

        }
        this.$router.push(this.router[this.active].children[this.activeTab].path)
      }
    }
  }

</script>
