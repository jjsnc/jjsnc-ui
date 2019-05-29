import Vue from 'vue'
import App from './App.vue'
import router from './router'
import picker from '@/components/picker/picker.vue'
import './registerServiceWorker'
import createAPIComponent from 'vue-create-api'

function createAPI(Vue, Component, events, single) {
  Vue.use(createAPIComponent, { componentPrefix: 'jjsnc-' })
  const api = Vue.createAPI(Component, events, single)
  return api
}

// 创建 this.$createHello API
createAPI(Vue, picker, ['click'], true)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
