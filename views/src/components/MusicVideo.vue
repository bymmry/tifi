<style>
  .carousel-main {
    margin: 0 auto;
    width: 100%;
    height: 350px;
    overflow: hidden;
    background: #f0f0f0;
    text-align: center;
    position: relative;
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat
  }

  .carousel-text {
    position: absolute;
    top: 100%;
    color: #41464b;
    z-index: 2;
  }

</style>
<template>
  <div>
    <carousel autoplay v-model="carouselIndex" :autoplay-speed="3000">
      <carousel-item v-if="RecommendMv == []">
        <div class="carousel-main">
        </div>
      </carousel-item>
      <carousel-item v-else :key="index" v-for="(item,index) in RecommendMv">
        <div class="carousel-main card">
          <img @click="$store.commit('router',{id:item.id,path:'/playMv'})" :src="item.picUrl" class="cursor" style="width:100%;float:left">
        </div>
      </carousel-item>
    </carousel>
    <br>
    <div class="dir">

    </div>
    <br><br>
    <i-row :gutter="32" :key="n" v-for="n in 2" style="margin-bottom:2rem">
      <i-col v-if="n==1" span="2" offset="1">
        <h1 style="width:10px">最新视频</h1>
      </i-col>
      <i-col v-else span="2" offset="1">&nbsp;</i-col>
      <i-col :key="index" v-if="(n-1)*5<=index && index<n*5" span="4" v-for="(item,index) in newMv">
        <img @click="$store.commit('router',{id:item.id,path:'/playMv'})" class="card card-hover" :src="item.cover" style="width:100%;height:130px">
        <br>
        <div class="ellipsis" style="width:100%;font-size:13px;">
          {{item.name}}
        </div>
        <div class="ellipsis" style="width:100%;font-size:12px;color:#bbb">
          {{item.artistName}}
        </div>
      </i-col>
    </i-row>
    <div class="dir">

    </div>
    <br><br>
    <i-row :gutter="32" :key="n" v-for="n in 2" style="margin-bottom:2rem">
      <i-col v-if="n==1" span="2" offset="1">
        <h1 style="width:10px">视频排行</h1>
      </i-col>
      <i-col v-else span="2" offset="1">&nbsp;</i-col>
      <i-col :key="index" v-if="(n-1)*5<=index && index<n*5" span="4" v-for="(item,index) in topMv">
        <img @click="$store.commit('router',{id:item.id,path:'/playMv'})" class="card card-hover" :src="item.cover" style="width:100%;height:130px">
        <br>
        <div class="ellipsis" style="width:100%;font-size:13px;">
          {{item.name}}
        </div>
        <div class="ellipsis" style="width:100%;font-size:12px;color:#bbb">
          {{item.artistName}}
        </div>
      </i-col>
    </i-row>
  </div>
</template>
<script>
  import wyApi from '../wyApi.js'
  export default {
    data() {
      return {
        RecommendMv: [],
        carouselIndex: 0,
        newMv: [],
        topMv:[]
      }
    },
    mounted() {
      wyApi.getRecommendMv().then((data) => {
        if (data.code == 200) {
          this.RecommendMv = data.result
        }
      }).then(() => {
        wyApi.getNewMv().then((data) => {
          if (data.code == 200) {
            this.newMv = data.data
          }
        })
      }).then(()=>{
        wyApi.getTopMv().then((data) => {
          if (data.code == 200) {
            console.log(data)
            this.topMv = data.data
          }
        })
      })
    }
  }

</script>
