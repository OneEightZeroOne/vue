# vue-cli

1. 安装脚手架 就是帮你弄好的一套项目的文件组合，记得是全局安装
```js
npm install -g vue-cli
```

2. 

```
vue init webpack prokect-name
```


# webpack

webpack是基于node的一套开发环境

vue+webpack

webpack是把各种类型的文件(.js .css .html .jade .ts .scss)转化为以（js）为主跟部分静态文件（.png，.txt .jpg）的
1.转化 (gulp) 2.模块化(requirejs)
webpack就是替代gulp和requirejs

vue+require+jq+gulp+express
gulp 1.压缩重命名文件转化合并

全局安装webpack

```js
cnpm install webpack -g
```

要生成一份webpack->webpack.config.js    gulp->gulpfile.js

webpack.config.js配置文件
关键有一个entry,还有一个output,通过引入一份base.js文件然经过webpack处理，然后输出到output/bundle.js

```js
var path = require("path");
module.exports = {
	//入口 将要被webpack处理得一份文件
	entry:'./base.js'
	//出口 base.js--webpack-->output/bundle.js
	output:{
		path: path.resolve(__dirname, 'output'),
		filename: 'bundle.js'
	},
}
```

直接在webpack.config.js文件夹下运行webpack命令
```
webpack
```

当打包出bundle.js后，新建一个index.html并在里面引入bundle.js文件


后端模块化，使用nodejs的模块化，实现了前端的模块化

定义模块
```
//define
module.exports = {}
```

引入模块
```
require("./xxxx.js")
```

xxx-loaders专门处理非JS类型的文件,在webpack.config.js下配置
```js
module: {
	rules: [{
		//正则匹配 匹配所有的html文件并交给html-loader处理   require->text模块
		test: /\.html$/,
		use: 'html-loader'
	}]
}
```