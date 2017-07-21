<template lang="html">
  <div class="app-header">
    <div class="content">
      <div class="logo">
        <div>LOGO</div>
        <div style="position:absolute;top:12.5px;right:0;background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));height:100px;width:2px">

        </div>
      </div>
      <div class="control">
        <div class="user">
          <div>
            您好！fengcheng [ 超级管理员 ]&nbsp;&nbsp;
          </div>
          <div style="cursor:pointer">
            <mu-icon-button icon="power_settings_new"/>
            退出
          </div>
        </div>
        <div class="nav">
          <div @click="navClick(item)" class="tab" v-for="item in nav">
            <div class="text">
              {{item}}
            </div>
            <div class="ti">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      nav:['浏览网站首页','清除网站缓存','更新全站','联系管理员']
    }
  },
  methods:{
    navClick(val){
      this.$Notice.config({
        top: 50,
        duration: 2
      });
      this.$Notice.success({
        title: val,
        desc: '功能正在建设中!'
      });
    }
  }
}
</script>

<style lang="scss" scope>
  .app-header{
    height: 125px;
    background: #2576cf;
    .content{
      width: 1168px;
      margin: 0 auto;
      display: flex;
      .logo{
        font-size: 50px;
        font-weight: 500;
        width: 208px;
        color: #fff;
        line-height: 125px;
        position: relative;
        text-align: center;
      }
      .control{
        color: #fff;
        .user{
          display: flex;
          line-height: 80px;
          justify-content: flex-end;
          width: 960px;
          font-size: 20px
        }
        .nav{
          display: flex;
          height: 45px;
          .tab{
            width: 158px;
            height: 40px;
            margin-top: 4px;
            margin-left: 40px;
            margin-right: 40px;
            perspective:158px;
            position: relative;
            cursor: pointer;
            .text{
              position: absolute;
              bottom: 2px;
              z-index: 2;
              width: 100%;
              text-align: center;
              font-size: 18px;
            }
            .ti{
              width: 158px;
              height: 45px;
              background: linear-gradient(to bottom, #2f82de,#1160bc);
              border-top-right-radius: 10px;
              border-top-left-radius: 10px;
              transform: rotateX(45deg);
              box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.24)
            }
          }
        }
      }
    }
  }
</style>
