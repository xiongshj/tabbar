import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },

  {
    path: '/home',
    component: () => import('../views/home')
  },

  {
    path: '/category',
    component: () => import('../views/category')
  },

  {
    path: '/cart',
    component: () => import('../views/cart')
  },

  {
    path: '/profile',
    component: () => import('../views/profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
