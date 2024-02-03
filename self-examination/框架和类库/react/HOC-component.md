## 什么是高阶组件，受控组件，非受控组件

在 React 中，高阶组件（Higher-Order Components, HOC）、受控组件和非受控组件是三个重要的概念，他们在组件开发和状态管理中扮演着关键的角色

### 高阶组件（HOC）

高阶组件是一种基于 React 的组合特性而形成的模式，它本质上是一个函数，接收一个组件作为参数并返回一个新的组件。HOC 允许重用组件逻辑，是实现跨组件共享功能的一种高效方式。例如，可以使用 HOC 来处理加载状态、错误处理、权限控制等跨多个组件的共同逻辑

```js
function withHOC(WrappedComponent) {
  return function (props) {
    return <WrappedComponent {...props} />
  }
}
```

### 受控组件

受控组件指的是其值受 React 组件状态控制的表单元素。在受控组件中，表单的值通过 React 状态管理，需要为表单元素编写一个事件处理函数来更新这个状态，同时将状态作为表单元素的值。这种方式使得 React 的状态成为数据的 “唯一真相来源”，可以和轻松实现表单数据的验证、提交等操作

```js
import React, { useState } from 'react'

function ControlledComponent() {
  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value)
  }

  return <input type="text" value={value} onChange={handleChange} />
}
```

### 非手控组件

非受控组件是指表单数据由 DOM 本身管理的组件。在非手控组件中，不需要为表单元素管理数据，而是使用一个 `ref` 来从 DOM 获取表单数据。这种方式类似于传统 HTML 表单的工作方式，适用于不需要每次输入变化都进行处理，或者在表单提交一次性处理输入数据的情况

```js
import React, { useRef } from 'react'

function UncontrolledComponent() {
  const inputRef = useRef(null)

  function handleSubmit(event) {
    alert('A name was submitted: ' + inputRef.current.value)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}
```

### 总结

- 高阶组件是一个函数，用于重用组件逻辑

- 受控组件由 React 的状态管理其值，适用于需要实时控制或验证用户输入的场景

- 非受控组件由 DOM 直接管理其值，适用于不需要密切控制输入的场景
