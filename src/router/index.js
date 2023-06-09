import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login/index.vue'
import register from '../views/Register/index.vue'
import home from '../views/home/Home'
import search from '../views/search/index.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/shopping'},
  {path:'/login',component:login},
  {path:'/register',component:register},
  {path:'/shopping',component:home},
  {path:'/search/:id',component:search}
]

const router = new VueRouter({
  routes,
})

export default router
