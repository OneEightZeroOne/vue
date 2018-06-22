var path = require("path");
module.exports = {
	//入口 将要被webpack处理得一份文件
	entry: './input/base.js',
	//出口 base.js--webpack-->output/bundle.js
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'bundle.js'
	},
	//module处理非JS文件的模块
	module: {
		rules: [{
			//正则匹配 匹配所有的html文件并交给html-loader处理   require->text模块
			test: /\.html$/,
			use: 'html-loader'
		}]
	}
}