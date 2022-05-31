import { NgModule } from '@angular/core';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { BaseModule } from 'src/app/shared/base/base.module';




@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    BaseModule,
    ClienteRoutingModule,


   
  ]
})
export class ClienteModule { }

