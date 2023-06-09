// 1. 左侧的 __proto__ 链上可以找到 Object.prototype
// 2. 左侧一定是一个引用类型

function _instanceof(L, R) {
  if (!isObject(L)) return false

  const TARGET = R.prototype

  let leftPrompt = L.__proto__

  while (leftPrompt !== null) {
    if (leftPrompt === TARGET) return true

    leftPrompt = leftPrompt.__proto__
  }

  return false
}

function isObject(target) {
  if (target === null) return false
  return typeof target === 'object' || typeof target === 'function'
}

const a = {}

console.log([1, 2, 3] instanceof Object)
console.log(_instanceof([1, 2, 3], Object))
