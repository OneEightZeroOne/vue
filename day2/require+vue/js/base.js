require.config({
	baseUrl: "js",
	paths: {
		//core
		'Vue': 'vue',//vue框架
		'jquery':'jquery-3.3.1',//jq工具库
		'text':'text',//引入html和css文件
		//components
		'xheader':'../components/xheader/xheader',
		'xcontainer':'../components/xcontainer/xcontainer'
	}
})
//Vue  jQ  requirejs
require(['Vue','xheader','xcontainer'], function(Vue,xheader,xcontainer) {
	console.log(Vue)
	xheader();
	xcontainer();
	
	
	//组件的最外层的容器
	new Vue({
		el: "#demo",
		data: {},
		template:`
			<div>
				<xheader />
				<xcontainer />
			</div>
		`
	})
})