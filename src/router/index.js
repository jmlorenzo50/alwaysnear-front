import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import PanelControl from '@/components/panelcontrol.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/panelcontrol',
      name: 'PanelControl',
      component: PanelControl
    }
  ]
})
