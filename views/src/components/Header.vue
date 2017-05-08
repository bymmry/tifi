<style lang="" scoped>
  .header {
    margin: 0 auto;
    position: relative;
    width: 1000px;
    padding: 3rem 0rem;
    font-size: 1.1rem;
    cursor: pointer;
    text-align: center;
  }

  .g-logo {
    position: absolute;
    right: calc(100% + 3rem)
  }

  .g-down {
    position: absolute;
    width: 3rem;
    top: 0;
    font-size: 1.1rem;
    left: calc(100% + 3rem)
  }

  .logo {
    text-align: center;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    line-height: 3rem;
    /*border: 2px solid #000;*/
    padding: 0;
    font-weight: 500;
    font-size: 1.4rem;
    background: #fff
  }

  .active-i-col {
    font-weight: 500;
    padding-bottom: 1rem;
    transition: all 218ms;
    border-bottom: 2px solid #3d3d3d
  }
  .user-img {
    margin-top:calc(1.5rem - 18px);
    width: 40px;
    height: 40px;
    border-radius: 50%
  }

</style>

<template lang="html">
  <div class="header">
    <div style="line-height:3rem;position:relative">
      <div class="g-logo">
        <button class="logo">TI/FI</button>
      </div>
      <i-row>
        <i-col span="18" style="text-align:left">
          <i-row>
            <i-col :key="item.id" @click.native="routerControl(index)" v-for="(item,index) in this.$store.state.router.router" :span="4"
              :class="{'text-hover':active!==index,'text-center':index!==0}">
              <span :class="{'active-i-col':active===index}">{{item.msg}}</span>
            </i-col>
          </i-row>
        </i-col>
        <i-col v-if="userName" span="6" style="text-align:right;font-size:1.1rem">
          <Dropdown @on-click="headerControl" @on-visible-change="dropdown">
            <img src="../assets/img/mulai.jpg" class="user-img card card-hover" alt="">
            <dropdown-menu slot="list" style="text-align:center">
              <dropdown-item name="user" style="line-height:40px">个人中心</dropdown-item>
              <dropdown-item name="UploadMusic" style="line-height:40px">上传音乐</dropdown-item>
              <dropdown-item name="logOut" style="line-height:40px">退出登陆</dropdown-item>
            </dropdown-menu>
          </Dropdown>
        </i-col>
        <i-col v-else span="6" style="text-align:right;font-size:1.1rem">
          <a @click="headerControl('login')">登录</a>&nbsp;/&nbsp;<a @click="headerControl('reg')">注册</a>
        </i-col>
      </i-row>
      <div class="g-down">
        APP
      </div>
    </div>
    <login-and-reg @control="headerControl" v-if="this.$store.state.user.type==='visitor'&&(showLoginAndReg==='reg'||showLoginAndReg==='login')"
      :type="showLoginAndReg"></login-and-reg>
  </div>
</template>
<script lang="">
  import LoginAndReg from './LoginAndReg'
  export default {
    components: {
      LoginAndReg
    },
    data() {
      return {
        showLoginAndReg: '',
        icon: 'arrow-down-b'
      }
    },
    computed: {
      active() {
        return this.$store.state.router.routerIndex
      },
      userName() {
        return this.$store.state.user.name
      }
    },
    methods: {
      dropdown(val) {
        this.icon = val ? 'arrow-up-b' : 'arrow-down-b'
      },
      routerControl(index) {
        this.showLoginAndReg = index
        this.$store.commit('routerActive', index)
      },
      headerControl(val) {
        this.showLoginAndReg = val
        if (val === 'logOut') {
          this.$store.commit('logout')
        }
        if (val == 'UploadMusic') {
          this.$router.push('/UploadMusic')
        }
        if (val == 'user') {
          this.$store.commit('routerActive', 'other')
          this.$router.push('/user')
        }
      }
    }
  }

</script>
