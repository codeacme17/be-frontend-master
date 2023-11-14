## 理解原型设计模式以及 JavaScript 中的原型规则

> Reference [fanmengfei](https://www.cnblogs.com/memphis-f/p/12029453.html)

### 原型规则

- 所有引用类型(`Arrya`, `Function`, `Object`)都具有对象的属性，即可自由扩展

- 所有引用类型都有一个 `__proto__` 属性(隐式原型)，是一个指针，指向一个原型对象

- 所有函数都具有一个 `prototype` 属性(显式原型)，原型属性实质上是一个指针，它指向一个原型对象

- 所有应用类型，其隐式原型指向其构造函数的显式原型，即 `obj.__proto__ === Object.prototype`

- 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么就会去它的 `__proto__` 上寻找，成为原型链

### 原型对象

原型对象指的是函数的 `prototype` 所指向的普通对象，这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法，所以在原型中定义的方法和属性都是被所有实列对象所共享的

```js
const Person = function(name) {
  this.name = name
}

// 原型对象
Person.prototype.getName = function() {
  return this.name
}

const leo = new Person("leo")
leo.getName() // "leo"
```

### 原型链

如果试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，则会通过 `__proto__` 去查找，即通过构造函数的 `prototype` 属性查找。通过 `__proto__` 所组成的查找链，被称为原型链
