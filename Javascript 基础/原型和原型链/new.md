## 可以描述 `new` 一个对象的详细过程，手动实现一个 `new` 操作符

> `new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

### 正常使用

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make); // "Eagle"
```

### 过程

1. 创建一个空的对象

2. 将该对象的隐式原型 `__proto__` 指向 `new` 右侧的构造函数的显式原型 `prototype` 上

3. 改变构造函数的 `this` 指向，将其指向创建的对象上

4. 如果该构造函数没有返回对象，则返回 `obj`


### 手动实现

```js
function _new(constructor, ...argus) {
  const obj = {} // 1
  obj.__proto__ = constructor.prototype // 2
  const res = constructor.apply(obj, argus) // 3
  return typeof res === "object" ? res : obj // 4 
}
```