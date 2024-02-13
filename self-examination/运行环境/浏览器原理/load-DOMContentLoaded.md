## document `load` 和 document `DOMContentLoaded` 两个事件的区别

### `DOMContentLoaded` 事件

- 触发时机

  当 HTML 文档被完全加载和解析完成后，`DOMContentLoaded` 事件被触发，无需等待样式表、图片和子框架的加载完成

- 用途

  这个事件非常适合初始化页面结构依赖的 Javascript 脚本，因为此时所有的 DOM 元素都已可用，但可能相关的 CSS 样式和图片等资源尚未加载完成。`defer` 的 script 脚本是在此时之前完成加载和执行

  ```js
  document.addEventListener('DOMContentLoaded', function () {
    // DOM完全加载和解析完成，但样式表、图片和子框架可能尚未加载完成
    console.log('DOM fully loaded and parsed')
  })
  ```

### `load` 事件

- 触发时机

  `load` 事件在页面上所有的资源（包括图片、样式表和外部脚本等）加载完成后出发。这包括了 DOM 树的构建，以及所有相关资源的加载（如样式表和图片）

- 用途

  当需要等待页面上所有元素（包括大型图片或其他文件）完全加载后才执行的操作时，应该使用 `load` 事件

  ```js
  window.addEventListener('load', function () {
    // 页面上所有资源（包括DOM、样式表、脚本、图片等）加载完成
    console.log('All resources finished loading!')
  })
  ```

### 区别

- 触发时机

  `DOMContentLoaded` 事件在 DOM 树构建完成后立即触发，此时不一定所有的资源都加载完成。而 `load` 事件要等到页面上所有资源（包括 DOM、样式表、脚本、图片等）加载完成之后才触发

- 用途差异

  如果脚本依赖于 DOM 结构，但不需要依赖于外部资源，如图片或样式表，则应该使用 `DOMContentLoaded`。如果脚本需要依赖于页面的完全加载，包括所有依赖的资源，那么应该使用 `load` 事件

- 性能考虑

  由于 `DOMContentLoaded` 事件比 `load` 事件先触发，使用 `DOMContentLoaded` 进行脚本初始化可以显著提高页面的响应性和性能
