## `null` 和 `undefined` 的区别

在 Javascript 中，`null` 和 `undefined` 是两个特殊的值，用于表示变量么有被赋值或者不存在，它们的不同有：

-  `undefined` 用以表示变量没有被初始化或者赋值，或者对象上没有该属性，或者函数没有返回值

```js
let a;
console.log(a) // undefined
function foo() {}
console.log(foo()) // undefined
let obj = {}
console.log(obj.bar) // undefined
```

- `null` 表示变量的值被明确地赋值为了空值，即“无值”、“空”或“不存在”

```js
let b = null
console.log(b)
```

- `undefined` 和 `null` 在隐式转换后相等(都为`false`)，但不严格相等

```js
console.log(undefined == null) // true
console.log(undefined === null) // false
```

- `null` 的数据类型是 `Object`；`undefined` 的数据类型是 `undefined`

```js
console.log(typeof null) // object
console.log(typeof undefined) // undefined
```