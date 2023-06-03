// new Fn(argus)

// 1. create object
// 2. inherit prototype
// 3. inject argus
// 4. return object

function _new(constructor, ...argus) {
  const obj = new Object()
  obj.__proto__ = constructor.prototype
  const res = constructor.apply(obj, argus)
  return typeof res === 'object' ? res : obj
}

function Fn(a, b) {
  console.log(a)
}

// const obj = _new(Fn, 1, 2)
// console.log(obj)
// console.log(obj instanceof Fn)

// const obj2 = new Fn(3, 4)
// console.log(obj2)
// console.log(obj2 instanceof Fn)

function Animal(name) {
  this.name = name
}

Animal.prototype.speak = function () {
  console.log(this.name)
}

function Dog(name, age) {
  Animal.call(this)
  this.name = name
}

const dog = new Dog('dog')
console.log(dog.name)
