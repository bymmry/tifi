<template>
  <div id="app">
    <my-header></my-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="container" v-if="!$route.meta.notKeepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view class="container" v-if="$route.meta.notKeepAlive"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
      <music-box v-if="this.$store.state.musicBox.musicData"></music-box>
    </transition>
    <transition name="fade" mode="out-in">
      <login-and-reg></login-and-reg>
    </transition>
  </div>
</template>

<script>
  import Header from './components/Header'
  import MusicBox from './components/MusicBox'
  import LoginAndReg from './components/LoginAndReg'
  export default {
    name: 'app',
    components: {
      'MyHeader': Header,
      'MusicBox': MusicBox,
      'LoginAndReg': LoginAndReg
    },
    computed: {
      sm() {
        return this.$store.state.body.sm
      }
    },
    mounted() {
      if (localStorage.getItem('uid')) {
        let autoLoginTime = new Date().getTime() / 1000 - localStorage.getItem('loginTime')
        console.log('已登录' + (autoLoginTime / 1000 / 60 / 60 / 24).toFixed(0) + '天')
        if (autoLoginTime / 1000 / 60 / 60 / 24 <= 7) {
          this.$store.commit('login')
        } else {
          this.$store.commit('logout')
        }
      }
      if (localStorage.getItem('musicData')) {
        let musicData = JSON.parse(localStorage.getItem('musicData'))
        musicData.local = true
        this.$store.commit('playMuisc', musicData)
      }
      if (sessionStorage.getItem('router')) {
        if (sessionStorage.getItem('router') == '/play') {
          this.$store.commit('router', '/recommend')
        } else {
          this.$store.commit('router', sessionStorage.getItem('router'))
        }
      }
      // if(document.documentElement.clientWidth<=1024){
      //   this.$store.commit('setSm',true)
      // }else{
      //   this.$store.commit('setSm',false)
      // }
    }
  }

</script>

<style>
  .container {
    margin: 0 auto;
    width: 1000px;
    padding-bottom: 50px
  }

  a {
    color: #000 !important;
  }

  .fade-enter-active .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter .fade-leave-active {
    opacity: 0;
  }

</style>
