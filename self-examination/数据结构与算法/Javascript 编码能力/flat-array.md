## 实现数组打平（数组扁平化）

> Reference: [leetcode](https://leetcode.com/problems/flatten-deeply-nested-array/)

#### 题目

请你编写一个函数，它接收一个多维数组 `arr` 和它的深度 `n` ，并返回该数组的扁平化后的结果
多维数组是一种包含整数或其他多维数组的递归数据结构
数组扁平化是对数组的一种操作，定义是将原数组部分或全部子数组删除，并替换为该子数组中的实际元素。只有当嵌套的数组深度大于 `n` 时，才应该执行扁平化操作。第一层数组中元素的深度被认为是 `0`
请在没有使用内置方法 `Array.flat` 的前提下解决这个问题。

#### 代码

```js
const flat = function (arr, n) {
  if (!n) return arr

  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (n > 0 && Array.isArray(arr[i])) res.push(...flat(arr[i], n - 1))
    else res.push(arr[i])
  }

  return res
}
```

#### 实现

- 首先，代码检查 `n` 是否为 falsy（包括 `null`、`undefined`、`0`、`NaN`、空字符串等），如果是，则直接返回原始数组 `arr`，即不进行扁平化操作
- 如果 `n` 不为 falsy，那么创建一个空数组 `res` 用于存储扁平化后的结果
- 进入循环，遍历数组 `arr` 的每个元素
- 对于每个元素，首先判断 `n` 是否大于 0 且当前元素是一个数组（使用 `Array.isArray` 方法判断）。如果满足条件，则将当前元素递归地传入 `flat` 函数，并将扁平化层级减少 1（`n - 1`），然后使用扩展运算符 `...` 将返回的扁平化结果依次添加到 `res` 数组中
- 如果不满足上述条件，则将当前元素直接添加到 `res` 数组中
- 循环结束后，返回最终的扁平化结果数组 `res`
