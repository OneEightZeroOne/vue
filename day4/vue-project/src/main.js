// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'weui'
console.log($)
Vue.config.productionTip = false
//头部组件
import xheader from './components/xheader/xheader.js'
xheader.xheader(Vue)
//搜索组件
import xsearch from './components/xsearch/xsearch.js'
xsearch.xsearch(Vue)
//内容组件
import xpanel from './components/xpanel'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App,
		xpanel
	},
	template: `
  <div>
  	<xheader />
  	<xsearch />
  	<xpanel />
  </div>`
})