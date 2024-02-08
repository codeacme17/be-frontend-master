## Webpack proxy 的工作原理，为什么可以解决跨域问题

Webpack 的 `devServer.proxy` 配置项时 Webpack Dev Server 的一个功能，它主要用于开发环境中解决前端请求后端 API 时遇到的跨域问题。通过代理(proxy) 这种方式，可以实现前端开发服务器向实际后端 API 服务器的请求转发，从而绕过浏览器的同源策略限制，实现跨域请求

### 工作原理

1. 请求转发：当在 Webpack Dev Server 中配置了代理，这个代理会拦截特定的 API 请求，并将这些请求转发到配置的目标服务器（即后端 API 服务器）

2. 路径重写：通常还可以配置路径重写规则，以便在转发请求时去除或替换特定的 URL 前缀

3. 相应返回：代理服务器接到后端 API 服务器的相应后，再将这个相应返回给前端请求者

### 解决跨域的原理

跨域问题是浏览器的同源策略引起的，同源策略是浏览器的一种安全策略，它限制了一个源的文档或脚本如何与另一个源的资源进行交互。这意味着，浏览器直接发起的跨域 HTTP 请求将收到限制

当使用 Webpack Dev Server 的代理功能时，前端代码中的 API 实际上是发送到了同源的 Webpack Dev Server，而不是直接请求后端 API 服务器，由于请求是法发往同源服务器的，因此不受同源策略的限制。Webpack Dev Server 接收到请求后，会代理这个请求，转发给实际的后端 API 服务器。因为这一转发过程发生在服务器端，它不受浏览器同源策略的约束

从浏览器的角度来看，所有请求都是发往同源的 Webpack Dev Server，因此不存在跨域问题。实际的跨域请求是在服务器之间进行的，这就是为什么 Webpack Dev Server 的代理配置可以解决开发环境下的跨域请求问题

```js
devServer: {
  proxy: {
    '/api': {
      target: 'http://api.server.com',
      pathRewrite: {'^/api' : ''},
      changeOrigin: true,
      secure: false,
    }
  }
}
```

### 监听代理请求信息

```js
// webpack.config.js
module.exports = {
  // 其他配置...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.server.com',
        changeOrigin: true,
        onProxyReq(proxyReq, req, res) {
          console.log(
            `[Proxy Request] ${req.method} ${req.path} -> ${proxyReq.path}`
          )
        },
        onProxyRes(proxyRes, req, res) {
          console.log(
            `[Proxy Response] ${req.method} ${req.path} -> ${proxyRes.statusCode}`
          )
        },
      },
    },
  },
}
```

需要注意的是，在实际的部署生产环境中，建议移除或禁用这些日志记录功能，以避免长生不必要的性能开销和潜在的信息泄露风险
