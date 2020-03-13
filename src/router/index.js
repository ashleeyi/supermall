import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Cart from '../views/Cart'
import Profile from '../views/Profile'
import Category from '../views/Category'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home 
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    name: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
