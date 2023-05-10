## 理解 ES6 `class` 构造以及继承的底层实现原理

ES6 中的 `class` 构造是基于原型继承的语法糖，其底层实现仍然是通过原型链实现的

在 ES6 中，我们可以使用 `class` 语法来定义一个类，例如：

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

let animal = new Animal('animal');
animal.speak(); // 输出 "animal makes a noise."
```

当我们创建一个 `Animal` 实例时，会调用 `constructor` 构造函数。在构造函数中，我们可以初始化实例的属性，如 `this.name`。类中的方法定义可以使用常规函数语法，这些方法会被添加到类的原型中，以供实例调用

在 `class` 中实现继承时，可以使用 `extends` 关键字来继承另一个类。例如：

```js
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

let dog = new Dog('dog', 'husky');
dog.speak(); // 输出 "dog makes a noise."
dog.bark(); // 输出 "Woof!"
```

在这个例子中，我们使用 `extends` 关键字继承了 `Animal` 类。在 `Dog` 的构造函数中，我们使用 `super` 调用了 `Animal` 的构造函数，从而初始化了 `this.name` 属性。`Dog` 类中定义了一个新方法 `bark()`，这个方法会被添加到 `Dog` 的原型中

在底层实现上，ES6 中的类继承仍然是基于原型链实现的。每个类都有一个 `prototype` 属性，这个属性指向类的原型对象。当我们创建一个类的实例时，实例会继承该类的原型对象上的方法和属性。使用 `extends` 关键字继承另一个类时，实际上是创建了一个新的类，新类的原型对象指向了被继承的类的原型对象，从而实现了继承关系。`super` 关键字则用于调用父类的构造函数或方法