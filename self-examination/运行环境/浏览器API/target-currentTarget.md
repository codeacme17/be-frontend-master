## DOM 事件中 `target` 和 `currentTarget` 的区别

### `event.target`

- 定义

  `event.target` 指向触发事件的元素，无论事件监听绑定在哪个元素上，`event.target` 总是指向哪个实际发生事件的最具体的元素

- 用途

  `event.target` 常用于事件委托（Event Delegation）模式中，即在一个父元素上监听子元素的事件，然后通过 `event.target` 来确定具体是哪个子元素触发了事件

### `event.currentTarget`

- 定义

  `event.currentTarget` 指向绑定事件监听的元素，它与 `this` 关键字在事件处理器中的值相同（在非箭头函数中）

  在一个事件传播过程中，`event.currentTarget` 在捕获阶段从顶层对象（如 `window`）开始向下传递到目标的父元素；在目标阶段与 `event.target` 所指向元素相同；在冒泡阶段，从目标节点传回到 `window` 对象，`event.currentTarget` 会随着冒泡路径逐级变化

- 用途

  当你需要引用绑定了事件监听器的元素本身时，`event.currentTarget` 是非常有用的，特别是在事件冒泡过程中，它能帮助确定事件正在通过哪个元素的监听器被处理

### 区别示例

假设有一个父元素 `<div>`，里面有一个子元素 `<button>`，事件监听器绑定在 `<div>` 上，当点击 `<button>` 时：

```html
<div id="parent-div">
  <button id="child-button">Click me</button>
</div>

<script>
  document
    .getElementById('parent-div')
    .addEventListener('click', function (event) {
      console.log('event.target:', event.target.id) // 输出: child-button
      console.log('event.currentTarget:', event.currentTarget.id) // 输出: parent-div
    })
</script>
```

在上述例子中：

- 当点击按钮时，`event.target` 是 `<button id="child-button">`，因为它是实际被点击的元素

- `event.currentTarget` 是 `<div id="parent-div">`，因为这是事件监听器实际绑定的元素

### 总结

- `event.target` 总是指向触发事件的最具体的元素，用于确定事件的实际来源，常用于事件委托模式

- `event.currentTarget` 指向绑定事件监听的元素，在事件的冒泡或捕获阶段中，`event.currentTarget` 可以帮助开发者确定事件当前正在被哪个元素的监听器处理
