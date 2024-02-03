## `useEffect` 能完全模拟 `componentDidUpdate` 么？

`useEffect` Hook 在很多情况下可以用来模拟类组件中的 `componentDidUpdate` 生命周期方法，但他们在行为上存在区别

### `componentDidUpdate`

在类组件中，`componentDidUpdate` 方法在组件每次更新后调用，它不会再组件的首次渲染时调用，这使得它成为执行 DOM 操作或执行更多更新（如网络请求）的理想选择，条件是这些操作依赖于组件的最新状态或属性

```js
componentDidUpdate(preProps, prevState) {
  if(preProps.id !== this.props.id) {
    // 执行某些操作，例如请求数据
  }
}
```

### `useEffect`

`useEffect` Hook 可以在函数组件中执行副作用操作，它在组件渲染到屏幕之后执行。不同于 `componentDidUpdate`，`useEffect` 默认在首次渲染和之后的每次更新时都会执行。

为了使 `useEffect` 更像 `componentDidUpdate`，可以通过给它提供第二个参数（依赖数组）来明确告诉 React 只有在特定的 props 或 state 变化时才会重新执行 effect

```js
useEffect(() => {
  // 执行副作用操作
}, [props.id]) // 仅在 props.id 改变时执行
```

### 关键差异

- 首次渲染的行为：`componentDidUpdate` 不会在组件的首次渲染时调用，而 `useEffect` 默认会，为了模拟 `componentDidUpdate` 的行为，需要在 effect 中添加逻辑判断是否是在组件更新后的调用

- 清理机制：`useEffect` 允许你在同一个地方添加副作用操作和它们的清理机制（通过返回一个清理函数）。这与 `componentDidUpdate` 和 `componentWillUnmount` 分别管理副作用和清理的方式不同

- 精确控制更新：`useEffect` 的依赖数组允许非常精确的控制 effect 的执行时机，这在 `componentDidUpdate` 中需要更多的逻辑来实现
