import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/login/register.vue'
import Panel from '@/components/chatview/panel.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Panel',
      component: Panel
    }
  ]
})
