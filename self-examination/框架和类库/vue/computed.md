## 手写实现 `computed` 函数

### `computed` 定义

接受一个 `getter` 函数，返回一个只读的响应式 `ref` 对象。该 `ref` 通过 `.value` 暴露 `getter` 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 `ref` 对象

### 代码实现

```js
function computed(fn) {
  // 用于存储计算值
  let value
  // 用于判断是否返回缓存值
  let dirty = true

  const effectFn = effect(fn, {
    // lazy 延迟缓存
    lazy: true,
    // scheduler 函数在数据更新的时候会被调用
    scheduler(fn) {
      dirty = true
    },
  })

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn()
        dirty = false
      }
      return value
    },
  }

  return obj
}
```

### 思路

要实现 `computed` 函数，需要实现其三个特性：

- 延迟缓存：不立即执行副作用函数，而是把函数返回，将执行权交给用户

- 缓存结果：只有当数据发生变更时才会重新计算，否则直接返回之前的结果

- 只读、通过 `.value` 获取结果

#### 实现

- 延迟缓存：可以设置 `effect` 函数中配置项的 `lazy` 属性来实现不立即执行

- 缓存结果：`effect` 的函数执行是可以通过 `scheduler` 来控制的

- 只读、通过 `.value` 获取结果：可以通过对象的 `get` 方法，返回计算后的结果

#### `scheduler`

- 通过 `effect` 的第二个参数给定的一个对象 `{ scheduler: () => {} }`, 属性是 `scheduler`, 值是一个函数

- `effect` 第一次执行的时候, 还是会执行 `fn`

- 当响应式对象被 `set`，也就是数据 `update` 时, 如果 `scheduler` 存在, 则不会执行 `fn`, 而是执行 `scheduler`

- 当再次执行 `runner` 的时候, 才会再次的执行 `fn`
