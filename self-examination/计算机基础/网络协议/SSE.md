## SSE 的原理和如何使用

Server-Side Events(SSE) 是一种允许服务器主动向浏览器发送事件的技术。与 WebSocket 不同，SSE 是基于 HTTP 协议的，专为建立一个单向通道而设计，其中服务器可以连续发送消息到客户端（浏览器），但客户端不能通过这个通道向服务器发送消息。这使得 SSE 非常适合需要服务器实时推送数据到客户端的场景，如股票价格更新、新闻 feed、实时通知等

### 原理

- 建立连接

  客户端通过发送一个普通的 HTTP 请求来初始化 SSE 连接。这个请求通常对应于服务器上的一个特定端点

- 保持连接打开

  服务器响应这个请求，并保持连接打开。这样，服务器就可以在任何时候发送新消息

- 发送消息

  服务器通过这个持久的连接按照特定的文本格式发送消息。每条消息都是独立的，并且可以包含一个事件类型和数据

- 客户端处理消息

  客户端监听这个连接，并对从服务器接收到的每条消息作出响应。在 Web 浏览器中，这通常通过 Javascript 和 EventSource API 实现

### 使用

#### 服务端

```js
const express = require('express')
const app = express()

app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
  }

  sendEvent({ message: 'Hello SSE!' })

  // 每隔2秒发送一次消息
  const intervalId = setInterval(() => {
    sendEvent({ message: new Date().toTimeString() })
  }, 2000)

  // 当客户端关闭连接时清除定时器
  req.on('close', () => {
    clearInterval(intervalId)
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`SSE server running at http://localhost:${PORT}`)
})
```

#### 客户端

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SSE Example</title>
  </head>
  <body>
    <h1>Server-Sent Events Example</h1>
    <div id="messages"></div>
    <script>
      const eventSource = new EventSource('/events')
      eventSource.onmessage = function (event) {
        const message = JSON.parse(event.data).message
        document.getElementById('messages').innerHTML += `<p>${message}</p>`
      }
    </script>
  </body>
</html>
```
