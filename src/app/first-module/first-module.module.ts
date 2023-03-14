import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModuleComponent } from './first-module/first-module.component';



@NgModule({
  declarations: [FirstModuleComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstModuleComponent]
})
export class FirstModuleModule { }
