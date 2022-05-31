import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/shared/base/base.module';
import { AccordionComponent } from './accordion.component';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BaseModule
  ]
  ,
  exports : [
    AccordionComponent
  ]
})

export class AccordionModule { }

