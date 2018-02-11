# Icon
网页系统中的Icon虽然说很简单，但是其中的学问还是有很多的，我们常用的Icon库有FontAwesome、Iconfont等，我们选择了Angular Material这个组件库，就介绍Material Icons吧。
> 对Icon感兴趣的同学可以看一下[这里](https://material.io/guidelines/style/icons.html)
## Material Design 的 Icon
Material Design 的 Icon大致分成两种，一种是系统Icon，另一种是产品Icon。

#### 系统Icon
系统的Icon一般以不用文字描述就可以告诉用户操作等意义为准则，比如保存

![save](https://user-gold-cdn.xitu.io/2018/2/11/1618417a5133520f?w=154&h=144&f=png&s=4930)
我们看一眼就知道这个是存储。这个图像的起源勾起了小学的回忆。辣时候还是软盘💾。。有兴趣的可以搜一下。。
#### 产品Icon
产品Icon顾名思义就是某些产品对应的Icon，比如腾讯的企鹅图标，新浪的大眼睛，这部分一般由专业的设计师团队来做。就不多讲了（怕露馅）

一套好的Icon对于前端来说至关重要，好的Icon甚至可以让用户在没有文字描述的情况下正确的去操作，而不好的Icon往往会给用户错误的引导。
好在Google爸爸也给出了一套对应的图标系统[Material Icons](https://material.io/icons/),大概由1000个Icon，足够我们日常使用了。


### Material Icons

作为Google爸爸推出的官方Icon库，用起来也是很便捷的。就拿刚刚的save图标来说吧。
我们先去 [Material Icons](https://material.io/icons/)，然后在搜索框中 输入  sava
![saveIcom](https://user-gold-cdn.xitu.io/2018/2/11/1618421b23e47121?w=824&h=938&f=png&s=47284)
然后我们点击这个图标会出现下载SVG，PNG或者ICON FONT三种方式

![](https://user-gold-cdn.xitu.io/2018/2/11/161842367eaa732b?w=2458&h=1166&f=png&s=131436)
我们在之前已经引入过图标库了，所以我们直接看第三种 ICON FONT
如果不需要兼容IE9以下那就(IE毒瘤)
```
<i class="material-icons">save</i>
```
直接在HTML中插入这句话就可以了
```
<div>点
<i class="material-icons">save</i>
保存    
</div>
```
![](https://user-gold-cdn.xitu.io/2018/2/11/161856412e1c8bf9?w=188&h=98&f=png&s=7628)

#### Angular Material的MatIcon
虽然说```<i class="material-icons">save</i>```的方法已经很容易的，但是追求组件开发的Angular Material怎么会允许这个Tag方式的呢，所以又造出了一个MatIcon

#### MatIcon
首先 老样子 我们需要在使用的地方引入它
```typescript
import { MatIconModule } from '@angular/material';
@NgModule({
  ...
  imports: [
    ...,
    MatIconModule],
  ...
})
export class AppModule {}
```
然后HTML了
```
<div>点
<!--<i class="material-icons">save</i>-->
  <mat-icon>save</mat-icon>
保存
</div>
```
看下效果![](https://user-gold-cdn.xitu.io/2018/2/11/161856412e1c8bf9?w=188&h=98&f=png&s=7628)
和之前还是一样，但是语意化了多了吧。
#### 关于Angular Material的颜色
先放[官方链接](https://material.io/guidelines/style/color.html#color-color-tool)
建议配色的选择为两种主要颜色(primary color)跟次要颜色(secondary color)，用来区分主要的功能颜色及强调可以选择的画面，另外在表单相关的组件上还加上了错误讯息(error message)的颜色，而在Angular Material的样式中将这三种颜色名称分别叫做primary、accent和warn。
在HTML中加上
```html
<div>
  默认颜色
  <mat-icon>message</mat-icon>
</div>

<div>
primary色
  <mat-icon color="primary">message</mat-icon>
</div>

<div>
accent色
  <mat-icon color="accent">message</mat-icon>
</div>

<div>
  warn色
  <mat-icon color="warn">message</mat-icon>
</div>

```
看下效果
![](https://user-gold-cdn.xitu.io/2018/2/11/1618574c5e9dc1fc?w=246&h=292&f=png&s=19695)
当然 这种颜色是可以通过CSS进行覆盖的，但是如果没有对设计和Material Design有较高对理解，不建议这么做，颜色之间对相互搭配，不是那么好做对。
#### 使用其他对图标

Material Icons中对图标虽然很多，但是架不住需求啊，怎么办呢，俩办法
第一 自己公司有一套，自己画的，直接用SVG。
拿angular自己的图标举个栗子
先去下载https://angular.cn/presskit，下载单色的logo，(彩色怎么改色，真是)
然后放到src/asset/imges里

![](https://user-gold-cdn.xitu.io/2018/2/11/161857b91c01db48?w=606&h=886&f=png&s=96178)
默认静态资源和网站是在一个服务器上，emm跨域自己搞定。这里不细说
先去app.component.ts 中注入需要的服务
```typescript
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
```
MatIconRegisterys是用来扩充SVG icon的，DomSanitizer是用来标记信任路径的，因为angular默认开启XSS过滤，不去标记信任会GG。
然后再去对应的module中注入HttpClientModule，因为我们要下载这个SVG。
```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  ...
  imports: [
    ...,
    HttpClientModule
    ],
  ...
})
export class AppModule {}
```
然后我们加入这个SVG图标
```
    this.matIconRegistry.addSvgIconInNamespace('custom-svg','angular',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/imges/angular.svg'));
```
![](https://user-gold-cdn.xitu.io/2018/2/11/161858654524e11b?w=1290&h=158&f=png&s=50132)
- namespace：icon的namespace，方便用来分类不同的icons，也能够避免名称冲突
- iconName：给这个icon起名
- url（奏是那个value）：一个安全的图片来源
然后我们去试一下我们自定义的Icon,用法是
```html
<mat-icon svgIcon="namespace:iconName"></mat-icon>
```
来个实例
```html
<div>
  <mat-icon svgIcon="custom-svg:angular"></mat-icon>
  <mat-icon svgIcon="custom-svg:angular" color="primary"></mat-icon>
  <mat-icon svgIcon="custom-svg:angular" color="accent"></mat-icon>
  <mat-icon svgIcon="custom-svg:angular" color="warn"></mat-icon>
</div>

```

![](https://user-gold-cdn.xitu.io/2018/2/11/161858eb38497c0c?w=482&h=214&f=png&s=18007)
### 在MatIcon中使用其他Icon Font
除了用自己的图标库，还有辣么多好用的图标库，咋用呢？
拿FontAwesome举个栗子，毕竟用的人多
第五版还没摸透，拿第四版，用的人最多的版本
```
<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```
然后像刚才那样引入
```typescripy
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
```
![](https://user-gold-cdn.xitu.io/2018/2/11/1618595fcb52fa20?w=1198&h=58&f=png&s=27299)
- alias：原来icon font class的别名，例如FontAwesome都会在class里面加上fa之后才加上fa-*，这里要设定的就是fa的别名。
- className：原来icon font的主要class，以FontAwesome来说也就是fa

用法
```
 <mat-icon fontSet="alias" fontIcon="className"></mat-icon>
```
示例
```html
<mat-icon fontSet="fontawesome" fontIcon="fa-thumbs-up"></mat-icon>
  <mat-icon fontSet="fontawesome" fontIcon="fa-thumbs-up" color="primary"></mat-icon>
  <mat-icon fontSet="fontawesome" fontIcon="fa-thumbs-up" color="accent"></mat-icon>
  <mat-icon fontSet="fontawesome" fontIcon="fa-thumbs-up" color="warn"></mat-icon>
```

![](https://user-gold-cdn.xitu.io/2018/2/12/161859ae0b031151?w=782&h=168&f=png&s=22171)
一些常用特效也是可以直接用的,比如  旋转
```html
  <mat-icon fontSet="fontawesome" fontIcon="fa-spin">
    <mat-icon fontSet="fontawesome" fontIcon="fa-thumbs-up"></mat-icon>
  </mat-icon>
  ```