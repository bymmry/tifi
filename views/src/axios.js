import axios from 'axios'
import {
  Message
} from 'iview'
const instance = axios.create()
// instance.baseURL = 'http://localhost:5000/api/'
// if (process.SERVER_BUILD) {
//   instance.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 5000}`
// }else{
//   instance.baseURL = 'http://localhost:5000'
// }
instance.defaults.timeout = 100000
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
  if (response.data.code===200) {
    if(response.data.info){
      // Message.success(response.data.info)
    }
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
let baseURL = 'http://127.0.0.1:5000'
export default {
  //获取手机验证码
  getPhoneCode(data){
    return instance.post(baseURL+'/getPhoneCode', data)
  },
  //添加用户
  createUser(data){
    return instance.post(baseURL+'/createUser', data)
  },
  //登录
  login(data){
    return instance.post(baseURL+'/login', data)
  },
  //获取我的音乐基本信息
  retrieveUser(data){
    return instance.post(baseURL+'/retrieveUser', data)
  },
  //获取歌单信息
  retrievePlaylist(data){
    return instance.post(baseURL+'/retrievePlaylist', data)
  },
  //添加歌曲进歌单
  addSong(data){
    return instance.post(baseURL+'/addSong', data)
  },
  //音频识别
  audioRec(data){
    return instance.post(baseURL+'/api/audioRec', data)
  },
  //添加歌手信息
  createArtist(data){
    return instance.post(baseURL+'/createArtist', data)
  },
  //查询歌手信息
  retrieveArtist(data){
    if (data) {
      return instance.post(baseURL+'/retrieveArtist', data)
    } else {
      return instance.post(baseURL+'/retrieveArtist')
    }   
  },
  //添加专辑信息
  createAlbum(data){
    return instance.post(baseURL+'/createAlbum', data)
  },
  //查询专辑信息
  retrieveAlbum(data){
    if (data) {
      return instance.post(baseURL+'/retrieveAlbum', data)
    } else {
      return instance.post(baseURL+'/retrieveAlbum')
    }
  },
  //添加歌曲信息
  createMusic(data){
    return instance.post(baseURL+'/createMusic', data)
  },
  //查看数据库中音乐
  retrieveMusic(data){
    if(data){
      return instance.post(baseURL+'/retrieveMusic', data)
    }else{
      return instance.post(baseURL+'/retrieveMusic')
    }
  },
  //下载MP3
  download(url){
    return instance.get(baseURL+'/download'+url)
  }
}
