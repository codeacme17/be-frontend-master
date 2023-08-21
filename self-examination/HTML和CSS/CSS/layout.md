## 了解并实现常用布局（三栏、圣杯、双飞翼、吸顶）

### 三栏

三栏布局时指在一个页面中分为左、中、右三个区域，常用于网站的基本布局，实现三栏布局有多种方法，其中一种常见的方法是使用浮动（Float）和负边距（Negative Margins）

#### 实现

```html
<div class="container">
  <div class="left-column">Left Column</div>
  <div class="main-content">Main Content</div>
  <div class="right-column">Right Column</div>
</div>
```

```css
.container {
  width: 100%;
  overflow: hidden; /* 清除浮动影响 */
}

.left-column {
  float: left;
  width: 200px; /* 左栏宽度 */
  background-color: #ccc;
}

.main-content {
  margin: 0 220px; /* 左右栏宽度之和 */
  background-color: #f0f0f0;
}

.right-column {
  float: right;
  width: 200px; /* 右栏宽度 */
  background-color: #ccc;
}
```

在上述的例子中， `.left-column` 和 `.right-column` 分别浮动到左侧和右侧，设置宽度和背景色，`.main-content` 使用负边距将左右两个栏目的宽度减去，从而流出中间的内容区域，为了清除浮动影响，`.container` 使用 `overflow: hidden`

#### 优缺点

- 优点
  兼容各种浏览器

- 缺点
  可能需要使用负边框，不够语义化，并且在某些情况下需要进行适当的调整。在实际应用中，也可以考虑使用 Flexbox 或 CSS Frid 来实现更灵活的布局

### 圣杯

圣杯布局是一种常用于页面设计的三栏布局，其中有一个主要内容区域，两个侧边在左右两侧。与普通的三栏布局相比，圣杯布局的一个特点是能够让主要内容区域优先渲染，同时保持三栏的顺序。这种布局的目的是实现一个响应式、语义化的布局结构

#### 实现

```html
<div class="container">
  <div class="main-content">Main Content</div>
  <div class="left-column">Left Column</div>
  <div class="right-column">Right Column</div>
</div>
```

```css
.container {
  display: flex;
}

.main-content {
  flex: 1; /* 自动填充剩余空间 */
  order: 2; /* 主内容在第二个位置 */
}

.left-column,
.right-column {
  flex-basis: 200px; /* 侧边栏宽度 */
}

.left-column {
  order: 1; /* 左侧栏在第一个位置 */
}

.right-column {
  order: 3; /* 右侧栏在第三个位置 */
}
```

在这个例子中，.container 使用 Flexbox 布局，主要内容区域（.main-content）使用 flex: 1; 填充剩余空间，左侧栏和右侧栏使用 flex-basis 设置固定宽度。通过 order 属性来控制各个栏目的顺序。

#### 优缺点

- 优点
  能够保持主要内容优先渲染，适用于响应式设计，并不需要负边距等技巧

- 缺点
  对于一些老旧的浏览器可能需要进行一些降级处理

### 双飞翼

双飞翼是一种常用的网页设计的三栏布局，与圣杯布局类似，它也有一个主要内容区域和两个侧边栏。双飞翼布局的特点是能够让主要内容区域优先渲染，并且不需要使用负边距。这种布局的目的是实现语义化、SEO 友好的布局结构

#### 实现

```html
<div class="container">
  <div class="main-content">
    <div class="inner-main-content">Main Content</div>
  </div>
</div>
<div class="left-column">Left Column</div>
<div class="right-column">Right Column</div>
```

```css
.container {
  display: flex;
}

.main-content {
  flex: 1; /* 自动填充剩余空间 */
}

.inner-main-content {
  margin: 0 220px; /* 左右侧栏宽度之和 */
}

.left-column,
.right-column {
  flex-basis: 200px; /* 侧边栏宽度 */
}

.left-column {
  margin-left: -100%; /* 负边距将左侧栏拉回 */
}

.right-column {
  margin-left: -200px; /* 负边距将右侧栏拉回 */
}
```

在这个例子中，`.container` 使用 Flexbox 布局，主要内容区域（`.main-content`）使用 `flex: 1`; 填充剩余空间，内部的 `.inner-main-content` 用来给主内容区域设置间距以避免被遮挡。左侧栏和右侧栏使用 `flex-basis` 设置固定宽度，然后通过负边距将它们拉回到视觉上的正确位置

#### 优缺点

- 优点
  能够保持主要内容优先渲染，不需要使用负边距，并且比较语义化

- 缺点
  对于一些老旧的浏览器可能需要进行一些降级处理

### 吸顶

吸顶布局是一种常见的网页布局方式，也被称为固定定位布局。它的特点是在页面滚动时，某个元素会保持在页面顶部，不随页面的滚动而移动。通常，吸顶布局适用于导航栏、工具栏等在页面滚动时需要始终保持可见的元素。

#### 实现

```html
<div class="header">
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
<div class="content">
  <!-- 页面内容 -->
</div>
```

```css
.header {
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
```

```javascript
$(document).ready(function () {
  var header = $('.header')
  var headerHeight = header.outerHeight()
  var content = $('.content')

  $(window).scroll(function () {
    if ($(window).scrollTop() >= headerHeight) {
      header.addClass('fixed-header')
      content.css('margin-top', headerHeight + 'px')
    } else {
      header.removeClass('fixed-header')
      content.css('margin-top', '0')
    }
  })
})
```

在这个示例中，`.header` 是顶部导航栏的容器，`.fixed-header` 是应用了吸顶样式的导航栏。通过 JavaScript 监听滚动事件，当滚动距离超过导航栏的高度时，给导航栏添加吸顶样式，并设置内容区域的上边距，以避免内容被导航栏遮挡。

#### 注意

需要注意的是，这只是一个简单的示例，实际项目中可能需要更多的样式和逻辑来适应不同的布局和需求。另外，也可以使用纯 CSS 实现吸顶布局，例如使用 `position: sticky;` 属性。
