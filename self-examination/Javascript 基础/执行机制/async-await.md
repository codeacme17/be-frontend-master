## `async`/`await` 如何通过同步的方式实现异步

### 原理

底层实现上，`async/await` 基于 JavaScript 的 `Promise` 对象和生成器函数（Generator Function）来实现异步操作的同步化处理

当使用 `async` 关键字修饰一个函数时，该函数被标记为异步函数，它会返回一个 Promise 对象。在异步函数内部，可以使用 `await` 关键字等待一个 Promise 对象的解析或拒绝

当执行到 `await` 关键字时，JavaScript 引擎会暂停异步函数的执行，并等待 Promise 对象的状态变为解析（fulfilled）或拒绝（rejected）。如果 Promise 被解析，`await` 表达式会返回解析后的值；如果 Promise 被拒绝，则会抛出一个异常

为了更好地理解 `async/await` 的底层实现，需要了解生成器函数的概念。生成器函数使用 `function*` 关键字定义，并通过 `yield` 关键字暂停和恢复函数的执行。生成器函数可以被迭代，每次迭代都会执行到下一个 `yield` 关键字

`async/await` 利用了生成器函数的特性来实现异步操作的同步化处理。当遇到 `await` 关键字时，它会暂停异步函数的执行，并将控制权交给外部。在等待的过程中，异步函数并没有被阻塞，可以执行其他任务。一旦 Promise 对象的状态变为解析，生成器函数会继续执行，并返回解析后的值

整个过程中，`async/await` 提供了一种更简洁、更易读的方式来处理异步操作，让异步代码看起来像同步代码一样的线性流程。它基于 Promise 和生成器函数的机制，隐藏了异步操作的复杂性，提供了一种更直观的编程模型。但实际上，异步操作仍然是异步执行的，只是通过语法上的改进让代码更加清晰易懂

### Generator 函数

> Reference: [ruanyifeng](https://es6.ruanyifeng.com/#docs/generator-async#Generator-%E5%87%BD%E6%95%B0)

#### 协程 coroutine

传统的编程语言，早有异步编程的解决方案，其中一种叫做“协程”（coroutine），意思是多个线程互相协作，完成异步任务

协程有点像函数又优点向线程，它的运行流程大致如下：

1. 协程 `A` 开始执行
2. 协程 `A` 执行到一半，进入暂停，执行权转移到写成 `B`
3. 一段时间后，协程 `B` 交还执行权
4. 协程 `A` 恢复执行

上述的协程 `A` 就是异步任务，因为它分为了两段执行

```js
function* asyncJob() {
  // ...
  let f = yield readFile(fileA)
  // ...
}
```

上面的函数 `asyncJob` 是一个协程，它的奥妙就在于其中的 `yield` 命令，它表示执行到此处，执行权将交给其他协程，也就是说，`yield` 命令是异步两个阶段的分界线
协程遇到 `yield` 命令就暂停，等到执行权返回，再从暂停的地方继续往后执行，它的最到优点就是代码的写法非常像同步操作

#### 协程的 Generator 函数实现

Generator 函数是协程在 ES6 中的实现，最大的特点就是交出函数的执行权（即暂停执行）
整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器，异步操作需要暂停的地方，都用 `yield` 关键字注明

```js
function* gen(x) {
  let y = yield x * 2
  return y
}

let temp = gen(1)
g.next() // {value: 2, done: false}
g.next() // {value: undefined, done: true}
```

上面的代码中，调用 Generator 函数，会返回一个 **内部指针**（即遍迭代器 iterator）`temp`，这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，而是返回指针对象，调用 `temp` 的 `next` 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 `yield` 语句，上列是执行到 `x * 2` 为止
换而言之，`next` 方法的作用是分阶段执行 Generator 函数，每次调用 `next` 方法，会返回一个对象，表示当前阶段的信息（`value` 和 `done`）

- `value` 是 `yield` 语句后面表达的值，表示当前阶段的值
- `done` 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否进入下一阶段
