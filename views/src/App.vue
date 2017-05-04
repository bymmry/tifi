<template>
<div id="app">
  <my-header></my-header>
  <transition name="fade" mode="out-in">
    <router-view class="container"></router-view>

  </transition>
  <music-box v-if="this.$store.state.musicBox.musicData"></music-box>
</div>
</template>

<script>
import Header from './components/Header'
import MusicBox from './components/MusicBox'
export default {
  name: 'app',
  components:{
    'MyHeader':Header,
    'MusicBox':MusicBox
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.$store.commit('login')
    }
    if (sessionStorage.getItem('routerIndex')) {
      this.$store.commit('routerActive',Number(sessionStorage.getItem('routerIndex')))
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 1000px;
  height: 100vh;
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
