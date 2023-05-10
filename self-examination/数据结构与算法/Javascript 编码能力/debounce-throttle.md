## 手写防抖和节流工具函数、并理解其内部原理和应用场景

### 防抖(debounce)

触发高频事件后 `n` 秒内函数只会调用一次，如果 `n` 秒内高频事件再次被触发，则重新计算时间

#### 实现

> 每次触发事件时都取消上一次的延时调用方法

```js
function debounce(fn, delay) {
  const timer = null

  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
```

#### 应用场景

- 输入框 `change` 事件：用户在输入框中连续输入一串字符，只会在输入完成后取最终输入的内容。然后发送 `ajax` 请求，这样可以有效地减少请求次数，节约请求资源

- window 的 `resize`、`scroll` 事件：不断地调整浏览器的窗口大小、或者滚动时会触发对应事件，防抖函数让其只触发一次

### 节流(throttle)

高频事件触发，但在 `n` 秒内只会执行一次，所以节流会稀释函数的执行频率

#### 实现

> 每次触发事件时都判断当前是否有等待执行的延时函数

```js
function throttle(fn, delay) {
  let flag = true
  
  return function () {
    if (!flag) return
    flag = false
  
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, delay)
  }
}
```

#### 应用场景

- 鼠标连续不断地触发某事件（如点击），在单位时间内只触发一次

- 在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间发一次 `ajax` 请求，而不是在用户停下滚动页面操作时才去请求数据

- 监听滚动事件，比如是否滑到底部自动加载更多，用 `throttle` 来判断。
