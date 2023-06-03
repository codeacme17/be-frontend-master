// 1. 左侧的 __proto__ 链上可以找到 Object.prototype
// 2. 左侧一定是一个引用类型

function _instanceof(L, R) {
  if (!isObject(L)) return false

  const targetPrototype = R.prototype
  L = L.__proto__

  while (L) {
    if (L === null) return false
    if (L === targetPrototype) return true

    L = L.__proto__
  }

  return false
}

function isObject(target) {
  if (target === null) return false
  return typeof target === "object" || typeof target === "function"
}

const a = {}

console.log([1, 2, 3] instanceof Object)
console.log(_instanceof([1, 2, 3], Object))
