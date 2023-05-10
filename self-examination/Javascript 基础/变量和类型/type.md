## JavaScript 规定了几种语言类型

### 基本类型

Javascirpt 中有**七种**基本类型：

- `number` - 数字类型

- `string` - 字符串类型

- `boolean` - 布尔类型

- `undifined` - 未定义

- `null` - 空值

- `symbol` - 独一无二的值(es6 新增)

- `bigInt` - 大整数(es10 新增)

### 引用类型

- `Object` - 对象

- `Array` - 数组

- `Function` - 函数

### `typeof` 关键字检查类型

| 类型                 | 结果             | 
| :------------------ | :---------------| 
| Undefined           | "undefined"     | 
| Null                | "object"        | 
| Boolean             | "boolean"       | 
| Number              | "number"        | 
| BigInt              | "bigint"        | 
| String              | "string"        | 
| Symbol              | "symbol"        | 
| Function            | "function"      | 
| 其他任何对象          | "object"        | 