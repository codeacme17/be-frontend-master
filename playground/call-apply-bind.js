Function.prototype._call = function (target, ...argus) {
  const fnSymbol = Symbol()
  target[fnSymbol] = this
  const res = target[fnSymbol](...argus)
  delete target[fnSymbol]
  return res
}

Function.prototype._apply = function (target, argus) {
  const fnSymbol = Symbol()
  target[fnSymbol] = this
  const res = target[fnSymbol](argus)
  delete target[fnSymbol]
  return res
}

Function.prototype._bind = function (target, argus) {
  return () => {
    const fnSymbol = Symbol()
    target[fnSymbol] = this
    const res = target[fnSymbol](argus)
    delete target[fnSymbol]
    return res
  }
}

const modulee = {
  x: 42,
  getX: function () {
    return this.x
  },
}

const unboundGetX = modulee.getX
console.log(unboundGetX._bind(modulee)())
