## Web 端 cookie 的获取和设置

### 设置 Cookie

在客户端中设置 Cookie 可以通过直接修改 `document.cookie` 属性实现。一个基本的 Cookie 设置包括名称、值和可选的属性（如过期时间、路径、域、安全标志等）

```js
document.cookie =
  'username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/'
```

上述代码中，创建了一个名为 `username` 的 Cookie，其值为 `John Doe`，并设置了过期的时间和路径。如果不设置过期时间，则 Cookie 默认将会是一个会话 Cookie，即浏览器关闭自动删除

### 获取 Cookie

获取 Cookie 同样通过访问 `document.cookie` 属性，它会返回当前页面可访问的所有 Cookie 的字符串，各个 Cookie 之间用分号加空格分隔

```js
const allCookies = document.cookie
```

由于 `document.cookie` 返回的是一个字符串，如果获取特定的 Cookie 值，需要通过字符串处理函数来解析这个字符串

```js
function getCookie(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }

  return null
}
```

### 注意事项

- 由于安全原因，通过 Javascript 创建的 `HttpOnly` Cookie 不能通过 `document.cookie` 访问

- 由于隐私问题，现代浏览器和 Web 应用常常采用其他技术（如 Web Storage API）来代替 Cookies 存储会话信息和用户数据
