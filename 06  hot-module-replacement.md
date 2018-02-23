#  hot-module-replacement 热模块替换
热模块替换是webpack的一个特性，通过无刷新实现代码更新。angular CLi是深度定制的webpack 所以也可以使用这一特性。
HMR大幅提高了开发体验，只更新变更内容，调整样式迅速，避免了大部分的网络请求、浏览器重新渲染、app解析编译显示，可以说是提高开发效率的一个神器了。
 废话少说 开搞

 首先在配置下环境变量 angular 项目的环境变量默认在environments文件夹下 在.angular-cli.json配置文件中可以看到对应的环境变量名和配置文件路径。
 ```JavaScript
 export const environment = {
  production: false,
  hmr: true,   // 新增的 生产环境为false
};
```
因为不是angularCLI内置的功能 所以需要使用插件配合
```
npm install --save-dev @angularclass/hmr
```
然后在创建文件  src/hmr.ts
```typescript
import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => {
    ngModule = mod;
  }).catch(err => console.error(err));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
```
然后修改main.ts文件
```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
if (environment.production) {
  enableProdMode();
}
const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR没有启用，确保 ng server 命令加上 --hmr 标记');
  }
} else {
  bootstrap().catch(err => console.error(err));
}
```
然后运行
```
ng serve  --hmr
```
OK 完成
最后在package.json中修改start
```
    "start": "ng serve  --hmr",
```