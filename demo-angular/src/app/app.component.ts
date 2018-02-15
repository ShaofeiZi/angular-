import {Component, OnInit, ViewChild} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatRipple} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild(MatRipple) ripple: MatRipple;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/imges/angular.svg'));
    // fontawesome
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

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
}
