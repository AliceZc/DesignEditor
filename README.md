# README

# 启动方式启动命令：

npm run start 可选 4 个环境

1. dev 连接线上 dev 环境
2. uat 连接线上 uat 环境
3. master 连接线上 master 环境
4. withNode 连接本地 node 环境对应地址：在外层目录.env 目录修改为自己需要的环境地址（例）  
   dev_ip = http://192.168.10.10:8080  
   uat_ip = http://192.168.10.11:8080  
   master_ip = http://192.168.10.12:8080  
   withNode_ip = http://localhost:3000

# 目录结构描述

一个基础的 Umi 项目大致是这样的， https://umijs.org/umi 官网链接 .  
├── package.json  
├── .umirc.ts  
├── .env  
├── dist  
├── mock  
├── public  
├── src  
│ ├── .umi  
│ ├── layouts/index.tsx  
│ ├── pages  
│ ├── index.less  
│ └── index.tsx  
└── app.ts 根目录  
package.json 包含插件和插件集，以 @umijs/preset-、@umijs/plugin-、umi-preset- 和 umi-plugin- 开头的依赖会被自动注册为插件或插件集。

.umirc.ts 配置文件，包含 umi 内置功能和插件的配置。

.env 环境变量。

比如：

PORT=8888 COMPRESS=none dist 目录执行 umi build 后，产物默认会存放在这里。

mock 目录存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。

public 目录此目录下所有文件会被 copy 到输出路径。

/src 目录 .umi 目录临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交 .umi 目录到 git 仓库，他们会在 umi dev 和 umi build 时被删除并重新生成。

layouts/index.tsx 约定式路由时的全局布局文件。

pages 目录所有路由组件存放在这里。

app.ts 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。

——server  
├──cc  
├──co  
├──middleWare  
├──router  
├──dubboServer.js  
├──logger.js  
├──package.json  
├──server.js  
└── util.js  
server 目录是 node 中间层目录 cc/co 解析后端 dubbo 接口出来的文件 middleWare 自定义的一些中间件 router 根据业务自己定义给 web 层的路由

# 提交规范 <type>(<scope>): <subject>

<body>

<footer>

即: <类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注] 大致分为三个部分(使用空行分割):

标题行: 必填, 描述主要修改类型和内容主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等页脚注释: 放 Breaking Changes 或 Closed Issues type commit 的类型：

feat: 新功能、新特性  
fix: 修改 bug  
perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）  
refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）  
docs: 文档修改 style: 代码格式修改, 注意不是 css 修改（例如分号修改）  
test: 测试用例新增、修改 build: 影响项目构建或依赖项修改  
revert: 恢复上一次提交 ci: 持续集成相关文件修改  
chore: 其他修改（不在上述类型中的修改）  
release: 发布新版本  
workflow: 工作流相关文件修改 scope commit 影响的范围, 比如: route, component, utils, build...

subject commit 的概述

body commit 具体修改内容, 可以分为多行.

footer 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

约定式提交规范以下内容来源于：https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/

每个提交都必须使用类型字段前缀，它由一个名词组成，诸如 feat 或 fix ，其后接一个可选的作用域字段，以及一个必要的冒号（英文半角）和空格。当一个提交为应用或类库实现了新特性时，必须使用 feat 类型。当一个提交为应用修复了 bug 时，必须使用 fix 类型。作用域字段可以跟随在类型字段后面。作用域必须是一个描述某部分代码的名词，并用圆括号包围，例如： fix(parser): 描述字段必须紧接在类型/作用域前缀的空格之后。描述指的是对代码变更的简短总结，例如： fix: array parsing issue when multiple spaces were contained in string. 在简短描述之后，可以编写更长的提交正文，为代码变更提供额外的上下文信息。正文必须起始于描述字段结束的一个空行后。在正文结束的一个空行之后，可以编写一行或多行脚注。脚注必须包含关于提交的元信息，例如：关联的合并请求、Reviewer、破坏性变更，每条元信息一行。破坏性变更必须标示在正文区域最开始处，或脚注区域中某一行的开始。一个破坏性变更必须包含大写的文本 BREAKING CHANGE，后面紧跟冒号和空格。在 BREAKING CHANGE: 之后必须提供描述，以描述对 API 的变更。例如： BREAKING CHANGE: environment variables now take precedence over config files. 在提交说明中，可以使用 feat 和 fix 之外的类型。工具的实现必须不区分大小写地解析构成约定式提交的信息单元，只有 BREAKING CHANGE 必须是大写的。可以在类型/作用域前缀之后，: 之前，附加 ! 字符，以进一步提醒注意破坏性变更。当有 ! 前缀时，正文或脚注内必须包含 BREAKING CHANGE: description 示例 fix 如果修复的这个 BUG 只影响当前修改的文件，可不加范围。如果影响的范围比较大，要加上范围描述。

例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。

// 示例 1 fix(global):修复 checkbox 不能复选的问题 // 示例 2 下面圆括号里的 common 为通用管理的名称 fix(common): 修复字体过小的 BUG，将通用管理下所有页面的默认字体大小修改为 14px // 示例 3 fix: value.length -> values.length feat feat: 添加网站主页静态页面

这是一个示例，假设对点检任务静态页面进行了一些描述。

这里是备注，可以是放 BUG 链接或者一些重要性的东西。 chore chore 的中文翻译为日常事务、例行工作，顾名思义，即不在其他 commit 类型中的修改，都可以用 chore 表示。

chore: 将表格中的查看详情改为详情

# 线上构建

npm run build && ["pm2-docker","start","pm2.config.js","--env","prod"]
