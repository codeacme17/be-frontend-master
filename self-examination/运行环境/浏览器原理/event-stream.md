## 浏览器事件流模型都有什么

Javascript 的事件流模型主要描述了从页面中接受事件的顺序。自从 Internet Explore 和 Netscape Navigator 在 90 年代引入了 Javascript 事件处理以来，事件流模型经历了发展，主要分为两种模型：事件冒泡和事件捕获，以及后来的 DOM Level 2（DOM2）事件规范中引入的事件流概念，它包括了这两种模型，并添加了事件目标阶段

### 事件冒泡（Event Bubbing）

事件冒泡是最初由 Microsoft 提出的事件流模型。在事件冒泡中，事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。这意味着，一个点击事件会被触发的元素接收，然后是其父元素，接着是父元素的父元素，一直冒泡到文档的根元素

### 事件捕获（Event Capturing）

事件捕获是由 Netscape 提出的另一种事件流模型。事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的过程是从文档的根元素开始的，然后逐级向下到目标元素

### DOM2 事件流

DOM2 事件规范定义了包含三个阶段的事件流：事件捕获阶段、处于目标阶段和事件冒泡阶段

- 事件捕获阶段：事件从文档根节点开始，沿 DOM 树向下传播到目标元素的过程

- 处于目标阶段：事件到达目标元素本身，在这里可以触发注册在目标元素上的监听器

- 事件冒泡阶段：事件从目标元素开始，沿 DOM 树向上冒泡回文档根节点的过程

开发者可以选择在哪个阶段对事件进行监听，使用 `addEventListener` 方法时，其第三个参数可以指定时在捕获阶段还是在冒泡阶段处理事件。如果第三个参数为 `true`，则在捕获阶段处理事件；如果为 `false`(默认值)，则在冒泡阶段处理事件

### 阻止事件冒泡与捕获

可以通过事件对象提供的方法来阻止事件冒泡和捕获

#### 阻止事件冒泡

当事件处理器在事件流的冒泡货捕获阶段被触发时，可以调用 `stopPropagation()` 方法阻止事件继续传播，这意味着如果有事件从子元素向父元素冒泡，调用了 `stopPropagation()` 后，父元素的事件处理器将不会被触发

```js
element.addEventListener(
  'click',
  function (e) {
    event.stopPropagation()
    console.log('This will be executed, but event will not bubble up.')
  },
  false
)
```

#### 阻止事件捕获

实际上，`stopPropagation()` 方法同样适用于捕获阶段。如果在捕获阶段的事件处理器中调用了 `stopPropagation()`，事件将不会继续向目标元素传递

#### 阻止默认行为

有时，可能只想阻止事件的默认行为而不阻止事件传播。例如，点击链接默认会导航到一个新的 URL，但可以阻止这种行为而不阻止事件冒泡

```js
element.addEventListener(
  'click',
  function (event) {
    event.preventDefault()
    console.log('Link will not navigate to a new URL.')
  },
  false
)
```

#### DOM0 级事件规范的阻止默认行为方式

在 DOM0 级事件规范（通过在 HTML 标签中定义事件）中，可以通过函数返回 `false` 来进行阻止默认行为

```js
<a href="https://www.example.com" onclick="return doSomething();">Click me</a>
<script>
function doSomething() {
    console.log('Doing something...');
    // 阻止默认行为
    return false;
}
</script>
```
