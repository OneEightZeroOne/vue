import Vue from 'vue'
//vue-router模块
import Router from 'vue-router'

//组件
import HelloWorld from '@/components/HelloWorld'

import xlogin from '@/components/page/xlogin'

import xhome from '@/components/page/xhome'

import xdetail from '@/components/page/xdetail'

import xmuse from '@/components/page/xmuse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //登录
    {
      path: '/login',
      name: 'Login',
      component: xlogin
    },
    //文章详情页
    {
      path: '/detail',
      name: 'Detail',
      component: xdetail
    },
    //museui
    {
      path: '/muse',
      name: 'Muse',
      component: xmuse
    },
    //首页
    {
      path: '/home',
      name: 'Home',
      component: xhome
    }
  ]
})
