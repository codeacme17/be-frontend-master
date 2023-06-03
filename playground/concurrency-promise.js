async function sendRequest(requestList, limits, callback) {
  const pool = new Set()
}

sendRequest(
  [
    () => request('1'),
    () => request('2'),
    () => request('3'),
    () => request('4'),
    () => request('5'),
    () => request('6'),
    () => request('7'),
  ],
  3, //并发数
  (res) => {
    console.log(res)
  }
)

function request(url, time = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('成功')
      } else {
        reject('错误')
      }
    }, time * 1000)
  })
}
