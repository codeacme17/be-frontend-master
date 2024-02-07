![DALL·E 2023-11-16 11 14 05 - A minimalist and flat design background with a modern and clean look, featuring the stylized text 'SELF-EXAMINATION BECOMES A FRONTEND MASTER' in the ](https://github.com/codeacme17/be-frontend-master/assets/67408722/5440387d-0398-4308-afdc-8732cae5d48b)

<h2>SELF-EXAMINATION BECOMES A FRONTEND MASTER ✨</h2>  
<h3>自省-成为前端大师</h3>

<br />

## 目录

- [Javascript 基础](#javascript-基础)
  - [变量和类型](#变量和类型)
  - [原型和原型链](#原型和原型链)
  - [作用域和闭包](#作用域和闭包)
  - [执行机制](#执行机制)
  - [语法和 API](#语法和-api)
- [HTML 和 CSS](#html-和-css)
  - [HTML](#html)
  - [CSS](#css)
- [计算机基础](#计算机基础)
  - [编译原理](#编译原理)
  - [网络协议](#网络协议)
- [数据结构与算法](#数据结构与算法)
  - [Javascript 编码能力](#javascript-编码能力)
  - [手动实现前端轮子](#手动实现前端轮子)
  - [数据结构](#数据结构)
- [运行环境](#运行环境)
  - [浏览器 API](#浏览器-api)
  - [浏览器原理](#浏览器原理)
  - [Node](#node)
- [框架和类库](#框架和类库)
  - [React](#react)
  - [Vue](#vue)
  - [Webpack](#Webpack)
  - [多端开发](#多端开发)
- [引用](#引用)

## Javascript 基础

### 变量和类型

- [Javascript 规定了几种语言类型](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/type.md)

- [Javascript 对象的底层数据结构是什么](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/object.md)

- [`Symbol` 类型在实际开发中的应用、可手动实现一个简单的 `Symbol`](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/symbol.md)

- [Javascript 中的变量在内存中的具体存储形式](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/variable.md)

- [为什么要将基本类型存储在栈内存中，而将引用类型存储在堆内存](/self-examination/Javascript%20基础/变量和类型/stack-heap.md)

- [基本类型对应的内置对象，以及他们之间的装箱拆箱操作](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/variable-object.md)

- [`null` 和 `undefined`的区别](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/null%26undefined.md)

- [至少可以说出三种判断 Javascript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B/type-judgement.md)

- [理解 `Map`、`WeakMap`、`Set`、`WeakSet` 的区别](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E5%8F%98%E9%87%8F%E5%92%8C%E7%B1%BB%E5%9E%8B//map-weakmap.md)

### 原型和原型链

- [理解原型设计模式以及 Javascript 中的原型规则](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE/prototype.md)

- [`instanceof` 底层实现原理，手动实现一个 `instanceof`](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE/instanceof.md)

- [实现继承的几种方式以及他们的优缺点](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE/realize-inherit.md)

- [至少说出一种开源项目(如`Node.js`)中应用原型继承的案例](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE/inherit-example.md)

- [可以描述 `new` 一个对象的详细过程，手动实现一个 `new` 操作符](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE/new.md)

- [理解 ES6 `class` 构造以及继承的底层实现原理](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE//class-in-es6.md)

### 作用域和闭包

- [理解词法作用域和动态作用域](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85//lexical-scope-dynamic-scope.md)

- [理解 Javascript 的作用域和作用域链](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85//scope-chain.md)

- [理解 Javascript 中的执行上下文栈，可以应用堆栈信息快速定位问题](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85//context-stack.md)

- [理解暂时性死区](/self-examination/Javascript%20基础/作用域和闭包/TDZ.md)

- [`this` 的原理以及几种不同使用场景的取值](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85//this.md)

- [闭包的实现原理和作用，可以列举几个开发中闭包的实际应用](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85//closure.md)

- [理解堆栈溢出和内存泄漏的原理，以及如何防止](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85//stack-overflow.md)

- [如何处理循环的异步操作](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85/async-loop.md)

### 执行机制

- [了解 Javascript 的编译时和运行时](/self-examination/Javascript%20基础/执行机制/compile&runtime.md)

- [为何 `try` 里面放 `return`，`finally` 还会执行，理解其内部机制](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6//try-finally.md)

- [Javascript 如何实现异步编程，可以详细描述 `EventLoop` 机制](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6//eventloop.md)

- [宏任务和微任务分别有哪些](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6//micro-macro.md)

- [Node 与 Browser `EventLoop` 的差异](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6//Node-Browser.md)

- [`async`/`await` 如何通过同步的方式实现异步](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6//async-await.md)

### 语法和 API

- [理解 ECMAScript 和 Javascript 的关系](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E8%AF%AD%E6%B3%95%E5%92%8CAPI//ECMA-Javascript.md)

- [理解 `call`、`apply` 和 `bind` 三者的作用和区别](/self-examination//Javascript%20基础//语法和API//call-apply-bind.md)

- [熟练应用 `map`、`reduce`、`filter` 等高阶函数解决问题](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E8%AF%AD%E6%B3%95%E5%92%8CAPI//map-reduce-filter.md)

- [`setInterval` 需要注意的点，使用 `settimeout` 实现 `setInterval`](/self-examination//Javascript%20%E5%9F%BA%E7%A1%80//%E8%AF%AD%E6%B3%95%E5%92%8CAPI//setinterval.md)

- [掌握 Javascript 提供的正则表达式 API、可以使用正则表达式（邮箱校验、`URL` 解析、 去重等）解决常见问题](/self-examination/Javascript%20%E5%9F%BA%E7%A1%80//%E8%AF%AD%E6%B3%95%E5%92%8CAPI//RegExp.md)

- [Javascript 异常处理的方式，统一的异常处理方案](/self-examination/Javascript%20基础/语法和API/Error-handler.md)

</br>

## HTML 和 CSS

### HTML

- [从规范的角度理解 HTML，从分类和语义的角度使用标签](/self-examination//HTML%E5%92%8CCSS//HTML//semantic-meaning.md)

- [元信息类标签(`head`、`title`、`meta`) 的使用目的和配置方法](/self-examination//HTML%E5%92%8CCSS//HTML//head-title-meta.md)

- [`HTML5` 离线缓存原理](/self-examination//HTML和CSS//HTML//offline-cache.md)

### CSS

- [了解 CSS 盒模型，在不同浏览器的差异](/self-examination//HTML%E5%92%8CCSS//CSS//box-model.md)

- [CSS 所有选择器及其优先级、使用场景，哪些可以继承，如何运用 at(`@`) 规则](/self-examination//HTML%E5%92%8CCSS//CSS//priority-selector.md)

- [HTML 文档流的排版规则，CSS 几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理](/self-examination//HTML%E5%92%8CCSS//CSS//positions.md)

- [BFC 实现原理，可以解决的问题，如何创建 BFC](/self-examination//HTML%E5%92%8CCSS//CSS//BFC.md)

- [CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染](/self-examination//HTML%E5%92%8CCSS//CSS//module.md)

- [了解并实现常用布局（三栏、圣杯、双飞翼、吸顶）](/self-examination//HTML和CSS//CSS//layout.md)

</br>

## 计算机基础

### 编译原理

- [正则表达式的匹配原理和性能优化](/self-examination//计算机基础//编译原理//regexp.md)

- [如何将 Javascript 代码解析成抽象语法树(AST)](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86//AST.md)

- [Base64 的编码原理](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86//base64.md)

### 网络协议

- [理解什么是协议，了解 TCP/IP 网络协议族的构成，每层协议在应用程序中发挥的作用](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/TCPIP.md)

- [三次握手和四次挥手详细原理，为什么要使用这种机制](/self-examination/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE//shake-hand.md)

- [DNS 的作用、解析的详细过程、优化原理](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE//DNS.md)

- [CDN 的作用和原理](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/CDN.md)

- [HTTP 请求报文和响应报文的具体组成，能理解常见请求头的含义，有几种请求方式，区别是什么](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE//HTTP-method.md)

- [HTTP 所有状态码的具体含义，看到异常状态码能快速定位问题](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE//HTTP-status-code.md)

- [HTTP/1.1、HTTP/2 带来的改变](/self-examination//%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80//%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE//HTTP1.1-HTTP2.0.md)

- [理解 WebSocket 协议的底层原理、与 HTTP 的区别](/self-examination//计算机基础//网络协议//socket-http.md)

</br>

## 数据结构与算法

### Javascript 编码能力

- [多种方式实现数组去重，并对比优缺点](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//array-deduplication.md)

- [实现一个被迭代的 `object`](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//iterator-object.md)

- [多种方式实现深拷贝、对比优缺点](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//deep-clone.md)

- [手写防抖和节流工具函数、并理解其内部原理和应用场景](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//debounce-throttle.md)

- [实现一个可以控制并发数的 `Promise`](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//concurrency-promise.md)

- [已知数据格式，实现一个函数 `fn` 找出链条中所有的父级 `id`](/advanced-frontend//92.ts)

- [实现数组打平（数组扁平化）](/self-examination/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//flat-array.md)

- [实现一个 `sleep` 函数](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//Javascript%20%E7%BC%96%E7%A0%81%E8%83%BD%E5%8A%9B//sleep.md)

- [`['1','2','3'].map(parseInt)` 结果和原因](/self-examination//数据结构与算法//Javascript%20编码能力//map-parseInt.md)

### 手动实现前端轮子

- [手动实现 `call`、`apply`、`bind`](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0%E5%89%8D%E7%AB%AF%E8%BD%AE%E5%AD%90/call-apply-bind.md)

- [手动实现符合 `Promise/A+` 规范的 `Promise`](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0%E5%89%8D%E7%AB%AF%E8%BD%AE%E5%AD%90//promise.md)

- [手写 `JSON.stringify`](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0%E5%89%8D%E7%AB%AF%E8%BD%AE%E5%AD%90//JSON.md)

### 数据结构

- [理解 `哈希表` 的基本结构和特点](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/hashtable.md)

- [理解数组、字符串的存储原理，并熟练应用他们解决问题](/self-examination//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95//%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84//array-string.md)

</br>

## 运行环境

### 浏览器 API

- [浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型](/self-examination//运行环境//浏览器API//same-origin-policy.md)

- [浏览器提供的几种存储机制、优缺点、开发中正确的选择](/self-examination//运行环境/浏览器API/storage.md)

### 浏览器原理

- [可详细描述浏览器从输入 URL 到页面展现的详细过程](/self-examination/%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83//%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86//input-url.md)

- [深入理解浏览器的缓存机制](/self-examination//%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83//%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86//cache.md)

- [浏览器解析 HTML 代码的原理，以及构建 DOM 树的流程](/self-examination//运行环境//浏览器原理//parse-html.md)

- [浏览器如何解析 CSS 规则，并将其应用到 DOM 树上](/self-examination//运行环境//浏览器原理//parse-css.md)

### Node

- [掌握一种 Node 开发框架，如 Express、Koa，并了解两者的区别](/self-examination//%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83//Nodejs//express-koa.md)

</br>

## 框架和类库

### React

- [虚拟 DOM 是否真的比操作原生 DOM 快](/self-examination//%E6%A1%86%E6%9E%B6%E5%92%8C%E7%B1%BB%E5%BA%93/react//virtualDOM-DOM.md)

- [理解 React 中 `onClick` 绑定后的工作原理](/self-examination//框架和类库//react//onclick.md)

- [React 父组件 `props` 变化的时候子组件怎么监听](/self-examination/框架和类库//react//props-listen.md)

- [什么是高阶组件，受控组件，非受控组件](/self-examination//框架和类库//react//HOC-component.md)

- [`useEffect` 能完全模拟 `componentDidUpdate` 么？](/self-examination/框架和类库/react/useEffect-componentDidUpdate.md)

- [React 的事件底层实现机制](/self-examination/框架和类库/react/event.md)

### Vue

- [手写实现 `computed` 函数](/self-examination//框架和类库//vue//computed.md)

### Webpack

- [Webpack 中 loader 的作用，有哪些常见的 loader](/self-examination/框架和类库/webpack/loader.md)

- [Webpack 中 plugin 的作用，有哪些常见的 plugin](/self-examination/框架和类库/webpack/loader.md)

### 多端开发

- [理解 Viewport、`em`、`rem` 的原理和用法，分辨率、`px`、`ppi`、`dpi`、`dp` 的区别和实际应用](/self-examination//框架和类库//多端开发//viewport.md)

</br>

## 引用

<samp>
  
- [前端工程师的自检清单](https://juejin.cn/post/6844903830887366670)

- [前端 100 问](https://juejin.cn/post/6844903885488783374)

</samp>
