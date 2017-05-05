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
  if (response.data.code===200) {
    if(response.data.info){
      Message.success(response.data.info)
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
let baseURL = 'http://localhost:5000'
export default {
  //音频识别
  audioRec(data){
    return instance.post(baseURL+'/api/audioRec', data)
  },
  createArtist(data){
    return instance.post(baseURL+'/createArtist', data)
  }
}
