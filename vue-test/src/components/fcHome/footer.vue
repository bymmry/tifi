<template lang="html">
  <div class="my-footer">
    <div class="" v-for="item in footer">
      <h2>{{item.header}}</h2>
      <div v-for="val,key in item.info">
        {{key}}：<span v-html="val"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      footer:[{
        header:'版权信息',
        info:{
          '系统名称':'峰程7080会员体验网站系统',
          '所有者':'广西峰程璇网络有限公司',
          '联系地址':'广西南宁市良庆区五象总部基地凯旋路9号<br />海尔·东盟联合广场2号楼1411/1412室',
          '联系电话':'0771-430-0785',
          '公司网站':'www.fengcheng7080.com'
        }
      },{
        header:'技术支持',
        info:{
          '联系人名称':'峰程',
          '联系QQ':1312003765,
          '联系电话':'0771-430-0785'
        }
      },{
        header:'业务洽谈',
        info:{
          '联系人名称':'峰程',
          '联系QQ':1312003765,
          '联系电话':'0771-430-0785'
        }
      }]
    }
  }
}
</script>

<style lang="scss" scope>
  .my-footer{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content:space-between;
    padding-bottom: 20px
  }
</style>
