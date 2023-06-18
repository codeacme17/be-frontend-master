## 掌握 Javascript 提供的正则表达式 API、可以使用正则表达式（邮箱校验、`URL` 解析、 去重等）解决常见问题

> Reference: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### 正则对象 `RegExp`

在 Javasruot 中，可以使用正则对象 `RegExp` 或直接使用正则表达式字面量来创建正则对象

#### 匹配 `test`

`test()` 方法用于检测字符串是否符合正则表达式的模式，它返回一个布尔值，表示是否成功匹配

```js
const pattern = /hello/
const str = 'hello world'
console.log(pattern.test(str)) // true
```

#### 搜索 `search`

`search()` 方法用于在字符串中搜索符合正则表达式的模式，它返回匹配的起始位置的索引，如果没有匹配则返回 `-1`

```js
const pattern = /world/
const str = 'hello world'
console.log(str.search(pattern)) // 6
```

#### 匹配 `match`

`match()` 方法用于在字符串中查找符合正则表达式的模式，并返回一个包含匹配结果的数组，如果没有匹配返回 `null`

```js
const patter = /o/g
const str = 'hello world'
console.log(str.match(pattern)) // ['o', 'o']
```

#### 替换 `replace`

`replace()` 方法用于在字符串中搜索符合正则表达式的模式，并将匹配的部分替换为指定的内容，它返回替换后的新字符串

```js
const pattern = /world/
const str = 'hello world'
const newStr = str.replace(pattern, 'JavaScript')
console.log(newStr) // 'hello JavaScript'
```

### 应用

#### 邮箱校验

```js
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email)
}
console.log(validateEmail('test@example.com')) // true
console.log(validateEmail('invalid.email')) // false
```

正则表达式 ^[^\s@]+@[^\s@]+\.[^\s@]+$ 匹配以下模式：

- `^[^\s@]+`：以非空白字符和非 @ 字符开头。
- `@[^\s@]+`：紧随 @ 字符后面，至少有一个非空白字符和非 @ 字符。
- `\.[^\s@]+$`：以 . 字符开头，后面至少有一个非空白字符和非 @ 字符，并且结束。

#### URL 解析

```js
const urlString = 'https://www.example.com:8080/path?query=param#fragment'

// 解析协议部分
const protocolRegex = /^(.*?):\/\//
const protocolMatch = urlString.match(protocolRegex)
const protocol = protocolMatch ? protocolMatch[1] : ''

// 解析主机部分
const hostnameRegex = /\/\/([^\/]+)/
const hostnameMatch = urlString.match(hostnameRegex)
const hostname = hostnameMatch ? hostnameMatch[1] : ''

// 解析端口部分
const portRegex = /:(\d+)/
const portMatch = urlString.match(portRegex)
const port = portMatch ? portMatch[1] : ''
```
