## HTTP 所有状态码的具体含义，看到异常状态码能快速定位问题

HTTP 协议定义了多种状态码，用于表示请求的处理结果或服务器的响应状态

### 1xx - 信息性状态码（Informational）

- 100 Continue：服务器已收到请求的起始部分，客户端应该继续发送剩余的请求

- 101 Switching Protocols：服务器要求客户端切换协议，例如从 HTTP 切换到 WebSocket

### 2xx - 成功状态码（Successful）

- 200 OK：请求成功，服务器成功处理了请求并返回了结果

- 201 Created：请求成功，服务器成功创建了新的资源

- 204 No Content：请求成功，但响应报文不包含实体内容

### 3xx - 重定向状态码（Redirection）

- 301 Moved Permanently：请求的资源被永久移动到了新的 URL

- 302 Found：请求的资源被暂时移动到了新的 URL

- 304 Not Modified：客户端发送了条件式请求，服务器资源未修改，可以使用缓存的版本

### 4xx - 客户端错误状态码（Client Error）

- 400 Bad Request：服务器无法理解客户端的请求，请求语法错误

- 401 Unauthorized：请求需要身份验证

- 403 Forbidden：服务器拒绝请求，权限不足

- 404 Not Found：请求的资源不存在

### 5xx - 服务器错误状态码（Server Error）

- 500 Internal Server Error：服务器遇到了不可预期的错误

- 502 Bad Gateway：作为代理或网关的服务器从上游服务器接收到无效的响应

- 503 Service Unavailable：服务器暂时无法处理请求，通常是由于过载或维护

- 504 Gateway Timeout：作为代理或网关的服务器在等待上游服务器响应时超时

这些状态码可用于识别请求和响应的处理状态，帮助定位问题。当遇到异常状态码时，可以根据状态码的具体含义判断出问题所在，例如 404 Not Found 表示资源不存在，401 Unauthorized 表示需要身份验证，500 Internal Server Error 表示服务器发生了内部错误等。根据状态码进行问题定位可以帮助开发者更好地调试和修复错误
