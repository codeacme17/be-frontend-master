## 手写 `JSON.stringify`

可以使用递归和条件语句来处理不同的数据类型实现手写 `JSON.stringify`

### 代码

```js
function stringify(data) {
  // 处理基本数据类型
  if (
    typeof data === 'number' ||
    typeof data === 'boolean' ||
    typeof data === 'null'
  ) {
    return String(data)
  }

  if (typeof data === 'string') {
    return '"' + data + '"'
  }

  // 处理数组
  if (Array.isArray(data)) {
    const elements = data.map((item) => stringify(item))
    return '[' + elements.join(',') + ']'
  }

  // 处理对象
  if (typeof data === 'object') {
    const properties = []
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        const value = stringify(data[key])
        properties.push('"' + key + '":' + value)
      }
    }

    return '{' + properties.join(',') + '}'
  }
}
```

### 实现

`stringify` 函数使用递归来处理不同的数据类型。它首先检查数据的类型，对于基本数据类型和 `null`，将其转换为字符串形式。对于字符串，将其包裹在双引号内。对于数组，递归地对每个元素调用 `stringify`，然后用逗号连接它们并包裹在方括号中。对于对象，递归地对每个属性值调用 `stringify`，然后用逗号连接它们并包裹在花括号中
