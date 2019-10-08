import Vue from 'vue'
import Router from 'vue-router'
import UseElement from './views/useElement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
