---
menu: "学艺"
title: "Js"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Crying Cat
  picture: "/assets/blog/authors/head.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

## js

### 注释

```javascript
// 单行

/*
 * 多行
 * 注释
 **/
```

### 命名规则

```javascript
// 常见的是驼峰命名法 javaScript
```

### 数据类型

```javascript
// 基本数据类型
// 字符串
String
// 数字
Number
// 布尔
Boolean
// 对空
Null
// 未定义
Undefined
// 抽象
Symbol

// 引用数据类型
// 对象
Object
// 数组
Array
// 函数
Function

// 动态类型
var
```

### 判断

```javascript
if (condition > 0) {
  console.log("-1");
} else if (condition < 0) {
  console.log("1");
} else {
  console.log("0");
}
```

### 循环

#### for

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var item in list) {
  console.log(item);
}
```

#### while

```javascript
while(condition > 0){
    console.log(condition);
    condition--;
}

do{
    console.log(condition);
    condition--;
}while(condition > 0);

break;
continue;
```

### 函数

```javascript
function func(a, b) {
    return a + b;
}

function (a, b) {
    return a + b;
}
```

### 回调

```javascript
function func(a, b, callback) {
  var result = a + b;
  callback(result);
}

func(1, 2, function (result) {
  console.log(result);
});
```

## Node.js

### cnpm

国内镜像，方便下载第三方模块

```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

常用指令

```javascript
// 下载模块 -g 设置全局
cnpm install -g [express]
// 卸载模块
cnpm uninstall -g [express}
// 本地项目引用全局模块，需要在本地项目路径下
cnpm link [express]
```

### ES6 class 类

```javascript
class db_help {
  // 类属性
  _instance = null;
  connection = null;

  // 构造函数
  constructor() {
    this.init();
  }

  // 静态函数
  // ES6规定class类没有静态属性，只有静态函数
  static getInstance() {
    if (this._instance == null) {
      this._instance = new db_help();
    }
    return this._instance;
  }

  // init函数
  init() {
    console.log("init");
  }
}
```

### 模块

在 C#中，我们通常在一个.cs 文件中定义一个类，各个文件之间一般通过类引用产生联系，而在 nodejs 中，每一个 js 文件都可以看作一个模块，每个文件可以通过 exports 或者 modules.export 向外部暴露属性或者方法，提供给其他模块使用

```javascript
// module_1.js

exports.func_1 = function (a, b) {
  return a + b;
};

// module_2.js
var m1 = require("module_1.js");
var result = m1.func_1(1, 2);
```

### 创建服务器

```javascript
var http = require("http");
http
  .createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // 发送响应数据 "Hello World"
    response.write("Hello World\n");

    response.end();
  })
  .listen(8888); // 监听8888端口
```

### express 框架

```javascript
var express = require('express');
var app = express();

// get请求
app.get('/', function (req, res) {
   res.send('Hello World');
})

// post请求
app.post('/data', function (req, res) {
    console.log(req);
    res.send('successful to receive upload data');
});

// 开启服务器
var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)；
});
```

### 本地上传文件到服务器

```javascript

```

# React

[react install](https://blog.csdn.net/weixin_36732046/article/details/95884577?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165259173316781435411166%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165259173316781435411166&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-95884577-null-null.142^v9^control,157^v4^control&utm_term=react%E5%AE%89%E8%A3%85&spm=1018.2226.3001.4187)
