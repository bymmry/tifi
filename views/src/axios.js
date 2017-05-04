import axios from 'axios'
import {
  Message
} from 'iview'
const instance = axios.create();
if (process.SERVER_BUILD) {
  instance.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}
instance.defaults.timeout = 5000
instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `token ${localStorage.getItem('token')}`
      .replace(/(^\")|(\"$)/g, '')
  }
  return config
}, err => {
  return Promise.reject(err)
})
// axios拦截响应
instance.interceptors.response.use(response => {
  if (response.data.success) {
    return response.data
  } else {
    Message.config({
      top: 200,
      duration: 3
    })
    Message.error(response.data.info)
    return response.data
  }

}, err => {
  return Promise.reject(err)
})

export default {
  //发送手机验证码
  getPhoneCode(data){
    return instance.post('/api/getPhoneCode',data)
  },
  // 获取所有用户
  users() {
    return instance.get('/api/users')
  },
  // 用户登录
  userLogin(data) {
    return instance.post('/api/login', data)
  },
  //用户注册
  userReg(data) {
    return instance.post('/api/reg', data)
  },
  //上传音乐
  uploadMusic(data) {
    return instance.post('/api/uploadMusic', data)
  },
  //获取音乐
  musics() {
    return instance.get('/api/musics')
  }
}
