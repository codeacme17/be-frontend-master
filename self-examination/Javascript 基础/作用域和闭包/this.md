## `this` 的原理以及几种不同使用场景的取值

在 JS 中，`this` 关键字用于表示当前函数执行时的上下文对象，具体而言，`this` 的值取决于函数调用时的情况，通常有以下几种取值情况

- 全局上下文

  在全局执行上下文（在任何函数外部）中，`this` 引用全局对象，在浏览器中，它通常是 `window` 对象

  ```js
  console.log(this === window) // true
  ```

- 函数上下文

  - 普通函数调用

    在普通函数中，`this` 的值取决于如何调用该函数。如果它不是作为对象的方法调用，`this` 通常指向全局对象（在严格模式下是 `undefined`）

    ```js
    function fun() {
      return this
    }

    fun() // 在非严格模式下，这将返回全局对象
    ```

  - 方法调用

    当函数作为对象的方法被调用时， `this` 指向该方法所属的对象

    ```js
    const obj = {
      method() {
        return this
      },
    }

    obj.method() // 这里指向的是 `obj`
    ```

- 构造函数

  在使用 `new` 关键字调用构造函数时， `this` 指向新创建的对象

  ```js
  function Constructor() {
    this.property = 'value'
  }

  const c = new Constructor()
  console.log(c.property) // 'value'
  ```

- 箭头函数

  在箭头函数中， `this` 被词法地绑定到它被创建时的上下文，这意味着箭头函数不会创建自己的 `this` 值，它只是从自己的作用域链继承 `this`

  ```js
  const obj = {
    method: () => {
      return this
    },
  }

  obj.method() // 在浏览器中，该值为 `window`
  ```

- 显式绑定

  使用 `call` 、 `apply` 或 `bind` 方法可以显式设置 `this` 值

  - `call` 和 `apply` 方法在调用函数的同时，允许将一个对象作为 `this` 的值传入

  ```js
  function fn() {
    console.log(this)
  }
  const obj = {
    p: 'value',
  }

  fn.call(obj) // 指向了 `obj` 所以打印 `{ p：'value' }`
  ```

  - `bind` 方法创建一个新的函数，它的 `this` 被绑定到指定的对象

  ```js
  function fn() {
    console.log(this)
  }

  const obj = {}  const obj = {
    p: 'value',
  }
  const boundFn = fn.bind(obj)
  boundFn() // 这里 this 指向了 `obj` 所以打印 `{ p：'value' }`
  ```
