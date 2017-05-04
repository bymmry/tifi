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
  return response
}, err => {
  return Promise.reject(err)
})

export default {
  //使用网易云的搜索
  search163(data){
    return instance.post('/search',data)
  }
}
