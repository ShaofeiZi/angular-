import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [MatButtonModule,MatTooltipModule]
})
export class SharedMaterialModule {
}
