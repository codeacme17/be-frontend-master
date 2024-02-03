## React 父组件 `props` 变化的时候子组件怎么监听

在 React 中，当父组件的 `props` 发生变化时，这些变化会传递给子组件，触发子组件的重新渲染(re-render)。因此，子组件本身不需要显式地“监听” `props` 的变化。但是，如果需要在子组件中根据 `props` 的变化执行某些特定的操作（比如数据请求、状态更新等），可以使用几种不同的方法来实现

### 使用生命周期方法（类组件）

如果你的子组件是一个累组件，你可以使用生命周期方法 `componentDidUpdate` 来检测 `props` 的变化

```js
class ChildComponent extends React.Component {
  componentDidUpdate(prevProps) {
    // 只有当特定的prop发生变化时才执行操作
    if (this.props.specificProp !== prevProps.specificProp) {
      // 执行某些操作，例如状态更新或数据请求
    }
  }

  render() {
    // 渲染组件
    return <div>{this.props.specificProp}</div>
  }
}
```

### 使用 Effect Hook（函数组件）

对于函数组件，可以使用 `useEffect` Hook 来监听 `props` 的变化。`useEffect` 允许你在函数组件中执行副作用操作，可以提供一个依赖项数组作为第二个参数来指定哪些变量变化时应该重新执行副作用

```js
import React, { useEffect } from 'react'

function ChildComponent({ specificProp }) {
  useEffect(() => {
    // 当specificProp变化时执行的操作
    // 例如状态更新或数据请求
  }, [specificProp]) // 依赖项数组，只有specificProp变化时才会重新执行

  return <div>{specificProp}</div>
}
```

### 为什么这样工作

React 通过比较新旧 `props` 来决定是否要重新渲染组件，如果 `props` 发生变化，React 会重新渲染组件，并将新的 `props` 传递给他。使用 `componentDidUpdate` 或 `useEffect`，可以在 `props` 变化后执行额外的逻辑。在 `useEffect` 的依赖项数组中指定相关 `props` 可以确保只有在这些 `props` 变化时才执行副作用，从而避免不必要的操作执行
