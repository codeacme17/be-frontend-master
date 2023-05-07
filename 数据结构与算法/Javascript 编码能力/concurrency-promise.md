## 实现一个可以控制并发数的 `Promise`

> Reference: [JJ](https://juejin.cn/post/7219961144584552504)

### 目标

设计一个函数，可以限制请求的并发数，同时请求结束后，调用 `callback` 函数

```js
sendRequest(
  [
    () => request('1'),
    () => request('2'),
    () => request('3'),
    () => request('4'),
  ],
  3, //并发数
  (res) => {
    console.log(res)
  }
)
// 其中request 可以是：
function request(url, time = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('请求结束：' + url)
      if (Math.random() > 0.5) {
        resolve('成功')
      } else {
        reject('错误;')
      }
    }, time * 1e3)
  })
}
```
### 概念

- 并发：并发是指多个任务同时 **交替** 执行（因为 CPU 执行指令的速度非常快，它可以不必按照顺序一段代码一段代码的运行，这样效率反而地下），这样看起来这些任务是 **同时** 执行的，所以叫并发

- 并行：真正的 **同时** 执行

- 并发控制：多个并发任务，一旦有任务完成，就立即开启下一个任务

- 切片控制：将并发任务切片的分配出来，比如有 10 个任务，切成 2 个片，每片有 5 个任务，当一片的任务执行完毕，在开始下一片的任务，效率没有并发控制高

### 思路

首先执行能执行的并发任务，根据并发的概念，每个任务执行完毕后，捞起下一个要执行的任务

1. 循环去启动能执行的任务

2. 取出任务并且推到执行器执行

3. 执行器内更新当前的并发数，并且触发捞起任务

4. 捞起任务里面可以触发最终的回调函数和调起执行器继续执行任务

### 实现

```js
async function sendRequest(requestList, limits, callback) {
  const promises = requestList.slice()

  const concurrentNum = Math.min(limits, requestList.length)

  let concurrentCount = 0

  const runTaskNeeded = () => {
    let i = 0

    while (i < concurrentNum) {
      i++
      runTask()
    }
  }

  const runTask = () => {
    const task = promises.shift()
    task && runner(task)
  }

  const runner = async (task) => {
    task()
      .then((res) => {
        concurrentCount++
        console.log(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        picker()
      })
  }

  const picker = () => {
    if (concurrentCount < limits && promises.length > 0) {
      runTask()
    } else if (promises.length === 0 && concurrentCount === 0) {
      callback && callback()
    }
  }

  runTaskNeeded()
}
```

