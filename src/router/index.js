import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/dash-root'
import Settings from '@/components/settings/settings-root'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings
      }
  ]
})
