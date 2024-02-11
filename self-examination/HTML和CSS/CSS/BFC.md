## BFC 实现原理，可以解决的问题，如何创建 BFC

> Reference: [JJ](https://juejin.cn/post/6974636948056965133)

Block-formatting-context（块级格式化上下文）是 CSS 中的一个概念，它是一种渲染模式，用于控制和管理块级盒子的布局、浮动和清除浮动等行为。BFC 的创建和应用可以解决一些常见的布局问题

### BFC 原则

BFC 的实现原理涉及到以下几个原则：

- 内部的 Box 会在垂直方向，一个接一个地放置

- Box 垂直方向的距离由 `margin` 决定。属于同一个 BFC 的两个相邻的 Box 的 `margin` 会发生重叠

- 每个元素的左外边缘贴着包含块的左边缘（对于从右到左的格式，右边缘贴着），即使存在浮动也是如此

- BFC 的区域不会与 float box 重叠

- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

- 计算 BFC 的高度时，浮动元素也参与计算

### BFC 可以解决的问题

- 放置 margin 重叠：同一个 BFC 内部的 Block 元素的垂直 margin 会发生重叠，但是通过创建新的 BFC，可以避免不同 BFC 容器中的元素的 margin 重叠问题

- 清除内部浮动：在 BFC 中，浮动元素会参与高度计算，这意味着 BFC 可以包含浮动元素，解决父元素因子元素浮动导致的高度塌陷问题

- 避免文字环绕：BFC 可以防止文字围绕浮动元素，通过将文字内容放在 BFC 中，可以让文字块不被浮动元素所影响

### 创建 BFC

- 根元素 `<html>` 本身就是一个 BFC

- 浮动元素，元素的 `float` 不是 `none`

- 绝对定位元素，元素的 `position` 为 `absolute` 或 `fixed`

- 行内块元素，元素的 `display` 为 `inline-block`

- 表格单元格，元素 `display` 为 `table-cell` HTML 表格单元格默认值

- 表格标题，元素的 `display` 为 `table-caption`，HTML 表格标题默认值

- 具体 `overflow` 不是 `visible` 的块元素（包括 `scroll`、`hidden`、`auto`）

- `display` 为 `flow-root` 的元素

- `display` 为 `flex` 或 `inline-flex` 元素的直接子元素（这些元素本身是 flex 容器）
