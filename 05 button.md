# button
button是我们平时用的最多的交互形式，按下按钮，发生事件。是我们最基本的交互，在Material Design中 将button分成了3种
- 1· 浮动按钮(Flat Button)，主要是作为一个次级交互，平时不用，用的时候还挺方便的。

![](https://user-gold-cdn.xitu.io/2018/2/12/1618944625c6d68c?w=170&h=176&f=png&s=7735)
- 2·凸起的按钮(Raised Button),主要用在比较醒目的位置提醒用户，比如加入购物车，写文章。
![](https://user-gold-cdn.xitu.io/2018/2/12/1618946c14ce2bd4?w=210&h=110&f=png&s=6690)
- 3· 浮动的操作按钮，一般是在某个功能块或者整个屏幕的某个固定位置，显示常用功能，类似快速链接

![](https://user-gold-cdn.xitu.io/2018/2/12/1618948ee97cd0cf?w=102&h=80&f=png&s=5496)
## Angular Material中使用按钮
由于之前我们在AppModule已经引入的MatButtonModule，就不需要重新引入了，我把代码再放一下。
```
import { MatButtonModule } from '@angular/material';

@NgModule({
  ...
  imports: [
    ...,
    MatButtonModule],
  ...
})
export class AppModule {}
```
因为button在网页中的特殊地位，Angular Material并没有将它封装为组件(component),而是以指令(directive)的形式封装起来的。
使用方法也很简单，只要将指令放在对应的button或者a标签上就可以了
```
<button mat-button>我是按钮</button>
```
在按下的时候还会出现涟漪的效果

![](https://user-gold-cdn.xitu.io/2018/2/12/1618a0f579fcdf5d?w=438&h=200&f=gif&s=120309)
当然 最基本的颜、禁用和a标签肯定也是支持的
```html
<button mat-button color="primary">Primary</button>
  <button mat-button color="accent">Accent</button>
  <button mat-button color="warn">Warn</button>
  <button mat-button disabled>Disabled</button>
  <a mat-button>Link</a>
```

![](https://user-gold-cdn.xitu.io/2018/2/12/1618a113d7cc625b?w=1076&h=90&f=png&s=19122)
然后是凸起的按钮(mat-raised-button)
```html
<button mat-raised-button>我是凸起的按鈕</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled>Disabled</button>
<a mat-button>Link</a>
```

![](https://user-gold-cdn.xitu.io/2018/2/14/16192a078bd321f3?w=1186&h=86&f=png&s=24097)
Icon按钮
```html
<button mat-raised-button color="primary"><mat-icon>thumb_up</mat-icon></button>
```
也可以加字
```html
<button mat-raised-button color="primary"><mat-icon>thumb_up</mat-icon> 我有Icon</button>
```
或者 是不是有点太占用空间了  直接不要边框了
```html
  <button mat-icon-button color="primary"><mat-icon>thumb_up</mat-icon></button>
````
emm 还是带点凸起吧
```html
<button mat-raised-button mat-icon-button color="primary"><mat-icon>thumb_up</mat-icon></button>
```

![](https://user-gold-cdn.xitu.io/2018/2/14/16192a0ce35c155e?w=686&h=94&f=png&s=15388)
是不是感觉立体感没那么强了，来来给，给你介绍下浮动动作按钮（mat-fab / mat-min-fab）
```html
  <button mat-fab>
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-fab color="primary">
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-fab color="accent">
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-fab color="warn">
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-fab disabled>
    <mat-icon>thumb_up</mat-icon>
  </button>
  ```
  有点大了  没事 还提供了mini号
  ```html
    <button mat-mini-fab>
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-mini-fab color="primary">
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-mini-fab color="accent">
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-mini-fab color="warn">
    <mat-icon>thumb_up</mat-icon>
  </button>
  <button mat-mini-fab disabled>
    <mat-icon>thumb_up</mat-icon>
  </button>
  ```
  好的 看一下对比吧
  
![](https://user-gold-cdn.xitu.io/2018/2/14/16192a4417ed11e9?w=630&h=202&f=png&s=48994)
开关按钮（button-toggle）
作用是checkbox的一个button
首先 我们得加入这个module
```
MatButtonToggleModul
```
之前加过了，大家都知道了吧
然后在html中加入
```html
<mat-button-toggle>我是个开关</mat-button-toggle>
```
每次点击都有切换开关的效果
来个综合的
```html

<mat-button-toggle-group #formatAlignGroup="matButtonToggleGroup">
  <!-- button toogle所代表的值 -->
  <mat-button-toggle value="left">
    <mat-icon>format_align_left</mat-icon>
  </mat-button-toggle>
  <!-- 预设值被读取 -->
  <mat-button-toggle value="center" checked="true">
    <mat-icon>format_align_center</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon>format_align_right</mat-icon>
  </mat-button-toggle>
  <!--disabled掉的button  -->
  <mat-button-toggle value="justify" disabled>
    <mat-icon>format_align_justify</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>
<div>对齐方式：{{ formatAlignGroup.value }}</div>

<!-- 加上multiple，则里面的mat-buttong-toggle可以多选 -->
<!-- 加上vertical="true", 改变排列方式 -->
<mat-button-toggle-group multiple vertical="true">
  <mat-button-toggle value="bold" #buttonToggleBold>
    <mat-icon>format_bold</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="italic" checked="true" #buttonToggleItalic>
    <mat-icon>format_italic</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="underlined" checked="true" #buttonToggleUnderlined>
    <mat-icon>format_underlined</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>
<div>粗体：{{ buttonToggleBold.checked }}、斜体：{{ buttonToggleItalic.checked }}、底线：{{ buttonToggleUnderlined.checked }}</div>

```
![](https://user-gold-cdn.xitu.io/2018/2/15/16199ebefa999719?w=736&h=384&f=png&s=40886)
[更详细的可以看这里](https://material.angular.io/components/button-toggle/api)
### 涟漪效果
最后来个小惊喜
在官方的source code的demo app里有这么一个指令*mat-ripple* 加上之后就能有我们之前点击出现的像水波纹一样扩散的效果
首先 我们加入这个module
```
MatRippleModule
```
随后我们在html中加入
```html
<div class="demo-ripple-container" mat-ripple></div>
```
再然后加入样式
```css
.demo-ripple-container {
  height: 150px;
  width: 200px;
  position: relative;
  transition: all 200ms linear;
  border: 1px solid black;
}
```
其中*transition*和*position*是必须的 ，其他的根据情况来
看一下 是不是有效果了
|属性|默认值|描述|
|---------------|------|------------------|
|matRippleCentered|true|代表不管滑鼠在元件上的哪裡點下去，都會從中心點開始產生漣漪。|
matRippleDisabled|true|代表取消元件上的漣漪效果。
matRippleUnbounded|true|代表漣漪的效果擴大後會超過元件之外。
matRippleRadius|number|漣漪產生的大小，數值越大大表大小越大。
matRippleCol||漣漪的顏色。
matRippleSpeedFactor||漣漪擴散的速度，數值越大速度越快

我们可以这么用
```
<div class="demo-ripple-container" mat-ripple
     [matRippleCentered]="false"
     [matRippleDisabled]="false"
     [matRippleUnbounded]="false"
     [matRippleRadius]="10"
     [matRippleColor]="'red'"
     [matRippleSpeedFactor]="0.5"></div>
```
我们也可以直接用代码去处罚这个效果
我们在Component引入MatRipple
```typescript
import {MatRipple} from '@angular/material';
```
然后使用ViewChild选择它
```typescript
  @ViewChild(MatRipple) ripple: MatRipple;
```
然后编写我们的操作函数
```typescript
  /**
   * 触发涟漪
   * ripple.launch的前两个参数是涟漪中心产生的位置，但目前这个定位有时候会不准，所以我们在第三个参数中设定相关属性时将centered设为true，
   * 强制从中心开始，另外这边我们加了一个persistent为true，代表涟漪产生后不会自动消失。
   */
  triggerRipple() {
    const point1 = this.ripple.launch(0, 0, { color: 'pink', centered: true, persistent: true, radius: 50 });

    setTimeout(() => {
      point1.fadeOut();
    }, 500);
  }

  /**
   * 关闭涟漪
   * fadeOutAll()把所有涟漪效果都退出
   */
  clearRipple() {
    this.ripple.fadeOutAll();
  }
 ```
