## 为何 `try` 里面放 `return`，`finally` 还会执行，理解其内部机制

### 情况描述
在 Javascript 中，`try` 块中的 `return` 语句不会立即终止整个函数的执行，而是会将返回值存储起来，并等待 `finally` 块执行完毕后再执行返回

### 执行顺序

1. 执行 `try` 块中的代码
2. 如果 `try` 块中遇到了 `return` 语句，会将返回值存储起来，但不会理解返回
3. 执行 `finally` 块中的代码
4. 如果没有遇到 `return` 语句，或者已经执行了 `return` 语句，将返回值返回

### 内部机制

这种行为是由于 Javascript 引擎的设计决策所决定的。`finally` 块中的代码会在 `try` 块中的代码执行完毕后，无论是正常执行还是遇到异常，都会被执行。这可以用来确保在函数返回前执行一些清理工作，例如释放资源、关闭连接等

### 代码案例

```js
function example() {
  try {
    console.log('Step 1');
    return 'Result from try';
    console.log('Step 2'); // 不会执行，因为上一行已经使用 return 终止了函数
  } finally {
    console.log('Step 3');
  }
}

const result = example();
console.log('Result:', result);
```

输出结果：
```js
"Step 1"
"Step 3"
"Result: Result from try"
```

可以看到，即使 `try` 块中使用了 `return` 终止函数，但 `finally` 块中的代码仍然会被执行，最终返回的值时存储在 `try` 块中的返回值

### 总结
`try` 块中的 `return` 语句不会直接终止函数的执行，而是等待 `finally` 块执行完毕后再执行返回。这样可以确保在函数返回前执行一些必要的清理操作