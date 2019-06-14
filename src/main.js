import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import picker from '@/components/picker/picker.vue'
import toast from '@/components/toast/toast.vue'
import createAPI from '@/common/helpers/create-api'
createAPI(Vue, picker, ['select', 'cancel', 'change'], true)
createAPI(Vue, toast, ['timeout'], true)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
