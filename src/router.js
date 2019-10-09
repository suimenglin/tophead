import Vue from 'vue'
import Router from 'vue-router'
import UseElement from '@/views/useElement'
import Login from '@/views/login'
import Home from '@/views/home'
import Test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
