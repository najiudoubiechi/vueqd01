import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录
import login from '../components/Login/index.vue'
import reg from '../components/Register/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  //  重定向
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/register',
    component: reg
  },
 
]

const router = new VueRouter({
  routes
})

export default router
