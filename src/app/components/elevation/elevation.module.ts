import { NgModule } from '@angular/core';
import { ElevationComponent } from './elevation.component';
import { BaseModule } from 'src/app/shared/base/base.module';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    ElevationComponent
  ],
  imports: [
    BaseModule,
    InputTextModule
  ],
  exports : [
    ElevationComponent
  ]
})
export class ElevationModule { }





