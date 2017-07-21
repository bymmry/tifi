<template lang="html">
  <div class="g-main">
    <div class="app-main">
      <div class="left">
        <left :nav="nav" @getIndex="getIndex"></left>
      </div>
      <div style="width:30px">

      </div>
      <div class="content">
        <div class="nav-tip">
          <div class="home-icon">
            <mu-icon-button icon="home"/>
          </div>
          当前位置 : <span style="cursor:pointer" v-for="item,index in navHeader">&nbsp;&nbsp;>&nbsp;&nbsp;{{item}}</span>
        </div>
        <div class="main-content">
          <div class="welcome">
            <div style="color:#cd8231">
              welcome
            </div>
            <div style="color:#2576cf">
              欢迎登陆峰程7080网站后台
            </div>
          </div>
          <div class="main-header">
            {{navHeader[navHeader.length-1]}}
          </div>
          <div class="my-menus">
            <div v-if="navIndex[0]==0&&navIndex[1]==0&&navIndex[2] == 0" v-for="dropdown,index0 in menus" style="width:20%;text-align:center;">
                <div style="border-left:1px solid #639510;border-right:1px solid #a1db39;background:#80b32a;color:#fff;position:relative;cursor:pointer;width:158px;height:36px;line-height:36px;font-size:17px;font-weight:500">
                  <span style="cursor:pointer" @click.stop="openIndex=index0">{{dropdown.title}}</span>
                  <mu-icon-button v-if="openIndex!==index0" @click.stop="openIndex=index0" icon="expand_more" style="position:absolute;top:-6px;right:0"/>
                  <mu-icon-button v-else @click.stop="openIndex=-1" icon="keyboard_arrow_up" style="position:absolute;top:-6px;right:0"/>
                </div>
                <div v-if="openIndex==index0" style="box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);">
                  <div style="cursor:pointer;border-top:1px solid #fefefe;border-left:1px solid #fefefe;border-right:1px solid #fefefe;border-bottom:1px solid #d6e9f7;background:#eff9fb;line-height:30px;font-size:14px" v-for="item,index1 in dropdown.next">
                    {{item}}
                  </div>
                </div>
                <br>
            </div>
            <div v-if="navIndex[0]==0&&navIndex[1]==0&&navIndex[2] == 1">
              <div class="setting" v-for="item,key in setting">
                <div style="width:120px;height:46px;line-height:46px;font-size:16px;text-align:center">
                  {{key}}
                </div>
                <div style="width:620px">
                  <mu-text-field hintTextClass="hintTextClass" :hintText="item" fullWidth/>
                </div>
              </div>
              <br>
              <div class="setting-btn">
                <mu-raised-button style="margin-right:30px" backgroundColor="#2576cf" color="#fff" label="保存"/>
                <mu-raised-button style="margin-left:30px" backgroundColor="#2576cf" color="#fff" label="取消"/>
              </div>
            </div>
            <div v-if="!(navIndex[0]==0&&navIndex[1]==0&&navIndex[2] == 0)&&!(navIndex[0]==0&&navIndex[1]==0&&navIndex[2] == 1)">
              <h1>建设中</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import left from './left'
export default {
  components: {
    left
  },
  data(){
    return {
      nav:[{
        title:'系统管理',
        icon:'dashboard',
        next:[{
          title:'网站基本设置',
          next:['快速通道','网站设置','首页设置']
        },{
          title:'全部导航设置',
          next:['修改导航','删除导航']
        },{
          title:'系统管理员设置',
          next:['添加管理员']
        },'关闭网站','开启网站']
      },{
        title:'内容管理',
        icon:'import_contacts'
      },{
        title:'产品管理',
        icon:'apps'
      },{
        title:'订单管理',
        icon:'rate_review'
      },{
        title:'会员管理',
        icon:'account_box'
      },{
        title:'广告管理',
        icon:'ondemand_video'
      },{
        title:'页脚管理',
        icon:'info'
      },{
        title:'关键词管理',
        icon:'font_download'
      }],
      mainHeader:'快速通道',
      navIndex:[0,0,0],
      navOrderIndex:0,
      open:false,
      openIndex:0,
      menus:[{
        title:'新闻管理',
        next:['全部新闻','添加新闻','修改新闻','草稿新闻']
      },{
        title:'全部产品',
        next:['全部新闻','添加产品','草稿产品']
      },{
        title:'焦点与闪烁',
        next:['首页','栏目','专题']
      },{
        title:'关键词管理',
        next:['全部关键词','添加关键词','修改关键词']
      },{
        title:'文章管理',
        next:['全部文章','添加文章','修改文章','草稿文章']
      },{
        title:'全部订单',
        next:['全部文章','全部订单','已付订单','未付订单','退款订单','添加订单','修改订单']
      },{
        title:'产品管理',
        next:['添加产品','修改产品','草稿产品']
      },{
        title:'咨询管理',
        next:['首页','栏目','专题']
      },{
        title:'评价与管理',
        next:['全部关键词','添加关键词','修改关键词']
      },{
        title:'专题管理',
        next:['全部专题','添加专题','修改专题','草稿专题']
      }],
      setting:{
        '静态首页设置':'例如 : www.fengcheng7980.com.php 改 www.fengcheng7980.com',
        '动态首页设置':'例如 : www.fengcheng7980.com.php 改 www.fengcheng7980.com',
        '网站名':'例如 : 广西峰程璇网络科技有限公司',
        '备案号':'例如 : 桂kd856',
        '网站版权':'例如 : ©  2017-2021 FengCheng7080.com 版权所有',
        '版权所有者':'例如 : 广西峰程璇网络科技有限公司拥有最终解释权'
      }
    }
  },
  computed:{
    navHeader(){
      let result = []
      if(this.nav[this.navIndex[0]].title){
        result.push(this.nav[this.navIndex[0]].title)
        if (this.nav[this.navIndex[0]].next) {
          if (typeof(this.nav[this.navIndex[0]].next[this.navIndex[1]])=='object') {
            if (this.nav[this.navIndex[0]].next[this.navIndex[1]].title) {
              result.push(this.nav[this.navIndex[0]].next[this.navIndex[1]].title)
              if (this.nav[this.navIndex[0]].next[this.navIndex[1]].next[this.navIndex[2]]) {
                result.push(this.nav[this.navIndex[0]].next[this.navIndex[1]].next[this.navIndex[2]])
              }
            }
          }else {
            result.push(this.nav[this.navIndex[0]].next[this.navIndex[1]])
          }
        }
      }
      return result
    }
  },
  methods:{
    getIndex(val){
      this.navIndex = val
    }
  }
}
</script>

<style lang="scss" scope>
  .g-main{
    height: 900px;
    border-bottom: 1px solid #b4c3c8;
    background: #f5fafe
  }
  .app-main{
    width: 1168px;
    margin: 0 auto;
    display: flex;
    .left{
      width: 208px;
      padding-top: 10px;
    }
    .content{
      width: 960px;
      .nav-tip{
        line-height: 50px;
        font-size: 14px;
        color: #298ed6;
        position: relative;
        padding-left: 70px;
        .home-icon{
          position: absolute;
          top: 0px;
          left: 0;
          width: 20px;
        }
      }
      .main-content{
        width: 930px;
        height: 830px;
        border: 1px solid #b4c3c8;
        position: relative;
        .welcome{
          position: absolute;
          bottom: 10%;
          right: 10%;
          font-weight: 500;
          font-size:30px
        }
        .main-header{
          height: 40px;
          line-height: 40px;
          padding-left: 15px;
          background: #2576cf;
          width: 100%;
          color: #fff;
          font-size: 18px;
          margin-bottom: 20px
        }
        .my-menus{
          display: flex;
          width:790px;
          margin:0 auto;
          display:flex;
          flex-wrap:wrap;
          .setting{
            width: 740px;
            margin: 0 auto;
            display: flex;
            input{
              border: 1px solid #9a9a9a;
              height: 45px;
              line-height: 45px;
              padding-left: 15px
            }
            .hintTextClass{
              height: 46px;
              line-height: 46px;
              padding-left: 15px
            }
          }
          .setting-btn{
            display: flex;
            width: 740px;
            margin: 0 auto;
            justify-content: center;
          }
        }
      }
    }
  }
</style>
