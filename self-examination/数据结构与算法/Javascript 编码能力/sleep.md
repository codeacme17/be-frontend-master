## 实现一个 `sleep` 函数

> Reference: [leetcode](https://leetcode.com/problems/sleep/description/)

#### 问题

给定一个正整数 millis，编写一个休眠 millis 毫秒的异步函数。 它可以解析任何值

```js
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
```

#### 代码

```js
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis)
  })
}
```

#### 实现

函数内部创建了一个 `Promise`，并使用 `setTimeout` 设置一个定时器，等待指定的时间后，`Promise` 的状态变为 `resolved`，从而触发下一步操作
