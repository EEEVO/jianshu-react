<!-- TOC -->

- [前言](#前言)
- [使用](#使用)
- [开发记录](#开发记录)
  - [170815](#170815)
  - [170814](#170814)
  - [170813](#170813)
  - [170812](#170812)
  - [170811](#170811)

<!-- /TOC -->

# 前言

项目为模仿简书的基本功能，用来系统化的练习react与其周围插件的使用，加深react熟练度与组件化开发的理解

>脚手架：create-react-app
>
>技术栈:react、react-router、semantic-ui-react、sass、webpack3、axios

# 使用

npm i && yarn install

<!-- 
>需要注意的是semantic-ui安装过程中会遇到提问请求如下

![](http://oowj6kf2e.bkt.clouddn.com/semantic01.png)
![](http://oowj6kf2e.bkt.clouddn.com/semantic02.png)
![](http://oowj6kf2e.bkt.clouddn.com/semantic03.png)

三个问题依次直接回车就好。这样我们就在工程中直接安装semantic在node_modules以外了

安装完成之后得进入semantic下执行`gulp build`

其他命令还是老样子 -->

npm start && yarn start

npm build && yarn build

npm test && yarn test

# 开发记录


## 170815

* 个人详情页与用户注销功能实现

* 个人详情页查看文集功能实现。

ps: 头像点击功能未实现， bug处于Preview.js中的history属性找不到


## 170814

* 登录与注册功能实现

## 170813

* 完成首页文章数据与作者列表数据显示

* 登录与注册结构写完

ps: 登录与注册网络通信未完成

## 170812

* 将菜单换成react-router-dom

ps: 将请求集中封装到ajax.js文件内未妥善解决

## 170811

* 完成项目构建

* 完成菜单栏组件样式

* 完成登录组件与注册组件样式

ps: 1. 因为目前还没有用到路由，所以active选中样式功能预留。(解决)
    2. 回家把登录模块与菜单栏状态绑定  (解决)
