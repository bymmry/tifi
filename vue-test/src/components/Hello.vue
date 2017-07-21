<template>
<div class="hello">
  <div class="nav">
    <mu-appbar title="剔声" class="appbar" titleClass="appbar" :zDepth="0">
      <div slot="left" class="tab">
        <mu-icon-button>
          剔
        </mu-icon-button>
      </div>
      <div slot="default" style="display:flex">
        <mu-tabs style="width:50%" class="tab" lineClass="tab-line" :value="activeTab" @change="handleTabChange">
          <mu-tab class="tab" :key="index" :value="'tab'+index" :title="item" v-for="item,index in tab"/>
        </mu-tabs>
        <div style="padding-left:2rem">
          <mu-raised-button label="客户端"/>
        </div>
      </div>
      <div slot="right" style="display:flex;padding-top:10px">
        <div class="min-card search">
          <input type="text" style="padding-left:1rem;width:15rem" placeholder="来点小曲..." />
          <mu-icon-button icon="search"/>
        </div>
        <div style="padding-left:2rem">
          <mu-raised-button ref="loginBtn" label="登录"/>
          <mu-popover :trigger="$refs.loginBtn" :open="open">
            <mu-menu>
              <mu-menu-item title="Refresh" />
              <mu-menu-item title="Send feedback" />
              <mu-menu-item title="Settings" />
              <mu-menu-item title="Help" />
              <mu-menu-item title="Sign out" />
            </mu-menu>
          </mu-popover>
        </div>
      </div>
  	</mu-appbar>
  </div>

</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tab: ['发现', '我的', '动态', '视频'],
      activeTab: 'tab1',
      open: false
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/css/base.scss";
.nav{
  font-weight: 300;
  padding: 1rem 0;
  background: #fff;
  .appbar{
    background: #fff;
    font-weight: 300;
    font-size: 1rem;
    .tab{
      background: #fff;
      color: $grey7;
      font-size: 1.2rem;
    }
    .tab-line{
      background: $grey9
    }
    .search{
      display:flex;
      font-size:1rem;
      color: #000;
      &:hover{
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        transform: translate3d(0, 0, 0);
        transition: all 218ms;
      }
    }
  }
}

</style>
