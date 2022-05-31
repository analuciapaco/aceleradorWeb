import { NgModule } from '@angular/core';
import { BancoDadosRoutingModule } from './banco-dados-routing.module';
import { BaseModule } from 'src/app/shared/base/base.module';
import { BancoDadosComponent } from './banco-dados.component';


@NgModule({
  declarations: [BancoDadosComponent],
  imports: [BaseModule, BancoDadosRoutingModule],
})
export class BancoDadosModule { }

