import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Picker from '@/components/picker/picker.vue'
import Toast from '@/components/toast/toast.vue'
import CascadePicker from '@/components/toast/toast.vue'
import createAPI from '@/common/helpers/create-api'
createAPI(Vue, Picker, ['select', 'cancel', 'change'], true)
createAPI(Vue, Toast, ['timeout'], true)
createAPI(Vue, CascadePicker, ['select', 'cancel', 'change'])
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
