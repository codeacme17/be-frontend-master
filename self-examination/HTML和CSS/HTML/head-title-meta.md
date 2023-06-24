## 元信息类标签(`head`、`title`、`meta`) 的使用目的和配置方法

### `<head>`

> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head)

`<head>` 标签是 HTML 中的一个元素，用于定义文档的头部部分，其中包含了一些关于文档的元信息和配置，其有以下几点功能：

- 定义文档元信息：该标签用于包含文档的元信息，如 `<title>` 标签用于定义文档的标题，在浏览器的标题栏或书签中显示。`<meta>` 标签用于定义文档的元数据，如字符编码、关键词、描述等等

- 引入外部资源：`<head>` 标签可以用于引入外部资源，如 CSS 样式表、Javascript 脚本等。通过在 `<head>` 中使用 `<link>` 标签和 `<script>` 标签，可以将外部资源链接挂接到 HTML 文档中，以改变样式和添加交互行为

### `<title>`

> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title)

`<title>` 标签是 HTML 中的一个元素，用于定义网页的标题。它位于 `<head>` 标签内部，用于向浏览器和搜索引擎提供关于网页内容的简短描述

- 定义网页标题：`<title>` 标签用于定义网页的文本。标题将显示在浏览器的标题栏或选项卡中，也会作为书签的名称。它对于用户识别页面和搜索引擎优化都很重要

### `<meta>`

> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

`<meta>` 标签是 HTML 中的一个元素，用于在 `<head>` 部分提供网页的元数据和其他信息。它通常用于指定字符编码、视口设置、关键词、描述等元数据，以及提供其他与网页相关的信息

以下是 `<meta>` 标签的一些常见用法和属性：

- 字符编码设置：通过使用 `<meta>` 标签的 `charset` 属性，可以指定网页的字符编码。常见的字符编码是 UTF-8，可通过以下方式设置：

  ```html
  <meta charset="UTF-8" />
  ```

- 视口设置：用于响应式设计和移动设备优化。通过 `<meta>` 标签的 `viewport` 属性，可以设置网页的视口大小和缩放行为

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

- 关键词和描述：通过 `<meta>` 标签的 `name` 属性设置为 "keywords" 或 "description"，可以提供关键词和网页描述

  ```html
  <meta name="keywords" content="关键词1, 关键词2, 关键词3" />
  <meta name="description" content="网页描述" />
  ```

- 作者和版权：通过 `<meta>` 标签的 `name` 属性设置为 "author" 或 "copyright"，可以提供作者和版权信息

  ```html
  <meta name="author" content="作者名" />
  <meta name="copyright" content="版权信息" />
  ```

- 刷新和重定向：`<meta>` 标签的 `http-equiv` 属性可以用于执行刷新或重定向操作。例如，以下代码将在 5 秒后刷新页面：

  ```html
  <meta http-equiv="refresh" content="5" />
  ```

- 其他元数据：`<meta>` 标签还可以用于提供其他自定义的元数据，根据需要使用适当的属性和值进行配置

请注意，`<meta>` 标签通常不会直接对页面显示产生影响，而是提供有关网页的元信息，供浏览器、搜索引擎和其他工具使用。使用 `<meta>` 标签时，确保按照正确的语法和属性值设置，并根据需要选择适当的属性来提供所需的信息
