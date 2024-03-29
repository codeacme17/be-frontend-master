## 使用 `data-` 属性的好处

使用 HTML5 引入的 `data-` 属性有很多好处，它允许开发者在元素上存储额外的信息而不影响到 DOM 的表现或行为。这些自定义数据属性提供了一种将数据直接嵌入到 HTML 元素中的简单方法，而无需使用额外的 Javascript 或者隐藏元素，以下是使用该属性的一些主要优势

#### 语义清晰

`data-` 属性允许开发者为元素提供与之相关的信息，使得 HTML 代码的阅读和理解变得更加容易。开发者可以自定义数据属性的名称，从而使代码更具有语义化，便于团队理解和维护

#### DOM 独立

由于 `data-` 属性直接嵌入在 HTML 元素中，它们不依赖于外部的脚本或样式表，这意味着数据与表示（DOM 结构）分离，有助于保持代码的干净和组织性

#### Javascript 交互

通过 Javascript 的 `dataset` 属性，可以轻松访问和修改 `data-` 属性存储的数据，这为元素与 Javascript 之间的交互提供了便利。使用 `dataset` 可以简化数据的获取和更新，而不需要依赖于类名或 ID 等其他选择器

#### CSS 样式钩子

`data-` 属性也可以被 CSS 选择器用来应用特定的样式。这意味着可以根据元素的数据属性来改变其样式，而无需添加额外的类名或 ID，这样可以减少不必要的 DOM 操作，提高性能

#### 增强可访问性

在某些情况下，`data-` 属性可以用来增强网站的可访问性。例如，通过存储额外的描述性信息，然后通过脚本讲这些信息以适合屏幕阅读的方式展现出来

#### 避免非标准属性的使用

在 HTML5 之前，开发者可能会使用非标准的属性来存储数据，这可能导致 HTML 验证失败。`data-` 属性提供了一种标准化的方式来存储自定义数据，同时保持 HTML 代码的有效性和清洁
