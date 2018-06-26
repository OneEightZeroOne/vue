// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//状态
import store from './store'
import $ from 'jquery'
import 'weui'
console.log($)
Vue.config.productionTip = false

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template:`
		<router-view></router-view>
	`
})