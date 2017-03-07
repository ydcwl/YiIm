import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LogIn/Login'
import Register from '../components/LogIn/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/res',
      name: 'Register',
      component: Register
    }
  ]
})
