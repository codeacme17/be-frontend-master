## Webpack 中 loader 的作用，有哪些常见的 loader

Webpack 是一个现代化 Javascript 应用程序的静态模块打包器，它的主要责任是分析项目结构，找到 Javascript 模块以及其它一些浏览器不能直接运行的扩展语言（如 Typtscript、SCSS 等），并将其转换和打包为有效的模块提供浏览器使用。在这个过程中，loader 扮演了至关重要的角色

### Loader 的作用

Loader 让 Webpack 能够去处理那些非 Javascript 的文件（Webpack 自身只理解 Javascript）。Loader 可以将所有类型的文件转换为 Webpack 能够处理的有效模块，然后就可以利用 Webpack 的打包能力，对它们进行处理。简而言之，loader 用于对模块的源码进行转换

Loader 有两个目标

- 转换文件：讲文件从不同的语言（如 Typescript）转化为 Javascript，或将新的语法（如 JSX）转换成旧的语法

- 处理文件：将图片压缩成更小的文件，或将 SCSS、LESS 转换成 CSS

Webpack 在模块加载时使用 Loader，按照配置的规则（通常是文件扩展名或文件内容的测试）应用不同的 loader

### 常见的 Loader

- `babel-loader` 用于将 ES6 及以上版本的嗲吗转换成兼容老版本浏览器的 ES5 代码，它使用 Bebel 和 Webpack 转译 Javascript 文件

- `css-loader` 处理 CSS 文件中的 `url()` 和 `@import`，并将它们解析成 `import/require()` 的 JS 代码，并在后面交给 `style-loader` 处理

- `style-loader` 将模块导出作为样式添加到 DOM 中

- `sass-loader` 将 SASS/SCSS 文件编译成 CSS，通常与 `css-loader` 和 `style-loader` 一起使用，以处理并包含 CSS 文件

- `less-loader` 将 LESS 文件编译成 CSS，功能类似于 `sass-loader`

- `file-loader` 解析项目中的 `import/require()` 的文件，并将这些文件输出到构建目录

- `ts-loader` 将 TypeScript 代码转换成 JavaScript，允许直接在 Webpack 配置中包含 TypeScript 文件

- `vue-loader` 用于加载 Vue.js 单文件组件（.vue 文件），并转换为 JavaScript 模块

- `eslint-loader` 在加载 JavaScript 文件之前检查代码，确保代码风格的统一性和避免潜在错误

### 使用方式

在 webpack 的配置文件中，可以对 loader 进行配置

```js
module: {
  rules: [
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
  ]
}
```

在上述的配置中，`rules` 数组定义了一系列的加载规则

- `test` 属性用于指示哪些文件应该被当前的 loader 处理

- `use` 属性指示用个或哪些 loader 处理这类文件。可以链式调用多个 loader，它们会逆序执行，即数组中最后一个 loader 首先被执行
