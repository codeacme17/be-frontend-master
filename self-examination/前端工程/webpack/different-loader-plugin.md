## loader 与 plugin 的不同是什么

Webpack 中的 loader 和 plugin 都是扩展 Webpack 功能的重要手段，但它们在用途、工作方式及配置方法上有明显的区别

### Loader

Loader 用于对模块的源代码进行转换。Loader 可以让 Webpack 处理哪些非 Javascript 文件（Webpack 自身只能理解和处理 Javascript）。通过 Loader，可以把不同的文件（如 CSS、HTML、Typescript、图片等）转换为 Webpack 能够处理的模块。当 Webpack 处理应用程序时，它根据规则（通常是文件扩展名或文件内容的测试）自动调用相应的 Loader 来处理非 Javascript 文件

- 工作方式：Loader 本质上是一个函数，在该函数中对接收到的内容进行转换，然后返回新的内容给 Webpack，他们在模块加载时作用于文件

- 配置：在 Webpack 配置文件的 `module.rules` 数组中配置 Loader，通过正则表达式来匹配文件类型，并制定使用的 Loader 列表

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ]
}
```

### Plugin

Plugin 用于执行更广泛的任务，它们可以影响 Webpack 的编译过程的每个阶段，Plugin 可以用于执行各种任务，比如打包优化、资源管理、环境变量注入等

- 工作方式：Plugin 通过钩子机制工作，Webpack 在其编译过程中会触发各种事件钩子，Plugin 可以在这些钩子上绑定并执行任务，Plugin 可以访问 Webpack 的整个编译生命周期，因此它们能够执行更为复杂的任务

- 配置：在 Webpack 配置文件的 `plugins` 数组中配置 plugin，并且需要通过 `new` 操作符来实例化它们

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 其他配置...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
```

### 主要区别

- 目的和用途：Loader 用于转换某些类型的模块，而 Plugin 影响整个构建过程，能够执行更为宽泛的任务

- 工作方式：Loader 直接作用于文件上，进行转换操作，Plugin 工作于 webpack 的编译过程中，通过钩子执行任务

- 配置方式：Loader 在 `module.rules` 中配置，通过 `test` 来配置文件，并指定使用的 Loader；Plugin 在 `plugins` 数组中配置，需要实例化
