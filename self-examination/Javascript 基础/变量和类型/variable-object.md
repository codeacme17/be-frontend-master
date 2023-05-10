## 基本类型对应的内置对象，以及他们之间的装箱拆箱操作

### 基本类型内置对象

- `boolean` - [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- `number` - [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

- `string` - [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

- `Symbol` - [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

- `bigInt` - [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

- `null` - 不存在内置对象

- `undefined` - 不存在内置对象

### 装箱、拆箱

装箱和拆箱操作是 JS 引擎在运行时对 Javascript 中基本类型和内置对象之间相互转换的过程

- 装箱 (boxing)：当基本类型需要访问对应的内置对象方法时，会自动将其转换成对应的内置对象，这个过程就叫做装箱

- 拆箱 (unboxing)：当需要将内置对象转换成基本类型时，会自动调用内置对象的 `valueOf` 或 `toString` 方法，得到基本类型的值，这个过程叫做拆箱

### 举例

```js
const str = "hello" // 基本类型 string
const strObj = new String(str) // 装箱
const strValue = strObj.valueOf() // 拆箱
```

需要注意的是，虽然可以将基本类型转换为对应的内置对象，但在实际开发中，建议尽量避免这种操作，因为它会带来性能上的损失。在大多数情况下，直接使用基本类型即可。