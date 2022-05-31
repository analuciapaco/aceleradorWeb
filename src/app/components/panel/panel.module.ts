import { NgModule } from '@angular/core';
import { BaseModule } from 'src/app/shared/base/base.module';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    BaseModule,
  ],
  exports : [
    PanelComponent
  ]
})
export class PanelModule { }
