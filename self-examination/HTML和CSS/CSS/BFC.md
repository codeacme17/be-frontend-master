## BFC 实现原理，可以解决的问题，如何创建 BFC

> Reference: [JJ](https://juejin.cn/post/6974636948056965133)

Block-formatting-context（块级格式化上下文）是 CSS 中的一个概念，它是一种渲染模式，用于控制和管理块级盒子的布局、浮动和清除浮动等行为。BFC 的创建和应用可以解决一些常见的布局问题

### BFC 实现原理

BFC 的实现原理涉及到以下几个规则：

- 块级容器概念：每个 BFC 都是一个独立的渲染区域，它可以包含一个或多个块级盒子。常见的块级容器有块级（如 `div`、`p`）和具有 `display: inline-block` 属性的元素

- 块级盒子的垂直排列：BFC 中的块级盒子在垂直方向上一个接一个地排列，从上到下

- 边距折叠的阻止：在 BFC 中，相邻的两个块级盒子的垂直外边距不会发生折叠，这意味着它们的外边距不会合并为一个更大的外边距

- 浮动元素的包含：BFC 可以包含浮动的子元素，避免父元素塌陷的问题

- 组织 BFC 区域与浮动元素的重叠：BFC 区域不会与浮动元素发生重叠，因此可以保证布局的正确性

### BFC 可以解决的问题

- 清除浮动：当父元素包含浮动元素时，父元素的高度会塌陷，导致布局混乱。创建一个 BFC 可以使父元素包含浮动元素的高度正常显示

- 网址外边距折叠：相邻的两个元素的外边距可能会合并成一个较大的外边距，这称为外边距折叠，而 BFC 会组织该问题

### 创建 BFC

- 设置 `overflow` 属性为除 `visible` 以外的值，例如 `auto`、`hidden` 和 `scroll`

- 使用 `float` 设置浮动元素

- 使用 `position` 设置为 `absolute` 或 `fixed`

- 使用 `display` 属性为 `inline-block`、`table-cell`、`table-caption`、`flex` 或 `inline-flex`

- 使用 `column-count` 或 `column-width` 属性创建多列布局

以上方法可以创建一个独立的 BFC 区域，从而解决一些常见的布局问题
