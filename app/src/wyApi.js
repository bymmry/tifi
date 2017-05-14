import axios from 'axios'
//import {
//Message
//} from 'iview'
const instance = axios.create();
// if (process.SERVER_BUILD) {
//   instance.baseURL = 'http://localhost:3000'
// }
// instance.defaults.timeout = 5000
instance.defaults.headers.post['Content-Type'] = 'application/json'

// axios拦截响应
instance.interceptors.response.use(response => {
  // console.log(response.data)
  return response.data
}, err => {
  return Promise.reject(err)
})
let baseURL = 'http://www.tifi.me:3000'
export default {
  //使用网易云的搜索
  search(data,type,offset){
    return instance.get(baseURL+'/search?limit=20&type='+type+'&offset='+offset+'&keywords='+data)
  },
  //获取歌曲的歌词
  getLyric(id){
    return instance.get(baseURL+'/lyric?id='+id)
  },
  //获取歌曲评论
  getComment(id,offset=0,limit=10){
    return instance.get(baseURL+'/comment/music?limit='+limit+'&offset='+offset+'&id='+id)
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
  },
  //获取热门歌单
  getHotPlaylist(limit){
    return instance.get(baseURL+'/top/playlist/highquality?limit='+limit)
  },
  //获取新碟上架信息
  getNewAlbum(limit){
    return instance.get(baseURL+'/top/album?offset=0&limit='+limit)
  },
  //获取各种榜单
  // "0": 云音乐新歌榜,   
  // "1": 云音乐热歌榜,  
  // "2": 网易原创歌曲榜,  
  // "3": 云音乐飙升榜,  
  // "4": 云音乐电音榜,  
  // "5": UK排行榜周榜,  
  // "6": 美国Billboard周榜  
  // "7": KTV嗨榜,  
  // "8": iTunes榜,  
  // "9": Hit FM Top榜,  
  // "10": 日本Oricon周榜  
  // "11": 韩国Melon排行榜周榜,  
  // "12": 韩国Mnet排行榜周榜,  
  // "13": 韩国Melon原声周榜,  
  // "14": 中国TOP排行榜(港台榜),  
  // "15": 中国TOP排行榜(内地榜)  
  // "16": 香港电台中文歌曲龙虎榜,  
  // "17": 华语金曲榜,  
  // "18": 中国嘻哈榜,  
  // "19": 法国 NRJ EuroHot 30周榜,  
  // "20": 台湾Hito排行榜,  
  // "21": Beatport全球电子舞曲榜
  getToplist(type=0){
    return instance.get(baseURL+'/top/list?idx='+type)
  },
  //获取推荐歌单
  personalized(){
  		return instance.get(baseURL+'/personalized')
  },
  //获取网友精选歌单
  getHotPlaylistByUser(limit=30){
    return instance.get(baseURL+'/top/playlist?limit='+limit+'&order=hot')
  },
  //获取热门歌手
  getHotArtist(offset=0,limit=30){
    return instance.get(baseURL+'/top/artists?offset='+offset+'&limit='+limit)
  }
  
}
