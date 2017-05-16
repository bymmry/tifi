import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import router from './modules/router'
// import body from './modules/body'
// import user from './modules/user'
// import progress from './modules/progress'
import musicBox from './modules/musicBox'
import info from './modules/info'
import search from './modules/search'
export default new Vuex.Store({
  modules: {
    // body,
    // router,
    // user,
    // progress,
    info,
    musicBox,
    search
  }
})
