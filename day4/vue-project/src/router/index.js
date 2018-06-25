import Vue from 'vue'
//vue-router模块
import Router from 'vue-router'

//组件
import HelloWorld from '@/components/HelloWorld'

import xlogin from '@/components/page/xlogin'

import xhome from '@/components/page/xhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: xlogin
    },
    {
      path: '/home',
      name: 'Home',
      component: xhome
    }
  ]
})
