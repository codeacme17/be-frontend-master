## Webpack 中 plugin 的作用，有哪些常见的 plugin

Webpack 的插件系统是其核心功能之一，提供了一种强大的方式来扩展 webpack 的能力，通过插件，webpack 可以执行广泛的任务，从包优化和压缩，到资产管理和环境变量注入等等。插件可以影响 webpack 的编译过程的每个阶段，提供了对 webpack 构建过程的深度介入能力

### Plugin 的作用

插件用于执行哪些 loader 无法完成的任务，它们的作用范围非常广法，包括但不限于：

- 资源优化和压缩

- 环境变量注入

- 代码分割和懒加载

- 自动生成 HTML 文件

- 清理构建目录

- 执行代码风格和错误检测

- 复制和转移文件

- 提取 CSS 到独立文件

插件通过钩子机制工作，Webpack 在其编译过程中会触发各种事件钩子，插件可以在这些钩子上绑定并执行任务

### 常见的 Plugin

- `HtmlWebpackPlugin` - 自动生成 HTML 文件，并注入所有生成的 bundle，这对于在文件名包含哈希（用于缓存控制）时非常有用

- `MiniCssExtractPlugin` - 将 CSS 提取到独立的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，支持 CSS 的按需加载

- `DefinePlugin` - 允许在编译时创建配置的全局常量，这常用于允许开发和生产环境之间有条件地构建

- `CleanWebpackPlugin` - 在每次构建前清理/删除构建文件夹，确保构建产出的目录只包含用到的文件

- `UglifyJsPlugin` - 压缩 Javascript 代码，在 Webpack4 中，这个功能已经内置于 `optimization.minimize` 选项中

- `CopyWebpackPlugin` - 将单个文件或整个目录复制到构建目录

- `ComporessWebpackPlugin` - 准备压缩版本的资产，以便它们能够更快的通过支持内容编码的服务器提供

- `TerserPlugin` - 用于替换 UglifyJsPlugin，因为它支持 ES6+ 的语法压缩

- `OptimizeCSSAssetsPlugin` - 优化和压缩 CSS 文件

- `EnviromentPlugin` - 一个通过 `DefinePlugin` 更方便的接口，用于设置环境变量

### Plugin 的使用

在 Webpack 配置文件中使用插件，需要使用 `plugins` 数组进行配置，并实例化插件

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  // 其他配置...
  plugins: [
    new HtmlWebpackPlugin({
      template: './scr/index.html'
    })
  ]
]
```
