## 多种方式实现数组去重，并对比优缺点

#### 使用 `Set`

```js
const uniqueArray = (arr) => [...new Set(arr)]
```

优点：

- 简洁、直观，一行代码即可实现
- 可以除去所有类型的重复元素，包括基本类型和引用类型

缺点：

- `Set` 是 ES6 新增的数据结构，对于需要兼容旧版本浏览器的项目，可能需要额外的 polyfill 处理
- 结果数组的顺序与原始数组不同，因为 `Set` 内部使用哈希表存储元素

#### 使用 `filter` 和 `indexOf`

```js
const uniqueArray = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index)
```

优点：

- 可以在不引入额外数据结构的情况下进行去重
- 相对较好的兼容性，适用于大多数环境

缺点：

- 对于大型数据性能较差，因为需要多次遍历和索引查找，时间复杂度 O(n^2)
- 对于引用类型的元素，无法去除重复的对象实例

#### 使用 `reduce`

```js
const uniqueArray = (arr) => {
  return arr.reduce((unique, item) => {
    if (!unique.includes(item)) unique.push(item)
    return unique
  }, [])
}
```

优点：

- 可以灵活处理不同类型的元素，包括引用类型
- 适用于对元素进行复杂比较和去重逻辑的情况

缺点：

- 逻辑稍微复杂，代码相对冗长
- 对于大型数据性能较差，因为需要多次遍历和数组包含性能较差的判断，时间复杂度 O(n^2)
