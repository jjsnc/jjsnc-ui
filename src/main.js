import Vue from 'vue'
// import './jjsnc-ui'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false


import Button from './modules/button'
import CascadePicker from './modules/cascade-picker'
Vue.use(Button)
Vue.use(CascadePicker)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
