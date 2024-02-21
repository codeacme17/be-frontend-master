## nextTick 的实现原理

Vue3 中的 `nextTick` 函数是一个微任务（microTask）工具，用于在下一次 DOM 更新循环结束后执行的延迟回调。在 Vue 的响应式系统中，当响应式数据变化时，视图不会立即更新，而是异步更新。`nextTick` 允许在 DOM 更新完之后立即执行某些操作，这对于直接操作更新后的 DOM 或执行依赖于更新 DOM 状态的逻辑非常有用

### 实现原理

`nextTick` 的实现依赖于 Javascript 的异步任务队列，具体使用了 `Promise`、`MutationObserver` 或者 `setImmediate`（如果可用），最后退回到 `setTimeout(fn, 0)`。Vue 会选择这些方法中的最优选择来异步地推迟任务的执行。这些方法都能将任务放到微任务队列或宏任务队列，以确保它们在下一个事件循环迭代中执行

- 优先使用 `Promise`

  如果支持 `Promise`，Vue 会使用它来创建一个微任务。Promise 是现代 Javascript 应用中常见的异步解决方案，因为它是微任务的一部分，能够保证尽可能快的在当前任务执行完毕后执行

- `MutationObserver` 备选

  对于不支持 Promise 的环境，Vue 会尝试使用 MutationObserver，这是 Web API 的一部分，用于监听 DOM 的变化。Vue 通过触发并监听一个 DOM 变化来创建一个微任务

- `setImmediate` 和 `setTimeout`

  如果上述的两种方法都不可用，Vue 将使用 `setImmediate` 或 `setTimeout(fn, 0)`。这些方法将回调推迟到宏任务队列，虽然他们的执行会比微任务稍晚，但仍能实现异步执行的目的

### 代码示例

```js
let microTaskPending = false
let microTaskQueue = []

function nextTick(callback) {
  microTaskQueue.push(callback)

  if (!microTaskPending) {
    microTaskPending = true

    if (typeof Promise !== 'undefined') {
      Promise.resolve().then(flushMicroTasks)
    } else if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(flushMicroTasks)
      const textNode = document.createTextNode(String(counter))
      observer.observe(textNode, {
        characterData: true,
      })
      textNode.data = String(++counter) // Trigger MutationObserver
    } else {
      // fallback to setImmediate or setTimeout
    }
  }
}

function flushMicroTasks() {
  microTaskPending = false
  const tasks = microTaskQueue.slice(0)
  microTaskQueue.length = 0
  for (const task of tasks) {
    task()
  }
}
```

上述的伪代码展示了 `nextTick` 如何利用微任务来异步执行回调。首先，所有的回调都被添加到一个队列中。然后，使用 Promise 或 MutationObserver 触发微任务的执行。如果这些方法都不可用，它会回退到宏任务。`flushMicroTasks` 函数负责执行队列中所有的回调
