## `Symbol` 类型在实际开发中的应用、可手动实现一个简单的 `Symbol`


### 使用方式

- `Symbol` 是一种基本数据类型，由 `Symbol()` 函数生成

```js
const s1 = Symbol()
const s2 = Symbol()
s1 === s2 // false
```

- `Symbol` 可以带有参数

- `Symbol` 不是构造函数，不可以用 `new` 关键字生成

- `Symbol` 不会出现在对象的 `for...in` 循环中，也不会被 `Object.keys`、`Object.getOwnPropertyNames()`、`JSON.stringify()` 方法返回


### 开发应用

- `Symbol` 可以作为对象的键名，可以保证不会出现同名的属性

```js
const obj = {}
obj[symbol] = Symbol()
obj[symbol] = "a" // 该属性独一无二
```