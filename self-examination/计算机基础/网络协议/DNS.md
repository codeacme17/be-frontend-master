## DNS 的作用、解析的详细过程、优化原理

DNS（Domain Name System）是互联网中用于将域名转换为对应 IP 地址的系统，它起到了将人类可读的域名映射到计算机课理解的 IP 地址的作用

### UDP 之上

DNS 是运行在 UDP（User Datagram Protocol）之上的，通常 DNS 使用 UDP 协议进行域名解析请求和相应的传输，默认使用 `53` 端口号。使用 UDP 的主要原因是 UDP 是无连接的，可以省去 TCP 的三次握手阶段，减少查询时间

### 主要作用

- 域名解析

  DNS 提供了域名到 IP 地址的解析服务，当用户在浏览器中输入一个域名时，系统会向 DNS 服务发送请求，获取该域名对应的 IP 地址，以便建立与目标服务器的连接

- 负载均衡

  DNS 可以根据配置的负载均衡策略，将请求分发到多个服务器上，通过将同一个域名映射到多个 IP 地址上，DNS 可以将请求分散到不同的服务器，实现负载均衡，提高系统的性能和可靠性

- 高可用性

  DNS 可以配置多个备用服务器地址，当主服务器不可用时，DNS 可以自动将请求转发到备用服务器，确保服务的高可用性

- 域名注册管理

  DNS 还提供域名注册和管理功能，管理域名的所有权、注册信息、DNS 记录等

### 解析过程

1. 浏览器缓存

   查询开始时，客户端首先检查自己的缓存中是否有请求的域名的记录。如果有，就直接使用这个记录，不再及逆行进一步的查询

2. 系统缓存

   如果浏览器缓存中没有找到记录，查询进程会继续检查操作系统的 DNS 缓存。操作系统可能缓存了之前的 DNS 查询结果

3. 路由器缓存

   如果在系统缓存中也没有找到，查询可能会继续检查本地网络中的路由器，因为路由器也可能维护一个 DNS 缓存

4. ISP 的 DNS 服务器

   如果到目前为止都没有找到记录，客户端将向配置的 DNS 服务器发送查询请求，通常是互联网服务提供商(ISP) 的 DNS 服务器。这个 DNS 服务器会查看它的缓存，如果找到了所需的记录，就返回结果；如果没有找到，它会代表客户端进行递归查询或迭代查询

5. 根 DNS 服务器

   如果 ISP 的 DNS 服务器也没有缓存该记录，它会向根 DNS 服务器查询。根服务器不存储域名到 IP 地址的映射，但它知道如何到达负责顶级域（如 `.com` 、 `.net` ）的顶级域（TLD）DNS 服务器

6. 顶级域 DNS 服务器

   ISP 的 DNS 服务器接着向相应的 TLD DNS 服务器查询（例如，对于 `[www.example.com](http://www.example.com)` ，是 `.com` 的 TLD 服务器）。TLD 服务器保存了管理该顶级域下所有域名的权威 DNS 服务器地址

7. 权威 DNS 服务器

   最后，ISP 的 DNS 服务器向负责请求域名的权威 DNS 服务器发送查询。权威服务器存储了该域名对应的 IP 地址等 DNS 记录。一旦收到查询，他就会返回含有 IP 地址的 DNS 响应

8. 缓存结果并返回给客户端

   ISP 的 DNS 服务器将权威服务器的响应缓存起来，以便对未来的查询快速响应，然后将查询结果返回给客户端。客户端收到 IP 地址后，就可以直接与目标服务器建立连接了

### 优化原理

- DNS 缓存

  DNS 解析结果可以被缓存在本地 DNS 解析器或操作系统的缓存中，以便下次访问相同的域名时可以直接使用缓存的结果，减少 DNS 解析的时间和延迟

- DNS 预取

  DNS 预取（DNS Prefetching）是一种浏览器性能优化技术，旨在减少用户浏览网页时的延迟。通过提前解析网页中的域名到 IP 地址，浏览器能够减少在用户实际请求这些资源时等待 DNS 解析的时间。这个过程是在用户浏览网页时后台自动进行的，不需要用户的干预

  - 工作原理

  当浏览器加载页面时，它会分析页面内容，查找链接到其他域的资源（如图像、脚本、样式表等）。浏览器会提前对这些资源的域名进行 DNS 解析，并缓存结果。当用户实际访问这些链接或请求这些资源时，由于 DNS 解析已经完成，浏览器可以直接使用缓存的 IP 地址，从而减少了等待 DNS 解析的时间

  - 使用方式

    - HTML 标签

    ```html
    <link rel="dns-prefetch" href="//example.com" />
    ```

    - HTTP 头部

    服务器也可以在 HTTP 响应头中使用 `X-DNS-Prefetch-Control` 头部来控制 DNS 预取的行为

    ```http
    X-DNS-Prefetch-Control: on
    ```

    这个响应头告诉浏览器对页面中的所有链接进行 DNS 预取

- DNS 负载均衡

  通过 DNS 设置中配置多个服务器 IP 地址，DNS 可以将请求分发到不同的服务器上，实现负载均衡，提高系统的性能和可靠性

- DNS 就近访问

  CDN 可以通过智能路由机制，根据用户的地理位置和网络条件，将用户请求路由到离用户最近的边缘节点，减少网络延迟，提供更快的内容传输
