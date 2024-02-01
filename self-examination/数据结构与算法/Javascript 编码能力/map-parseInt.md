# `['1','2','3'].map(parseInt)` 结果和原因

## 结果

```js
console.log(['1', '2', '3'].map(parseInt)) // [1, NaN, NaN]
```

## 原因

这个问题是由于 [`map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 函数和 [`parseInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 函数的特性共同作用的结果

当使用 `map` 函数时，它会遍历数组的每一个元素，并对每个元素执行提供的函数，最后返回一个新的数组。对于每个元素，`map` 函数都会传递三个参数给回调函数，分别是:

- 当前元素的值

- 当前元素的索引

- 被遍历的数组本身

在上述例子中， `parseInt` 函数被用作 `map` 的回调函数，`parseInt` 函数可以接受两个参数：要解析的字符串和基数(即进制)。在 `['1', '2', '3'].map(parseInt)` 的调用中，`parseInt` 实际上接受了两个参数：数组元素和它的索引

接着逐个分析：

1. 对于数组中的第一个元素 `'1'`，调用 `parseInt('1', 0)`。在这里，基数为 `0` 或 `undefined` 时，Javascript 会根据字符串来确定基数。字符串 `'1'` 是一个普通的十进制数，所以 `parseInt` 返回 `1`

2. 对于第二个元素 `'2'`，调用 `parseInt('2', 1)`。第二个参数 `radix` 的取值范围为 (2-36) 所以并不存在 `1` 的基数，因此返回 `NaN`

3. 对于第三个元素 `'3'`，调用 `parseInt('3', 2)`。在基数为 `2` 的数系统中，不存在 `'3'` 这个数值，因此返回 `NaN`
