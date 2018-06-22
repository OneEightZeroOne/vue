# vue脚手架

[vue-cli包文档](https://www.npmjs.com/package/vue-cli)

## 第一步

全局安装vue-cli包
```bash
cnpm install -g vue-cli
```
## 第二部

xxx自定义的项目名字，默认使用webpack作为项目的模块化管理
```bash
vue init webpack xxx
```

src 开发的文件资源，未编译的

static 静态文件夹，放一些图片，音频，视频等资源文件

test 测试项目的模块

build+build webpack配置文件夹


## 第三步

等`vue init webpack xxxm`命令运行完之后，生成了一个文件夹，然后`crtl+c`两下，退出命令行

然后进入你的生成vue-project文件夹里面，执行cnpm命令
```bash
cnpm install
```
因为你的项目有一份`package.json`,这份文件是记录你项目将要用到的模块
`cnpm install`会读取package.json文件的内容来帮你一键安装所有的依赖


# 第四步

运行项目
```js
npm start
```
或者
```js
npm run dev
```