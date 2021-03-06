import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import animate from 'animate.css'
import 'iview/dist/styles/iview.css'
// import iview from 'iview'
// Vue.use(iview)
require('./assets/css/common.css')
import {Row,Col} from 'iview/src/components/grid'
import icon from 'iview/src/components/icon'
import Dropdown from 'iview/src/components/dropdown'
import tag from 'iview/src/components/tag'
import Tooltip from 'iview/src/components/tooltip'
import affix from 'iview/src/components/affix'
import modal from 'iview/src/components/modal'
import circle from 'iview/src/components/circle'
import page from 'iview/src/components/page'
import Carousel from 'iview/src/components/carousel'
import spin from 'iview/src/components/spin'
import poptip from 'iview/src/components/poptip'

Vue.component('iRow', Row)
Vue.component('iCol', Col)
Vue.component('iIcon', icon)
Vue.component(Dropdown.name, Dropdown)
Vue.component('DropdownMenu', Dropdown.Menu)
Vue.component('DropdownItem', Dropdown.Item)
Vue.component('tag', tag)
Vue.component('tooltip', Tooltip)
Vue.component('affix', affix)
Vue.component('modal', modal)
Vue.component('iCircle', circle)
Vue.component('page', page)
Vue.component('carousel', Carousel)
Vue.component('carouselItem', Carousel.Item)
Vue.component('spin', spin)
Vue.component('poptip', poptip)



import slider from 'muse-components/slider'
import badge from 'muse-components/badge'
import textField from 'muse-components/textField'
import pagination from 'muse-components/pagination'
import linearProgress from 'muse-components/linearProgress'
import dropDownMenu from 'muse-components/dropDownMenu'
import flatButton from 'muse-components/flatButton'
import floatButton from 'muse-components/floatButton'



import 'muse-ui/dist/theme-carbon.css'
Vue.component(slider.name, slider)
Vue.component(badge.name, badge)
Vue.component(textField.name, textField)
Vue.component(pagination.name, pagination)
Vue.component(linearProgress.name, linearProgress)
Vue.component(flatButton.name, flatButton)
Vue.component(floatButton.name, floatButton)


import VueProgressiveImage from 'vue-progressive-image'
Vue.use(VueProgressiveImage, {
  delay: 1000,
  blur:10
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
