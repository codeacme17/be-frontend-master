## `instanceof` 的底层实现原理，手动实现一个 `instanceof`

> REFERENCE [zhihu](https://zhuanlan.zhihu.com/p/105487552)

### 作用

```js
  Function instanceof Object // true
```

> `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上 - MDN

其实他的作用就是判断左侧的隐式原型 `__proto__` 组成的原型链上能否找到右侧的显式原型 `prototype`

### 构造函数

- 基础类型：`String`、`Number`、`Boolean`、`Undefined`、`Null`、`Symbol`

- 复杂类型：`Array`、`Object`

- 其他类型：`Function`、`RegExp`、`Date`

### 代码实现

```js
function _instanceof(L, R) {
  if(!isObject(L)) return false 
  const O = R.prototype
  L = L.__proto__
  
  while(L !== null) {
    if(L === O) return true
    L = L.__proto__   
  }

  return false
}

function isObject(val) {
  if(val === null) return false
  return typeof val === "object" || typeof val === "function" 
}

```
