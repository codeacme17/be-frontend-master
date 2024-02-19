## `useEffect` 与 `useLayoutEffect` 的区别

### useEffect

`useEffect` 用于在组件渲染到屏幕之后延迟执行副作用操作。这意味着它不会阻塞浏览器的绘制过程，因此适用于大多数副作用场景，如数据获取、设置订阅以及手动修改 DOM 等。`useEffect` 是异步执行的，这有助于减少对用户体验的影响，特别是当副作用较为耗时时

```js
useEffect(() => {
  // 执行副作用操作
}, [dependencies]) // 依赖数组
```

### useLayoutEffect

`useLayoutEffect` 与 `useEffect` 的功能类似，但它在所有的 DOM 变更之后同步执行副作用操作。由于 `useLayoutEffect` 会在浏览器绘制之前执行，因此适用于需要同步更新 DOM 或执行需要理解反馈的布局计算的场景。使用 `useLayoutEffect` 可以避免由于 DOM 变更导致的视觉闪烁

```js
useLayoutEffect(() => {
  // 执行副作用操作
}, [dependencies]) // 依赖数组
```

### 区别

- 执行时机

  `useEffect` 是在组件渲染到屏幕之后异步执行的，而 `useLayoutEffect` 是在所有 DOM 变更后同步执行的，即在浏览器进行绘制之前

- 用途

  `useEffect` 适用于大部分副作用场景，特别是那些不需要理解反馈到屏幕的操作。`useLayoutEffect` 主要用于需要同步修改 DOM 或需要在 DOM 更新后立即执行的操作，以避免可能的闪烁问题

- 性能影响

  由于 `useLayoutEffect` 会在浏览器绘制前执行，如果执行耗时操作可能会导致画面延迟显示，从而影响用户体验。因此除非必要，否则推荐使用 `useEffect`

### 使用建议

- 默认情况下，使用 `useEffect` 以避免阻塞浏览器的绘制

- 当需要进行 DOM 测量或根据 DOM 变更同步调整布局时，使用 `useLayoutEffect` 以避免视觉闪烁
