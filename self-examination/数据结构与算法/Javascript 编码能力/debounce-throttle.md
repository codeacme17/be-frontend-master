## 手写防抖和节流工具函数、并理解其内部原理和应用场景

### 防抖(debounce)

触发高频事件后 `n` 秒内函数只会调用一次，如果 `n` 秒内高频事件再次被触发，则重新计算时间

- 实现

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

### 节流(throttle)

高频事件触发，但在 `n` 秒内只会执行一次，所以节流会稀释函数的执行频率

- 实现

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

