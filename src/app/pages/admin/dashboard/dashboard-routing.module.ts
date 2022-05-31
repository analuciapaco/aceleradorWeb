import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'configuracao',
        loadChildren: () =>
          import('../configuracao/configuracao.module').then(
            (m) => m.ConfiguracaoModule
          ),
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('../cliente/cliente.module').then((m) => m.ClienteModule),
      },
      {
        path: 'tabela',
        loadChildren: () =>
          import('../tabela/tabela.module').then((m) => m.TabelaModule),
      },

      {
        path: 'banco',
        loadChildren: () =>
          import('../banco-dados/banco-dados.module').then(
            (m) => m.BancoDadosModule
          ),
      },
       {
        path: 'configuracao-banco-dados',
        loadChildren: () =>
          import('../configuracao-banco-dados/configuracao-banco-dados.module').then(
            (m) => m.ConfiguracaoBancoDadosModule
          ),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
