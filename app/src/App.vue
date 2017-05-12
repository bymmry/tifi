<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view ></router-view>
        <!--<mu-circular-progress style="margin: 60% 45%" v-else :size="40"/>-->
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <play v-if="musicBox.playBox"></play>
    </transition>
    <musicBox v-if="musicBox.miniBox"></musicBox>
  </div>
</template>

<script>
  import play from './components/Play.vue'
  import musicBox from './components/MusicBox.vue'
  export default {
    name: 'app',
    components: {
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

  .fade-enter-active .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter .fade-leave-active {
    opacity: 0;
  }

</style>
