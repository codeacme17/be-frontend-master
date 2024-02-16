## 说说 `navigation`、`location` 和 `history` 对象

在 Web 开发中，`navigation`、`location` 和 `history` 对象都是属于浏览器对象模型（BOM）的三个重要对象，它们提供了与浏览器窗口交互的接口。这些对象使得 Javascript 能够获取用户的浏览器信息、操作 URL 以及浏览器的历史记录

### `navigator` 对象

`navigator` 对象包含了有关浏览器的信息，可以用来获取浏览器的名称、版本、语言、操作系统等。这个对象主要用于确定用户正在使用的浏览器和设备的属性

#### 示例属性和方法

- `navigator.userAgent`：返回浏览器的用户代理字符串，可用于判断浏览器类型

- `navigator.language`：返回浏览器当前的语言

- `navigator.geolocation`：提供了访问设备地理位置的 API

### `location` 对象

`location` 对象提供了有关当前 URL 的信息，并允许 Javascript 修改浏览器的 URL。通过操作这个对象，可以实现页面重定向、刷新页面和解析 URL 的功能

#### 示例属性和方法

- `location.href`：设置或返回当前页面的 URL

- `location.hostname`：返回 web 主机的域名

- `location.pathname`：返回当前页面的路径和文件名

- `location.search`：返回 URL 的查询部分（即 `?` 之后的部分）

- `location.reload()`：重新加载当前页面

- `location.assgin(url)`：加载新的页面

- `location.replace(url)`：用新的页面替换当前的页面，但不在历史记录中生成记录

### `history` 对象

`history` 对象包含了用户（在浏览器窗口中）访问过的 URL 的历史。通过 `history` 对象，可以在用户的浏览器历史中前进或后退，同时也可以操作浏览器历史记录的堆栈

#### 示例方法

- `history.back()`：与在浏览器点击后退按钮相同，将用户带到历史记录的上一个页面

- `history.forward()`：与在浏览器点击前进按钮相同，将用户带到历史记录的下一个页面

- `history.go(n)`：通过一个整数参数指定相对于当前页面的位置，正数表示前进，负数表示后退

- `history.pushState(state, title, url)`：向历史堆栈添加一个状态。这允许在不重新加载页面的情况下更改浏览器的 URL
