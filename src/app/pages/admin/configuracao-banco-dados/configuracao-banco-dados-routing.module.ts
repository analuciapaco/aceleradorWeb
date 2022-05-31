import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracaoBancoDadosComponent } from './configuracao-banco-dados.component';

const routes: Routes = [
  {
    path:'', component: ConfiguracaoBancoDadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoBancoDadosRoutingModule { }