import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login/index.vue'
import register from '../views/Register/index.vue'
import home from '../views/home/Home'
import search from '../views/search/index.vue'
import detail from '../views/Detail/index.vue'
import shopcar from '../views/ShopCart/index.vue'
import trade from '../views/Trade/index.vue'
import pay from '../views/Pay/index.vue'
import paysuccess from '../views/PaySuccess/index.vue'
import center from '../views/Center/index.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/shopping' },
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/shopping', component: home },
    { path: '/search/:id', component: search, name: 'search', },
    { path: '/detail/:id', component: detail },
    { path: '/shopcar', component: shopcar },
    { path: '/trade', component: trade },
    { path: '/pay/:id', component: pay },
    { path: '/paysuccess', component: paysuccess },
    { path: '/center', component: center },
]

const router = new VueRouter({
    routes,
})

export default router