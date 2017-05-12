<style lang="" scoped>
.g-user {
  position: fixed;
  margin: 0 auto;
  width: 800px;
  padding: 4rem 0;
  height: calc(300px + 8rem);
  top: 50%;
  left: calc(50% - 400px);
  transform: translateY(-50%);
  background: #fefefe;
  z-index: 99
}

.c-img {
  width: 200px;
  margin: 0 100px;
  float: left;
}

.g-main {
  float: left;
  width: 300px;
}

.g-main div {
  margin-bottom: 2rem;
  font-size: 1rem;
  border-left: 2px solid #3d3d3d;
  padding-left: 1rem;
  line-height: 1rem
}

.g-main input {
  margin-left: 1rem;
  width: calc(100% - 4rem)
}

.c-btn {
  border: none
}

.c-close {
  position: absolute;
  top: .5rem;
  right: 1rem;
}
</style>
<template lang="">
<div>
  <div class="g-user card card3" v-if="show">
    <div class="c-close cursor">
      <i-icon @click.native="$store.commit('hideUserBox')" type="close-round"></i-icon>
    </div>
    <img class="c-img" src="../assets/img/reg.jpg" alt="">
    <div class="g-main">
      <h2 style="color:#3d3d3d;text-align:center" :style="{'margin-bottom':type=='reg'?'3rem':'5rem'}">
				{{type=='reg'?'找寻最本真的音乐':'徜徉于音乐的海洋'}}
			</h2>
      <div>
        手机<input class="c-input" v-model="phone" />
      </div>
      <div v-if="type=='reg'">
        验证<input class="c-input" v-model="code" style="width:calc(100% - 10.7rem)" />
        <span style="color:#ccc;padding:0 .6rem">|</span>
        <span v-if="getCodeLoading==0" @click="getPhoneCode">发送验证码</span>
				<span style="color:#ccc;cursor:not-allowed" v-else>{{getCodeLoading}}s后重发</span>
      </div>
      <div>
        密码<input class="c-input" type="password" v-model="password" />
      </div>
      <div v-if="type=='reg'" style="margin-bottom:3rem">
        重复<input class="c-input" type="password" v-model="rePsw" />
      </div>
      <div style="border:none;text-align:center" :style="{'margin-top':type=='reg'?'2rem':'5rem'}">
        <span class="c-btn card" @click="submit">{{btnText}}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="">
  import {
  Message
} from 'iview'
let md5 = require('js-md5')
import api from '../axios.js'
export default {
  // props: ['type'],
  data() {
    return {
      phone: '',
      code: '',
      password: '',
      rePsw: '',
      codeID:'',
			getCodeLoading:0
    }
  },
  computed: {
    btnText() {
      return this.type == 'reg' ? '加入TIFI' : '进入TIFI'
    },
    show(){
      return this.$store.state.body.userBox.show
    },
    type(){
      return this.$store.state.body.userBox.type
    }
  },
	watch:{
		getCodeLoading(val){
			if (val!=0) {
				setTimeout(()=>{
					this.getCodeLoading--
				},1000)
			}
		}
	},
  methods: {
    async submit() {
      let user = {
        phone: this.phone,
        code: this.code,
        password: this.password,
        rePsw: this.rePsw,
        codeID: this.codeID
      }
      if (this.type == 'reg') {
        if (user.phone && user.password && user.rePsw) {
          if (user.password === user.rePsw) {
            user.password = md5(user.password)
            let postback = await api.createUser(user)
            if (postback.code===200) {
              this.password = ''
              this.rePsw = ''
              this.code = ''
              this.codeID = ''
              this.$store.commit('showUserBox','login')
            }
          } else {
            Message.info('两次密码不一致')
          }
        } else {
          Message.info('手机或密码不能为空')
        }
      } else {
        if (user.phone && user.password) {
          user.password = md5(user.password)
          this.$store.dispatch('login', user).then(()=>{
            this.$store.commit('hideUserBox')
          })
        } else {
          Message.info('手机或密码不能为空')
        }
      }
    },
    async getPhoneCode() {
      if (this.phone) {
        if ((/^1[34578]\d{9}$/.test(this.phone))) {
          let postback = await api.getPhoneCode({phone:this.phone})
					if(postback.code===200){
						this.getCodeLoading = 60
            this.codeID = postback.codeID
					}
        }else {
        	Message.error('手机格式错误')
        }
      } else {
        Message.info('请输入手机号')
      }
    }
  }

}
</script>
