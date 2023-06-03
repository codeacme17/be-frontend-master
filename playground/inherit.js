// 1. 原型链继承
// function Parent() {
//   this.name = "Parent"
// }
// function Child() {
//   this.age = 19
// }
// Child.prototype = new Parent()
// const child = new Child()
// console.log(child.name)
// 缺点：可能会造成原型链过长，并且会使后代都拥有祖先身上的原型方法

// 2. 构造函数继承
// function Parent() {
//   this.name = "Parent"
// }
// function Child() {
//   Parent.call(this)
//   this.age = 19
// }
// const child = new Child()
// 缺点：不能继承父类原型链上的方法

// 3. 组合式继承
// function Parent() {
//   this.name = "parent"
// }
// function Child() {
//   Parent.call(this)
//   this.age = 19
// }
// Child.prototype = new Parent()
// const child = new Child()
// console.log(child.name, "354")
// 缺点：调用了两次父类构造函数，影响性能，代码冗余
