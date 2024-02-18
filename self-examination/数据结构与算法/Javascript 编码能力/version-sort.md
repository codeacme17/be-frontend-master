## 按照版本号由小到大排序

### 题目要求

输入：

```
versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
```

输出：

```
['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']
```

### 思路

这道题其实是 [Leetcode 165.比较版本号](https://leetcode.cn/problems/compare-version-numbers/description/) 的一个升级版

核心思路有两点：

- 利用 `Array.prototype.sort()` 方法对数组中的版本号进行排序

- 通过 165 题的解题思路实现 `sort` 中的元素比对方法

### 代码

```js
function sortVersion(versions) {
  return versions.sort((a, b) => {
    const tempA = a.split('.')
    const tempB = b.split('.')
    const maxLength = Math.max(tempA.length, tempB.length)

    for (let i = 0; i < maxLength; i++) {
      const v1 = +tempA[i] || 0
      const v2 = +tempB[i] || 0

      if (v1 === v2) continue
      return v1 - v2
    }

    return 0
  })
}
```
