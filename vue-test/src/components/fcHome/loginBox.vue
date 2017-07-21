<template lang="html">
  <div class="login">
    <mu-popup position="top" :overlay="true">
      更新成功
    </mu-popup>
    <div class="login-header">
      网站后台登录
    </div>
    <div>
      <mu-divider/>
    </div>
    <br>
    <div style="position:relative">
      <mu-text-field
      hintText="用户名"
      :errorText="nameErr"
      v-model.lazy="name"
      fullWidth
      hintTextClass="hintText"
      :underlineFocusClass="nameErr?'':inputFocus"
      />
      <div style="position:absolute;top:0;left:0">
        <mu-icon-button style="color:#4196f3" icon="face"/>
      </div>
    </div>
    <div style="position:relative">
      <mu-text-field hintTextClass="hintText" hintText="密码" :underlineFocusClass="pswErr?'':inputFocus" type="password" :errorText="pswErr" v-model="psw" fullWidth/>
      <div style="position:absolute;top:0;left:0">
        <mu-icon-button style="color:#4196f3" icon="lock"/>
      </div>
    </div>
    <div class="user-control">
      <mu-checkbox v-model="remenberMe" label="记住账号" class="remenberMe"/>
      <div class="lostPsw">忘记密码?</div>
    </div>
    <br>
    <div class="identify">
      <div style="width:40%">
        <mu-text-field hintText="请输入验证码" :underlineFocusClass="codeErr?'':inputFocus" :errorText="codeErr" v-model="code" fullWidth/>
      </div>
      <div id="identify" style="text-align:right;width:100px;height:38px;padding-left:20px;padding-top:3px"></div>
    </div>
    <br>
    <div>
      <mu-divider/>
    </div>
    <br>
    <div>
      <mu-raised-button @click.native="login" backgroundColor="#4196f3" color="#fff" style="font-size:20px;height:45px" label="登  录" fullWidth/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      psw:'',
      code:'',
      remenberMe:false,
      nameErr:'',
      pswErr:'',
      codeErr:'',
      inputFocus:'inputFocus',
      verifyCode:''
    }
  },
  watch:{
    name(){
      this.validateName()
    },
    psw(){
      this.validatePsw()
    },
    code(){
      this.validateCode()
    }
  },
  methods: {
    login(){
      this.validateName()
      this.validatePsw()
      this.validateCode()
      let flag = this.validateName() && this.validatePsw() && this.validateCode()
      if (flag) {
        this.$router.push('./fcApp')
      }else{
        // alert('信息填写错误,请观察提示信息!')
      }
    },
    validateName(){
      let flag = false
      let val = this.name
      let lengthTest = /^.{3,20}$/
      if (val==='') {
        this.nameErr = '用户名不能为空'
      }else if (!lengthTest.test(val)) {
        this.nameErr = '用户名长度范围是3-20'
      }else{
        this.nameErr = ''
        flag = true
      }
      return flag
    },
    validatePsw(){
      let flag = false
      let val = this.psw
      let regPswFormart = /^[a-zA-Z]\w{5,17}$/
      if (val==='') {
        this.pswErr = '密码不能为空'
      }else if (!regPswFormart.test(val)) {
        this.pswErr = '密码需以字母开头，长度在6-18之间'
      }else{
        this.pswErr = ''
        flag = true
      }
      return flag
    },
    validateCode(){
      let flag = false
      let val = this.code
      let lengthTest = /^.{4}$/
      if (val==='') {
        this.codeErr = '验证码错误'
      }else if (!lengthTest.test(val)) {
        this.codeErr = '验证码长度为4'
      }else{
        if (this.verifyCode.validate(this.code)) {
          this.codeErr = ''
          flag = true
        }else{
          this.codeErr = '验证码错误'
          this.code = ''
        }
      }
      return flag
    }
  },
  mounted () {
    let verifyCode = new GVerify({
      id:'identify',
      type:"letter"
    })
    this.verifyCode = verifyCode
  }
}
</script>

<style lang="scss" scope>
  @import "../../assets/css/base.scss";
 .login{
   width: 332px;
   height: 408px;
   background: #fff;
   margin-top: 20px;
   margin-right: 40px;
  //  display: flex;
   padding: 20px 20px;
  //  flex-direction:column;
  //  font-size: 14px;
   input{
     width: 100%;
     height: 45px;
     padding-left: 45px;
     border: 1px solid #ccc;
     &:hover{
      border: none;
      box-shadow: $shadow0;
      border-radius: 2px
     }
   }
   .inputFocus{
     background: #4196f3
   }
   .hintText{
     padding-left: 45px;
     padding-top: 5px
   }
   .login-header{
     color: #559df2;
     font-size: 18px;
   }
   .user-control{
     display: flex;
     justify-content: space-between;
     .remenberMe{
       font-size: 12px
     }
     .lostPsw{
       font-size: 12px;
       color: #fe8c5a;
       padding-top: 3px;
       cursor: pointer;
     }
   }
   .identify{
     display: flex;
     height: 37px;
     input{
       height: 37px;
      //  width: 110px;
       padding-left: 5px;
     }
   }
 }

</style>
