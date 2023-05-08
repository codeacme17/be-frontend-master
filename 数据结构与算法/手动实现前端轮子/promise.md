## 手动实现符合 `Promise/A+` 规范的 `Promise`

### 思想

如果要实现一个 `Promise`，需要考虑到 `Promise` 最基本的三个状态：`pending`、`fulfilled` 和 `rejected`。同时还需要考虑 `Promise` 的 `then` 方法和 `Promise` 链式编程的特性

### 实现

```js
class MyPromise {
  constructor(executor) {
    this._status = "pending";
    this._value = undefined;
    this._callbacks = [];

    const resolve = (value) => {
      if (this._status !== "pending") return;

      this._status = "fulfilled";
      this._value = value;
      this._callbacks.forEach((cb) => cb.onFulfilled(value));
    };

    const reject = (reason) => {
      if (this._status !== "pending") return;

      this._status = "rejected";
      this._value = reason;
      this._callbacks.forEach((cb) => cb.onRejected(reason));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const promise2 = new MyPromise((resolve, reject) => {
      const handleCallback = (callback) => {
        try {
          const x = callback(this._value);

          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this._status === "fulfilled") {
        setTimeout(() => {
          handleCallback(onFulfilled);
        });
      } else if (this._status === "rejected") {
        setTimeout(() => {
          handleCallback(onRejected);
        });
      } else {
        this._callbacks.push({
          onFulfilled: () => {
            handleCallback(onFulfilled);
          },
          onRejected: () => {
            handleCallback(onRejected);
          },
        });
      }
    });

    return promise2;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let count = 0;

      promises.forEach((promise, index) => {
        promise.then(
          (value) => {
            results[index] = value;
            count++;

            if (count === promises.length) {
              resolve(results);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
  }
}
```
