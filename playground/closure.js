const creatCounter = () => {
  let count = 0
  return () => {
    count++
    console.log(count)
  }
}
const counter = creatCounter() // 执行后 `createCounter()` 函数执行上下文应该被清除
counter() // 1, 但是此时 `createCounter()` 函数执行上下文中的 `count` 变量还可以被访问到
counter() // 2
