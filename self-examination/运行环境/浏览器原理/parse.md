## 浏览器资源解析机制

> Reference: [How Browser Work](https://web.dev/howbrowserswork/#the-main-flow)

### 整体流程

这个解析流程可以通过 `document.readyState` 这个属性的状态来展示不同阶段：

`document.readyState`: loading -> interactive -> complete

1. 浏览器获取到 HTML 文档后开始解析 HTML，此时 `document.readyState` 为 `loading` 状态

2. 当 HTML 解析完成，DOM 树构建成功，`document.readyState` 变为 `interactive`(可交互) 状态，这时触发 `DOMContentLoaded` 事件。此时 DOM 元素可以被访问，但是像图片、样式表和框架等资源还在加载

3. 此时文档完全解析完成，`document.readyState` 状态变为 `complete`，Window 会触发 `load` 事件

在 Javascript 中可以通过 `readystatechange` 事件来监听 `readyState` 的变化

### 解析不同资源时的行为

- CSS 样式表 - 阻塞渲染（Render Blocking）

  - `<link>` 引入，不会阻塞 HTML 解析构建 DOM 树，因为会使用异步下载和并行加载的策略

  - `<style>` 引入，不需要下载，浏览器会解析其中的代码构建 CSSOM，此时不会阻塞 HTML 解析

  但是解析 CSS 样式表会阻塞构建渲染树，因为浏览器要将 CSS 样式表中的规则与文档中的元素进行匹配，以保证元素应该如何正确显示

- `<script>` 脚本资源 - 阻塞解析（Parser Blocking）

  浏览器解析到 `script` 资源时，需要等待其下载完成（同步下载）并执行后才会继续解析 HTML，这是因为 JS 代码可以改变页面内容和样式，如果不进行阻塞，可能会造成页面多次变化，影响用户体验。但是当 `script` 标签带上 `defer` 或 `async` 的时候在加载资源时并不会阻塞 HTML 的解析

- `<img>`、`<audio>`、`<video>` 媒体资源

  浏览器遇到这类资源时会异步下载这些资源，以避免阻塞 HTML 的解析和渲染，当这些资源下载完成后，浏览器会将它们插入到文档中，并触发相应的 `load` 事件

### 相关问题

#### 为什么 `<style>` 要放在文档头部

- 防止 FOUC(Flash of Unstyled Content)：指的是网页渲染时，外部样式还没加载好，就以浏览器默认样式短暂的展示了部分内容，等到外部样式加载完成，又恢复正常的这个页面的闪烁过程

- 如果放在尾部，浏览器会在 CSS 样式加载解析后，重新计算样式绘制，造成回流、重回、页面闪动等现象

#### 为什么 `<script>` 要放在底部

- 防止阻塞 HTML 的解析和渲染树的渲染，如果脚本执行时间过长，就会导致页面长时间无响应即白屏时间过长
