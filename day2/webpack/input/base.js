require("./core.js");
var $ = require("./jquery.js");
var Vue = require("./vue.js");
var tool = require("./lib/tool.js");


require("./components/xcontainer/xcontainer.js").xcontainer(Vue,$);
require("./components/xheader/xheader.js").xheader(Vue);
//var html = require("./template/test.html");//引入html文件
new Vue({
	el:"#demo",
	template:`
		<div>
			hello world
			<p>{{plus(1,8)}}</p>
			<xcontainer />
			<xheader />
			<div v-html="html"></div>
		</div>
	`,
	data:{
		html:require("./template/test.html")
	},
	methods:{
		plus:tool.plus
	}
})

/*$(()=>{
	$("body").html("xxxxx")
})*/
/*window.onload = function(){
	document.querySelector("body").innerHTML = "abc";
}*/
