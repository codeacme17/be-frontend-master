## Javascript 异常处理的方式，统一的异常处理方案

在 Javascript 中，异常处理是一个重要的部分，它帮助我们优雅的处理程序中可能出现的错误，以下是常见的处理方式

- `try...catch` 语句

```js
try {
  const result = someFun()
} catch (error) {
  console.error(error)
}
```

- `throw` 语句

`throw` 语句用于抛出一个用户自定义的异常，这通常与 `Error` 类共同使用，从而抛出一个 `Error` 实例

```js
function divide(a, b) {
  if (b === 0) throw new Error('除数不能为 0')
  return a / b
}
```

- Promise 中的 `catch` 方法

对于处理 Promise 的链式调用出现的错误，可以使用 `catch` 方法来捕获异常

```js
aysncFun()
  .then(res = > {})
  .catch(error => console.error(error))
```

#### 统一的异常处理方案

在大型应用中，为了更好的管理和维护代码，通常会实现一个统一的异常处理方案，以下是一些常见的作法

- 全局错误处理器：在全局范围内监听未捕获的错误，并进行处理

```js
window.onerror = function (message, source, lineno, colno, error) {
  console.error(error)
  return true // 阻止默认错误处理
}
```

- 封装请求函数：对于网络请求，可以统一封装请求函数，并在这个函数中处理所有可能的错误

```js
async function customFetch(url, options) {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    // 处理错误
    console.error(error)
  }
}
```

- 使用错误边界（Error Boundaries）：在 React 应用中，可以使用错误边界借来捕获子组件树中的 Javascript 错误，并记录这些错误，并展示备用 UI

- 日志记录：将错误信息记录到日志系统中，有助于开发人员分析和定位问题
