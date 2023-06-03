const map = new Map()
let key1 = { key: 'value1' }
map.set(key1, 'a')
key1 = null
console.log(map) // Map(1) { { key: 'value1' } => 'a' }

const weakMap = new WeakMap()
let key2 = { key: 'value2' }
weakMap.set(key2, 'b')
key2 = null
console.log(weakMap.has(key2)) // false
