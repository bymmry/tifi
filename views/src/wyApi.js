import axios from 'axios'
import {
  Message
} from 'iview'
const instance = axios.create();
if (process.SERVER_BUILD) {
  instance.baseURL = 'http://localhost:3000'
}
// instance.defaults.timeout = 5000
instance.defaults.headers.post['Content-Type'] = 'application/json'

// axios拦截响应
instance.interceptors.response.use(response => {
  console.log(response)
  return response.data
}, err => {
  return Promise.reject(err)
})
let baseURL = 'http://localhost:3000'
export default {
  //使用网易云的搜索
  search(data,type=100){
    return instance.get(baseURL+'/search?type='+type+'&keywords='+data)
  },
  //获取歌手的专辑
  getAlbum(id){
    return instance.get(baseURL+'/artist/album?limit=100&id='+id)
  },
  //获取专辑歌曲
  getSong(id){
    return instance.get(baseURL+'/album?id='+id)
  },
  //获取歌手描述
  getArtistDesc(id){
    return instance.get(baseURL+'/artist/desc?id='+id)
  }
}
