import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
Vue.config.productionTip = false
import jjsncButton from './modules/button/'
import CascadePicker from './modules/cascade-picker/'
import Dialog from './modules/dialog/'
import Toast from './modules/toast/'
import ActionSheet from './modules/action-sheet/'
import ImagePreview from './modules/image-preview'
import Scroll from './modules/scroll'
Vue.use(jjsncButton.install)
Vue.use(CascadePicker.install)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(ActionSheet)
Vue.use(ImagePreview)
Vue.use(Scroll)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
