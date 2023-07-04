## 如何将 Javascript 代码解析成抽象语法树(AST)

### AST

AST（Abstract Syntax Tree，抽象语法树）是一种表示编程语言代码结构的树状数据结构。它将源代码转换为一系列的节点，每个节点表示代码中的一个语法结构，例如表达式、语句、函数定义等。AST 在编译器和解释器中扮演重要的角色，它提供了对代码结构的抽象和分析能力

AST 的节点表示了源代码中的不同语法结构，每个节点包含与之相关的信息，例如类型、标识符、操作符、字面量值等。通过遍历和操作 AST，可以进行代码的静态分析、优化、转换和生成等操作

AST 的生成过程通常分为两个阶段：词法分析（Lexical Analysis）和语法分析（Syntactic Analysis）

- 词法分析（Lexical Analysis）：
  词法分析阶段将源代码分解为一个个的词法单元（Tokens），例如关键字、标识符、运算符、常量等。词法分析器（Lexer）会根据预定义的词法规则，扫描源代码，并将其划分为一系列的词法单元

- 语法分析（Syntactic Analysis）：
  语法分析阶段将词法单元组织成树状结构，即抽象语法树（AST）。语法分析器（Parser）会根据语法规则，对词法单元进行解析，构建出表示代码结构的树形数据结构

AST 的好处在于它提供了对代码结构的抽象表示，使得代码的分析和处理更加方便。通过遍历和操作 AST，可以进行静态分析，例如检查语法错误、变量引用、类型推断等。还可以进行代码转换，例如优化、重构、代码生成等。因此，AST 在编程语言工具和编译器中被广泛应用，如静态代码分析工具、语法高亮显示、代码格式化工具等

### AST 结构

Javascript 代码

```js
function sum(a, b) {
  return a + b
}

const result = sum(2, 3)
console.log(result)
```

AST 树结构

```scss
Program
├── FunctionDeclaration (sum)
│ ├── Identifier (sum)
│ ├── FunctionExpression
│ │ ├── Identifier (a)
│ │ ├── Identifier (b)
│ │ ├── BinaryExpression (+)
│ │ │ ├── Identifier (a)
│ │ │ └── Identifier (b)
│ │ └── ReturnStatement
│ │ └── BinaryExpression (+)
│ │ ├── Identifier (a)
│ │ └── Identifier (b)
│ └── VariableDeclaration (result)
│ ├── Identifier (result)
│ └── CallExpression (sum)
│ ├── Identifier (sum)
│ ├── Literal (2)
│ └── Literal (3)
└── ExpressionStatement
└── CallExpression (console.log)
├── Identifier (console)
└── Identifier (result)
```

### 将 JS 代码转换为 AST

要将 JavaScript 代码解析成抽象语法树（AST），你可以使用各种 JavaScript 解析器库。以下是一种常用的方法，使用 Esprima 解析器库来实现：

1. 安装 Esprima:
   在项目中使用 npm 或 yarn 安装 Esprima 解析器库：

   ```shell
   npm install esprima
   ```

2. 导入 Esprima:
   在你的 JavaScript 代码文件中，导入 Esprima 解析器：

   ```javascript
   const esprima = require('esprima')
   ```

3. 解析 JavaScript 代码:
   使用 Esprima 的 `parse` 函数来解析 JavaScript 代码，并生成对应的抽象语法树。示例代码如下：

   ```javascript
   const code = 'const message = "Hello, World!";'
   const ast = esprima.parseScript(code)
   ```

   在上述示例中，我们将 JavaScript 代码字符串传递给 `parseScript` 函数，它将返回对应的抽象语法树。

4. 处理抽象语法树:
   一旦你获得了抽象语法树（AST），你可以对其进行遍历和操作。你可以使用不同的方法来访问和处理 AST，例如递归遍历、使用访问者模式等，具体取决于你的需求。

   以下是一个简单的示例，演示如何遍历并打印出 AST 的节点类型：

   ```javascript
   function traverse(node) {
     console.log(node.type)
     for (const key in node) {
       if (node.hasOwnProperty(key) && typeof node[key] === 'object') {
         traverse(node[key])
       }
     }
   }

   traverse(ast)
   ```

   在上述示例中，我们定义了一个 `traverse` 函数，用于遍历 AST 的节点，并打印出节点的类型。使用递归的方式，我们可以遍历 AST 的所有节点。

通过上述步骤，你可以将 JavaScript 代码解析成抽象语法树（AST），并进一步对 AST 进行分析、转换或执行其他操作。请注意，不同的解析器库可能有不同的使用方式和 API，你可以根据具体的需求选择适合你的解析器库。
