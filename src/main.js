import Vue from 'vue'
import App from './App.vue'
import router from './router'
import utils from './components/utils'

Vue.config.productionTip = false

export const bus = new Vue()

// Accessing properties globally in Vue.js with prototypes
Vue.prototype.$utils = utils

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
