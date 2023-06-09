## `setInterval` 需要注意的点，使用 `settimeout` 实现 `setInterval`

### `setInterval` 注意点

在使用 `setInterval` 函数时，有以下几点需要注意:

- **清除定时器**：在使用 `setInterval` 设定定时器后，如果想要停止定时器的执行，应该使用 `clearInterval` 函数。通过将 `setInterval` 的返回值传递给 `clearInterval` 函数，即可停止定时器的运行

- **避免重叠**：当使用 `setInterval` 时，确保在每次定时器出发之前完成的代码不会导致延迟。如果前一个周期的代码需要的时间超过定时器的间隔，可能会导致定时器的回调函数在预期时间之后执行

- **处理耗时操作**：如果定时器回调函数中包含耗时的操作，这可能会导致定时器的执行间隔变得不准确。耗时操作会延迟回调函数的执行，因此建议在回调函数中避免执行长时间运行的任务

- **避免堆积**：如果定时器回调函数的执行时间超过定时器的间隔，多个回调函数可能会积累在队列中，导致后续的回调函数堆积。这可能会对性能产生负面影响。确保回调函数尽快完成，并尽量避免出现执行时间超过间隔的情况

- **性能考虑**：使用较小的时间间隔会导致更频繁的回调函数执行，这可能会对性能产生负面影响，因此，应根据具体需求选择合适的时间间隔，避免不必要的频繁执行

- **异步操作**：如果定时器回调函数中包含异步操作，请确保适当处理回调函数的执行和异步操作的完成顺序，以避免潜在的竞态条件或逻辑错误

总的来说，`setInterval` 是一个强大的函数，用于避免重复的任务或定时操作，但是在使用时需要注意上述问题，以确保代码的可靠性和性能

### 使用 `settimeout` 实现 `setInterval`

#### 方向
`setInterval` 是周期性地重复执行一个函数，而 `setTimeout` 只会在指定的延迟之后执行一次函数，但可以在 `setTimeout` 的回调函数中再次调用 `setTimeout` 来实现周期性执行

#### 代码
```js
function _setInterval(callback, delay) {
  function interval() {
    callback()
    setTimeout(interval, delay)
  }

  setTimeout(interval, delay)
}
let i = 0
const test = () => console.log(i++)
_setInterval(test, 1000) // 1 2 3 ....
```

在上面的示例中，`_setInterval` 是一个自定义函数，它接受一个回调函数 `callback` 和一个延迟时间 `delay` 作为参数。在 `_setInterval` 中，定义了一个内部函数 `interval`，它在每次延迟之后调用 `callback`，然后再次使用 `setTimeout` 设置下一次的延迟。

通过调用 `_setInterval(test, 1000)`，可以实现每隔 `1` 秒执行一次 `test` 的效果。

需要注意的是，使用 `setTimeout` 实现的 `setInterval` 在每次执行完回调函数后，才会设置下一次的延迟，所以实际执行的间隔可能会稍微长一些。如果回调函数的执行时间超过了延迟时间，也会导致间隔的不准确性。因此，在需要高精度的定时操作时，建议使用原生的 `setInterval`。