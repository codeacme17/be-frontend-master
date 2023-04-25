## `Symbol` 类型在实际开发中的应用、可手动实现一个简单的 `Symbol`

> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

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

### 特别接口

#### `Symbol.iterator`

> Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用

该属性是 Javascript 中对象实现迭代的关键，当需要对一个对象进行迭代时（比如开始用于一个 for..of 循环中），它的 @@iterator 方法都会在不传参情况下被调用，返回的迭代器用于获取要迭代的值。一些内置类型拥有默认的迭代器行为，其他类型（如 Object）则没有。拥有默认的 @@iterator 方法的内置类型是：
`Array.prototype[@@iterator]()`
`TypedArray.prototype[@@iterator]()`
`String.prototype[@@iterator]()`
`Map.prototype[@@iterator]()`
`Set.prototype[@@iterator]()`

如果相对默认的 Object 加入被迭代功能，可以为该对象加入 `[Symbol.iterator]` 属性
```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
for(let i of myIterable) {
  console.log(i)
}
```