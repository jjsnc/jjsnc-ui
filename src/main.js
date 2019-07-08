import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
Vue.config.productionTip = false
import jjsncButton from './modules/button/'
import jjsncTabBar from './modules/tab-bar'
import jjsncTabPanels from './modules/tab-panels'
import CascadePicker from './modules/cascade-picker/'
import Dialog from './modules/dialog/'
import Toast from './modules/toast/'
import ActionSheet from './modules/action-sheet/'
import ImagePreview from './modules/image-preview'
import Scroll from './modules/scroll'
import Slide from './modules/slide'
import indexList from './modules/index-list'
import swipe from './modules/swipe'
import sticky from './modules/sticky'
import scrollNavBar from './modules/scroll-nav-bar'
import scrollNav from './modules/scroll-nav'
import recycleList from './modules/recycle-list'
Vue.use(jjsncButton)
Vue.use(jjsncTabBar)
Vue.use(jjsncTabPanels)
Vue.use(CascadePicker)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(ActionSheet)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(indexList)
Vue.use(swipe)
Vue.use(sticky)
Vue.use(scrollNavBar)
Vue.use(scrollNav)
Vue.use(recycleList)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
