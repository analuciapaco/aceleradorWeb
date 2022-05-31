import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoDadosComponent } from './banco-dados.component';

const routes: Routes = [{path:'', component:BancoDadosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoDadosRoutingModule { }
