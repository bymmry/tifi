<style scoped>
  .search-bg {
    position: absolute;
    background: #f0f0f0;
    top: 0;
    height: calc(150px + 9rem);
    z-index: -1;
    width: 100%;
    left: 0
  }

  .search-input {
    background: #fff;
    width: 100%;
    border: none;
    outline: none;
    height: 50px;
    font-size: 20px;
    padding: 0 50px;
  }

  .search-icon {
    color: #bababa;
    font-size: 24px;
    position: absolute;
    top: 13px;
    right: 20px;
    cursor: pointer;
    z-index: 1
  }

  .search-mic {
    color: #bababa;
    font-size: 24px;
    position: absolute;
    top: 13px;
    left: 20px;
    cursor: pointer;
    z-index: 1
  }

</style>
<template lang="">
  <div>
    <div class="search-bg">
    </div>
    <i-row>
      <i-col span="18" offset="3">
        <input type="text" placeholder="今天想听点什么..." class="min-card search-input" />
        <i-icon @click.native="micPopup=!micPopup" type="mic-a" class="search-mic"></i-icon>
        <i-icon type="search" class="search-icon"></i-icon>
        <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
          <mic-popup v-if="micPopup"></mic-popup>
        </transition>
      </i-col>
    </i-row>
    <br/><br/><br/>
    <!--<audio controls src="http://127.0.0.1:5000/mp3/hongzhuang.mp3"></audio>-->
    <i-row>
      <i-col span="24">
        <div class="min-card card text-center" style="line-height:60px;height:60px">
          <tag type="dot" color="blue">歌手:1324位</tag>
          <tag type="dot" color="green">专辑:68798张</tag>
          <tag type="dot" color="red">歌单:8983822份</tag>
          <tag type="dot" color="yellow">用户:36177位</tag>
          <tag type="dot" color="blue">分类:65种</tag>
        </div>
      </i-col>
    </i-row>
    <br/><br/>
    <div class="card" style="min-height:400px;padding:50px">
      <i-row :key="m.id" v-for="m in 3" style="margin-bottom:3rem">
        <i-col span="6" :key="n.id" v-for="n in 4">
          <div class="text-center" style="width:150px;margin:0 auto">
            <div class="min-card card-hover" style="height:150px;width:150px;background:#f0f0f0;border-radius: 50%">
            </div>
            <br/> 朴信惠
            <br/> 歌曲:56 专辑:8
          </div>
        </i-col>
      </i-row>
      <mu-pagination style="justify-content: center" :total="50" :current="1">
      </mu-pagination>
    </div>
    <div style="height:50px"></div>
  </div>
</template>

<script>
  import api from '../axios'
  import MicPopup from './MicPopup'
  export default {
    components: {
      MicPopup
    },
    data() {
      return {
        micPopup: false,
        micToggle: false,
        micPercent: 0,
        micText: '开始识别'
      }
    },
    watch: {

    },
    methods: {
      
    },
    mounted() {}
  }

</script>
