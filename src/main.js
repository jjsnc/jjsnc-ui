import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// import Picker from '@/components/picker/picker.vue'
// import Toast from '@/components/toast/toast.vue'
// import CascadePicker from '@/components/cascade-picker/cascade-picker.vue'

// import createAPI from '@/common/helpers/create-api'
// createAPI(Vue, Picker, ['select', 'cancel', 'change'], true)
// createAPI(Vue, Toast, ['timeout'], true)
// createAPI(Vue, CascadePicker, ['select', 'cancel', 'change'], true)

Vue.config.productionTip = false
import jjsncButton from './modules/button/'
import CascadePicker from './modules/cascade-picker/'
import Dialog from './modules/dialog/'
import Toast from './modules/toast/'

Vue.use(jjsncButton.install)
Vue.use(CascadePicker.install)
Vue.use(Dialog)
Vue.use(Toast)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
