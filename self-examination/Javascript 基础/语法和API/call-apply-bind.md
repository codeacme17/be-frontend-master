## 理解 `call`、`apply` 和 `bind` 三者的作用和区别

`call`、`apply` 和 `bind` 都是 Javascript 中的函数原型中的方法，用于指定函数执行时的 `this` 上下文。尽管他们的目的相同，都是改变**函数运行时 `this` 上下文**，但是他们的使用方式和场景有所不同

### `call`

- 语法：`call([thisObj[,arg1[, arg2[,   [,.argN]]]]])`

- 作用：`call` 方法调用一个函数，其第一个参数将被用作该函数运行时的 `this`，之后的参数将作为函数执行时的参数传递给函数

- 实际应用：`call` 方法常用于借用其他对象的方法，比如有一个对象，但是没有某个方法，可以借用另一个对象的方法，用 `call` 将其绑定到需要的对象上

- 示例

  ```js
  const John = {
    name: 'John',
    introduce: function () {
      console.log(`Hi, my name is ${this.name}.`)
    },
  }

  const Fido = {
    name: 'Fido',
  }

  John.introduce.call(Fido) // Hi, my name is Fido.
  ```

### `apply`

- 语法：`apply([thisObj[,argArray]])`

- 作用：`apply` 方法的作用与 `call` 相似，不同之处在于 `call` 方法接受一个参数数组作为函数执行时的参数

- 实际应用：`apply` 方法常用于函数调用时，当参数是以数组形式存在时。它也常用于 `Math` 对象的方法，比如 `Math.max.apply(null, arrayOfNumber)`，这样可以找出一个数组中的最大值

- 示例

  ```js
  function sum(num1, num2) {
    return num1 + num2
  }

  console.log(sum.apply(null, [1, 2])) // 3
  ```

### `bind`

- 语法：`bind([thisObj[,arg1[, arg2[,   [,.argN]]]]])`

- 作用：`bind` 方法创建一个新的函数，在 `bind` 被调用时，这个新函数的 `this` 被指定为 `bind` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用

- 实际应用：`bind` 方法常用于事件处理器和回调函数中，以确保函数执行时 `this` 上下文正确，它也用于部分应用函数，即提前填充函数的一些参数

- 示例

  ```js
  function f(message) {
    console.log(message + ' ' + this.name)
  }

  const obj = { name: 'John' }
  const boundFunction = f.bind(obj)
  boundFunction('Hello') // Hello John
  ```

### 区别

- 参数传递

  - `call`：逐个传递参数

  - `apply`：通过数组传递参数

  - `bind`：返回一个新函数，可以逐个传递参数，也可以一次性传递

- 返回值

  - `call` 和 `apply` 会立即执行函数并返回函数的返回值

  - `bind` 返回一个新的函数，不立即执行原函数

### 实际应用场景

- 多态和借用方法：使用 `call` 或 `apply` 可以实现多态，即同一个函数可以在不同的对象上被调用，实现不同的功能

- 动态设置上下文：在事件监听器或异步回调中，使用 `bind` 可以确保函数执行时，`this` 上下文是预期的对象

- 函数柯里化：使用 `bind` 可以创建柯里化函数，即创建已经设置了一部分参数的新函数，以便重复调用
