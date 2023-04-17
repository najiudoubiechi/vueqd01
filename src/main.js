import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import swiper from 'swiper'
import nav from './views/Register/headerNav.vue'
import TypeNav from './views/home/TypeNav/index.vue'

Vue.component('header-nav', nav)

Vue.component('TypeNav', TypeNav)
    // 导入组件库
import ElementUI from 'element-ui';
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/all.css'
import './assets/css/reset.css'
// 配置  Vue 插件
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
    // 配置请求头信息
axios.defaults.headers['token'] = localStorage.getItem('token')
axios.interceptors.request.use(config => {
    var tokenstr = sessionStorage.getItem('token')
        // console.log(tokenstr);
    config.headers.token = tokenstr
    config.headers.userTempId = ''
    return config
})

new Vue({
    router,
    store,
    watch: { //监听路由变化
        $route(to, from) {
            if (sessionStorage.getItem('userName') && !this.$store.state.flag) {
                this.$store.commit('isLogin')
            }
        }
    },
    render: h => h(App)
}).$mount('#app')