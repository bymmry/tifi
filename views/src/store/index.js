import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from './modules/router'
import user from './modules/user'
import progress from './modules/progress'
import musicBox from './modules/musicBox'
export default new Vuex.Store({
  modules: {
    router,
    user,
    progress,
    musicBox
  }
})
