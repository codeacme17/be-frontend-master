## 实现一个被迭代的 `object`


### 迭代

数组其实也是一个对象，但是它可以被 `for...of` 或 `for()` 等方法迭代的原因是，其身上有一个名为 `@@iterator` 的 `Symbol` 类型属性也称为 `Symbol.iterator`，该属性的作用是存储迭代器

### 迭代器

迭代器主要是由 `generator` 函数实现的

```js
function* () {
  yield 1
  yield 2
  yield 3
}
```

### 实现
```js
const a = {
  0: 1,
  1: 2,
  2: 3,
}
a[Symbol.iterator] = function* () {
  let p = 0
  while (p < Object.keys(this).length) {
    yield this[p]
    p++
  }
}
a.length = Object.keys(a).length


for(let i = 0; i < a.length; i++) {
  console.log(a[i]) // 1, 2, 3
} 
```