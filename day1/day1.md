# Vue

1. 数据驱动 vs 节点驱动(jQ)  关注数据本身，而非节点本身

2. Modal数据层 View视图层   M->V   V->M MVVM框架

3. 双向数据绑定  数据层变视图层变 视图层变数据层变


# 表达式

{{}}两个大括号  v-text

一元~三元运算
|{{}}|v-text|
|-|-|
|{{-num1}|v-text="-num"|
|{{num1+num2}}|v-text="num1+num2"|
|{{num1?num2:num3}} 一层if else|v-text="num1?num2:num3"|
|{{num1?(num1?num2:num3):num3}}  两层if else嵌套||

# MVVM

<img src="mv模式.png" />

双向数据绑定  MV只要一个在变动  两者都会趋向于一样

前端 主动（默认）/被动   jQuery/Vue/React/Angular  原生   HTML/CSS/JS

V 层用户看到（HTML CSS）

(v-text/v-html/v-for/v-if/v-show/:xxx/@xxx) M->V
(v-model/@xxx)                              V->M

M 层用户看不到 （JS）

ajax                                        M->B B->M   单发 只能前端发 background   GET/POST
socket                                      M<->B B<->M 双发  前后端均可以发   直播 游戏 聊天
jsonp                                       M->B B->M   GET

后端 被动（默认）/主动  Node(express)/PHP

Route 路由  app.get()  app.post()                  B->D database

sql                                         (SELET * FROM `stu`)
nosql                                       (con.find().toArray())

数据库 被动  Mysql/Mongodb

库和表


# 指令

1. v-text/v-html  $().text()  $().html()   v-text==={{}}

2. v-show v-else  $().show()  $().hide()   频繁切换状态

3. v-if           $().append() $().remove()基本上一次切换

4. v-model         $().val()   V->M  input,textarea,select

5. v-for          $().each() 重点99.9%

6. v-on:xxx  @xxx $().on("xxx",()=>{}) @click @input

7. v-bind:xxx :xxx $().attr()  $().css()   :style  :class  :id :name

8. v-pre          不编译{{}}

# 框架 库

Vue Angular React  是JS框架     M V    图纸(坐向，层高，结构)并且你必须按图纸的规划来工作  制定框架
bootstrap          是CSS框架

jQuery common.js   是JS库                     工具(锤子，斧头，剪刀)                            搬砖，切图仔

//vue MV
//
//react  V
//
//angulat  MVC