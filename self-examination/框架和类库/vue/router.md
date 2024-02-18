## Vue Router 和 React Router 的原理，为什么有了 Hash 模式还需要 History

### 原理

Vue Router 和 React Router 基于前端路由的库，用于构建单页面应用(SPA)。它们的核心原理和目的是相似的，即在不重新加载整个页面的情况下，实现页面内容的动态更新。这是通过监听 URL 的变化，根据 URL 的不同渲染对应的组件或页面来实现的

#### Vue Router

Vue Router 是 Vue.js 的官方路由库，它与 Vue.js 深度集成，提供了声明式的路由配置和组件式的路由配置。Vue Router 主要通过监听 URL 的变化来实现路由功能

- Hash 模式

  默认使用 URL 的 hash 部分（`#` 后面的部分）来模拟一个完整的 URL，因为 Hash 的变化不会导致页面重新加载。Vue Router 主要通过 `hashchange` 事件来监听 Hash 的变化，根据路由配置渲染响应的组件

- History 模式

  利用 HTML5 History API 允许对浏览器历史记录栈进行修改（依靠 `pushState` 方法），实现无刷新更改 URL。Vue Router 在这个模式下监听 `popstate` 事件，根据 URL 的变化来动态渲染页面

#### React Router

React Router 是 React 的一个路由库，提供了一组导航组件，让单页面应用能够进行页面间的切换而不重新加载页面。它的工作原理也是监听 URL 的变化，并根据路由配置渲染相应的 React 组件

- HashRouter

  使用 URL 的 Hash 部分来保持 UI 和 URL 的同步

- BrowserRouter

  使用 HTML5 的 History API 来保持 UI 和 URL 的同步，支持动态更改 URL 路径而不重新加载页面

### 为什么有了 Hash 还需要 History

虽然 Hash 模式可以很容易的实现前端路由且兼容性好（即使是旧浏览器也支持），但它有一些限制和缺点：

- URL 美观性

  Hash 模式的 URL 包含 `#` 符号，对于某些需要优雅 URL 的应用来说，这可能不是最佳的选择

- SEO

  虽然现代搜索引擎已经改进了对 SPA 的索引能力，但使用 Hash 模式的 URL 可能仍然对 SEO 不利

- 功能限制

  Hash 模式下只能使用 URL 的 Hash 部分来标识路由状态，这限制了基于 URL 的功能，如利用路由和查询参数等

相比之下，History 模式通过 HTML5 的 History API 解决了上述问题，允许开发者使用正常的 URL 路径和查询参数，无需 `#` 符号。这使得 URL 看起来更加标准和优化，同时也有助于搜索引擎优化。然而，History 模式要求服务器端支持 URL 重写，确保所有的路由请求都指向同一个入口文件，这在部署时需要额外的配置

### 服务器重写 URL

在本地开发环境中，由于开发环境通常已配置好处理 SPA 的路由请求，所以可以无缝地在这些页面间导航。但是，当将应用部署到服生产服务器上时，如果服务器没有正确配置，直接访问 `http://yourapp.com/about` 可能会导致 404 错误。这是因为服务器尝试在 `/about` 路径下查找资源，而实际上这个路径是前端路由，并不对应服务器上的实际文件

#### 原因

这个问题的根源在于，History 模式下，应用依赖于浏览器的 History API 来处理路由，而不是依赖于服务器的文件结构。因此，当用户直接访问一个非根路径或刷新页面时，请求会发送到服务器，服务器需要知道如何正确的处理这些看似具体文件或目录的请求

#### 解决方案

解决这个问题的关键在服务器端配置 URL 重写规则，确保所有对于应用的请求都重定向到应用的入口文件（通常是 `index.html`）。这样，无论请求的是哪个路径，用户都会加载同一个 HTML 文件，然后由前端路由接管并渲染正确的页面

#### Nginx 服务器

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
