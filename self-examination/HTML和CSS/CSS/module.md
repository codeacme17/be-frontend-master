## CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染

### CSS 模块化方案

在 CSS 中实现模块化可以帮助我们更好地组织和管理样式代码，避免全局污染和命名冲突，以下是几种常见的 CSS 模块化方案

- BEM(Block Element Modifier): BEM 是一种命名约定，通过将类名分为块 (Block) 、元素 (Element) 和修饰符 (Modifier) 三个部分，实现样式的模块化和可重用性

- CSS Modules：CSS Modules 是一种 CSS 模块化解决方案，它通过在类名上自动添加唯一的哈希值，解决了命名冲突的问题，并提供了本地作用域的样式（Vue 框架中 `scoped` 的解决方案）

- CSS-in-JS：CSS-in-JS 是一种将 CSS 写在 Javascript 中的方式，通过 JS 的能力来实现样式的模块化，例如使用 `style-components` 或 `emotion` 等库

### 按需加载

按需加载 CSS 是一种优化策略，它可以减少页面加载时所需的 CSS 文件大小，从而加快页面渲染速度，以下是一些配置按需加载的方法

- 使用工具库：像 webpack、Parcel、Rollup 等构建工具都提供了相应的插件或配置来实现按需加载 CSS。通过这些工具，可以根据需要动态的引入所需的 CSS 文件

- CSS 预处理器的 Mixins：如果使用 CSS 预处理器如 SASS 或 LESS, 可以将样式定义为 Mixins，然后在需要的地方引入，这样只会将使用到的样式编译为最终的 CSS 文件

- 动态加载 CSS：使用 JS 动态创建 `<link>` 标签，将样式表添加到页面中，这样可以根据需要动态的加载所需的 CSS 文件

### 防止 CSS 阻塞渲染

当浏览器遇到外部 CSS 时，会阻塞页面的渲染，直到 CSS 文件加载和解析完成，为了防止 CSS 阻塞渲染，可以采取以下措施

- 内联关键 CSS：将关键的 CSS（如页面上首屏所需的样式）内联到 HTML 的 `<style>` 标签中，使其不需要额外的网络请求，从而加快页面的渲染速度

- 使用媒体查询：将较大的 CSS 文件拆分为多个文件，并使用媒体查询根据不同的设备和视图条件加载不同的 CSS 文件

- 异步加载 CSS：使用 JS 动态创建 `<link>` 标签，将 CSS 文件添加到页面中，提过将 CSS 文件的加载与页面的渲染分开，可以防止 CSS 阻塞页面的渲染

### 扩展

#### Mixins

在 Sass 中，Mixins（混合）是一种重用样式代码的机制，类似于函数。通过定义和调用 Mixins，可以在样式表中重复使用一组样式规则，提高代码的可维护性和可重用性。下面是对 Sass Mixins 的详细说明：

1. 定义 Mixins：
   使用 `@mixin` 关键字定义一个 Mixin，并指定一个名称和一组样式规则。示例如下：

   ```scss
   @mixin button {
     display: inline-block;
     padding: 10px 20px;
     background-color: #f1f1f1;
     border: 1px solid #ccc;
     border-radius: 4px;
     color: #333;
     text-decoration: none;
   }
   ```

   在上述示例中，`button` 是 Mixin 的名称，后面的样式规则组成了 Mixin 的内容。

2. 调用 Mixins：
   使用 `@include` 关键字来调用 Mixin，并传递适当的参数（如果有的话）。示例如下：

   ```scss
   .my-button {
     @include button;
   }
   ```

   在上述示例中，`.my-button` 类选择器调用了名为 `button` 的 Mixin，这会将 Mixin 中定义的样式规则应用到 `.my-button` 元素上。

3. 传递参数给 Mixins：
   Mixins 可以接受参数，以便在调用时根据需要动态修改样式。示例如下：

   ```scss
   @mixin button($bg-color, $text-color) {
     display: inline-block;
     padding: 10px 20px;
     background-color: $bg-color;
     border: 1px solid #ccc;
     border-radius: 4px;
     color: $text-color;
     text-decoration: none;
   }

   .my-button {
     @include button(#f1f1f1, #333);
   }
   ```

   在上述示例中，`button` Mixin 接受两个参数 `$bg-color` 和 `$text-color`，调用时可以传递不同的颜色值来定制按钮的背景色和文本颜色。

Mixins 在 Sass 中非常有用，可以减少重复的样式代码，提高代码的可读性和可维护性。通过定义和调用 Mixins，可以将一组常用的样式规则抽象为可重用的模块，方便在样式表中多次使用，并且可以根据需要传递参数来动态修改样式。这使得样式的定义更加灵活和可定制化
