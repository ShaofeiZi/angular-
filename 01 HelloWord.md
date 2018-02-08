# 基本环境
## [node.js](https://nodejs.org/en/download/)
目前使用angular CLI要求node版本6.9.0以上并且npm3以上，你可以直接下载最新的LTS安装使用。
```
$ node - v # 显示当前Node.js的版本
$ npm -v # 显示当前npm的版本
```
自己看下版本吧。


## [angular CLI](https://cli.angular.io/)

```
npm install -g @angular/cli
```
安装完之后可以看一下版本
```
localhost:~ zishaofei$ ng -v

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
    
Angular CLI: 1.6.7
Node: 8.9.3
OS: darwin x64
Angular: 
...
```
目前我电脑上版本是1.6.7
接下来使用CLI创建一个新项目
```
ng new demo-angular --style scss --routing true
```
我们指定使用scss开发样式，因为还要写其他页面 所以还加上了 --routing true
执行之后发生了
- 新的 demo-angular 目录被创建
- 应用程序相关的源文件和目录将会被创建
- 应用程序的所有依赖 (package.json中配置的依赖项) 将会被自动安装
- 自动配置项目中的 TypeScript 开发环境
- 自动配置 Karma 单元测试环境
- 自动配置 Protractor (end-to-end) 测试环境
- 创建 environment 相关的文件并初始化为默认的设置

我们还可以指定其他选项
|指令|类型|默认值|说明|
|--|-----|-----|---|
|--dry-run| boolean| false| 若设置 dry-run 则不会创建任何文件|
|--verbose| boolean| false||
|--link-cli|boolean| false|自动链接到 @angular/cli 包|
|--skip-install| boolean|  false| 表示跳过 npm install|
|--skip-git| boolean|  false| 表示该目录不初始化为 git 仓库|
|--skip-tests| boolean|  false| 表示不创建 tests 相关文件|
|--skip-commit| boolean|  false| 表示不进行初始提交|
|--directory| string| |用于设置创建的目录名，默认与应用程序的同名|
|--source-dir| string|  'src'| 用于设置源文件目录的名称|
|--style| string|  'css'| 用于设置选用的样式语法 ('css', 'less' or 'scss')|
|--prefix| string|  'app'| 用于设置创建新组件时，组件选择器使用的前缀|
|--mobile| boolean|  false|表示是否生成 Progressive Web App 应用程序|
|--routing| boolean|  false| 表示新增带有路由信息的模块，并添加到根模块中|
|--inline-style| boolean|  false| 表示当创建新的应用程序时，使用内联样式|
|--inline-template| boolean|  false| 表示当创建新的应用程序时，使用内联模板|

接下来我们进入刚刚建好的项目
```
cd demo-angular/
```
然后把它运行起来
```
ng serve
```
最简单的angular项目运行起来了
然后我们进入
```
./demo-angular/src/app/app.component.html
```
将其中的
```
<h1 style="text-align: center;">Hello Word</h1>
```
好了 Hello Word 出现了
