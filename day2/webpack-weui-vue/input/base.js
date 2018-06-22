var Vue = require("./vue.js");
//var weui = require("../css/weui.css");
//头部组件
require("./components/xheader/xheader.js").xheader(Vue);
//搜索组件
require("./components/xsearch/xsearch.js").xsearch(Vue);
//列表组件
require("./components/xpanel/xpanel.js").xpanel(Vue);
//底部组件
require("./components/xtabbar/xtabbar.js").xtabbar(Vue);
//loading组件
require("./components/xtoast/xtoast.js").xtoast(Vue);
//预览图片组件
require("./components/xgallery/xgallery.js").xgallery(Vue);
new Vue({
	el:"#demo",
	template:`
		<div>
			<xheader />
			<xsearch />
			<xpanel />
			<xtabbar />
		</div>
	`,
})
