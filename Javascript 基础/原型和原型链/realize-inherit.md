## 实现继承的几种方式以及他们的优缺点

### 原型链继承

原型链继承是指一个对象的原型指向另一个对象，从而实现继承

```js
function Parent() {
  this.name = "parent"
}
function Child() {
  this.type = "child"
}
Child.prototype = new Parent()
const child = new Child()
console.log(child.name) // "parent"
```

- 优点：简单易懂，易于实现

- 缺点：引用类型的属性被所有实例所共享，并可能会造成原型链过长问题

### 构造函数继承

构造函数继承是指在子类构造函数内部调用父类构造函数，并使用 `call` 或 `apply` 方法改变父类构造函数的上下文，从而实现继承

```js
function Parent() {
  this.name = "parent"
}
function Child() {
  Parent.call(this)
  this.type = "child"
}
Child.prototype = new Parent()
const child = new Child()
console.log(child.name) // "parent"
```

- 优点：避免了引用类型的属性被所有实例共享的问题，和原型链过长问题

- 缺点：不能继承父类原型链上的属性和方法

### 组合继承

组合继承是指将原型链继承和构造函数继承结合起来，既可以继承父类原型链上的属性和方法，又可以避免引用类型的属性被所有实例共享

```js
function Parent() {
  this.name = 'parent';
}
function Child() {
  Parent.call(this);
  this.type = 'child';
}
Child.prototype = new Parent();
const child = new Child()
console.log(child.name) // "parent"
```

- 优点：可以继承父类原型链上的属性和方法，也可以避免引用类型的属性被所有实例所共享

- 缺点：调用了两次父类构造函数，降低了性能

### 原型式继承

原型式继承是指通过一个原型对象创建一个新对象，然后在对新对象进行修改和封装，从而实现继承

```js
const parent = {
  name: 'parent',
  sayHello: function() {
    console.log('hello');
  }
};
const child = Object.create(parent, {
  type: {
    value: 'child'
  }
});
console.log(child.name) // parent
```

- 优点：简单易懂，易于实现

- 缺点：无法实现多继承，容易造成对象之间的引用共享问题

### ES6 中的继承

使用 `class` 和 `extends` 关键字来实现继承，既可以继承父类的属性，也可以继承父类原型上的方法

```js
class Parent {
  constructor() {
    this.name = 'parent';
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.age = 10;
  }
}

const child = new Child();
console.log(child.name); // "parent"
console.log(child.age); // 10
child.sayHello(); // "Hello, I'm parent"
```

