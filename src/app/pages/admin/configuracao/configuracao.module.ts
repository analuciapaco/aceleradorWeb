import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccordionModule } from 'src/app/components/accordion/accordion.module';
import { ElevationModule } from 'src/app/components/elevation/elevation.module';
import { PanelModule } from 'src/app/components/panel/panel.module';
import { BaseModule } from 'src/app/shared/base/base.module';
import { ConfiguracaoRoutingModule } from './configuracao-routing.module';
import { ConfiguracaoComponent } from './configuracao.component';

@NgModule({
  declarations: [
    ConfiguracaoComponent
  ],
  imports: [
    BaseModule,
    NgSelectModule,
    ConfiguracaoRoutingModule,
    ElevationModule,
    AccordionModule,
    PanelModule
  ]
})
export class ConfiguracaoModule { }
