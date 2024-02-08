## attribute 和 property 的区别是什么

在 HTML 和 Web 开发中，attribute 和 property 这两个概念经常让人混淆，尽管它们在很多情况下看起来相似，但实际上有本质的区别

### Attribute

Attribute 是在 HTML 标签中定义的，它们提供了有关 HTML 元素的初始信息。Attributes 在 HTML 文档汇总作为 `名称/值` 对出现，并且在 DOM 被创建时解析。Attributes 用于配置元素的初始状态，并且可以通过 HTML 标记或者通过 Javascript 使用 `getAttribute` 和 `setAttribute` 方法来读取和修改

```html
<input type="text" value="hello" />
```

如上述例子，这里的 `type` 和 `value` 都是 `<input>` 元素的 attributes，它们定义了这个 `<input>` 元素的初始配置

### Property

Properties 是 DOM 中对象的属性，当浏览器解析 HTML，并且通过 DOM 创建对象时，HTML 元素的 attributes 会成为这些对象的 properties。Properties 的值可以通过 Javascript 动态改变，反映了当前的状态

继续使用上面的 `<input>` 元素为例，在 Javascript 中，可以访问和修改这个元素的 `value` 属性

```js
const inputElement = document.querySelectr('input')
console.log(inputElement.value) // 输出：hello
inputElement.value = 'world'
console.log(inputElement.value) // 输出：world
```

即使我们修改了 `value` 属性，原始 HTML 代码中的 `value` attribute 仍然是 `hello`。这是因为 attribute 表示了 HTML 标记的初始状态，而 property 表示了当前的状态

### 主要区别

- 定义位置：Attribute 定义在 HTML，properties 定义在 DOM 对象中

- 数据类型：Attribute 的值总是字符串，无论讲什么值赋值给它；而 Property 的值可以是任何 Javascript 数据类型

- 同步：大多数情况下，当页面加载时，attribute 的值会初始化对应的 property 值。但之后，二者的值可能不同步。对于一些属性如 `value`，修改 DOM 对象的 property 不会影响到 attribute 的值，反之亦然
