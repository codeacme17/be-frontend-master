## 手动实现 `call`、`apply`、`bind`

这三个方法的作用都是可以改变函数中的 `this` 指向，但的是在第二个参数和返回值上会有些许不同

### call

> `call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

- 正常使用

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name); // "cheese"
```

- 手动实现

```js
Function.prototype._call = function(target, ...argus) {
  const fnSymbol = Symbol()
  target[fnSymbol] = this
  const res = target[fnSymbol](...argus)
  delete target[fnSymbol]
  return res
}
```

### apply

> `apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数

- 正常使用

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max); // 7
```

- 手动实现

```js
Function.prototype._apply = fucntion (target, argus) {
  const fnSymbol = Symbol()
  target[fnSymbol] = this
  const res = target[fnSymbol](argus)
  delete target[fnSymbol]
  return res
}
```

### bind

> `bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用

- 正常使用

```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
```

- 手动实现 

```js
Function.prototype._bind = function (target, argus) {
  return () => {
    const fnSymbol = Symbol()
    target[fnSymbol] = this
    const res = target[fnSymbol](argus)
    delete target[fnSymbol]
    return res
  }
}
```