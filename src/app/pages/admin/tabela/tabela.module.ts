import { NgModule } from '@angular/core';

import { TabelaRoutingModule } from './tabela-routing.module';
import { TabelaComponent } from './tabela.component';
import { BaseModule } from 'src/app/shared/base/base.module';

@NgModule({
  declarations: [TabelaComponent],
  imports: [BaseModule, TabelaRoutingModule],
})
export class TabelaModule {}
