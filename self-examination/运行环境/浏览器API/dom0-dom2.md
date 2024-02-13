## 原生事件绑定（跨浏览器），dom0 和 dom2 的区别

### 原生事件绑定（跨浏览器）

跨浏览器的原生事件绑定需要处理浏览器之间的兼容性问题。传统上，有两种方式可以在 Javascript 中为元素添加事件监听器

#### DOM0 级事件处理器

- 直接在 HTML 元素的属性上或通过 Javascript 属性来设置事件处理函数

- 示例（HTML 属性）：

  ```html
  <button onclick="alert('Clicked!')">Click me</button>
  ```

- 示例（Javascript 属性）：

  ```js
  element.onclick = function () {
    alert('Clicked!')
  }
  ```

- DOM0 级方法的限制之一是，每个事件只能绑定一个处理函数

#### DOM2 级事件处理器

- 使用 `addEventListener`（非 IE 浏览器）和 `attachEvent`（IE 浏览器）方法来添加事件监听器

- 示例（非 IE 浏览器）：

  ```js
  element.addEventListener('click', function () {
    alert('Clicked!', false)
  })
  ```

- 示例（IE 浏览器）：

  ```js
  element.attachEvent('onclick', function () {
    alert('Clicked')
  })
  ```

- DOM2 级方法允许为同一个事件绑定多个处理函数，并且提供了更好的控制，包括能够制定事件处理函数窒息感的顺序和移除事件监听器

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
