## 理解 `Map`、`WeakMap`、`Set`、`WeakSet` 的区别

> Reference [JJ](https://juejin.cn/post/7226166316670058552)

### `Map`

`Map` 是一种键值对的集合，其中的键和值可以是任意类型的。与对象类似，它们可以通过键来访问值。不同之处在于，`Map` 可以使用任意类型作为键，而对象只能使用字符串或 `Symbol` 类型作为键，并且 `Map` 是可以进行迭代的。`Map` 还提供了许多有用的方法，例如 `size` 属性来获取键值对的数量，以及 `forEach()` 方法来遍历集合

### `WeakMap`

`WeakMap` 与 `Map` 类似，也是一种键值对的集合。然而，它们的键必须是对象，而值可以是任何类型。与 `Map` 不同的是，`WeakMap` 的键是弱引用，也就是说，如果键对象没有被其他地方引用，则它们可以被垃圾回收。这使得 `WeakMap` 非常适合缓存数据，因为当对象不再需要时，它们可以自动从 `WeakMap` 中删除，从而释放内存

### `Set`

`Set` 是一种值的集合，其中每个值都是唯一的。与数组不同，它们没有重复的元素，并且没有特定的顺序。`Set` 提供了许多有用的方法，例如 `add()` 方法来添加新的值，`delete()` 方法来删除值，`has()` 方法来检查是否存在某个值，以及 `size` 属性来获取集合的大小

### `WeakSet`

`WeakSet` 是一种值的集合，其中每个值都是唯一的，并且没有特定的顺序。与 `Set` 不同的是，它们的值也是弱引用的，因此可以被垃圾回收。`WeakSet` 通常用于存储对象的引用，以避免内存泄漏


### 区别

#### `Map` vs `WeakMap`

- Map
  - 键可以是任意类型的值，包括基本类型和引用类型
  - 可以使用 `size` 属性获取 `Map` 实例中键值对的数量
  - 支持迭代器和 `forEach()` 方法来遍历 `Map` 中的键值对
  - 不会自动清除不再使用的键值对，需要手动删除

- WeakMap
  - 键必须是对象类型，不能使用基本类型作为键
  - 不支持 `size` 属性，也不支持迭代器和 `forEach()` 方法
  - 不会阻止垃圾回收器回收键对象，如果键对象被垃圾回收器回收，对应的键值对也会被自动删除
  - 不能直接枚举所有键值对

```js
const map = new Map()
let key1 = { key: 'value1' }
map.set(key1, 'a')
key1 = null
console.log(map) // Map(1) { { key: 'value1' } => 'a' }

const weakMap = new WeakMap()
let key2 = { key: 'value2' }
weakMap.set(key2, 'b')
key2 = null
console.log(weakMap.has(key2)) // false
```