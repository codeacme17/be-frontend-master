## 浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型

同源策略（Same-Origin Policy）是一种浏览器安全机制，用于保护用户的信息安全，防止恶意网站对用户隐私进行窃取和恶意攻击。同源指的是协议、域名和端口号都相同的两个网址，同源策略要求不同源的网页之间无法进行直接的交互行为

### 限制

- DOM 访问限制：不同源的脚本无法访问彼此的 DOM 结构

- Cookie、LocalStorage 和 IndexedDB 限制：不同源的页面无法读取或设置彼此的 Cookie、LocalStorage 和 IndexedDB 数据

- AJAX 请求限制：通过 XMLHttpRequest 或 Fetch API 发起的跨域请求会受到限制，同源的请求可以正常发送，但跨域请求通常会被阻止

### 跨域交互方式

#### JSONP（JSON with Padding）

是一种跨域数据交换的方式，它允许在不同域之间进行数据传输，从而绕过浏览器的同源策略限制。JSONP 的工作原理基于 `<script>` 标签没有同源限制的特性，通过动态创建 `<script>` 标签并指定其 `src` 属性为跨域的 URL 来实现跨域请求

- 工作原理：

  - 客户端：在客户端，一个 JSONP 请求会通过动态创建 `<script>` 标签发起。这个 `<script>` 标签的 `src` 属性包含了请求的 URL，并且 URL 的查询参数中通常会包含一个回调函数的名称。这个回调函数是在客户端定义的，用于服务器返回的数据

  - 服务器端：服务器接收到回调函数名称的请求后，会将数据包装在这个回调函数调用中。具体来说，服务器会返回一个 Javascript 代码片段，这段代码调用了客户端提供的回调函数，并将需要传递给客户端的数据作为参数传入

  - 执行回调：当 `<script>` 标签加载并执行服务器返回的 Javascript 代码时，客户端的回调函数就会被调用，并且接收到了跨域传递的数据

- 示例

  假设客户端要向 `http://example.com/api` 发送一个 JSONP 请求，并期待返回一些 JSON 数据。客户端的代码可能如下所示：

  ```html
  <script>
    function handleResponse(data) {
      console.log('Received data:', data)
    }
  </script>

  <script src="http://example.com/api?callback=handleResponse"></script>
  ```

  服务器需要对这种请求做特殊处理，返回的响应可能是这样的：

  ```js
  handleResponse({ key: 'value' })
  ```

- 优点

  - 可实现跨域请求，在 CORS 出现前被广泛使用

  - 兼容性良好

- 缺点

  - 安全问题：JSONP 由于是通过 `<script>` 标签加载执行代码，存在安全风险。如果服务端被注入了恶意代码，客户端也会无条件执行

  - 只支持 GET 请求：JSONP 只能发起 GET 请求，不支持 POST、PUT、DELETE 等其他类型的 HTTP 方法

  - 错误处理不便：由于 JSONP 的请求实质上是加载外部脚本，因此很难准确捕获错误和处理超时

#### CORS（Cross-Origin Resource Sharing）

CORS 是一种允许在不同域之间进行资源共享的机制，它通过添加特定的 HTTP 头来告诉浏览器允许 web 应用运行在一个域上的代码访问另一个域上的资源。CORS 是一种官方的跨域解决方案，旨在提供比 JSONP 更安全、灵活的跨域请求

- 工作原理

  CORS 的工作原理基于浏览器和服务器的协作。当浏览器发起跨域 HTTP 请求时，它会自动在请求头中添加 `Origin` 字段，该字段表明请求来自哪个源（协议+域名+端口）。服务器基于这个信息决定是否允许请求

  - 简单请求：对于符合特定条件（如使用 GET、HEAD 或 POST 方法，并且 HTTP 头部限于一组特定的安全字段）的请求，浏览器会直接发起跨域请求，并检查服务器的响应头中是否包含允许该源的 CORS 头（Access-Control-Allow-Origin）。如果响应中没有包含允许的头，或者允许的源不匹配，浏览器会拒绝响应

  - 预检请求：对于不符合简单请求条件的请求（如使用了 PUT、DELETE 方法，或者发送了自定义的头部），浏览器会首先使用 OPTIONS 方法发起一个预检请求（preflight request），询问服务器是否允许跨域请求。服务器必须正确响应预检请求，明确允许的方法、头部以及是否允许带凭证等信息。只有在预检请求成功之后，浏览器才会发起实际的 HTTP 请求

- 关键 HTTP 头

  请求头

  - Origin：标示这个请求来自哪个源

  - Access-Control-Request-Method：在预检请求中使用，询问服务器是否允许使用特定的 HTTP 方法

  - Access-Control-Request-Headers：在预检请求中使用，询问服务器是否允许发送特定的自定义头部

  响应头

  - Access-Control-Allow-Origin：指定哪些源可以访问资源

  - Access-Control-Allow-Methods：指定允许的 HTTP 方法

  - Access-Control-Allow-Headers：在实际请求中，允许自定义的头部字段列表

  - Access-Control-Allow-Credentials：指定是否允许发送 Cookie

  - Access-Control-Max-Age：指定预检请求的结果能够被缓存多长时间

#### 代理服务器

在同源的服务器上设置一个代理，通过代理服务器来请求其他域的资源，然后将数据返回给页面。这种方式可以绕过浏览器的同源策略

#### WebSocket

WebSocket 是一种全双工的通信协议，可以在浏览器和服务器中间建立持久性连接，可以通过 WebSocket 实现跨域通信。WebSocket 虽然在建立的开始会进行一次 `HTTP` 通信实现协议的升级（也称为 WebSocket 的 ”握手“），但 WebSocket 协议设计时已经考虑了跨域通信的需求，因此在握手过程中并不执行同源策略检查

### 异同点和选型

- JSONP vs. CORS

  JSONP 兼容性较好，但只支持 GET 请求，且安全性较差（可能收到 XSS 攻击），适用于简单的数据获取，CORS 更加安全且灵活，可以支持多种请求方式，适用于更复杂的跨域场景

- 代理服务器 vs. WebSocket

  代理服务器适用于需要在服务器端处理跨域请求的情况，但增加了服务器负担。WebSocket 可以建立持久性连接，适用于实时通信场景，但需要服务器端支持 WebSocket 协议

- 选型建议

  对于简单的跨域数据获取，可以考虑使用 JSONP。对于复杂的交互和通信需求，推荐使用 CORS。代理服务器适用于服务器端资源需要跨域访问的情况。WebSocket 适用于实时通信场景，如聊天应用
