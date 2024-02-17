## ES Module 与 Common JS 的区别

### 语法差异

- ES Module 使用 `import` 和 `export` 语句来导入和导出模块成员：

```js
// 导出
export const myVar = 'Hello, World!';
export function myFunction() { ... }

// 导入
import { myVar, myFunction } from './module.js';
```

- CommonJS 使用 `require` 来导入模块，`module.exports` 或 `exports` 来导出模块成员：

```js
// 导出
module.exports.myVar = 'Hello, World!';
exports.myFunction = function() { ... };

// 导入
const { myVar, myFunction } = require('./module');

```

### 加载机制

- ES Module 支持静态导入和动态导入。静态导入发生在模块的解析阶段，使得导入操作更早发生，有利于静态分析和 tree-shaking。动态导入（使用 `import()` 表达式）允许条件加载和异步加载模块

- CommonJS 模块通过 `require` 函数进行同步加载。`require` 可以出现在代码的任何地方，并且其执行是动态的，这使得分析依赖关系更加复杂，不利于静态优化

### 运行时行为

- ES Module 在导入时是只读的引用，即导入的变量是活动的，指向导出的值。如果导出的值发生变化，导入的变量也会反映这一变化。如果在 `modules.js` 中的 `export` 的值变了，`import` 的地方看到的值也会跟着改变

- CommonJS 导入的是一个值的拷贝，一旦模块被导入，无论模块如何变化，导入的值都不会改变

### 循环依赖处理

- ES Module 和 CommonJS 都支持循环依赖，但是它们处理循环依赖的方式不同。ES Module 由于静态结构，可以在编译时就确定模块之间的依赖关系，循环依赖时不会中断模块的加载，但可能会因为导入顺序问题导致运行时错误

- CommonJS 处理循环依赖时，可能会返回一个未完全初始化的导出对象，因为 `require` 是同步并且动态执行的，这可能导致一些难以预测的结果

### 生态系统

- CommonJS 主要用于 Node.js 环境，是 Node.js 原生支持的模块系统

- ES Module 是 Javascript 语言标准的一部分，由 ECMAScript 规范定义，现代浏览器和最新版本的 Node.js 都支持 ES Module

### 动态导入

动态导入是指在运行时（而不是编译时）根据需要导入模块的能力。这种方式通常用于按需加载模块，从而优化应用的启动时间和性能，因为它允许应用尽在必要时才加载某些代码块。在 JS 中，动态导入通过 `import()` 函数实现，它返回一个 Promise 对象，该对象解析为模块的导出

#### 为什么说 CommonJS 不支持动态导入

当说起 CommonJS 不支持动态导入时，主要是指 CommonJS 规范本身没有提供像 ES Module 中 `import()` 这样的语法来在运行时异步加载模块。CommonJS 的 `require()` 函数用于同步加载模块，它在模块代码被执行时立即读取和执行模块文件，然后返回模块的 `exports` 对象。这意味着使用 CommonJS 时，所有需要的模块都会在应用启动时同步加载，这可能会导致性能问题，尤其是在模块数量很大或模块文件很大的情况下

虽然 CommonJS 规范本身不支持动态导入，但在某些 Javascript（如 Node.js）中，开发者可以使用其他机制（比如使用 `import()` 或者条件性地使用 `require()`）来实现类似动态导入的效果
