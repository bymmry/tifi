<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view class="continer"></router-view>
      </transition>
    </keep-alive>
    <transition name="fade" mode="out-in">
      <play v-if="musicBox.playBox"></play>
    </transition>
    <musicBox v-if="musicBox.miniBox"></musicBox>
  </div>
</template>

<script>
  import myHeader from './components/Header.vue'
  import play from './components/Play.vue'
  import musicBox from './components/MusicBox.vue'
  export default {
    name: 'app',
    components: {
      myHeader,
      play,
      musicBox
    },
    computed: {
      musicBox() {
        return this.$store.state.musicBox
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 5px;
  }

  .continer {
    margin-top: 104px;
    padding-bottom: 50px;
    height: calc(100vh - 104px);
    overflow-y: auto;
    overflow-x: hidden
  }

  .fade-enter-active .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter .fade-leave-active {
    opacity: 0;
  }

</style>
