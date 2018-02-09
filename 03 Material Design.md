# Material Design
Material Design是由Google推出的一套视觉设计语言，从设计准则、动画、配色等方面做出了详尽的规定，
但是Material Design只是一套设计准则和bootstrap这类CSS框架相比，并没有直接的CSS可用。
目前有几个比较有名的实现 比如Google官方的[Material Design Lite](https://getmdl.io/)支持多平台的[Material Components](https://material.io/components/)
还有[Materialize](http://materializecss.com)等。

这些css框架可以让小公司和没有什么美感的程序员也能轻易设计出简单、大方、富有美感的网页。

## Angular Material
Angular 是Google推出的主力前端框架， Material Design 是谷歌设计的方向，自然为angular量身打造了一套组件库Angular Material。相比于ngx-bootstrap、primeng或者国内的NG-ZORRO等
Angular Material的质量是最高的（勿喷）所以我就选择它作为本次教程的UI框架。

## 安装Angular Material
 在01 我们已经跑起来了Hello Word ,不过太丑了。我们先把Angular Material装起来。
 ```
 npm install --save @angular/material @angular/cdk
 ```
 在国内的话，有时候网络状况比较差，可以先安装nrm来测试各个源 然后再安装
 ```
 npm i -g nrm
 ```
 然后测试
 ```
 nrm test
 ```
我这里的结果是
```

  npm ---- 712ms
  cnpm --- 249ms
* taobao - 211ms
  nj ----- Fetch Error
  rednpm - Fetch Error
  npmMirror  975ms
  edunpm - Fetch Error
```
淘宝源最快那就选择淘宝
```
 nrm use taobao
```
这时候出现
```
 Registry has been set to: https://registry.npm.taobao.org/
```
我们就可以继续去安装Angular Material
### 加入项目中
```
angular-tutorial\demo-angular\src\app\app.module.ts
```
打开 AppModule 然后引入BrowserAnimationsModule
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
或者不想写动画，或者因为动画的原因导致卡顿 直接关闭
```typescript
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [
    ...
    NoopAnimationsModule
  ],
  ...
})
export class AppModule { }

```
#### @angular/animations兼容性
因为@angular/animations使用了WebAnimation API 所以如果想要支持较老版本的浏览器 需要引入web-animations.js
先去下载
```
npm install --save web-animations-js
```
然后引入
在src/pollyills.ts找到*import 'web-animations-js'* 取消掉注释
```javascript
/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
 import 'web-animations-js';  // Run `npm install --save web-animations-js`.

```
### 加入使用的组件
比如我们要使用Angular Material的button,我们就可以直接在AppModule直接引入
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```
然后在module下的Component就可以直接用了
```html
<button mat-raised-button color="primary">Primary</button>
```
#### 公共组件
在较为复杂的项目中,有时候我们会将常用的MatXXXModule先import进来然后再export出去，这样我们就可以在其他module只导入这个module就好了。
先用CLI生成shared-material module 
然后去导入他

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule], // 先import
  exports: [MatButtonModule] // 再export
})
export class SharedMaterialModule {}
```
在使用他的module中导入 比如在AppModule中
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SharedMaterialModule} from './shared-material/shared-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```
如果在SharedMaterialModule中并没有Component使用外部的话可以直接export导出

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@NgModule({
  exports: [MatButtonModule] // 直接export
})
export class SharedMaterialModule {}
```
> 关于ngmodule可以[戳这里](https://angular.io/guide/ngmodules)
#### 自定义主题
前端的组件怎么能少得了样式呢，目前官方提供四种主题我们可以在
```
@angular/material/prebuilt-themes/
```
中查看，也可以直接在官网的右上角切换，查看效果 [官方网址](https://material.angular.io/)

先去style.scss中引入主题
```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```
这样Angular Material的样式就算是补全了
### 支持手势
在PC端和移动端有些交互是不一样的，比如tooltipz在PC端只要鼠标滑过就会显示，但是在mobile上需要长按才出现，所以Angular Material一些组件（mat-slide-toggle，mat-slider，matTooltip）依靠HammerJS的支持了手势。为了获得完整的功能集这些组件，HammerJS必须加载到应用程序
先安装
```
npm install --save hammerjs
```
然后在angular CLI 中引入
```json
      "scripts": [
        "./node_modules/hammerjs/hammer.min.js"
      ],
```
或者直接在项目入口，比如main.ts中加入
```
import 'hammerjs';
```
### Material Icons
老规矩 先安装
```
npm install material-design-icons
```

