<template lang="html">
  <div class="main">
    <div class="content">
      <div class="slogen">
        <img src="../../assets/img/slogen.png" alt="">
      </div>
      <div class="main-box">
        <carousel-box></carousel-box>
        <login-box></login-box>
      </div>
    </div>
  </div>
</template>

<script>
import carouselBox from './carouselBox'
import loginBox from './loginBox'
export default {
  components: {
    carouselBox,
    loginBox
  }
}
</script>

<style lang="scss" scope>
  .main{
    width: 100%;
    height: 850px;
    background: #0c61be;
    .content{
      width: 1200px;
      margin: 0 auto;
      padding-top: 20px;
      .slogen{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        img{
          height: 131px
        }
      }
      .main-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
