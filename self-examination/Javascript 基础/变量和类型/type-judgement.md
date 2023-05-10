## 至少可以说出三种判断 Javascript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

### `typeof`

`typeof` 操作符可以判断大多数 JS 的基本类型，如：`undefined`、`boolean`、`number`、`string`、`bigInt`、`symbol`、`function` 和 `object`

- 优点：简单快速

- 缺点：对于判断复杂数据类型如数组和对象都返回的是 `object`，无法判断具体的类型

### `instanceof` 

`instanceof` 操作服可以判断一个对象是否是某个构造函数的实例，可以用来判断对象的具体类型，包括数据类型

- 优点：能够准确判断对象的类型

- 缺点：无法判断基本数据类型

### `Object.prototype.toString.call()`

该方法可以返回一个对象的具体类型，包括基本数据类型和复杂数据类型

- 优点：准确性高，可以判断任何数据类型

- 缺点：需要写一些较为冗长的代码

```js
const a = {}
const b = []
const c = () => {}
const d = 1
const e = false
const f = null
console.log(Object.prototype.toString.call(a)) // [object Object]
console.log(Object.prototype.toString.call(b)) // [object Array]
console.log(Object.prototype.toString.call(c)) // [object Function]
console.log(Object.prototype.toString.call(d)) // [object Number]
console.log(Object.prototype.toString.call(e)) // [object Boolean]
console.log(Object.prototype.toString.call(f)) // [object Null]
```

### 准确判断数组类型

- `Array.isArray()`

该方法可以判断一个对象是否为数组类型，返回布尔值

```js
const a = []
Array.isArray(a) // true
```

- `instanceof`

可以通过一个数组实例与 `Array` 构造函数进行比较累判断它是否为数组类型

```js
const a = []
a instanceof Array // true
```