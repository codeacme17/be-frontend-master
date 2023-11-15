## 理解暂时性死区

暂时性死区（Temporal Dead Zone，TDZ）是一个与 `let` 和 `const` 声明变量相关的概念。TDZ 指的是从变量所在的块的开始到变量声明处的那段区域，在这个区域内，这些变量被认为是不可访问的

### 产生原因

暂时性死区的出现是因为 `let` 和 `const` 声明的变量不会像 `var` 声明的变量那样在进入执行上下文时就立即初始化。相反，它们在声明之前存在一个阶段，其中它们不能被访问或使用

### TDZ 的特点

- 未初始化

  在 TDZ 内，变量虽然已经存在，但还没有初始化，任何试图访问这些变量的操作都会导致运行时错误（通常是一个 `ReferenceERror`）

- 作用域的开始

  TDZ 从块的开始（即 `{`）开始，直到声明变量的地方结束

- 针对 `let` 和 `const`

  只有 `let` 和 `const` 声明的变量有 TDZ，`var` 声明的变量不存在 TDZ，因为它们在整个函数或全局作用域中提前被初始化未 `undefined`

- 每个块作用域都有自己的 TDZ

  每个 `{}` 块内，用 `let` 或 `const` 声明的变量都有自己的 TDZ

### 示例

```js
{
  // TDZ 开始
  console.log(a) // ReferenceError: a is not defined
  console.log(b) // ReferenceError: b is not defined

  let a = 3 // TDZ 结束
  const b = 5 // TDZ 结束
}
```

在上面的示例中，尝试在声明变量 `a` 和 `b` 之前访问它们会导致 `ReferenceError`，因为这个访问发生在它们各自的 TDZ 内
