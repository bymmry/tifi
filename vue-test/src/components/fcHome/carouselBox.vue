<template lang="html">
  <div class="carousel">
    <carousel-3d style="z-index:1" :autoplay="true" :width="575" :height="348" :inverseScaling="500" :perspective="30">
      <slide :index="0" class="slide">
        <span style="color:#ff7f02">
            批量管理
        </span>
      </slide>
      <slide :index="1" class="slide">
        <span style="color: #1f73ed;">
          设备监控
        </span>
      </slide>
      <slide :index="2" class="slide">
        <span style="color: #ccdb7c;">
          云端管理
        </span>
      </slide>
    </carousel-3d>
    <img class="shine" src="../../assets/img/shine.png" alt="">
    <img class="binary" src="../../assets/img/01.png" alt="">
    <img class="mouse-click" src="../../assets/img/museclick.png" alt="">
    <!-- <div class="box last">
      <div class="left">
        云端管理
      </div>
    </div>
    <div class="active">
      <div class="inner">
        批量管理
      </div>
      <img class="shine" src="../../assets/img/shine.png" alt="">
      <img class="binary" src="../../assets/img/01.png" alt="">
      <img class="mouse-click" src="../../assets/img/museclick.png" alt="">
    </div>
    <div class="box next">
      <div class="right">
        设备监控
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  Carousel3d,
  Slide
} from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style lang="scss" scope>
.carousel {
    width: 65%;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    .slide{
      background-color: rgba(255,255,255,.4);
      border: none;
      line-height: 348px;
      text-align: center;
      font-size: 48px;
      cursor: pointer;
    }
    img {
      position: absolute;
    }
    .shine{
      top:3%;
      right:6.5%;
      width:100px
    }
    .binary{
      top:30%;
      right:35.5%;
      width:220px;
      z-index: 0;
      opacity: .5
    }
    .mouse-click{
      top: 45%;
      right: 15%;
      z-index: 1
    }
}
</style>
