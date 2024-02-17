## Tree-shaking 的原理

Tree-shaking 是一种通过清除未使用的代码来优化最终打包文件大小的技术。这个术语主要与 Javascript 和现代前端构建工具（如 Webpack、Rollup 等）相关，但它的概念可以应用于任何编程语言的代码优化中，Tree-shaking 的效果时减少应用的体积，提高加载速度，从而改善最终用户的体验

### 原理

Tree-shaking 的原理基于 ES6 模块的静态结构特性。与 CommonJS 等其他模块系统不同，ES6 模块的导入（`import`）和导出（`export`）语句在文件的顶层不能动态执行，这使得编译时能够确定模块之间的依赖关系

- 静态分析

  构建工具在打包过程中，通过静态分析技术分析代码中的 `import` 和 `export` 语句，建立起模块之间的依赖关系图，这一步允许构建工具准确的知道哪些模块被使用，哪些模块未被使用

- 标记未使用的代码

  通过依赖关系图，构建工具可以识别哪些到处的变量或函数在项目中从未被引用。这些未被引用的部分被标记为“未使用”

- 删除未使用的代码

  在最终的打包文件中，那些标记为”未使用“的模块或代码将会被删除，这一步是在代码压缩（minification）阶段完成的，因为压缩工具（如 Terser）会删除那些未被引用的代码

### 使用条件

- ES6 模块

  Tree-shaking 最有效的前提是使用 ES6 模块语法。虽然一些工具能够在 CommonJS 等模块系统上模拟 tree-shaking，但是效果不如 ES6 模块

- 副作用（Side-Effects）的管理

  为了最大化 tree-shaking 的效果，开发者需要确保模块没有或能够显示标记副作用。在 `package.json` 中，可以使用 `"sideEffects"` 属性来指示哪些文件是”无副作用“的，这样构建工具就可以安全的排除那些文件中未使用的部分

### 优势与局限

- 优势：减少打包后应用的体积，提高应用的加载速度和性能

- 局限：Tree-shaking 依赖于静态分析，因此动态引用的代码可能无法被正确识别和删除，此外，如果代码中含有副作用，错误地删除了这些代码可能会导致应用出现运行时错误

### 关于副作用的案例

在 Tree-shaking 的上下文中，”副作用“ 指的是：模块执行时对应用状态或系统产生的影响，这些影响超出了模块返回值的范围。比如修改全局变量或对象、直接执行操作、修改原型和发起网络请求等都会引起副作用

假设我们有一个 Javascript 模块（'sideEffects.js'），它执行了一些有副作用的操作，但没有到处任何被其他模块引用的成员：

```js
console.log('这个模块被加载了，但没有导出任何内容。')

document.body.style.backgroundColor = 'lightblue'

// 添加一个全局事件监听器
window.addEventListener('resize', () => {
  console.log('窗口大小改变！')
})
```

即使没有其他模块直接引用 `sideEffects.js` 中导出的任何内容，这个模块仍然对全局状态产生了影响：

- 改变了文档的背景颜色

- 向 `window` 对象添加了一个事件监听器

现在，假设我们在主模块（`main.js`）中导入 `sideEffects.js`，但我们没有使用任何从它到处的成员：

```js
import './sideEffects.js'
```

在这种情况下，尽管 `main.js` 并没有使用 `sideEffects.js` 到处的任何东西，Tree-shaking 机制如果移除了 `sideEffects.js` 的导入，那么页面背景颜色将不会改变，而且窗口大小变化时也不会在控制台打印消息。这说明，尽管 `sideEffects.js` 没有到处任何被直接引用的内容，它的副作用对程序的行为有重要影响，因此不能安全地被 tree-shaking 机制移除

为了让构建工具知道 `sideEffects.js` 模块含有副作用可以在 `package.json` 中明确指出：

```JSON
{
  "name": "your-package-name",
  "version": "1.0.0",
  "sideEffects": [
    "./path/to/sideEffects.js"
  ]
}

```

通过这种方式，构建工具在进行 tree-shaking 时会保留对 `sideEffects.js` 的引用，确保应用程序的行为不会因为移除了有副作用的模块而发生改变
