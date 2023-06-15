## 熟练应用 `map`、`reduce`、`filter` 等高阶函数解决问题

### `map`
> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`map()` 是数组对象的一个方法，它用于创建一个新数组，新数组的元素是原始数组经过指定函数处理后的结果。map() 方法不会修改原始数组，而是返回一个新的数组

`map()` 方法中有三个参数：
- 当前元素值（必传）：当前正在处理的数组中的元素值
- 当前元素索引（可选）：当前正在处理的元素的索引
- 原始数组（可选）：被调用的原始数组

```js
const number = [1,2,3]
const doubleNumbers = numbers.map((num) => {
  return num * 2
})
console.log(doubleNumbers) // [2, 4, 6]
```

### `reduce`
> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

`reduce()` 是数组对象的一个方法，它用于将数组中的所有元素按照指定的方式进行累积计算，最终返回一个单个的值

`reduce()` 方法中有两个参数：
- 回调函数（必传）：回调函数用于对数组中的每个元素进行处理，并累积计算，回调函数可以接受四个参数：
  - 累积值：上一次回调函数的返回值或初始值
  - 当前元素值
  - 当前元素索引
  - 原始数组

- 初始值（可选）：初始值时可选参数，它定义了累计计算的初始值。如果提供了初始值，则第一次调用回调函数时，累积值将是初始值，否则累积值将是第一个元素，然后从数组的第二个元素开始执行累积计算

```js
const numbers = [1,2,3]
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum) // 6
```

### `filter`
> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

`filter()` 是数组对象的一个方法，它用于创建一个新数组，新数组的元素是原始数组中满足指定条件的元素

`filter()` 方法中有一个参数：
- 回调函数（必传）：该回调函数会被依次应用于原始数组的每个元素。回调函数需要返回一个布尔值，表示当前元素是否满足条件。如果回调函数返回 `true` 则当前元素将被包含在新数组中，如果返回 `false` 则当前元素将被排除。回调函数接受三个参数：
  - 当前元素值（必传）：当前正在处理的元素的值
  - 当前元素索引（可选）：当前正在处理的元素的索引
  - 原始数组（可选）：`filter()` 被调用的原始数组

```js
const numbers = [1,2,3]
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0
})
console.log(evenNumbers) // [2]
```

### `every`
> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

`every()` 是数组对象中的一个方法，它用于判断数组中的所有元素是否都满足指定的条件。如果数组中的每个元素都满足条件，则 `every()` 方法返回 `true`，如果至少有一个元素不满足条件，则返回 `false`

`every()` 方法中有一个参数：
- 回调函数（必传）：该回调函数会被依次应用于原始数组的每个元素，回调函数需要返回一个布尔值，表示当前元素是否满足条件，该回调函数接受三个参数：
  - 当前元素值（必传）：当前正在处理的元素值
  - 当前元素索引（可选）：但前正在处理的元素的索引
  - 原始数组（可选）：`every()` 被调用的原始数组

```js
const numbers = [2,4,6]
const isAllEven = numbers.every((num) => {
  return num % 2 === 0
})
console.log(isAllEven) // true
```