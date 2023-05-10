## 理解 ECMAScript 和 Javascript 的关系

### 背景

1996年11月，Javascript 的创造者 Netscape 公司，决定将 Javascript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 `262` 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言成为 **ECMAScript**，这个版本就是 `1.0` 版

### 命名

该标准从一开始就是针对 Javascript 语言定制的，但是之所以不叫 Javascript，有两个原因:

1. 商标：Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法的使用 Javascript 这个名字，且 Javascript 本身也已被 Netscape 注册为了商标

2. 想体现这门语言的制定者是 ECMA，而不是 Netscape，这样有利于保证这门语言的开放性和中立性

### 关系

ECMAScript 是 Javascript 的规范，而 Javascript 是 ECMAScript 的实现