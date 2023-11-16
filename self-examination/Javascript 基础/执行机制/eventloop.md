## Javascript 如何实现异步编程，可以详细描述 `EventLoop` 机制

> Reference: [MDN: The event loop](https://developer.mozilla.org/en-US/docs/Web/Javascript/Event_loop), [What is an event loop in Javascript ?](https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/)

>

Javascript 是一种单线程语言，这意味着它一次只能执行一个任务。为了处理耗时的任务而不阻塞主进程，Javascript 提供了异步编程的能力。异步编程允许代码在等待异步操作（如 I/O、网络请求等）完成的同时，继续执行后续任务。Javascript 实现异步编程的主要机制包括回调函数、Promises、async/await 以及事件循环（Event Loop）

### 异步编程的方法

- 回调函数（Callbacks）

  回调函数是最早期的异步编程方法，通过将函数作为参数传递给另一个函数，然后在异步操作完成时执行这个回调函数。但其的缺点为可能会导致回调地狱（Callback Hell），使代码难以阅读和维护

- Promise

  为了解决回调地狱的问题，Promise 被引入，Promise 是一个代表异步操作最终完成或失败的对象。其提供 `.then()` 和 `.catch()` 方法来分别处理成功和失败的情况。Promise 的出现也使得异步代码更加易于组织和理解

- Async/Await

  基于 Promise 的语法糖，使异步代码看起来更像同步代码，`async` 关键字用于声明一个异步函数，`await` 关键字用于等待一个异步操作的结果。`async/await` 提高了代码的可读性和编写的简洁性

### 事件循环（Event Loop）

事件循环时 Javascript 异步编程的核心机制，尤其是在 Node.js 和浏览器环境中

- 工作原理

  - 堆和栈

    Javascript 使用堆存储对象，栈存储执行上下文（函数调用）

  - 事件队列

    当异步事件发生时，如点击事件或 HTTP 请求，相关的回调函数被放入事件队列（Event Queue）中

  - 事件循环的角色

    事件循环不断检查调用栈是否为空。当调用栈为空时，事件循环会从事件队列中取出回调函数并放入调用栈中执行

  - [宏任务和微任务](/self-examination/Javascript%20基础/执行机制/micro-macro.md)

    Javascript 引擎区分宏任务和微任务，微任务（如 Promise 回调）在每个宏任务（如 setTimeout）之后执行

  - 宿主环境

    主要是处理宏任务的地区，由宿主提供（如 Node.js、浏览器），它负责管理 Javascript 代码以外的功能，比如处理 I/O、提供定时器功能、处理网络请求和响应等。这些功能在 Javascript 的执行环境中不是内置的，而是由宿主环境提供的额外能力。宿主环境还负责调度和执行 Javascript 引擎中排队的宏任务，比如来自 `setTimeout`、`setInterval`、用户交互（如点击、键盘事件）以及各种异步 API 的回调函数。

- 过程

  1. 执行同步代码

     首先，Javascript 引擎会执行当前的同步代码，按照顺序逐行执行，直到遇到异步操作

  2. 将异步操作交给异步环境

     当遇到异步操作（如定时器、网络请求等），Javascript 引擎会将其交给异步环境处理。异步环境通常是由宿主环境（如浏览器或 Node.js）提供的，它们负责处理异步任务的执行

  3. 注册异步操作的回调函数

     异步环境接收到异步操作后，会将其交给相应的异步 API 处理，并注册一个回调函数

  4. 继续执行同步代码

     Javascript 引擎在注册异步操作之后，会继续执行后续的同步代码，不会阻塞程序的执行

  5. 等待异步操作完成

     异步操作在后台执行，当操作完成后，异步环境会将其放入一个事件队列中

  6. 检查事件队列

     Event Loop 进入下一轮循环时，会检查事件队列是否有任务等待执行

  7. 选择可执行的任务

     Event Loop 从事件队列中选择一个可执行的任务。如果队列中有多个任务，通常会按照先进先出的顺序选择

  8. 执行任务

     被选中的任务会被移出事件队列，并执行其对应的回调函数。这个过程是同步执行的，即在执行任务期间，不会有其他任务插入

  9. 返回步骤 6

     事件循环将返回到检查事件队列的步骤，如果有更多同步代码要执行，则继续执行它们，否则检查事件队列

- 案例

  ```js
  console.log('start')

  setTimeout(() => {
    console.log('time out')
  }, 100)
  ```

  1. 执行全局代码

     当这段脚本开始执行时，首先执行的是全局代码， `console.log('start')` 是同步执行的代码，因此会被立即执行

  2. 设置 `setTimeout`

     接下来遇到 `setTimeout` 函数，这个函数调用告诉 Javascript 引擎：在至少 100 毫秒执行回调函数。此时，Javascript 引擎会把这个定时器的任务交给宿主环境（浏览器或 Node.js），由它来计时。`setTimeout` 本身是非阻塞的，因此设置定时器后，代码会继续执行

  3. 继续执行同步代码

     在上述例子中， `setTimeout` 后没有更多的同步代码，所以 Javascript 引擎完成了全局代码的执行

  4. 等待定时器

     宿主环境等待至少 100 毫秒，这个等待发生在后台，与 Javascript 引擎的主线程不再同一执行环境

  5. 定时器事件到达

     一旦 100 毫秒的时间到达，宿主环境会把 `setTimeout` 的回调函数放入事件队列（Task Queue）

  6. 事件循环

     事件循环负责监视调用栈和事件队列，如果调用栈为空，事件循环会从事件队列中取出任务放入调用栈中执行

  7. 执行 `setTimeout` 的回调

     当事件循环将 `setTimeout` 的回调函数放入调用栈，此时 Javascript 一你请执行回调函数，回调函数执行时输出 `'time out'`

  8. 完成执行

     一旦 `setTimeout` 的回调函数执行完成，事件循环会继续监视事件队列，看是否有更多的任务要执行。在这个例子中，执行完 `setTimeout` 的回调后，没有更多任务，因此脚本执行结束
