// @@iterator

const a = {
  0: 1,
  1: 2,
  2: 3,
}

a[Symbol.iterator] = function* () {
  let p = 0
  while (p < Object.keys(this).length) {
    yield this[p]
    p++
  }
}

a.length = Object.keys(a).length

const _symbol = (() => {
  let count = 0
  return (key) => {
    const uniqueId = `__${key}_${count}__`
    count++
    return uniqueId
  }
})()

const sym1 = _symbol("mys1")
const sym2 = _symbol("mys2")
console.log(sym1)
console.log(sym2)
console.log(sym1 === sym2)
const sym3 = Symbol("mys3")
console.log(sym3)
