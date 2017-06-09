<style lang="" scoped>
  .header {
    margin: 0 auto;
    position: relative;
    width: 1000px;
    padding: 3rem 0rem;
    font-size: 1.1rem;
    cursor: pointer;
    text-align: center;
  }

  .g-logo {
    position: absolute;
    right: calc(100% + 3rem)
  }

  .g-down {
    position: absolute;
    width: 3rem;
    top: 0;
    font-size: 1.1rem;
    left: calc(100% + 3rem)
  }

  .logo {
    text-align: center;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    line-height: 3rem;
    /*border: 2px solid #000;*/
    padding: 0;
    font-weight: 500;
    font-size: 1.4rem;
    background: #fff
  }

  .active-i-col {
    font-weight: 500;
    padding-bottom: 1rem;
    transition: all 218ms;
    border-bottom: 2px solid #3d3d3d
  }

  .user-img {
    margin-top: calc(1.5rem - 18px);
    width: 40px;
    height: 40px;
    border-radius: 50%
  }

  .user-img-none {
    margin-top: calc(1.5rem - 18px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
  }

</style>

<template lang="html">
  <div class="header" style="padding:3rem 0">
    <div style="line-height:3rem;position:relative">
      <div class="g-logo">
        <md-button class="logo">TI/FI</md-button>
      </div>
      <i-row>
        <i-col :span="18" :style="{'text-align':'left'}">
          <div v-if="index<4" style="float:left;padding-right:3rem" @click="routerControl(item.path)" v-for="(item,index) in this.$store.state.router.router"
            :class="{'text-hover':active!==index,'text-center':index!==0}">
            <span :class="{'active-i-col':active===index}">
              {{item.name}}
            </span>
          </div>
          <div v-if="active!=4 && active!=0" style="float:left;padding-right:3rem">
            <i-icon type="ios-search-strong" @click.native="$store.commit('router', '/search')"></i-icon>
          </div>
        </i-col>
        <i-col v-if="userName" span="6" style="text-align:right;font-size:1.1rem">
          <Dropdown @on-click="headerControl" @on-visible-change="dropdown">
            <img v-if="user.picUrl" :src="user.picUrl" class="user-img card card-hover">
            <div v-else class="user-img-none card card-hover text-center">
              音
            </div>
            <dropdown-menu slot="list" style="text-align:center">
              <dropdown-item name="user" style="line-height:40px">个人中心</dropdown-item>
              <dropdown-item name="upload" style="line-height:40px">上传音乐</dropdown-item>
              <dropdown-item name="logout" style="line-height:40px">退出登陆</dropdown-item>
            </dropdown-menu>
          </Dropdown>
        </i-col>
        <i-col v-else span="6" style="text-align:right;font-size:1rem">
          <span @click="$store.commit('showUserBox','login')">
            登录
          </span>
          <span style="font-size:14px">&nbsp;|&nbsp;</span>
          <span @click="$store.commit('showUserBox','reg')">
            注册
          </span>
        </i-col>
      </i-row>
      <div class="g-down">
        APP
      </div>
    </div>

  </div>
</template>
<script lang="">
  import mdButton from './mdButton'
  export default {
    components:{
      mdButton
    },
    data() {
      return {
        showLoginAndReg: '',
        icon: 'arrow-down-b',
        // smIcon:['music-note','headphone','chatbubbles','ionic']
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      active() {
        return this.$store.state.router.routerIndex
      },
      userName() {
        return this.$store.state.user.name
      }
    },
    methods: {
      dropdown(val) {
        this.icon = val ? 'arrow-up-b' : 'arrow-down-b'
      },
      routerControl(path) {
        this.showLoginAndReg = path
        this.$store.commit('router', path)
      },
      headerControl(val) {
        this.showLoginAndReg = val
        if (val === 'logout') {
          this.$store.commit('logout')
        }
        if (val == 'upload') {
          this.$store.commit('router', '/upload')
        }
        if (val == 'user') {
          this.$store.commit('router', '/user')
        }
      }
    }
  }

</script>
