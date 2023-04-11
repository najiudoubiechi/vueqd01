import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

Vue.config.productionTip = false
axios.interceptors.response.use(res => {
  return res.data
})
// 将axios挂载到实例对象上
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
