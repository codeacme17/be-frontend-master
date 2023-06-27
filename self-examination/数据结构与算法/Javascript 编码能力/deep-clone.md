## 多种方式实现深拷贝、对比优缺点

#### JSON 序列化与反序列化

```js
const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
```

优点：

- 简单易用，一行代码即可完成深拷贝
- 可以拷贝大多数的原始数据类型、数组、对象、以及能够被 JSON 表示的对象

缺点：

- 无法拷贝函数、正则表达式、特殊对象（如 `Date` 等）
- 会忽略对象的原型链，靠背后的对象无法继承原始对象的原型方法

#### 递归拷贝

```js
const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj

  let copy

  if (Array.isArray(obj)) {
    copy = []
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i])
    }
  } else {
    copy = {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key])
    }
  }

  return copy
}
```

优点：

- 可以深拷贝包括函数、正则表达式在内的所有对象
- 可以保留对象的原型链

缺点：

- 如果对象层级非常深或包含循环引用，递归拷贝可能会导致栈溢出或死循环
- 对于某些特殊的类型如 `Map`、`Set` 等，需要额外处理

#### 第三方库

使用如 `lodash` 这类的第三方库提供的方法实现深拷贝

```js
const deepCopy = _.cloneDeep
```

优点：

- 第三方库经过了广泛的测试和优化，提供了稳定且高效的神拷贝功能
- 处理了各种特殊情况和对象类型

缺点：

- 引入额外的资源，增加项目体积
