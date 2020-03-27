import Vue from 'vue'
import Router from 'vue-router'
// pages
import Index from '@/pages/Index'
// AdminIndex
import AdminIndex from '@/pages/admin/AdminIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/adminIndex',
      name: 'adminIndex',
      component: AdminIndex
    }
  ]
})
