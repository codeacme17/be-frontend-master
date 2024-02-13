## 原生事件绑定（跨浏览器），dom0 和 dom2 的区别

### 原生事件绑定（跨浏览器）

跨浏览器的原生事件绑定需要处理浏览器之间的兼容性问题。传统上，有两种方式可以在 Javascript 中为元素添加事件监听器

#### DOM0 级事件模型

DOM0 级事件模型并不是一个正式的规范，而是一个事实上的标准，代表了早起的事件处理方式。在 DOM0 级模型中，事件处理函数通常直接绑定在 HTML 元素的属性上，或者通过 Javascript 设置元素的事件处理属性，如：

```html
<button onclick="alert('hello, DOM0')">click</button>
```

或者：

```js
document.getElementById('myButton').onclick = function () {
  alert('Hello, DOM0')
}
```

在这个模型中，每个事件（如 click、load 等）在每个元素上只能有一个处理函数，如果尝试为同一个事件分配多个处理器，新的处理器将会覆盖旧的

#### DOM2 级事件模型

DOM2 级事件模型是 W3C 的一个正式规范，首次引入了事件流的概念，包含事件捕获和事件冒泡，以及通过 `addEventListener` 和 `removeEventListener` 方法注册和移除事件监听器。这允许开发者为同一个事件在同一个元素上绑定多个事件处理函数，而不会互相覆盖，提供了更灵活的事件处理机制，例如：

```js
document.getElementById('myButton').addEventListener(
  'click',
  function () {
    alert('Hello, DOM2!')
  },
  false
)
```

这种方法提高了事件处理的灵活性和可控性，并且是目前推荐的事件绑定方式

### 原生事件绑定，跨浏览器

为了实现跨浏览器的事件绑定，通常需要编写一些条件代码来检测浏览器支持的特性，并据此选择使用 `addEventListener`、`attachEvent`，或是直接使用 DOM0 级方法。例如：

```js
function addEvent(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, fasle) // 非 IE 浏览器
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, handler) // IE 浏览器
  } else {
    element['on' + type] = handler // DOM0 级方法作为备选
  }
}
```

### DOM0 级和 DOM2 级事件的区别

- 绑定方式：DOM0 级通过直接在元素上设置事件属性来绑定处理函数；DOM2 级通过 `addEventListener` 和 `attachEvent` 方法来绑定

- 多个处理函数：DOM0 级每个事件只能绑定一个处理函数，后绑定的会覆盖先绑定的；DOM2 级可以为同一个事件绑定多个处理函数，不会相互覆盖

- 事件流阶段：DOM2 级事件提供了捕获和冒泡两种事件流模型，通过 `addEventListener` 的第三个参数来控制；而 DOM0 级不支持事件捕获

- 跨浏览器兼容性：DOM0 级事件处理方式在所有浏览器中都得到支持；DOM2 级在旧版 IE 浏览器中需要使用特定的 `attachEvent` 方法，而现代浏览器使用 `addEventListner`

### DOM1 级结构模型

DOM1 主要关注的是文档的结构模型，而不是事件模型。DOM Level 1 规范定义了 DOM 的基础结构，如何操作文档的节点等，但没有定义如何管理事件。因此，当人们谈论 DOM 事件模型时，通常会跳过 DOM1，直接存 DOM0 过渡到 DOM2，因为后者引入了更完整的标准化的事件处理机制
